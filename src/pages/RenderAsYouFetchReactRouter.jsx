import { Link } from 'react-router';
import { Instructions } from '../components';

const RenderAsYouFetchReactRouter = () => {
  return (
    <>
      <Instructions path='/render-as-you-fetch-react-router.md' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Array.from({ length: 9 }, (_, i) => (
          <Link
            key={i}
            to={`/render-as-you-fetch-react-router/${i + 1}`}
            className='card bg-base-100 shadow-md hover:bg-base-200 transition-colors duration-300'
          >
            <div className='card-body'>
              <h2 className='card-title'>Post {i + 1}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RenderAsYouFetchReactRouter;
