// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs';
import { Suspense } from 'react';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[--background]">
      <Suspense fallback={<div>Loading...</div>}>
        <SignIn />
      </Suspense>
    </div>
  );
}
