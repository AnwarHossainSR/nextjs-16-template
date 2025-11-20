import { SignUp } from '@clerk/nextjs';
import { connection } from 'next/server';

export default async function SignUpPage() {
  await connection();

  return (
    <div className="flex min-h-screen items-center justify-center bg-(--background)">
      <SignUp />
    </div>
  );
}
