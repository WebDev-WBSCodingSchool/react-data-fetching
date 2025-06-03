import { use } from 'react';

const RenderAsYouFetchPost = ({ promise }) => {
  const post = use(promise);
  return (
    <div className='card bg-base-100 shadow-md p-4'>
      <h2 className='card-title'>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default RenderAsYouFetchPost;
