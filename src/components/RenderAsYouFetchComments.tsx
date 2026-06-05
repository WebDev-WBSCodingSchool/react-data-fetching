import { use } from 'react';
import type { Comment } from '../types';

const RenderAsYouFetchComments = ({
	promise
}: {
	promise: Promise<Comment[]>;
}) => {
	const comments = use(promise) as Comment[];

	return comments.map((comment) => (
		<div key={comment.id} className='card bg-base-100 shadow-md p-4 mb-4'>
			<h3 className='card-title'>{comment.name}</h3>
			<p>{comment.body}</p>
			<p className='text-sm text-gray-500'>By: {comment.email}</p>
		</div>
	));
};

export default RenderAsYouFetchComments;
