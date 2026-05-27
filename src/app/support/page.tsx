import { BookOpenText, Headphones, Settings2 } from 'lucide-react';

import {
  FeatureCard,
  PageHero,
  PageSection,
  PageShell,
} from '@/components/roto/PagePrimitives';

const supportItems = [
  {
    title: 'Консультация инженера',
    description:
      'Отвечаем на вопросы по совместимости фурнитуры, профиля и типа конструкции.',
    icon: Headphones,
  },
  {
    title: 'Технические каталоги',
    description:
      'Предоставляем материалы для подбора, монтажа и подготовки спецификаций.',
    icon: BookOpenText,
  },
  {
    title: 'Настройка решений',
    description:
      'Помогаем уточнить комплектацию под нагрузки, размеры створок и условия эксплуатации.',
    icon: Settings2,
  },
] as const;

export default function SupportPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Техническая поддержка"
        title="Помощь в подборе и применении фурнитуры"
        description="Команда помогает производствам и проектировщикам быстрее принимать технические решения и избегать ошибок в комплектации."
      />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-3">
          {supportItems.map(({ title, description, icon: Icon }) => (
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
