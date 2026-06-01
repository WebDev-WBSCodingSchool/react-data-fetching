import { Suspense } from 'react';
import { useParams } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import {
	Loading,
	RenderAsYouFetchComments,
	RenderAsYouFetchPost
} from '../components';
import { getPostById, getCommentsByPostId } from '../api';
import type { Post, Comment } from '../types';

// Module-level cache
const orchestratorCache = new Map<
	string,
	{ post: Promise<Post>; comments: Promise<Comment[]> }
>();

const fallbackRender = ({ error }: { error: unknown }) => (
	<div className='my-5 alert alert-error shadow-lg'>
		<span>
			{error instanceof Object && 'message' in error
				? (error.message as string)
				: String(error)}
		</span>
	</div>
);

const RenderAsYouFetchOrchestrator = () => {
	const { id } = useParams();
	const key = String(id);

	if (!orchestratorCache.has(key)) {
		const post = getPostById(+key);
		const comments = getCommentsByPostId(+key);
		orchestratorCache.set(key, { post, comments });
	}

	return (
		<>
			<ErrorBoundary fallbackRender={fallbackRender}>
				<Suspense fallback={<Loading message={`Loading post ${key}`} />}>
					<RenderAsYouFetchPost promise={orchestratorCache.get(key)!.post} />
				</Suspense>
			</ErrorBoundary>
			<ErrorBoundary fallbackRender={fallbackRender}>
				<Suspense
					fallback={<Loading message={`Loading comments for post ${key}`} />}
				>
					<RenderAsYouFetchComments
						promise={orchestratorCache.get(key)!.comments}
					/>
				</Suspense>
			</ErrorBoundary>
		</>
	);
};

export default RenderAsYouFetchOrchestrator;
