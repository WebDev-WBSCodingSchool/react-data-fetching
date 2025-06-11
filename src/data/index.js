import { getCommentsByPostIdQuery, getPostByIdQuery } from '../queries';

export const loadPostWithComments =
  queryClient =>
  async ({ params }) => {
    queryClient.prefetchQuery(getPostByIdQuery(params.id));
    queryClient.prefetchQuery(getCommentsByPostIdQuery(params.id));
    return { postId: params.id };
  };
