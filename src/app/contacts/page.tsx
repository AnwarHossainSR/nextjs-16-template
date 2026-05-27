import { Mail, MapPin, Phone } from 'lucide-react';

import {
  PageHero,
  PageSection,
  PageShell,
} from '@/components/roto/PagePrimitives';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contacts = [
  { label: '+7 (495) 987-45-35', icon: Phone },
  { label: '+7 (800) 200-38-02', icon: Phone },
  { label: 'info@mirokon.ru', icon: Mail },
  {
    label: 'Московская обл., г. Домодедово, с. Растуново, д.51, офис 2',
    icon: MapPin,
  },
] as const;

export default function ContactsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Контакты"
        title="Свяжитесь с Мир Окон"
        description="Напишите или позвоните нам, чтобы получить консультацию, расчет или технические материалы по фурнитуре Roto."
      />
      <PageSection>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <Card className="rounded-3xl border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl">Контактная информация</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mt-8 grid gap-5">
                {contacts.map(({ label, icon: Icon }) => (
                  <p
                    key={label}
                    className="flex gap-3 text-sm leading-7 text-slate-700"
                  >
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-[#0284c7]" />
                    {label}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle className="text-2xl">Оставить заявку</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <Input className="min-h-12 bg-white" placeholder="Ваше имя" />
                <Input
                  className="min-h-12 bg-white"
                  placeholder="Телефон или e-mail"
                />
                <Textarea
                  className="min-h-32 bg-white"
                  placeholder="Опишите задачу"
                />
                <Button type="submit" variant="brand">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </PageSection>
    </PageShell>
  );
}
