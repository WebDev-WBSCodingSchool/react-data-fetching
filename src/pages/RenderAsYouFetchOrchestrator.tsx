import { Suspense, useRef } from 'react';
import { useParams } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import {
	Loading,
	RenderAsYouFetchComments,
	RenderAsYouFetchPost
} from '../components';
import { getPostById, getCommentsByPostId } from '../api';
import type { Post, Comment } from '../types';

const fallbackRender = ({ error }: { error: Error | any }) => (
	<div className='my-5 alert alert-error shadow-lg'>
		<span>{error?.message ?? String(error)}</span>
	</div>
);

const RenderAsYouFetchOrchestrator = () => {
	const { id } = useParams();
	const key = String(id);
	const cache = useRef<
		Map<string, { post: Promise<Post>; comments: Promise<Comment[]> }>
	>(new Map());

	if (!cache.current.get(key)) {
		const post = getPostById(key);
		const comments = getCommentsByPostId(key);
		cache.current.set(key, { post, comments });
	}

	return (
		<>
			<ErrorBoundary fallbackRender={fallbackRender}>
				<Suspense fallback={<Loading message={`Loading post ${key}`} />}>
					<RenderAsYouFetchPost promise={cache.current.get(key)!.post} />
				</Suspense>
			</ErrorBoundary>
			<ErrorBoundary fallbackRender={fallbackRender}>
				<Suspense
					fallback={<Loading message={`Loading comments for post ${key}`} />}
				>
					<RenderAsYouFetchComments
						promise={cache.current.get(key)!.comments}
					/>
				</Suspense>
			</ErrorBoundary>
		</>
	);
};

export default RenderAsYouFetchOrchestrator;
