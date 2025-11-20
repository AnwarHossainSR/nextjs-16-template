import { SignUp } from '@clerk/nextjs';
import { connection } from 'next/server';
import { Suspense } from 'react';

async function SignUpContent() {
  await connection();
  return <SignUp />;
}

export default function SignUpPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <div className="flex min-h-screen items-center justify-center bg-(--background)">
        <SignUpContent />
      </div>
    </Suspense>
  );
}
