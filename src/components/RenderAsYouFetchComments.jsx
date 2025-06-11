import { useSuspenseQuery } from '@tanstack/react-query';
import { getCommentsByPostIdQuery } from '../queries';

const RenderAsYouFetchComments = ({ postId }) => {
  const { data: comments } = useSuspenseQuery(getCommentsByPostIdQuery(postId));

  return comments.map(comment => (
    <div key={comment.id} className='card bg-base-100 shadow-md p-4 mb-4'>
      <h3 className='card-title'>{comment.name}</h3>
      <p>{comment.body}</p>
      <p className='text-sm text-gray-500'>By: {comment.email}</p>
    </div>
  ));
};

export default RenderAsYouFetchComments;
