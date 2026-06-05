import { use } from 'react';
import type { Post } from '../types';

const RenderAsYouFetchPost = ({ promise }: { promise: Promise<Post> }) => {
	const post = use(promise) as Post;
	return (
		<div className='card bg-base-100 shadow-md p-4'>
			<h2 className='card-title'>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	);
};

export default RenderAsYouFetchPost;
