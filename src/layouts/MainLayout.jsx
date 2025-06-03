import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  const [prefersDark, setPrefersDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = evt => setPrefersDark(evt.matches);
    mq.addEventListener('change', handleChange);

    return () => mq.removeEventListener('change', handleChange);
  }, []);

  return (
    <>
      <nav className='navbar bg-base-100 shadow-sm'>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            Data Fetching
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <Link to='/fetch-on-render' className='btn btn-ghost'>
              Fetch-on-Render
            </Link>
            <Link to='/render-as-you-fetch' className='btn btn-ghost'>
              Render-as-you-Fetch
            </Link>
            <Link to='/render-as-you-fetch-react-router' className='btn btn-ghost'>
              Render-as-you-Fetch (React Router integration)
            </Link>
          </ul>
        </div>
      </nav>
      <ToastContainer theme={prefersDark ? 'dark' : 'light'} />
      <main>
        <div className='container mx-auto p-4'>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
