import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ThemeToggle from './ThemeToggle';

vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
  }),
}));

describe('ThemeToggle', () => {
  it('renders theme toggle button after mount', () => {
    render(<ThemeToggle />);

    expect(
      screen.getByRole('button', { name: 'Toggle theme' })
    ).toBeInTheDocument();
  });
});
