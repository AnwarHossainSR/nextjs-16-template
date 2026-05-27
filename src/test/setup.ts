import '@testing-library/jest-dom/vitest';
import React from 'react';
import { vi } from 'vitest';

const passthroughProps = (props: Record<string, unknown>) => {
  const { animate, initial, transition, viewport, whileInView, ...domProps } =
    props;

  return domProps;
};

const createMotionMock = (tag: string) => {
  const MotionMock = React.forwardRef<HTMLElement, Record<string, unknown>>(
    (props, ref) =>
      React.createElement(tag, {
        ...passthroughProps(props),
        ref,
      })
  );

  MotionMock.displayName = `MotionMock.${tag}`;

  return MotionMock;
};

vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
  motion: new Proxy(
    {},
    {
      get: (_target, tag: string) => createMotionMock(tag),
    }
  ),
}));

vi.mock('next/font/google', () => ({
  Inter: () => ({ variable: 'font-inter' }),
  Poppins: () => ({ variable: 'font-poppins' }),
}));

vi.mock('next/image', () => ({
  default: ({
    alt,
    fill,
    priority,
    sizes,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & {
    fill?: boolean;
    priority?: boolean;
    sizes?: string;
  }) =>
    React.createElement('img', {
      alt,
      ...props,
    }),
}));

vi.mock('@clerk/nextjs', () => ({
  ClerkProvider: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
}));
