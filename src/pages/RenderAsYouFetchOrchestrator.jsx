import { Suspense, useRef } from 'react';
import { useParams } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { Loading, RenderAsYouFetchComments, RenderAsYouFetchPost } from '../components';
import { getPostById, getCommentsByPostId } from '../api';

const fallbackRender = ({ error }) => (
  <div className='my-5 alert alert-error shadow-lg'>
    <span>{error.message}</span>
  </div>
);

const RenderAsYouFetchOrchestrator = () => {
  const { id } = useParams();
  const cache = useRef(new Map());

  if (!cache.current.get(id)) {
    const post = getPostById(id);
    const comments = getCommentsByPostId(id);
    cache.current.set(id, { post, comments });
  }

  return (
    <>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <Suspense fallback={<Loading message={`Loading post ${id}`} />}>
          <RenderAsYouFetchPost promise={cache.current.get(id).post} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <Suspense fallback={<Loading message={`Loading comments for post ${id}`} />}>
          <RenderAsYouFetchComments promise={cache.current.get(id).comments} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default RenderAsYouFetchOrchestrator;
