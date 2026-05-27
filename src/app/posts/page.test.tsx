import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import PostsPage from './page';

vi.mock('@/hooks/usePosts', () => ({
  usePosts: () => ({
    data: [
      {
        id: 'post-1',
        title: 'Roto hardware overview',
        content: 'Detailed article content',
        excerpt: 'Detailed article excerpt',
        authorId: 'author-1',
        author: { name: 'Team' },
        createdAt: '2026-05-27T00:00:00.000Z',
        updatedAt: '2026-05-27T00:00:00.000Z',
      },
    ],
    isLoading: false,
    error: null,
  }),
}));

describe('PostsPage', () => {
  it('renders search, filters, and posts', () => {
    render(<PostsPage />);

    expect(
      screen.getByRole('heading', { name: /Explore Our Blog/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search posts/i)).toBeInTheDocument();
    expect(screen.getByText('Categories:')).toBeInTheDocument();
    expect(screen.getByText('Roto hardware overview')).toBeInTheDocument();
  });
});
