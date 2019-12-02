import PostLink from './postLink'
import Layout from '../comps/MyLayout'
import Link from 'next/link';


export default function Blog() {
    return (
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink title="Hello Next.js" />
          <PostLink title="Learn Next.js is awesome" />
          <PostLink title="Deploy apps with Zeit" />
        </ul>
      </Layout>
    );
  }