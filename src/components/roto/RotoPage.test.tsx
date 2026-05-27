import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RotoPage } from './RotoPage';

describe('RotoPage', () => {
  it('renders the main Mir Okon Roto landing sections', () => {
    render(<RotoPage />);

    expect(
      screen.getByRole('heading', { name: 'Фурнитура Roto', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getAllByText('Мир Окон').length).toBeGreaterThan(0);
    expect(screen.getByText('Roto AL 300')).toBeInTheDocument();
    expect(screen.getByText('Полезная информация')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Контакты' })
    ).toBeInTheDocument();
  });

  it('renders product calls to action for all product cards', () => {
    render(<RotoPage />);

    expect(
      screen.getAllByRole('link', { name: 'Оставить заявку' })
    ).toHaveLength(4);
    expect(
      screen.getAllByRole('link', { name: /Узнать больше/i })
    ).toHaveLength(7);
  });

  it('links menu items to App Router pages', () => {
    render(<RotoPage />);

    const expectedLinks = [
      ['О нас', '/about'],
      ['Продукция', '/products'],
      ['Партнерам', '/partners'],
      ['Архитекторам', '/architects'],
      ['Техническая поддержка', '/support'],
      ['Доставка и оплата', '/delivery'],
      ['Портфолио', '/portfolio'],
      ['Контакты', '/contacts'],
    ] as const;

    expectedLinks.forEach(([label, href]) => {
      expect(screen.getAllByRole('link', { name: label })[0]).toHaveAttribute(
        'href',
        href
      );
    });
  });

  it('keeps the header fixed to the top of the viewport', () => {
    render(<RotoPage />);

    const header = screen.getByRole('banner');

    expect(header).toHaveClass('fixed', 'top-0', 'z-50');
  });
});
