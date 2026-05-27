import { Award, Factory, MapPin } from 'lucide-react';

import {
  FeatureCard,
  PageHero,
  PageSection,
  PageShell,
} from '@/components/roto/PagePrimitives';

const facts = [
  {
    title: 'Производственный фокус',
    description:
      'Работаем с алюминиевыми профильными системами для коммерческих и частных объектов.',
    icon: Factory,
  },
  {
    title: 'Поставки по России',
    description:
      'Подбираем решения и организуем поставки для региональных проектов.',
    icon: MapPin,
  },
  {
    title: 'Проверенные бренды',
    description:
      'Используем фурнитуру Roto и совместимые комплектующие для надежных конструкций.',
    icon: Award,
  },
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="О компании"
        title="Мир Окон для алюминиевых конструкций"
        description="Помогаем производителям, архитекторам и подрядчикам подбирать профильные системы и фурнитуру под требования современных объектов."
      />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-3">
          {facts.map(({ title, description, icon: Icon }) => (
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
