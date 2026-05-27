import type { LucideIcon } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export const PageShell = ({ children }: { children: ReactNode }) => (
  <main className="min-h-screen bg-white text-slate-950">{children}</main>
);

export const PageContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
  >
    {children}
  </div>
);

export const BackHomeButton = () => (
  <Button asChild variant="outline" className="w-fit rounded-full bg-white">
    <Link href="/">
      <ArrowLeft className="h-4 w-4" />
      Вернуться на главную
    </Link>
  </Button>
);

export const PageHero = ({
  eyebrow,
  title,
  description,
  minHeight = 'min-h-[360px]',
}: {
  eyebrow: string;
  title: string;
  description: string;
  minHeight?: string;
}) => (
  <section className="border-b border-slate-200 bg-slate-50">
    <PageContainer
      className={cn('flex flex-col justify-center py-16', minHeight)}
    >
      <BackHomeButton />
      <Badge
        variant="outline"
        className="mt-10 w-fit border-sky-200 bg-sky-50 text-[#0284c7]"
      >
        {eyebrow}
      </Badge>
      <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
        {description}
      </p>
    </PageContainer>
  </section>
);

export const PageSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section className={cn('py-16', className)}>
    <PageContainer>{children}</PageContainer>
  </section>
);

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) => (
  <Card className="h-full rounded-3xl border-slate-200 bg-white">
    <CardHeader>
      <span className="inline-flex w-fit rounded-2xl bg-sky-50 p-4 text-[#0284c7]">
        <Icon className="h-7 w-7" />
      </span>
      <CardTitle className="pt-4 text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm leading-7 text-slate-600">{description}</p>
    </CardContent>
  </Card>
);
