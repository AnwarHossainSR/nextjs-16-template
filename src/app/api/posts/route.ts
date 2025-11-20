import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';
    const category = searchParams.get('category') || undefined;
    const sortBy = searchParams.get('sortBy') || 'newest';

    const where: any = {};
    if (query) {
      where.OR = [
        { title: { contains: query, mode: 'insensitive' } },
        { content: { contains: query, mode: 'insensitive' } },
      ];
    }
    if (category) {
      where.category = { equals: category };
    }

    const orderBy: any =
      sortBy === 'newest'
        ? { createdAt: 'desc' }
        : sortBy === 'oldest'
          ? { createdAt: 'asc' }
          : { viewCount: 'desc' };

    const posts = await prisma.post.findMany({
      where,
      orderBy,
      select: {
        id: true,
        title: true,
        excerpt: true,
        content: true,
        coverImage: true, // Keep this only if you've added it to your schema
        category: true,
        tags: true,
        readTime: true,
        viewCount: true,
        commentCount: true,
        authorId: true,
        author: {
          select: {
            name: true,
            image: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
