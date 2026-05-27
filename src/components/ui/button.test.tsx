import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './button';

describe('Button', () => {
  it('renders a default button', () => {
    render(<Button>Submit</Button>);

    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('renders child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/contacts">Contacts</a>
      </Button>
    );

    expect(screen.getByRole('link', { name: 'Contacts' })).toHaveAttribute(
      'href',
      '/contacts'
    );
  });
});
