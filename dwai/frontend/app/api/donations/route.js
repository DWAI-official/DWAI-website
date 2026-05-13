import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    // Aggregate totals from the Donation table
    const stats = await prisma.donation.aggregate({
      _count: {
        id: true,
      },
      _sum: {
        amount: true,
      },
    });

    return NextResponse.json({
      totalDonations: stats._count.id || 0,
      totalAmount: stats._sum.amount || 0,
    });
  } catch (error) {
    console.error('Fetch Stats Error:', error);
    return NextResponse.json({ totalDonations: 0, totalAmount: 0 }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { email, name, amount, reference } = await request.json();
    const donationAmount = Number(amount);

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    if (!reference || typeof reference !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Payment reference is required' },
        { status: 400 }
      );
    }

    if (!Number.isFinite(donationAmount) || donationAmount <= 0) {
      return NextResponse.json(
        { success: false, message: 'A valid donation amount is required' },
        { status: 400 }
      );
    }

    if (!process.env.PAYSTACK_SECRET_KEY) {
      console.error('PAYSTACK_SECRET_KEY is not configured');
      return NextResponse.json(
        { success: false, message: 'Payment verification is not configured' },
        { status: 500 }
      );
    }

    const verificationResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const verification = await verificationResponse.json();
    const transaction = verification.data;

    if (!verificationResponse.ok || !verification.status || transaction?.status !== 'success') {
      return NextResponse.json(
        { success: false, message: verification.message || 'Payment verification failed' },
        { status: 400 }
      );
    }

    const verifiedAmount = Number(transaction.amount) / 100;
    const verifiedEmail = transaction.customer?.email;

    if (transaction.reference !== reference) {
      return NextResponse.json(
        { success: false, message: 'Payment reference mismatch' },
        { status: 400 }
      );
    }

    if (Math.round(verifiedAmount * 100) !== Math.round(donationAmount * 100)) {
      return NextResponse.json(
        { success: false, message: 'Payment amount mismatch' },
        { status: 400 }
      );
    }

    if (verifiedEmail && verifiedEmail.toLowerCase() !== email.toLowerCase()) {
      return NextResponse.json(
        { success: false, message: 'Payment email mismatch' },
        { status: 400 }
      );
    }

    // 2. Use Prisma to update the database
    const result = await prisma.user.upsert({
      where: { email },
      update: {
        donations: {
          create: {
            amount: verifiedAmount,
            currency: transaction.currency || 'NGN',
          },
        },
      },
      create: {
        email,
        name,
        donations: {
          create: {
            amount: verifiedAmount,
            currency: transaction.currency || 'NGN',
          },
        },
      },
    });

    return NextResponse.json({ success: true, user: result });
  } catch (error) {
    console.error('Donation Error:', error);
    return NextResponse.json({ success: false, message: 'An unexpected error occurred. Please try again later.' }, { status: 500 });
  }
}
