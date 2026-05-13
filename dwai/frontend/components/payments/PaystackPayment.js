'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export default function PaystackPayment({ 
  amount, 
  email, 
  name, 
  isMonthly,
  onClose,
  onError,
  onSuccess,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Paystack script
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializePayment = () => {
    if (!scriptLoaded || !window.PaystackPop) {
      toast.error('Payment system is loading. Please try again.');
      return;
    }

    setIsLoading(true);

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_your_key_here',
      email: email,
      amount: amount * 100, // Convert to kobo
      ref: `DWAI_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
      metadata: {
        custom_fields: [
          {
            display_name: "Donor Name",
            variable_name: "donor_name",
            value: name
          },
          {
            display_name: "Donation Type",
            variable_name: "donation_type",
            value: isMonthly ? "Monthly Recurring" : "One-time"
          },
          {
            display_name: "Organization",
            variable_name: "organization",
            value: "Deaf Women Aloud Initiative"
          }
        ]
      },
      callback: function(response) {
        // Verify payment on your server
        verifyPayment(response.reference);
      },
      onClose: function() {
        setIsLoading(false);
        toast.info('Payment window closed');
      }
    });

    handler.openIframe();
  };

  const verifyPayment = async (reference) => {
    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, amount, email, name }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for your donation!', {
          description: 'Your contribution will help empower deaf women and girls to access health services.',
          duration: 5000,
        });
        onSuccess?.(data);
      } else {
        const message = data.message || 'Payment verification failed. Please contact support.';
        toast.error(message);
        onError?.(message);
      }
    } catch (error) {
      const message = 'An error occurred while saving your donation. Please try again.';
      toast.error(message);
      onError?.(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <button
        onClick={onClose}
        className="flex items-center gap-2 text-black hover:text-purple-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to form
      </button>

      <div className="bg-purple-50 rounded-2xl p-8 mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Donation Summary</h3>
        <div className="space-y-2 text-left max-w-xs mx-auto">
          <div className="flex justify-between">
            <span className="text-black">Amount:</span>
            <span className="font-semibold text-black">₦{amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Type:</span>
            <span className="font-semibold text-black">{isMonthly ? 'Monthly' : 'One-time'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Email:</span>
            <span className="font-semibold text-black">{email}</span>
          </div>
        </div>
        <div className="border-t border-purple-200 mt-4 pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span className='text-black'>Total:</span>
            <span className="text-purple-600">₦{amount.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <button
        onClick={initializePayment}
        disabled={isLoading || !scriptLoaded}
        className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            Processing...
          </>
        ) : (
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            Pay with Paystack
          </>
        )}
      </button>

      <p className="mt-4 text-sm text-black">
        You will be redirected to Paystack&apos;s secure payment page
      </p>
    </motion.div>
  );
}
