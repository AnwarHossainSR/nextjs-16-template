import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';

describe('Card', () => {
  it('renders card structure', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card title</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>Card content</CardContent>
      </Card>
    );

    expect(screen.getByText('Card title')).toBeInTheDocument();
    expect(screen.getByText('Card description')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });
});
