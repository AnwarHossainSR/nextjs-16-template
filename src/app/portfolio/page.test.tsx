import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PortfolioPage from './page';

describe('PortfolioPage', () => {
  it('renders portfolio directions', () => {
    render(<PortfolioPage />);

    expect(
      screen.getByRole('heading', {
        name: 'Объекты с алюминиевыми системами Мир Окон',
        level: 1,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Жилые комплексы')).toBeInTheDocument();
    expect(screen.getByText('Коммерческие здания')).toBeInTheDocument();
  });
});
