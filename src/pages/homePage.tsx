import * as React from 'react';
import { PostModelType } from '../stores/posts.store';
import About from '../shared/about';
import { useRootData } from '../tools/hook';

export const HomePageView: React.FC<{ load: any, posts: Array<PostModelType> }> = ({ posts, load }) =>
  <div>
    <About />
    {posts.length === 0 && <button onClick={() => load()}>Load posts</button>}
    {!!posts.length && <h1>List of posts</h1> }
    <ul>
      {posts.map((post: any) => <li key={post.title}>Title: {post.title} <p>Date: {post.date}</p></li>)}
    </ul>
  </div>

export const HomePage = () => {
  const { posts, load } = useRootData(store => ({
    posts: store.posts.data.toJS(),
    load: store.posts.load
  }));
  return <HomePageView posts={posts} load={load} />
}

export default HomePage;
