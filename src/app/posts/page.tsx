'use client';

import PostCard from '@/components/PostCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Post, usePosts } from '@/hooks/usePosts';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

const categories = [
  'All',
  'Technology',
  'Design',
  'Business',
  'Lifestyle',
  'Health',
];

export default function PostsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  const {
    data: posts,
    isLoading,
    error,
  } = usePosts(
    debouncedQuery,
    selectedCategory !== 'All' ? selectedCategory : undefined,
    sortBy
  );

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sortOptions = [
    { value: 'newest', label: 'Newest first' },
    { value: 'oldest', label: 'Oldest first' },
    { value: 'popular', label: 'Most popular' },
  ];

  return (
    <div className="bg-(--background) min-h-screen">
      {/* Hero section */}
      <div className="relative bg-linear-to-r from-(--primary)/1 to-(--accent)/1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-(--foreground) mb-4">
              Explore Our <span className="text-(--primary)">Blog</span>
            </h1>
            <p className="text-lg text-(--muted-foreground) max-w-2xl mx-auto mb-8">
              Discover insightful articles, tutorials, and stories from our
              community of writers and experts.
            </p>

            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-(--muted-foreground)" />
              <Input
                type="text"
                placeholder="Search posts by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 bg-(--card) border-(--border) text-(--foreground) focus-visible:ring-[var(--primary)] placeholder:text-(--muted-foreground)"
              />
            </div>
          </motion.div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            className="absolute bottom-0 w-full h-full"
          >
            <path
              fill="var(--background)"
              d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-(--muted-foreground)">
              Categories:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    selectedCategory === category ? 'default' : 'outline'
                  }
                  className={`cursor-pointer transition-colors ${
                    selectedCategory === category
                      ? 'bg-(--primary) text-(--primary-foreground) hover:bg-(--primary)/9'
                      : 'bg-(--card) text-(--foreground) border-(--border) hover:bg-(--muted)'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-(--muted-foreground)">
              Sort by:
            </span>
            <div className="relative">
              <button
                onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
                className="flex items-center gap-1 px-3 py-1.5 border border-(--border) rounded-md bg-(--card) text-sm text-(--foreground) hover:bg-(--muted) transition-colors"
              >
                {sortBy === 'newest'
                  ? 'Newest'
                  : sortBy === 'oldest'
                    ? 'Oldest'
                    : 'Popular'}
                <ChevronDown className="h-4 w-4" />
              </button>
              {isSortMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-(--card) border border-(--border) rounded-md shadow-lg z-10">
                  {sortOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center px-4 py-2 text-sm text-(--foreground) hover:bg-(--muted) cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="sortBy"
                        value={option.value}
                        checked={sortBy === option.value}
                        onChange={() => {
                          setSortBy(option.value);
                          setIsSortMenuOpen(false);
                        }}
                        className="mr-2 h-4 w-4 text-(--primary) focus:ring-[var(--primary)]"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Posts grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-(--border) bg-(--card)"
              >
                <Skeleton className="h-48 w-full" />
                <div className="p-5">
                  <Skeleton className="h-4 w-1/3 mb-3" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-(--destructive) text-lg mb-4">
              Error loading posts: {error.message}
            </div>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Try again
            </Button>
          </div>
        ) : posts?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-(--foreground) mb-2">
              No posts found
            </h2>
            <p className="text-(--muted-foreground) mb-6">
              {searchQuery
                ? `No results for "${searchQuery}"`
                : selectedCategory !== 'All'
                  ? `No posts in the "${selectedCategory}" category`
                  : 'No posts available at the moment'}
            </p>
            {(searchQuery || selectedCategory !== 'All') && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setDebouncedQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear filters
              </Button>
            )}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {posts.map(
                (
                  post: Post & {
                    category?: string;
                    tags?: string[];
                    excerpt?: string;
                    coverImage?: string;
                    authorName?: string;
                    authorImage?: string;
                    readTime?: number;
                    commentCount?: number;
                    viewCount?: number;
                  }
                ) => (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    excerpt={
                      post.excerpt || post.content.substring(0, 120) + '...'
                    }
                    authorId={post.authorId}
                    authorName={post.authorName}
                    authorImage={post.authorImage}
                    createdAt={post.createdAt}
                    coverImage={post.coverImage}
                    category={post.category}
                    tags={post.tags}
                    readTime={post.readTime || 3}
                    commentCount={post.commentCount || 0}
                    viewCount={post.viewCount || 0}
                  />
                )
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Pagination */}
        {posts && posts.length > 0 && (
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="mr-2">
              Previous
            </Button>
            <Button variant="outline">Next</Button>
          </div>
        )}
      </div>
    </div>
  );
}
