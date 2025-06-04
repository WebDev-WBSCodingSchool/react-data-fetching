import { useRouteError } from 'react-router';

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <div className='alert alert-error shadow-lg'>
      <span>{error.message}</span>
    </div>
  );
};

export default ErrorElement;
