import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import AboutPage from './page';

describe('AboutPage', () => {
  it('renders the about page content and home navigation', () => {
    render(<AboutPage />);

    expect(
      screen.getByRole('heading', {
        name: 'Мир Окон для алюминиевых конструкций',
        level: 1,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Вернуться на главную/i })
    ).toHaveAttribute('href', '/');
    expect(screen.getByText('Производственный фокус')).toBeInTheDocument();
  });
});
