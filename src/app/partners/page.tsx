import { CheckCircle2, Factory, Handshake, Truck } from 'lucide-react';
import Link from 'next/link';

import {
  FeatureCard,
  PageHero,
  PageSection,
  PageShell,
} from '@/components/roto/PagePrimitives';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const partnerBenefits = [
  {
    title: 'Стабильные поставки',
    description:
      'Подбираем комплектацию Roto под проект и согласуем сроки поставки заранее.',
    icon: Truck,
  },
  {
    title: 'Техническая поддержка',
    description:
      'Помогаем партнерам с подбором решений для оконных, дверных и фасадных систем.',
    icon: Factory,
  },
  {
    title: 'Долгосрочные условия',
    description:
      'Выстраиваем понятную схему сотрудничества для производств, дилеров и монтажных компаний.',
    icon: Handshake,
  },
] as const;

const requirements = [
  'регулярные проектные или складские закупки',
  'работа с алюминиевыми профильными системами',
  'готовность соблюдать технические рекомендации производителя',
] as const;

export default function PartnersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="МИР ОКОН"
        title="Партнерская программа для поставок фурнитуры Roto"
        description="Страница для дилеров, производителей алюминиевых конструкций и монтажных организаций, которым нужны надежные поставки фурнитуры и техническая поддержка по проектам."
        minHeight="min-h-[420px]"
      />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-3">
          {partnerBenefits.map(({ title, description, icon: Icon }) => (
            <FeatureCard
              key={title}
              title={title}
              description={description}
              icon={Icon}
            />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284c7]">
              Для кого
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Подходит компаниям, которые работают с алюминиевыми системами
            </h2>
          </div>
          <Card className="rounded-3xl border-slate-200 bg-white">
            <CardContent className="p-8">
              <ul className="grid gap-5">
                {requirements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-slate-700"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#0284c7]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="brand" className="mt-8">
                <Link href="/#contacts">Обсудить сотрудничество</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageSection>
    </PageShell>
  );
}
