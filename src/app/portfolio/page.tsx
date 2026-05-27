import { Building, Home, Landmark } from 'lucide-react';

import {
  FeatureCard,
  PageHero,
  PageSection,
  PageShell,
} from '@/components/roto/PagePrimitives';

const portfolioItems = [
  {
    title: 'Жилые комплексы',
    description: 'Оконные и дверные системы для современных жилых объектов.',
    icon: Home,
  },
  {
    title: 'Коммерческие здания',
    description:
      'Решения для офисов, торговых помещений и общественных пространств.',
    icon: Building,
  },
  {
    title: 'Архитектурные проекты',
    description:
      'Фасадные и светопрозрачные конструкции с повышенными требованиями к дизайну.',
    icon: Landmark,
  },
] as const;

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Портфолио"
        title="Объекты с алюминиевыми системами Мир Окон"
        description="Подборка направлений, где применяются профильные системы и фурнитура для надежных окон, дверей и фасадов."
      />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioItems.map(({ title, description, icon: Icon }) => (
            <FeatureCard
              key={title}
              title={title}
              description={description}
              icon={Icon}
            />
          ))}
        </div>
      </PageSection>
    </PageShell>
  );
}
