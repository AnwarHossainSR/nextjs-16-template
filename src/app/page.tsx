'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Rocket, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-(--background) relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-(--primary)/1 to-(--accent)/1 pointer-events-none" />
        <div className="container px-4 sm:px-6 relative z-10 max-w-full">
          <motion.div
            className="flex flex-col items-center space-y-6 text-center"
            {...fadeIn}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-poppins bg-linear-to-r from-(--primary) to-(--accent) bg-clip-text text-transparent">
              Next.js 16 Boilerplate
            </h1>
            <p className="mx-auto max-w-[600px] text-(--muted-foreground) text-base sm:text-lg px-4">
              A production-ready starter template with cutting-edge tools and
              best practices for modern web development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
              <Link
                href="/docs"
                className="inline-flex h-12 items-center justify-center rounded-full bg-(--primary) px-6 text-sm font-semibold text-(--primary-foreground) shadow-lg hover:bg-(--primary)/9 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/AnwarHossainSR/nextjs-15-template"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-(--border) bg-(--card) px-6 text-sm font-semibold text-(--foreground) shadow-sm hover:bg-(--accent) hover:text-(--accent-foreground) transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View on GitHub
                <Code className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="w-full py-12 sm:py-16 md:py-24 bg-(--card)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 sm:px-6 max-w-full">
          <motion.div
            className="flex flex-col items-center justify-center space-y-6 text-center"
            {...fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter font-poppins text-(--foreground)">
              Why Choose NextBoiler?
            </h2>
            <p className="mx-auto max-w-[600px] text-(--muted-foreground) text-base sm:text-lg px-4">
              Everything you need to build scalable, high-performance web
              applications.
            </p>
          </motion.div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 px-4">
            {[
              {
                icon: Zap,
                title: 'Blazing Performance',
                description:
                  'Optimized with Next.js 16 for lightning-fast page loads and seamless user experiences.',
              },
              {
                icon: ShieldCheck,
                title: 'Best Practices',
                description:
                  'TypeScript, ESLint, Prettier, and Husky ensure robust, maintainable codebases.',
              },
              {
                icon: Rocket,
                title: 'Production Ready',
                description:
                  'SEO-optimized, responsive, and accessible, ready for enterprise-grade projects.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center space-y-4 rounded-xl bg-(--background) p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-(--border)"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--accent) p-3 shadow-md">
                  <feature.icon className="h-6 w-6 text-(--accent-foreground)" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-(--foreground) pt-8">
                  {feature.title}
                </h3>
                <p className="text-center text-(--muted-foreground) text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="w-full py-12 sm:py-16 md:py-24 bg-linear-to-br from-(--primary) to-(--accent) text-(--primary-foreground)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container px-4 sm:px-6 max-w-full">
          <motion.div
            className="flex flex-col items-center space-y-6 text-center"
            {...fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter font-poppins">
              Start Building Today
            </h2>
            <p className="mx-auto max-w-[600px] text-(--primary-foreground)/9 text-base sm:text-lg px-4">
              Clone the repository and launch your next project with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
              <pre className="bg-(--card)/95 px-4 py-3 rounded-xl font-mono text-xs sm:text-sm text-(--foreground) shadow-inner w-full overflow-x-auto max-w-full">
                <code>
                  git clone
                  https://github.com/AnwarHossainSR/nextjs-16-template.git
                </code>
              </pre>
            </div>
            <Link
              href="/docs"
              className="inline-flex h-12 items-center justify-center rounded-full bg-(--accent) px-6 text-sm font-semibold text-(--accent-foreground) shadow-lg hover:bg-(--accent)/9 transition-all duration-300 hover:scale-105 w-full sm:w-auto mx-4"
            >
              Explore Documentation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
