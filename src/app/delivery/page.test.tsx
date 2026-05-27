import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import DeliveryPage from './page';

describe('DeliveryPage', () => {
  it('renders delivery and payment steps', () => {
    render(<DeliveryPage />);

    expect(
      screen.getByRole('heading', {
        name: 'Понятная схема поставки фурнитуры',
        level: 1,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Заявка и спецификация')).toBeInTheDocument();
    expect(screen.getByText('Доставка')).toBeInTheDocument();
  });
});
