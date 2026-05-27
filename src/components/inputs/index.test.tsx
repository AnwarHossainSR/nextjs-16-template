import { render, screen } from '@testing-library/react';
import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import { describe, expect, it, vi } from 'vitest';

import { Input } from './index';

const register = vi.fn((name: string) => ({
  name,
})) as unknown as UseFormRegister<FieldValues>;

describe('Form Input', () => {
  it('renders a labeled shadcn input', () => {
    render(
      <Input
        id="email"
        label="Email"
        register={register}
        errors={{} as FieldErrors}
        placeholder="email@example.com"
      />
    );

    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'placeholder',
      'email@example.com'
    );
  });
});
