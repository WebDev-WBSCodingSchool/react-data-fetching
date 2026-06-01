import type { Post, Comment } from '../types';

export const getPostById = async (
	id: number,
	abortSignal?: AbortSignal
): Promise<Post> => {
	const res = await fetch(
		`https://react-data-fetching-be.onrender.com/posts/${id}`,
		{
			signal: abortSignal
		}
	);
	if (!res.ok) throw new Error(`Failed to fetch post with id ${id}`);
	const post = await res.json();
	return post as Post;
};

export const getCommentsByPostId = async (
	postId: number,
	abortSignal?: AbortSignal
): Promise<Comment[]> => {
	const res = await fetch(
		`https://react-data-fetching-be.onrender.com/posts/${postId}/comments`,
		{
			signal: abortSignal
		}
	);
	if (!res.ok)
		throw new Error(`Failed to fetch comments for post with id ${postId}`);
	const comments = await res.json();
	return comments as Comment[];
};
