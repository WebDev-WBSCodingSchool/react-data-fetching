import { Suspense, useRef } from 'react';
import { useParams } from 'react-router';
import { Loading, RenderAsYouFetchComments, RenderAsYouFetchPost } from '../components';
import { getPostById, getCommentsByPostId } from '../utils';

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
      <Suspense fallback={<Loading message={`Loading post ${id}`} />}>
        <RenderAsYouFetchPost promise={cache.current.get(id).post} />
      </Suspense>
      <Suspense fallback={<Loading message={`Loading comments for post ${id}`} />}>
        <RenderAsYouFetchComments promise={cache.current.get(id).comments} />
      </Suspense>
    </>
  );
};

export default RenderAsYouFetchOrchestrator;
