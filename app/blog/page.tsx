import { getAllBlogPosts } from '@/lib/mdx';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  image?: string;
  slug: string;
}

export const metadata = {
  title: "Blog | Holistic Healing Center",
  description: "Explore Ayurvedic wisdom, self-care tips, and healing practices",
}

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts() as BlogPost[];
  const defaultImage = "/placeholder.jpg";

  return (
    <main className="min-h-screen bg-[#F5F0E6]">
      {/* Hero Section */}
      <div className="relative bg-[#2F3B2F] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ayurvedic Wisdom</h1>
          <p className="text-lg text-[#E4B04A]">Insights for holistic well-being</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[#F5F0E6] clip-path-slant" />
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image || defaultImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#E4B04A]">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-[#2F3B2F] hover:text-[#E4B04A] transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#2F3B2F] font-semibold hover:text-[#E4B04A] transition-colors inline-flex items-center"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
} 