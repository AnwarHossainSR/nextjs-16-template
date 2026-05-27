import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PostCard from './PostCard';

describe('PostCard', () => {
  it('renders post metadata using shadcn card structure', () => {
    render(
      <PostCard
        id="post-1"
        title="Industrial glazing"
        excerpt="Short post excerpt"
        content="Long content"
        authorId="author-1"
        authorName="Mirokon Team"
        createdAt="2026-05-27T00:00:00.000Z"
        category="Products"
        tags={['Roto', 'Aluminium']}
        readTime={5}
        commentCount={2}
        viewCount={15}
      />
    );

    expect(
      screen.getByRole('link', { name: /Industrial glazing/i })
    ).toHaveAttribute('href', '/posts/post-1');
    expect(screen.getByText('Mirokon Team')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('5 min read')).toBeInTheDocument();
  });
});
