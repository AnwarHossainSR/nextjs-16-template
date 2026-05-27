import { DraftingCompass, FileCheck2, Layers3 } from 'lucide-react';

import {
  FeatureCard,
  PageHero,
  PageSection,
  PageShell,
} from '@/components/roto/PagePrimitives';

const architectServices = [
  {
    title: 'Подбор систем под проект',
    description:
      'Помогаем выбрать профиль и фурнитуру под требования фасада, входной группы или витража.',
    icon: DraftingCompass,
  },
  {
    title: 'Технические материалы',
    description:
      'Готовим каталоги, узлы и рекомендации для проектной документации.',
    icon: FileCheck2,
  },
  {
    title: 'Согласование решений',
    description:
      'Поддерживаем команду проекта на этапе спецификации и подготовки к поставке.',
    icon: Layers3,
  },
] as const;

export default function ArchitectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Архитекторам"
        title="Проектная поддержка для архитекторов"
        description="Подбираем технически корректные решения для алюминиевых конструкций, чтобы внешний вид проекта совпадал с эксплуатационными требованиями."
      />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-3">
          {architectServices.map(({ title, description, icon: Icon }) => (
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
