import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ContactsPage from './page';

describe('ContactsPage', () => {
  it('renders contact data and request form', () => {
    render(<ContactsPage />);

    expect(
      screen.getByRole('heading', {
        name: 'Свяжитесь с Мир Окон',
        level: 1,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('info@mirokon.ru')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ваше имя')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Отправить заявку' })
    ).toBeInTheDocument();
  });
});
