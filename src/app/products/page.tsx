import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import {
  PageHero,
  PageSection,
  PageShell,
} from '@/components/roto/PagePrimitives';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { products } from '@/config/roto-page';

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Продукция"
        title="Фурнитура Roto для алюминиевых систем"
        description="Каталог ключевых решений для оконных, дверных, раздвижных и складных светопрозрачных конструкций."
      />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.title}
              className="flex h-full flex-col rounded-3xl border-slate-200 bg-white"
            >
              <CardHeader>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm leading-7 text-slate-600">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0 text-[#0284c7]">
                  <Link href="/#contacts">
                    Получить расчет
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </PageSection>
    </PageShell>
  );
}
