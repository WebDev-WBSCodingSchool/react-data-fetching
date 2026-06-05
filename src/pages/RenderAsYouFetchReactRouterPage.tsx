import { Suspense } from 'react';
import { useLoaderData, useParams } from 'react-router';
import {
	Loading,
	RenderAsYouFetchComments,
	RenderAsYouFetchPost
} from '../components';
import type { PostLoaderData } from '../types';

const RenderAsYouFetchReactRouterPage = () => {
	const { id } = useParams();
	const { post, comments } = useLoaderData<PostLoaderData>();

	return (
		<>
			<Suspense fallback={<Loading message={`Loading post ${id}`} />}>
				<RenderAsYouFetchPost promise={post} />
			</Suspense>
			<Suspense
				fallback={<Loading message={`Loading comments for post ${id}`} />}
			>
				<RenderAsYouFetchComments promise={comments} />
			</Suspense>
		</>
	);
};

export default RenderAsYouFetchReactRouterPage;
