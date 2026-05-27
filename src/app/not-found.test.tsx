import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import NotFound from './not-found';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    back: vi.fn(),
    push: vi.fn(),
  }),
}));

describe('NotFound', () => {
  it('renders not found actions', () => {
    render(<NotFound />);

    expect(screen.getByText('Oops, Page Not Found')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Back to Home/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Go Back/i })
    ).toBeInTheDocument();
  });
});
