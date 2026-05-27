import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SupportPage from './page';

describe('SupportPage', () => {
  it('renders technical support content', () => {
    render(<SupportPage />);

    expect(
      screen.getByRole('heading', {
        name: 'Помощь в подборе и применении фурнитуры',
        level: 1,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Консультация инженера')).toBeInTheDocument();
    expect(screen.getByText('Технические каталоги')).toBeInTheDocument();
  });
});
