import { useQueryClient } from 'react-query';
import CachedEmoji from '../CachedEmoji';
import { setSlicer } from './../../utils/func';
const Post = ({ id, title, body, setPostId }) => {
  const queryClient = useQueryClient();
  const isCached = queryClient.getQueryData(["post" , id]);
  return (
    <div
      className="border border-indigo-600 p-3 text-center rounded-md dark:hover:bg-indigo-600 hover:bg-indigo-400 hover:-translate-y-2 duration-300 hover:cursor-pointer group"
      onClick={() => setPostId(id)}
    >
      <h4 className="dark:text-slate-200 w-24 font-semibold m-auto border-slate-500 border-2 p-1 rounded-md ">
        ID : {id}
      </h4>
      <h3 className="dark:text-slate-200 font-semibold text-lg my-3 p-1 rounded-lg group-hover:bg-slate-200 group-hover:text-black duration-300">{title}</h3>
      <p className='dark:text-slate-200 '>{setSlicer(body , 120)}</p>

      <CachedEmoji isCached={isCached}/>
    </div>
  );
};

export default Post;
