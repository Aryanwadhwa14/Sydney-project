import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { captureEmailAndGetRedirect } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';

interface EmailCaptureProps {
  eventId: string;
  eventTitle: string;
  onClose: () => void;
}

interface FormData {
  email: string;
  marketingConsent: boolean;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ eventId, eventTitle, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const redirectUrl = await captureEmailAndGetRedirect(data.email, eventId);
      window.open(redirectUrl, '_blank');
      onClose();
    } catch (error) {
      console.error('Error capturing email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-lg max-w-md w-full mx-4 relative overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-4 px-6 text-white">
            <h2 className="text-xl font-bold">Get Tickets</h2>
            <p className="text-white/80 text-sm">{eventTitle}</p>
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 p-1 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              Enter your email to continue to the ticket page. We'll keep you updated with similar events in Sydney.
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="your@email.com"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              
              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    {...register('marketingConsent')}
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I'd like to receive updates about events, promotions, and news from Sydney Events.
                  </span>
                </label>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Continue to Tickets'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EmailCapture;