import { getCommentsByPostId, getPostById } from '../api';
import type { PostLoaderData } from '../types';
import type { LoaderFunctionArgs } from 'react-router';

export const loadPostWithComments = async ({
	params
}: LoaderFunctionArgs): Promise<PostLoaderData> => {
	const id = +params.id!;
	const post = getPostById(id);
	const comments = getCommentsByPostId(id);
	return { post, comments };
};
