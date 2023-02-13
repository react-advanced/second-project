import { useState } from "react";
import { useQuery } from "react-query";
import Select from "../../Shared/Select/Select";
import { axiosInstance } from "./../../api/axios.config";
import Post from "./Post";
import PostDetails from "./PostDetails";
import TextSkeleton from "./../../Shared/TextSkeleton";
import Spinner from "../../Shared/Spinner/Spinner";

const Posts = () => {
  const [userId, setPostId] = useState(-1);
  const [limit, setLimit] = useState(20);

  // react query
  //!SECTION - posts
  const getUserList = async () => {
    const { data } = await axiosInstance.get(`/posts?limit=${limit}`);
    return data;
  };
  const { data, isLoading ,isFetching } = useQuery(["posts", limit], () => getUserList());

  // ====== handelers =====
  const handelLimit = (e) => {
    setLimit(e.target.value);
  };

  if (isLoading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(20)
          .fill(1)
          .map((_, idx) => (
            <TextSkeleton key={idx} />
          ))}
      </div>
    );
  return (
    <>
      {userId > 0 ? (
        <PostDetails id={userId} setPostId={setPostId} />
      ) : (
        <>
        {isFetching ? <Spinner/> : null }
        
          <Select
            optionList={[5, 10, 20, 30, 50, 100]}
            label="limit"
            id="limit"
            value={limit}
            onChange={handelLimit}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.posts.map((post) => (
              <Post key={post.id} {...post} setPostId={setPostId} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Posts;
