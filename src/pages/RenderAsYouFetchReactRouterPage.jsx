import { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import { Loading, RenderAsYouFetchComments, RenderAsYouFetchPost } from '../components';

const RenderAsYouFetchReactRouterPage = () => {
  const { postId } = useLoaderData();

  return (
    <>
      <Suspense fallback={<Loading message={`Loading post ${postId}`} />}>
        <RenderAsYouFetchPost postId={postId} />
      </Suspense>
      <Suspense fallback={<Loading message={`Loading comments for post ${postId}`} />}>
        <RenderAsYouFetchComments postId={postId} />
      </Suspense>
    </>
  );
};

export default RenderAsYouFetchReactRouterPage;
