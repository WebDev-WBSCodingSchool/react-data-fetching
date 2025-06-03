import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FetchOnRenderComments, Loading } from '../components';
import { getPostById } from '../utils';

const FetchOnRenderPost = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPostById(id, abortController.signal);
        setPost(fetchedPost);
        setLoading(false);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      }
    };
    fetchPost();

    return () => abortController.abort();
  }, [id]);

  if (loading) return <Loading message={`Loading post ${id}`} />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className='card bg-base-100 shadow-md p-4'>
        <h2 className='card-title'>{post.title}</h2>
        <p>{post.body}</p>
        <FetchOnRenderComments postId={post.id} />
      </div>
    </>
  );
};

export default FetchOnRenderPost;
