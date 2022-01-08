import { getAllPublishedPosts } from '../services/mdx';
import Link from 'next/link';

const HomePage = ({ posts }) => {
  return (
    <>
      <h1>Home Page.</h1>
      <h2>Posts</h2>
      {posts.map(post => {
        return <Link key={post.slug} href={`/blog/${post.slug}`}>{post.frontMatter?.title}</Link>;
      })}
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPublishedPosts();
  return {
    props: { posts }
  };
};

export default HomePage;
