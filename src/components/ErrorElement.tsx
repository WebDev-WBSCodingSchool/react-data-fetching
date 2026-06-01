import { useRouteError } from 'react-router';

const ErrorElement = () => {
	const error = useRouteError() as Error | null;

	return (
		<div className='alert alert-error shadow-lg'>
			<span>{error?.message ?? 'Unknown error'}</span>
		</div>
	);
};

export default ErrorElement;
