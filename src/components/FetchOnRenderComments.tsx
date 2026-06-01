import { useEffect, useState } from 'react';
import { Loading } from '../components';
import { getCommentsByPostId } from '../api';
import type { Comment } from '../types';

const FetchOnRenderComments = ({ postId }: { postId: string | number }) => {
	const [comments, setComments] = useState<Comment[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const abortController = new AbortController();
		const fetchPost = async () => {
			try {
				const fetchedComments = await getCommentsByPostId(
					+postId,
					abortController.signal
				);
				setComments(fetchedComments);
				setLoading(false);
			} catch (err) {
				if (err instanceof Error) {
					if (err.name === 'AbortError') return;
					setError(err.message);
					setLoading(false);
				}
			}
		};
		fetchPost();
		return () => abortController.abort();
	}, [postId]);

	if (loading)
		return <Loading message={`Loading comments for post ${postId}`} />;
	if (error)
		return (
			<div className='alert alert-error shadow-lg'>
				<span>{error}</span>
			</div>
		);

	return (
		<>
			{comments?.map((comment) => (
				<div key={comment.id} className='card bg-base-100 shadow-md p-4 mb-4'>
					<h3 className='card-title'>{comment.name}</h3>
					<p>{comment.body}</p>
					<p className='text-sm text-gray-500'>By: {comment.email}</p>
				</div>
			))}
		</>
	);
};

export default FetchOnRenderComments;
