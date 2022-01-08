import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

// posts path
export const POSTS_PATH: string = path.join(process.cwd(), 'data/posts/');

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
export const getFileSource = (file): Buffer => {
  return fs.readFileSync(path.join(POSTS_PATH, file));
};

// getAllPublishedPosts
export const getAllPublishedPosts = () => {
  // read posts path dir and filter out all mdx files
  const allPosts = fs.readdirSync(POSTS_PATH).filter(path => /\.mdx?$/.test(path));

  // generate published posts array
  const publishedPosts = allPosts.map(post => {
    // get file source
    const fileSource = getFileSource(post);
    // generate slug
    const slug = post.replace(/\.mdx?$/, '');
    // extract front matter
    const { data } = matter(fileSource);
    // return front matter and slug
    return {
      frontMatter: data,
      slug,
    };
  }).filter(post => {
    return post.frontMatter.isPublished;
  });

  // return published posts
  return publishedPosts;
};

// getPost
export const getPost = async (slug) => {
  // bundle the mdx file
  const { code, frontmatter } = await bundleMDX({
    file: POSTS_PATH + slug + '.mdx',
    cwd: POSTS_PATH,
  });

  // return code & frontmatter
  return {
    code,
    frontMatter: frontmatter,
  };
};