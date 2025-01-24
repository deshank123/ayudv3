import { getBlogPost, getAllBlogPosts } from '@/lib/mdx';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const { source, frontMatter } = post;

  return (
    <main className="bg-[#F5F0E6] min-h-screen">
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative h-[400px] mb-8">
            <Image
              src={frontMatter.image}
              alt={frontMatter.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#2F3B2F] mb-4">
            {frontMatter.title}
          </h1>
          <div className="flex items-center gap-4 text-[#E4B04A] mb-8">
            <span>{frontMatter.category}</span>
            <span>•</span>
            <span>{frontMatter.readTime}</span>
          </div>
          <div className="prose prose-lg max-w-none prose-headings:text-[#2F3B2F] prose-a:text-[#E4B04A]">
            {source}
          </div>
        </div>
      </article>
    </main>
  );
} 