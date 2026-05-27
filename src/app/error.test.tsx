import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ErrorPage from './error';

describe('Error', () => {
  it('renders error message and reset action', () => {
    render(
      <ErrorPage error={new globalThis.Error('Test failure')} reset={vi.fn()} />
    );

    expect(screen.getByText('Oh no! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Test failure')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Try Again/i })
    ).toBeInTheDocument();
  });
});
