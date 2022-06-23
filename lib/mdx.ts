import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import { PublishedPost, SinglePost } from 'ts/mdx';

// posts directory path
export const POSTS_PATH: string = path.join(process.cwd(), 'posts');

// configure esbuild to function properly
if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'esbuild.exe',
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'bin',
    'esbuild',
  );
}

// getFileSource
export const getFileSource = (file: string, type: string): Buffer => {
  return fs.readFileSync(path.join(POSTS_PATH, type, file));
};

// getAllPublishedPosts
export const getAllPublishedPosts = (type: string): PublishedPost[] => {
  // read posts path dir and filter out all mdx files
  const allPosts: string[] = fs.readdirSync(path.join(POSTS_PATH, type)).filter(path => /\.mdx?$/.test(path));

  // generate published posts array
  const publishedPosts: PublishedPost[] = allPosts.map(post => {
    // get file source
    const fileSource: Buffer = getFileSource(post, type);
    // generate slug
    const slug: string = post.replace(/\.mdx?$/, '');
    // extract front matter
    const { data } = matter(fileSource);
    // return front matter and slug
    return {
      frontMatter: data,
      slug,
    };
  }).filter(post => {
    // filter out unpublished posts
    return post.frontMatter.isPublished;
  });

  // return published posts
  return publishedPosts;
};

// getPost
export const getPost = async (slug: string, type: string): Promise<SinglePost> => {
  // bundle the mdx file
  const { code, frontmatter } = await bundleMDX({
    file: `${POSTS_PATH}/${type}/${slug}.mdx`,
    cwd: `${POSTS_PATH}/${type}`,
  });

  // return code & frontmatter
  return {
    code,
    frontMatter: frontmatter,
  };
};