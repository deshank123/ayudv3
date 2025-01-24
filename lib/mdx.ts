import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const BLOG_PATH = path.join(process.cwd(), 'content/blog');

export async function getBlogPost(slug: string) {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(source);
    
    const { content: mdxContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: true }
    });

    return {
      source: mdxContent,
      frontMatter: data,
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export async function getAllBlogPosts() {
  try {
    const files = fs.readdirSync(BLOG_PATH);
    const posts = await Promise.all(
      files.map(async (filename) => {
        const filePath = path.join(BLOG_PATH, filename);
        const source = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(source);
        return {
          ...data,
          slug: filename.replace('.mdx', ''),
        };
      })
    );

    return posts.sort((a: any, b: any) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error getting all blog posts:', error);
    return [];
  }
} 