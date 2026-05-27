'use client';

import Link from 'next/link';
import type { FC } from 'react';

import { Button } from '@/components/ui/button';
import type { CurrentUserProps } from '@/types';

const Header: FC<CurrentUserProps> = () => {
  return (
    <header className="px-8 py-8 flex justify-between bg-gray-900 text-violet-50">
      <Link href="/">
        <span>Home</span>
      </Link>
      <Button variant="secondary" type="button">
        Login
      </Button>
    </header>
  );
};

export default Header;
