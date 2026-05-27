import { render, screen } from '@testing-library/react';
import { Factory } from 'lucide-react';
import { describe, expect, it } from 'vitest';

import { FeatureCard, PageHero } from './PagePrimitives';

describe('PagePrimitives', () => {
  it('renders page hero with back navigation', () => {
    render(
      <PageHero
        eyebrow="Раздел"
        title="Заголовок страницы"
        description="Описание страницы"
      />
    );

    expect(
      screen.getByRole('link', { name: /Вернуться на главную/i })
    ).toHaveAttribute('href', '/');
    expect(screen.getByText('Раздел')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Заголовок страницы' })
    ).toBeInTheDocument();
  });

  it('renders feature card content', () => {
    render(
      <FeatureCard
        title="Карточка"
        description="Описание карточки"
        icon={Factory}
      />
    );

    expect(screen.getByText('Карточка')).toBeInTheDocument();
    expect(screen.getByText('Описание карточки')).toBeInTheDocument();
  });
});
