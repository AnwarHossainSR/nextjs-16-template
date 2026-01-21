# Next.js 16 Boilerplate

<div align="center">
  <img src="/public/images/og.png" alt="Next.js Boilerplate" width="600px" />
  <p>A production-ready starter template with everything you need to build and deploy high-performance Next.js applications.</p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
  [![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2.3-61dafb)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.4-38bdf8)](https://tailwindcss.com/)
  [![Prisma](https://img.shields.io/badge/Prisma-6.19.2-2d3748)](https://www.prisma.io/)
</div>

## ✨ Features

This boilerplate is designed to give you a production-ready foundation with everything configured for optimal development experience and performance:

- 🚀 **Next.js 16 & React 19** - Leveraging the latest features and performance improvements.
- 🎨 **Tailwind CSS 4** - Modern utility-first CSS with high performance and canonical syntax.
- 🔒 **Full Type Safety** - TypeScript 5.8 throughout the entire codebase.
- 🛡️ **Authentication** - Pre-configured with Clerk for secure user management.
- 🗄️ **Database Ready** - Prisma ORM with MongoDB support.
- ⚡ **Turbopack** - Blazing fast development builds.
- 🔄 **State Management** - TanStack Query (React Query) for efficient data fetching.
- 🎭 **Animations** - Framer Motion 12 for smooth transitions.
- 🔍 **SEO Optimized** - Pre-configured meta tags and social sharing assets.
- 🛠️ **Dev Tooling** - ESLint 9, Prettier, Husky, and Commitlint pre-configured.

## 📚 Tech Stack

- [`Next.js 16.1.4`](https://nextjs.org/) - React framework for production with Turbopack.
- [`React 19.2.3`](https://react.dev/) - Latest React with improved performance and new features.
- [`Prisma 6.19.2`](https://www.prisma.io/) - Next-generation ORM for database management.
- [`Clerk`](https://clerk.com/) - Complete user management and authentication.
- [`Framer Motion 12`](https://www.framer.com/motion/) - Production-ready animation library.
- [`TypeScript 5.8`](https://typescriptlang.org) - Type safety and improved developer experience.
- [`Tailwind CSS 4.1.4`](https://tailwindcss.com/) - High-performance styling with canonical syntax.
- [`ESLint 9`](https://eslint.org/) - Code quality and consistency.
- [`Prettier`](https://prettier.io/) - Code formatting.
- [`TanStack Query 5`](https://tanstack.com/query) - Powerful data fetching and state management.

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/AnwarHossainSR/nextjs-16-template.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your credentials:

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
```

### 4. Start Development

```bash
npm run dev
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
| `npm run prisma:push`     | Push schema changes              |

## 🧰 Project Structure

```
src/
├── app/              # App router pages and API routes
├── components/       # Reusable UI components
├── lib/              # Utility functions and library wrappers
├── providers/        # React Context providers
├── styles/           # Global styles and Tailwind configuration
└── types/            # TypeScript definitions

prisma/
├── schema.prisma     # Database schema
└── seed.ts           # Database seeding script
```

## 💅 Styling with Tailwind CSS 4

This project utilizes the latest Tailwind CSS 4 features, including the new canonical syntax and CSS-first configuration:

```tsx
// Canonical syntax for variables
className = 'bg-(--primary) text-(--foreground)';
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/AnwarHossainSR">Anwar Hossain</a></p>
</div>
