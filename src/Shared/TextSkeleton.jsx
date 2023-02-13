const TextSkeleton = ({isCentered = false}) => {
  return (
    <div role="status" className={`${isCentered ? 'max-w-xs mx-auto' : ''} animate-pulse border border-indigo-300 gap-3 mb-3 p-7 rounded-md`}>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default TextSkeleton;
