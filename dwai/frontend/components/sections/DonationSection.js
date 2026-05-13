'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Heart, Activity, Scale, Users, CheckCircle } from 'lucide-react';
import PaystackPayment from '../payments/PaystackPayment';

const presetAmounts = [
  { value: 5000, label: '₦5,000', impact: 'Provides menstrual hygiene kits for 2 deaf students' },
  { value: 10000, label: '₦10,000', impact: 'Covers sign language interpretation for a hospital visit' },
  { value: 20000, label: '₦20,000', impact: 'Funds an SRHR education workshop for deaf girls' },
  { value: 50000, label: '₦50,000', impact: 'Sponsors a community outreach on reproductive rights' },
];

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState(10000);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState(''); // Keep donorEmail
  const [paymentAmount, setPaymentAmount] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [amountError, setAmountError] = useState('');
  const [submissionError, setSubmissionError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setAmountError('');
    setSubmissionError('');
    setSuccessMessage('');
    setPaymentAmount(null);
  };

  const handleCustomAmount = (value) => {
    setCustomAmount(value);
    setSelectedAmount(null);
    setAmountError('');
    setSubmissionError('');
    setSuccessMessage('');
    setPaymentAmount(null);
  };

  const getDonationAmount = () => {
    if (customAmount.trim()) {
      return Number(customAmount);
    }

    return selectedAmount || 0;
  };

  const handleProceed = (e) => {
    e.preventDefault();
    setSubmissionError('');
    setSuccessMessage('');
    const amount = getDonationAmount();
    if (amount < 100) {
      setAmountError('Minimum donation amount is ₦100');
      return;
    }
    setAmountError('');
    setPaymentAmount(amount);
    setIsLoading(true);
    setShowPayment(true);
  };

  return (
    <section id="donate" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4" />
              Support Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empower Deaf Women&apos;s Health
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your donation helps DWAI break barriers to Sexual and Reproductive Health and Rights (SRHR) for deaf women and girls. Every contribution ensures that no one is left behind due to communication gaps.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Healthcare Access</h4>
                  <p className="text-gray-600 text-sm">Providing sign language interpreters for prenatal care, family planning, and medical consultations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Rights Advocacy</h4>
                  <p className="text-gray-600 text-sm">Advocating for inclusive health policies and fighting against Gender-Based Violence (GBV) targeting deaf women.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Community Outreach</h4>
                  <p className="text-gray-600 text-sm">Organizing accessible SRHR workshops and distributing information in Nigerian Sign Language.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-3xl shadow-lg"
          >
            {successMessage ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6"
                role="status"
                aria-live="polite"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-9 w-9 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Donation successful
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {successMessage}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSuccessMessage('');
                    setSubmissionError('');
                    setDonorName('');
                    setDonorEmail('');
                    setCustomAmount('');
                    setSelectedAmount(10000);
                    setPaymentAmount(null);
                  }}
                  className="w-full bg-purple-600 text-white rounded-xl font-bold text-lg py-4 hover:bg-purple-700 transition-colors"
                >
                  Make another donation
                </button>
              </motion.div>
            ) : !showPayment ? (
              <form onSubmit={handleProceed} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select an amount (NGN)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount.value}
                        type="button"
                        onClick={() => handleAmountSelect(amount.value)}
                        className={`amount-btn text-left p-4 rounded-xl border-2 transition-all ${
                          selectedAmount === amount.value 
                            ? 'bg-purple-600 border-purple-600 text-white' 
                            : 'bg-white border-purple-200 text-gray-700 hover:border-purple-300'
                        }`}
                      >
                        <span className="block text-lg font-bold">{amount.label}</span>
                        <span className="block text-xs font-normal mt-1 opacity-80">{amount.impact}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Or enter custom amount (₦)
                  </label>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 border-2 text-purple-600 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    onBlur={() => setAmountError(getDonationAmount() < 100 && customAmount ? 'Minimum donation amount is ₦100' : '')}
                    min="100"
                  />
                  {amountError && (
                    <p className="mt-2 text-sm font-medium text-red-600">
                      {amountError}
                    </p>
                  )}
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 text-black border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 text-black py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {submissionError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
                    {submissionError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white rounded-xl font-bold text-lg py-4 hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={getDonationAmount() < 100 || isLoading}
                >
                  {isLoading ? 'Processing...' : 'Proceed to Payment'}
                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4" />
                  <Lock className="w-4 h-4" />
                  <span>Payments securely processed by Paystack</span>
                </div>
              </form>
            ) : (
              <PaystackPayment
                amount={paymentAmount || getDonationAmount()}
                email={donorEmail}
                name={donorName}
                onClose={() => {
                  setShowPayment(false);
                  setIsLoading(false);
                }}
                onError={(message) => {
                  // This assumes your PaystackPayment component triggers 
                  // this callback with the error message from the API
                  setSubmissionError(message);
                  setShowPayment(false);
                  setIsLoading(false);
                }}
                onSuccess={() => {
                  setSuccessMessage('Thank you for supporting DWAI. Your donation has been verified and recorded successfully.');
                  setSubmissionError('');
                  setShowPayment(false);
                  setIsLoading(false);
                }}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
