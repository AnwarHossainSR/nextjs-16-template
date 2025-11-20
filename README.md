# Next.js 16 Boilerplate

<div align="center">
  <img src="/public/images/og.png" alt="Next.js Boilerplate" width="600px" />
  <p>A production-ready starter template with everything you need to build and deploy high-performance Next.js applications.</p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
  [![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
  [![ESLint](https://img.shields.io/badge/ESLint-8.0-4b32c3)](https://eslint.org/)
  [![Perfect Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%25-success)](https://developer.chrome.com/docs/lighthouse/overview/)
</div>

## 🖥️ Demo

<div align="center">
  <img src="/public/images/home-demo.png" alt="Next.js Boilerplate Home Page Demo" width="100%" />
</div>

## ✨ Features

This boilerplate is designed to give you a production-ready foundation with everything configured for optimal development experience and performance:

- 🚀 **Performance Optimized** - 100% Lighthouse score out of the box
- 🔍 **SEO Ready** - Comprehensive meta tags and structured data
- 🎨 **Modern UI** - Clean design with light/dark mode support
- 🛠️ **Developer Experience** - Comprehensive tooling preconfigured
- 📱 **Responsive** - Mobile-first approach for all screen sizes
- ♿ **Accessible** - WCAG compliance with a11y best practices
- 🔒 **Type Safe** - Full TypeScript support throughout the codebase

## 📚 Tech Stack

- [`Next.js 16`](https://nextjs.org/) - React framework for production with Turbopack
- [`React 19`](https://react.dev/) - Latest React with improved performance
- [`Prisma`](https://www.prisma.io/) - Next-generation ORM for database management
- [`Clerk`](https://clerk.com/) - Complete user management and authentication
- [`Framer Motion`](https://www.framer.com/motion/) - Production-ready animation library
- [`TypeScript`](https://typescriptlang.org) - Type safety and improved developer experience
- [`Tailwind CSS`](https://tailwindcss.com/) - Utility-first CSS framework
- [`ESLint`](https://eslint.org/) - Code quality and consistency
- [`Prettier`](https://prettier.io/) - Code formatting
- [`Husky`](https://github.com/typicode/husky) - Git hooks for pre-commit validation
- [`next-themes`](https://github.com/pacocoursey/next-themes) - Theme management (light/dark mode)
- [`TanStack Query`](https://tanstack.com/query) - Powerful data fetching and state management

## 🚀 Getting Started

### Create a new project using this boilerplate

```bash
git clone https://github.com/AnwarHossainSR/nextjs-16-template.git
```

### Development

```bash
# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Your application will be available at [http://localhost:3000](http://localhost:3000).

## 📋 Scripts

| Command                   | Description                      |
| ------------------------- | -------------------------------- |
| `npm run dev`             | Start development server         |
| `npm run build`           | Build production application     |
| `npm run start`           | Start production server          |
| `npm run lint`            | Run ESLint to check code quality |
| `npm run format`          | Format code with Prettier        |
| `npm run prisma:generate` | Generate Prisma client           |
| `npm run prisma:push`     | Push schema changes to database  |
| `npm run seed`            | Seed database with initial data  |

## 🧰 Project Structure

```
src/
├── app/              # App router pages and API routes
├── components/       # Reusable UI components
├── config/           # Application configuration
├── context/          # React context providers
├── env/              # Environment variable configuration
├── hooks/            # Custom React hooks
├── layouts/          # Layout components
├── lib/              # Utility functions and libraries
├── providers/        # Context providers
├── services/         # API services and business logic
├── styles/           # Global styles
└── types/            # TypeScript type definitions

prisma/
├── schema.prisma     # Database schema
└── seed.ts           # Database seeding script
```

## 💅 Styling

This boilerplate uses Tailwind CSS v4 with canonical syntax for styling with a custom theme configuration that supports light and dark modes. The project uses CSS variables for theming, making it easy to customize colors and styles.

### Canonical Tailwind Syntax

This project uses the new canonical Tailwind CSS syntax:

```tsx
// Old syntax
className = 'bg-[var(--primary)] text-[var(--foreground)]';

// New canonical syntax
className = 'bg-(--primary) text-(--foreground)';
```

The project includes Google Fonts (Inter and Poppins) preloaded at build time for improved performance and consistent typography.

## 🧩 Development Features

### Absolute Imports

Absolute imports are configured with the `@/` prefix starting from the `src` folder:

```tsx
// Instead of this
import { Button } from '../../../components/ui/Button';

// You can write this
import { Button } from '@/components/ui/Button';
```

### Authentication

User authentication is handled by [Clerk](https://clerk.com/), providing:

- Email/password authentication
- Social login (Google, GitHub, etc.)
- User management dashboard
- Session management
- Protected routes

### Database

The project uses [Prisma](https://www.prisma.io/) as the ORM with MongoDB:

```bash
# Generate Prisma client
npm run prisma:generate

# Push schema changes
npm run prisma:push

# Seed database
npm run seed
```

### Code Quality

ESLint is configured with:

- [`eslint-config-next`](https://www.npmjs.com/package/eslint-config-next) - Next.js recommended rules
- React Compiler rules for optimal performance
- Custom rules for code quality and consistency

### Git Hooks

On every commit, the following checks run automatically:

1. **TypeScript type checking** - Ensures type safety
2. **ESLint with auto-fix** - Fixes code quality issues
3. **Prettier formatting** - Ensures consistent code style
4. **Commitlint** - Validates commit message format

On every push:

1. **Production build** - Ensures the app builds successfully
2. **Prisma client generation** - Validates database schema

```bash
# Commit message format
type(scope): subject

# Examples
feat: add user authentication
fix: resolve build error
chore: update dependencies
```

## 🔍 SEO & Performance

- Comprehensive meta tags in the layout file
- OpenGraph and Twitter card metadata
- `/public/robots.txt` configured to allow indexing
- Sitemap generation support
- Next.js 16 with Turbopack for faster builds
- React 19 for improved performance
- Optimized images with next/image
- Server-side rendering and static generation

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret

# Environment
NODE_ENV=development
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/AnwarHossainSR">Anwar Hossain</a></p>
</div>
