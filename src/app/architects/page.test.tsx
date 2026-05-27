import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArchitectsPage from './page';

describe('ArchitectsPage', () => {
  it('renders architect support page', () => {
    render(<ArchitectsPage />);

    expect(
      screen.getByRole('heading', {
        name: 'Проектная поддержка для архитекторов',
        level: 1,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Подбор систем под проект')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Вернуться на главную/i })
    ).toHaveAttribute('href', '/');
  });
});
