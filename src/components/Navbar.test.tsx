import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import MainNavbar from './Navbar';

vi.mock('@clerk/nextjs', () => ({
  SignInButton: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  SignOutButton: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useUser: () => ({ isSignedIn: false, user: null }),
}));

vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
  }),
}));

describe('MainNavbar', () => {
  it('renders navigation links and sign in action', () => {
    render(<MainNavbar />);

    expect(screen.getByRole('link', { name: 'NextBoiler' })).toHaveAttribute(
      'href',
      '/'
    );
    expect(screen.getByRole('link', { name: 'Posts' })).toHaveAttribute(
      'href',
      '/posts'
    );
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
  });
});
