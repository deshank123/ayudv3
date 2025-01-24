import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';
import { ReactElement } from 'react';

const BLOG_PATH = path.join(process.cwd(), 'content/blog');

interface FrontMatter {
  title: string;
  date: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  image?: string;
  slug?: string;
  [key: string]: unknown;
}

interface MDXContent {
  source: ReactElement;
  frontMatter: FrontMatter;
}

interface BlogPost {
  title: string;
  date: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  image?: string;
  slug: string;
}

interface BlogPostWithSource extends BlogPost {
  source: ReactElement;
  frontMatter: FrontMatter;
}

type UnvalidatedFrontMatter = Record<string, unknown>;

function validateFrontMatter(data: UnvalidatedFrontMatter): FrontMatter {
  if (typeof data.title !== 'string') {
    throw new Error('Missing or invalid required field: title');
  }
  if (typeof data.date !== 'string') {
    throw new Error('Missing or invalid required field: date');
  }

  return {
    title: data.title,
    date: data.date,
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : undefined,
    category: typeof data.category === 'string' ? data.category : undefined,
    readTime: typeof data.readTime === 'string' ? data.readTime : undefined,
    image: typeof data.image === 'string' ? data.image : undefined,
    slug: typeof data.slug === 'string' ? data.slug : undefined,
  };
}

export async function getBlogPost(slug: string): Promise<BlogPostWithSource | null> {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
    const source = await fs.readFile(filePath, 'utf8');
    
    const { content, data } = matter(source);
    const { content: mdxContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: true }
    });

    const validatedFrontMatter = validateFrontMatter(data);

    return {
      source: mdxContent,
      frontMatter: validatedFrontMatter,
      slug: slug,
      title: validatedFrontMatter.title,
      date: validatedFrontMatter.date,
      excerpt: validatedFrontMatter.excerpt,
      category: validatedFrontMatter.category,
      readTime: validatedFrontMatter.readTime,
      image: validatedFrontMatter.image,
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const files = await fs.readdir(BLOG_PATH);
    const posts = await Promise.all(
      files.map(async (filename) => {
        const filePath = path.join(BLOG_PATH, filename);
        const source = await fs.readFile(filePath, 'utf8');
        const { data } = matter(source);
        const slug = filename.replace('.mdx', '');
        return {
          ...validateFrontMatter(data),
          slug,
        };
      })
    );

    return posts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error getting all blog posts:', error);
    return [];
  }
}

export async function getMDXContent(slug: string): Promise<MDXContent> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);
    const source = await fs.readFile(filePath, 'utf8');
    
    const { data, content } = matter(source);
    const { content: mdxContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: true }
    });

    // Ensure required fields exist
    if (!data.title || !data.date) {
      throw new Error(`Missing required frontmatter fields in ${slug}.mdx`);
    }

    return {
      source: mdxContent,
      frontMatter: validateFrontMatter(data),
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    throw error;
  }
} 