import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  Calculator,
  CalendarDays,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react';

export type ProductCard = {
  title: string;
  description: string;
  imagePosition: string;
};

export type ArticleCard = {
  title: string;
  date: string;
  imagePosition: string;
};

export type FooterColumn = {
  title: string;
  items: string[];
};

export type Feature = {
  label: string;
  icon: LucideIcon;
};

export type NavItem = {
  label: string;
  href: string;
};

export const utilityLinks = [
  { label: 'Работаем по всей России', icon: MapPin },
  { label: 'Пн.-пт. с 9:00 до 18:00', icon: CalendarDays },
  { label: 'info@mirokon.ru', icon: Mail },
  { label: 'Калькулятор', icon: Calculator },
  { label: 'Заявка на расчет', icon: FileText },
] as const;

export const navItems: NavItem[] = [
  { label: 'О нас', href: '/about' },
  { label: 'Продукция', href: '/products' },
  { label: 'Партнерам', href: '/partners' },
  { label: 'Архитекторам', href: '/architects' },
  { label: 'Техническая поддержка', href: '/support' },
  { label: 'Доставка и оплата', href: '/delivery' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Контакты', href: '/contacts' },
] as const;

export const rotoFeatures: Feature[] = [
  { label: 'Надежность', icon: ShieldCheck },
  { label: 'Безопасность', icon: Zap },
  { label: 'Функциональность', icon: Wrench },
];

export const products: ProductCard[] = [
  {
    title: 'Roto AL 300',
    description:
      'Промышленная фурнитура для окон и дверей из алюминиевого профиля. Подходит для поворотных и поворотно-откидных конструкций.',
    imagePosition: 'object-[6%_38%]',
  },
  {
    title: 'Roto AL Designo',
    description:
      'Скрытая фурнитура для элегантных алюминиевых дверей и окон, где особенно важны аккуратный внешний вид и надежность.',
    imagePosition: 'object-[34%_36%]',
  },
  {
    title: 'Roto Patio Alversa',
    description:
      'Универсальная раздвижная фурнитура с продуманной конструкцией и оптимальными затратами для современных проектов.',
    imagePosition: 'object-[65%_40%]',
  },
  {
    title: 'Roto Patio Fold',
    description:
      'Премиальная фурнитура для складных светопрозрачных конструкций большой площади с высокими эксплуатационными характеристиками.',
    imagePosition: 'object-[92%_38%]',
  },
];

export const articles: ArticleCard[] = [
  {
    title: 'Жизненный цикл окна',
    date: 'Октябрь 3, 2017',
    imagePosition: 'object-[9%_36%]',
  },
  {
    title:
      'Системы Мир Окон - как правильно выбрать алюминиевый профиль в соответствии с проектом',
    date: 'Февраль 4, 2022',
    imagePosition: 'object-[50%_34%]',
  },
  {
    title: 'Применение и особенность теплого алюминиевого профиля',
    date: 'Июнь 27, 2017',
    imagePosition: 'object-[91%_34%]',
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Фасадные системы',
    items: [
      'Стоечно-ригельная система',
      'МИР ОКОН F50 RR',
      'Алюминиевый профиль для зимнего сада',
      'МИР ОКОН F50+',
      'МИР ОКОН F50 pSTR',
    ],
  },
  {
    title: 'Оконно-дверные системы',
    items: [
      'МИР ОКОН V72D',
      'МИР ОКОН V72W',
      'МИР ОКОН V68',
      'МИР ОКОН V60D',
      'МИР ОКОН V60W',
      'МИР ОКОН VP-14',
    ],
  },
  {
    title: 'Реквизиты',
    items: [
      'ООО «Мир Окон»',
      'ИНН 5003029871, КПП 500901001',
      'ОГРН 1035000903629',
      '142062 Московская обл., г. Домодедово, с. Растуново, д.51, офис 2',
      'ПАО «Сбербанк» г. Москвы',
    ],
  },
];

export const contactItems = [
  { label: '+7 (495) 987-45-35', icon: Phone },
  { label: '+7 (800) 200-38-02', icon: Phone },
  { label: 'info@mirokon.ru', icon: Mail },
  {
    label: 'Производство и поставка алюминиевых профильных систем',
    icon: Building2,
  },
] as const;
