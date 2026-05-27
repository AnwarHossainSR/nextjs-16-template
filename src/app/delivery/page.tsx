import { ClipboardCheck, CreditCard, PackageCheck, Truck } from 'lucide-react';

import {
  FeatureCard,
  PageHero,
  PageSection,
  PageShell,
} from '@/components/roto/PagePrimitives';

const deliverySteps = [
  {
    title: 'Заявка и спецификация',
    description:
      'Фиксируем состав заказа, объемы, адрес поставки и требования к срокам.',
    icon: ClipboardCheck,
  },
  {
    title: 'Оплата',
    description:
      'Согласуем счет и удобный формат оплаты для юридических лиц и партнеров.',
    icon: CreditCard,
  },
  {
    title: 'Комплектация',
    description:
      'Проверяем позиции фурнитуры перед отгрузкой, чтобы снизить риск недокомплекта.',
    icon: PackageCheck,
  },
  {
    title: 'Доставка',
    description: 'Организуем отправку по Москве, области и регионам России.',
    icon: Truck,
  },
] as const;

export default function DeliveryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Доставка и оплата"
        title="Понятная схема поставки фурнитуры"
        description="Согласуем заказ, сроки, оплату и доставку так, чтобы комплектация вовремя попала на производство или строительную площадку."
      />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-4">
          {deliverySteps.map(({ title, description, icon: Icon }) => (
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
