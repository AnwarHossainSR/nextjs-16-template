import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ProductsPage from './page';

describe('ProductsPage', () => {
  it('renders product catalog cards', () => {
    render(<ProductsPage />);

    expect(
      screen.getByRole('heading', {
        name: 'Фурнитура Roto для алюминиевых систем',
        level: 1,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Roto AL 300')).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: /Получить расчет/i })
    ).toHaveLength(4);
  });
});
