import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getPost, getAllPublishedPosts } from 'lib/mdx';

const BlogPost = ({ code, frontMatter }) => {
  // render post component
  const PostBody = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <h1>{frontMatter.title}</h1>
      <PostBody />
    </>
  );
};

// get current post
export const getStaticProps = async ({ params }) => {
  // get the post based on current slug
  const post = await getPost(params.slug, 'blog');

  // return the post props (code, frontMatter)
  return {
    props: { ...post },
  };
};

// statically build all published posts using this template
export const getStaticPaths = async () => {
  // build paths array by extracting the slug from all published posts
  const paths = getAllPublishedPosts('blog').map(({ slug }) => ({
    params: { slug },
  }));

  // return the paths, and set fallback to false, to only pre-render fetched posts
  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
