'use client';

import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  // Create a pulse animation for the skeleton elements
  const pulseVariants = {
    initial: { opacity: 0.6 },
    animate: { opacity: 1 },
  };

  // Transition for pulse effect
  const pulseTransition = {
    repeat: Infinity,
    repeatType: 'reverse' as const,
    duration: 1.2,
  };

  return (
    <div className="min-h-screen bg-(--background) flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Animated logo/spinner */}
        <div className="flex justify-center mb-8">
          <motion.div
            className="h-16 w-16 rounded-full bg-linear-to-r from-(--primary) to-(--accent)"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 1.5, ease: 'linear' },
              scale: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
            }}
          />
        </div>

        {/* Skeleton content */}
        <div className="space-y-8">
          {/* Header skeleton */}
          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={pulseTransition}
          >
            <Skeleton className="mx-auto h-12 w-3/4" />
          </motion.div>

          {/* Content skeletons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                transition={{ ...pulseTransition, delay: i * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <Skeleton className="h-48 w-full rounded-none" />
                  <CardContent className="space-y-3 p-5">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          <motion.p
            className="text-(--muted-foreground) text-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Loading content...
          </motion.p>
        </div>
      </div>
    </div>
  );
}
