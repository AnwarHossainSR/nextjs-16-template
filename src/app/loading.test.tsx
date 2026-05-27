import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Loading from './loading';

describe('Loading', () => {
  it('renders loading text', () => {
    render(<Loading />);

    expect(screen.getByText('Loading content...')).toBeInTheDocument();
  });
});
