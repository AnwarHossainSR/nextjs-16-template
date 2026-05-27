import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Label } from './label';

describe('Label', () => {
  it('renders label text', () => {
    render(<Label htmlFor="name">Name</Label>);

    expect(screen.getByText('Name')).toHaveAttribute('for', 'name');
  });
});
