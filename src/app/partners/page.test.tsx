import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PartnersPage from './page';

describe('PartnersPage', () => {
  it('renders partner page content and navigation back to home', () => {
    render(<PartnersPage />);

    expect(
      screen.getByRole('heading', {
        name: 'Партнерская программа для поставок фурнитуры Roto',
        level: 1,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Вернуться на главную/i })
    ).toHaveAttribute('href', '/');
    expect(screen.getByText('Стабильные поставки')).toBeInTheDocument();
    expect(screen.getByText('Обсудить сотрудничество')).toHaveAttribute(
      'href',
      '/#contacts'
    );
  });
});
