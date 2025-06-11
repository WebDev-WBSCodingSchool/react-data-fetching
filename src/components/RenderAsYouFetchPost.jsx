import { useSuspenseQuery } from '@tanstack/react-query';
import { getPostByIdQuery } from '../queries';

const RenderAsYouFetchPost = ({ postId }) => {
  const { data: post } = useSuspenseQuery(getPostByIdQuery(postId));

  return (
    <div className='card bg-base-100 shadow-md p-4'>
      <h2 className='card-title'>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default RenderAsYouFetchPost;
