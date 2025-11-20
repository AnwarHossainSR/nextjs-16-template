import { SignUp } from '@clerk/nextjs';
import { Suspense } from 'react';

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
        <SignUp />
      </div>
    </Suspense>
  );
}
