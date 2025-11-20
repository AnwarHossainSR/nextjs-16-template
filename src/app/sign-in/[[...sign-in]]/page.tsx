// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs';
import { connection } from 'next/server';
import { Suspense } from 'react';

async function SignInContent() {
  await connection();
  return <SignIn />;
}

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <div className="flex min-h-screen items-center justify-center bg-(--background)">
        <SignInContent />
      </div>
    </Suspense>
  );
}
