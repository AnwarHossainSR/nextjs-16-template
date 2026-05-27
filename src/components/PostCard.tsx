import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { CalendarIcon, Eye, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type AvatarProps = {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
};

const Avatar = ({ src, alt, fallback, className }: AvatarProps) => {
  return (
    <div
      className={`relative flex h-6 w-6 shrink-0 overflow-hidden rounded-full ${className ?? ''}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || 'Avatar'}
          fill
          className="aspect-square object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-(--muted) text-(--muted-foreground) text-xs">
          {fallback || alt?.charAt(0)?.toUpperCase() || '?'}
        </div>
      )}
    </div>
  );
};

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  authorId: string;
  authorName?: string;
  authorImage?: string;
  createdAt: string;
  coverImage?: string;
  category?: string;
  tags?: string[];
  readTime?: number;
  commentCount?: number;
  viewCount?: number;
}

export default function PostCard({
  id,
  title,
  excerpt,
  authorId,
  authorName,
  authorImage,
  createdAt,
  coverImage,
  category,
  tags,
  readTime = 3,
  commentCount = 0,
  viewCount = 0,
}: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
        <Link href={`/posts/${id}`} className="block">
          <div className="relative h-48 overflow-hidden">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 bg-linear-to-r from-(--primary) to-(--accent)" />
            )}
            {category && (
              <Badge className="absolute top-4 left-4 bg-(--primary) text-(--primary-foreground) hover:bg-(--primary)/90">
                {category}
              </Badge>
            )}
          </div>
        </Link>

        <CardContent className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <Avatar
              src={authorImage}
              alt={authorName || authorId}
              fallback={(authorName || authorId).substring(0, 2)}
            />
            <span className="text-xs text-(--muted-foreground)">
              {authorName || authorId}
            </span>
            <span className="text-xs text-(--muted-foreground)">•</span>
            <div className="flex items-center text-xs text-(--muted-foreground)">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {format(new Date(createdAt), 'MMM d, yyyy')}
            </div>
          </div>

          <Link href={`/posts/${id}`} className="block">
            <h2 className="mb-2 line-clamp-2 text-xl font-semibold text-(--foreground) transition-colors duration-200 group-hover:text-(--primary)">
              {title}
            </h2>
            <p className="mb-4 line-clamp-2 text-(--muted-foreground)">
              {excerpt}
            </p>
          </Link>

          <CardFooter className="mt-4 flex items-center justify-between border-t border-(--border) p-0 pt-4">
            <span className="text-xs text-(--muted-foreground)">
              {readTime} min read
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center text-xs text-(--muted-foreground)">
                <MessageSquare className="mr-1 h-3 w-3" />
                {commentCount}
              </div>
              <div className="flex items-center text-xs text-(--muted-foreground)">
                <Eye className="mr-1 h-3 w-3" />
                {viewCount}
              </div>
            </div>
          </CardFooter>

          {tags && tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-(--border) bg-(--card) text-xs text-(--muted-foreground) hover:bg-(--muted)"
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge
                  variant="outline"
                  className="border-(--border) bg-(--card) text-xs text-(--muted-foreground) hover:bg-(--muted)"
                >
                  +{tags.length - 3}
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
