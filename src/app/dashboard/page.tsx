'use client';

import { SignOutButton, useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useUser();

  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="flex min-h-screen bg-(--background)">
      {/* Sidebar */}
      <motion.aside
        className="w-64 bg-(--card) border-r border-(--border) flex flex-col"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 border-b border-(--border)">
          <h2 className="text-xl font-semibold text-(--foreground)">
            Dashboard
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 p-2 text-sm font-medium text-(--foreground) hover:bg-(--primary) hover:text-(--primary-foreground) rounded-md transition-colors duration-200"
          >
            <User className="h-5 w-5" />
            Profile
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-2 p-2 text-sm font-medium text-(--foreground) hover:bg-(--primary) hover:text-(--primary-foreground) rounded-md transition-colors duration-200"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <SignOutButton>
            <button className="flex items-center gap-2 p-2 w-full text-sm font-medium text-(--foreground) hover:bg-(--primary) hover:text-(--primary-foreground) rounded-md transition-colors duration-200">
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </SignOutButton>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <motion.div className="max-w-4xl mx-auto" {...fadeIn}>
          <h1 className="text-3xl font-bold text-(--foreground) mb-4">
            Welcome, {user?.firstName || user?.emailAddresses[0].emailAddress}!
          </h1>
          <p className="text-lg text-(--muted-foreground) mb-8">
            This is your dashboard. Use the sidebar to navigate through your
            profile and settings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-(--card) p-6 rounded-lg border border-(--border) shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-(--foreground) mb-2">
                Account Stats
              </h3>
              <p className="text-(--muted-foreground)">
                View your account activity and statistics.
              </p>
            </motion.div>

            <motion.div
              className="bg-(--card) p-6 rounded-lg border border-(--border) shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-(--foreground) mb-2">
                Recent Activity
              </h3>
              <p className="text-(--muted-foreground)">
                Check your recent actions and updates.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
