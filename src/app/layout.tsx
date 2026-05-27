// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { Inter, Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import { QueryProvider } from '@/providers/query';
import { ThemeProvider } from '@/providers/theme';
import '@/styles/globals.css';
import type { ChildrenProps } from '@/types';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false,
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Фурнитура Roto | Мир Окон',
  description:
    'Поставка фурнитуры Roto для алюминиевых окон, дверей и светопрозрачных конструкций.',
  keywords: 'Roto, Мир Окон, алюминиевый профиль, фурнитура, окна, двери',
  authors: [{ name: 'Мир Окон' }],
  creator: 'Мир Окон',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://your-domain.com',
    title: 'Фурнитура Roto | Мир Окон',
    description:
      'Фурнитура Roto для алюминиевых оконных, дверных и фасадных систем.',
    siteName: 'Мир Окон',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Фурнитура Roto | Мир Окон',
    description:
      'Фурнитура Roto для алюминиевых оконных, дверных и фасадных систем.',
  },
};

function RootLayoutContent({ children }: ChildrenProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <QueryProvider>
        <main className="min-h-screen w-full overflow-x-hidden">
          {children}
        </main>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: 'bg-(--card) text-(--foreground) border-(--border)',
            duration: 3000,
          }}
        />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <ClerkProvider>
      <html lang="ru" suppressHydrationWarning className="overflow-x-hidden">
        <body
          className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`}
        >
          <RootLayoutContent>{children}</RootLayoutContent>
        </body>
      </html>
    </ClerkProvider>
  );
}
