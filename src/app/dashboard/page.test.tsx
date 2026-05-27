import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import DashboardPage from './page';

vi.mock('@clerk/nextjs', () => ({
  SignOutButton: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useUser: () => ({
    user: {
      firstName: 'Alex',
      emailAddresses: [{ emailAddress: 'alex@example.com' }],
    },
  }),
}));

describe('DashboardPage', () => {
  it('renders dashboard cards and sign out action', () => {
    render(<DashboardPage />);

    expect(
      screen.getByRole('heading', { name: 'Dashboard' })
    ).toBeInTheDocument();
    expect(screen.getByText('Welcome, Alex!')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Sign Out/i })
    ).toBeInTheDocument();
    expect(screen.getByText('Account Stats')).toBeInTheDocument();
  });
});
