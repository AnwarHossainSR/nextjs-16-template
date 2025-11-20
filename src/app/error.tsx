'use client';

import { AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ErrorStateProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorStateProps> = ({ error, reset }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [errorCode] = useState(() => Math.floor(Math.random() * 90000) + 10000);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleReset = () => {
    setIsRotating(true);
    setTimeout(() => {
      reset();
      setIsRotating(false);
    }, 600);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out">
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white opacity-20 rounded-full animate-ping"></div>
            <AlertCircle size={80} className="text-white relative z-10" />
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
            Oh no! Something went wrong
          </h2>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4 rounded">
            <p className="text-sm md:text-base text-red-700 font-medium">
              {error.message ||
                "We couldn't process your request at this time."}
            </p>
          </div>

          <p className="text-gray-600 mb-6 text-center">
            Don't worry, we've logged this error and our team is working on it.
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <RefreshCw
                size={18}
                className={`${isRotating ? 'animate-spin' : ''}`}
              />
              Try Again
            </button>

            <button
              onClick={() => (window.location.href = '/')}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Go Home
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-100">
          <p className="text-sm text-gray-500">Error Code: {errorCode}</p>
          <p className="text-sm text-gray-500">{new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
