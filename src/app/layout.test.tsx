import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import RootLayout, { metadata } from './layout';

vi.mock('@/providers/query', () => ({
  QueryProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

vi.mock('@/providers/theme', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

vi.mock('react-hot-toast', () => ({
  Toaster: () => <div data-testid="toaster" />,
}));

describe('RootLayout', () => {
  it('wraps page content and keeps the toaster available', () => {
    render(
      <RootLayout>
        <div>Page content</div>
      </RootLayout>
    );

    expect(screen.getByText('Page content')).toBeInTheDocument();
    expect(screen.getByTestId('toaster')).toBeInTheDocument();
  });

  it('sets Mir Okon Roto metadata', () => {
    expect(metadata.title).toBe('Фурнитура Roto | Мир Окон');
    expect(metadata.creator).toBe('Мир Окон');
  });
});
