import { useQueryClient } from 'react-query';
import CachedEmoji from '../CachedEmoji';
import { setSlicer } from './../../utils/func';
const Post = ({ id, title, body, setPostId }) => {
  const queryClient = useQueryClient();
  const isCached = queryClient.getQueryData(["post" , id]);
  return (
    <div
      className="border border-indigo-600 p-3 text-center rounded-md hover:bg-indigo-600 hover:-translate-y-2 duration-300 hover:cursor-pointer group"
      onClick={() => setPostId(id)}
    >
      <h4 className="w-24 font-semibold m-auto border border-y-blue-600-500 p-1 rounded-md ">
        ID : {id}
      </h4>
      <h3 className="font-semibold text-lg my-3 p-1 rounded-lg group-hover:bg-slate-200 group-hover:text-black transition-colors duration-300">{title}</h3>
      <p>{setSlicer(body , 120)}</p>

      <CachedEmoji isCached={isCached}/>
    </div>
  );
};

export default Post;
