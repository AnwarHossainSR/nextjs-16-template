'use client';

import { AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

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
      className={`min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 to-blue-100 p-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <Card className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 ease-in-out">
        <CardHeader className="items-center bg-linear-to-r from-purple-500 to-blue-600 p-6">
          <div className="relative">
            <div className="absolute inset-0 bg-white opacity-20 rounded-full animate-ping"></div>
            <AlertCircle size={80} className="text-white relative z-10" />
          </div>
        </CardHeader>

        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
            Oh no! Something went wrong
          </h2>

          <div className="bg-sky-50 border-l-4 border-sky-400 p-4 my-4 rounded">
            <p className="text-sm md:text-base text-sky-700 font-medium">
              {error.message ||
                "We couldn't process your request at this time."}
            </p>
          </div>

          <p className="text-gray-600 mb-6 text-center">
            Don't worry, we've logged this error and our team is working on it.
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button
              onClick={handleReset}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <RefreshCw
                size={18}
                className={`${isRotating ? 'animate-spin' : ''}`}
              />
              Try Again
            </Button>

            <Button
              onClick={() => (window.location.href = '/')}
              variant="outline"
            >
              Go Home
              <ArrowRight size={18} />
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between border-t border-gray-100 bg-gray-50 px-6 py-4">
          <p className="text-sm text-gray-500">Error Code: {errorCode}</p>
          <p className="text-sm text-gray-500">{new Date().toLocaleString()}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Error;
