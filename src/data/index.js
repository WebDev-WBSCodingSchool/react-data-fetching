import { getCommentsByPostId, getPostById } from '../api';

export const loadPostWithComments = async ({ params }) => {
  const post = getPostById(params.id);
  const comments = getCommentsByPostId(params.id);
  return { post, comments };
};
