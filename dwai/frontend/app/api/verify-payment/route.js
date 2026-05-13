import { NextResponse } from 'next/server';
import { client } from '../../../lib/sanity';
import prisma from '../../../lib/prisma';

const writeClient = client.withConfig({
  token:
    process.env.SANITY_API_WRITE_TOKEN ||
    process.env.SANITY_API_TOKEN ||
    process.env.SANITY_API_READ_TOKEN,
});

export async function POST(request) {
  try {
    const { reference } = await request.json();

    if (!reference || typeof reference !== 'string') {
      return NextResponse.json(
        { status: 'error', message: 'Payment reference is required' },
        { status: 400 }
      );
    }

    if (!process.env.PAYSTACK_SECRET_KEY) {
      console.error('PAYSTACK_SECRET_KEY is not configured');
      return NextResponse.json({ status: 'error', message: 'Payment is not configured' }, { status: 500 });
    }

    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok || !data.status || data.data?.status !== 'success') {
      return NextResponse.json(
        { status: 'error', message: 'Verification failed' },
        { status: 400 }
      );
    }

    const fields = Object.fromEntries(
      (data.data.metadata?.custom_fields || []).map((field) => [field.variable_name, field.value])
    );

    const donorEmail = data.data.customer?.email;
    const isMonthly = fields.donation_type === 'Monthly Recurring';
    const amountInNaira = data.data.amount / 100;
    const existingDonation = await prisma.donation.findUnique({
      where: { paystackRef: data.data.reference },
      select: { id: true },
    });

    await prisma.donation.upsert({
      where: { paystackRef: data.data.reference },
      update: {
        amount: amountInNaira,
        currency: data.data.currency || 'NGN',
        donorName: fields.donor_name || 'Anonymous',
        donorEmail: donorEmail || '',
        isMonthly,
        status: 'completed',
        metadata: data.data.metadata,
      },
      create: {
        amount: amountInNaira,
        currency: data.data.currency || 'NGN',
        donorName: fields.donor_name || 'Anonymous',
        donorEmail: donorEmail || '',
        isMonthly,
        paystackRef: data.data.reference,
        status: 'completed',
        metadata: data.data.metadata,
      },
    });

    await writeClient.createIfNotExists({
      _id: `donation.${data.data.reference}`,
      _type: 'donation',
      reference: data.data.reference,
      amount: data.data.amount / 100,
      currency: data.data.currency,
      status: data.data.status,
      paidAt: data.data.paid_at,
      channel: data.data.channel,
      donorEmail,
      donorName: fields.donor_name,
      donationType: fields.donation_type,
      organization: fields.organization,
      metadata: data.data.metadata,
      createdAt: new Date().toISOString(),
    });

    const emailApiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.DONATION_EMAIL_FROM || process.env.RESEND_FROM_EMAIL;
    const adminEmail =
      process.env.DONATION_ADMIN_EMAIL || process.env.NGO_ADMIN_EMAIL || process.env.ADMIN_EMAIL;
    const amount = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: data.data.currency || 'NGN',
    }).format(data.data.amount / 100);

    if (!existingDonation && donorEmail && emailApiKey && emailFrom) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${emailApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: emailFrom,
            to: donorEmail,
            subject: 'Thank you for your donation to DWAI',
            html: `
              <p>Dear ${fields.donor_name || 'Donor'},</p>
              <p>Thank you for your generous donation of <strong>${amount}</strong> to DWAI.</p>
              <p>Your payment reference is <strong>${data.data.reference}</strong>.</p>
              <p>We appreciate your support.</p>
            `,
          }),
        });

        if (!emailResponse.ok) {
          console.error('Donation confirmation email failed:', await emailResponse.text());
        }
      } catch (emailError) {
        console.error('Donation confirmation email error:', emailError);
      }
    }

    if (!existingDonation && adminEmail && emailApiKey && emailFrom) {
      try {
        const adminEmailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${emailApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: emailFrom,
            to: adminEmail,
            subject: `New DWAI donation received: ${amount}`,
            html: `
              <p>A new donation has been verified successfully.</p>
              <p><strong>Amount:</strong> ${amount}</p>
              <p><strong>Reference:</strong> ${data.data.reference}</p>
              <p><strong>Donor:</strong> ${fields.donor_name || 'Anonymous'}</p>
              <p><strong>Email:</strong> ${donorEmail || 'Not provided'}</p>
              <p><strong>Donation type:</strong> ${fields.donation_type || 'Not provided'}</p>
              <p><strong>Organization:</strong> ${fields.organization || 'Not provided'}</p>
              <p><strong>Channel:</strong> ${data.data.channel || 'Not provided'}</p>
              <p><strong>Paid at:</strong> ${data.data.paid_at || 'Not provided'}</p>
            `,
          }),
        });

        if (!adminEmailResponse.ok) {
          console.error('Donation admin notification failed:', await adminEmailResponse.text());
        }
      } catch (adminEmailError) {
        console.error('Donation admin notification error:', adminEmailError);
      }
    }

    return NextResponse.json({
      status: 'success',
      data: {
        reference: data.data.reference,
        amount: data.data.amount / 100,
        status: data.data.status,
        paid_at: data.data.paid_at,
        channel: data.data.channel,
        metadata: data.data.metadata,
      },
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
  }
}
