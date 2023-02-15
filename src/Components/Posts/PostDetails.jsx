import { useQueryClient } from "react-query";
import TextSkeleton from "./../../Shared/TextSkeleton";
import CachedEmoji from "./../CachedEmoji";
import useFetcher from "../../hooks/useFetcher";
import Spinner from "./../../Shared/Spinner/Spinner";

const PostDetails = ({ id, setPostId }) => {
  const queryClient = useQueryClient();
  const isCached = queryClient.getQueryData(["post", id]);
  // react query
  //!SECTION - users
  const { data, isLoading } = useFetcher(["post", id], `/posts/${id}`);

  if (isLoading) return <TextSkeleton isCentered />;
  return (
    <>
      <div className="flex flex-col my-5 p-3 max-w-sm mx-auto items-center border border-indigo-600 text-center rounded-md dark:hover:bg-indigo-600 hover:bg-indigo-400 duration-300 group">
        <div
          onClick={() => setPostId(-1)}
          className="text-2xl hover:cursor-pointer shadow-sm bg-slate-100 rounded-md"
        >
          ⬅️
        </div>
        <div className="text-center py-3">
          <h4 className="dark:text-slate-200 w-24 my-3 font-semibold m-auto border-slate-500 border-2  p-1 rounded-md">
            ID : {id}
          </h4>
          <h3 className="dark:text-slate-200 font-bold text-lg p-1 my-3 group-hover:bg-slate-200 group-hover:text-black transition-colors duration-300 rounded-lg">
            {data.title}
          </h3>
          <p className="dark:text-slate-200 ">{data.body}</p>
        </div>
        <CachedEmoji isCached={isCached} />
      </div>
    </>
  );
};

export default PostDetails;
