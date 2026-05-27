import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders textarea with placeholder', () => {
    render(<Textarea placeholder="Message" />);

    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
  });
});
