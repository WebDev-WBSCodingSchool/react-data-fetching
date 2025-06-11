import { getCommentsByPostId, getPostById } from '../api';

export const getPostByIdQuery = postId => ({
  queryKey: ['post', postId],
  queryFn: () => getPostById(postId)
});

export const getCommentsByPostIdQuery = postId => ({
  queryKey: ['comments', postId],
  queryFn: () => getCommentsByPostId(postId)
});
