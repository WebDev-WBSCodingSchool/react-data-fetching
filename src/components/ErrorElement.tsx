import { useRouteError } from 'react-router';

const ErrorElement = () => {
	const error = useRouteError();

	return (
		<div className='alert alert-error shadow-lg'>
			<span>
				{error instanceof Object && 'message' in error
					? (error.message as string)
					: 'Unknown error'}
			</span>
		</div>
	);
};

export default ErrorElement;
