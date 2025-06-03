const Loading = ({ message = 'Loading...' }) => {
  return (
    <div className='flex my-5 gap-3 items-center justify-center inset-0'>
      <span className='loading loading-spinner loading-xl'></span>
      <p className='text-lg font-semibold'>{message}</p>
    </div>
  );
};

export default Loading;
