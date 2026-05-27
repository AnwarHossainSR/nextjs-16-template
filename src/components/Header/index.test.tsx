import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Header from './index';

describe('Header', () => {
  it('renders home link and login button', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/'
    );
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
