export const getPostById = async (id, abortSignal) => {
  try {
    const res = await fetch(`https://react-data-fetching-be.onrender.com/posts/${id}`, {
      signal: abortSignal
    });
    if (!res.ok) throw new Error(`Failed to fetch post with id ${id}`);
    const post = await res.json();
    return post;
  } catch (error) {
    if (error.name === 'AbortError') return;
    throw error;
  }
};

export const getCommentsByPostId = async (postId, abortSignal) => {
  try {
    const res = await fetch(
      `https://react-data-fetching-be.onrender.com/posts/${postId}/comments`,
      {
        signal: abortSignal
      }
    );
    if (!res.ok) throw new Error(`Failed to fetch comments for post with id ${postId}`);
    const comments = await res.json();
    return comments;
  } catch (error) {
    if (error.name === 'AbortError') return;
    throw error;
  }
};
