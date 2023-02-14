import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Select from "../../Shared/Select/Select";
import { axiosInstance } from "./../../api/axios.config";
import Post from "./Post";
import PostDetails from "./PostDetails";
import TextSkeleton from "./../../Shared/TextSkeleton";
import Spinner from "../../Shared/Spinner/Spinner";
import Pagination from "../../Shared/Pagination/Pagination";

const Posts = () => {
  const [postId, setPostId] = useState(-1);
  const [limit, setLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [skipPosts, setSkipPosts] = useState(0);

  // offset(skip) = (currentPage - 1) * limit;

  // react query
  //!SECTION - posts
  const getUserList = async () => {
    const { data } = await axiosInstance.get(
      `/posts?limit=${limit}&skip=${skipPosts}`
    );
    return data;
  };
  const { data, isLoading, isFetching } = useQuery(
    ["posts", limit, currentPage],
    () => getUserList()
  );

  // ====== handelers =====
  const handelLimit = (e) => {
    setLimit(e.target.value);
  };

  const onClickNextHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const onClickPrevHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };

  // *FIXME - fix pagination problem in posts
  useEffect(() => {
    if(currentPage == 1){
      setSkipPosts(0)
      // console.log(skipPosts , 'posts skipped')
      return;
    }

    setSkipPosts((currentPage - 1) * limit);
    // console.log('current page :' ,currentPage , '   from effect')
  }, [currentPage , limit]);

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
      {postId > 0 ? (
        <PostDetails id={postId} setPostId={setPostId} />
      ) : (
        <>
          {isFetching ? <Spinner /> : null}

          <Select
            optionList={[5, 10, 20, 30, 50, 100]}
            label="limit"
            id="limit"
            value={limit}
            onChange={handelLimit}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {data.posts.map((post) => (
              <Post key={post.id} {...post} setPostId={setPostId} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            lastPage={Math.ceil(150 / limit)}
            total={150}
            isNextBtnDisabled={currentPage == Math.ceil(150 / limit)}
            isPrevBtnDisabled={currentPage == 1}
            onClickNext={onClickNextHandler}
            onClickPrev={onClickPrevHandler}
          />
        </>
      )}
    </>
  );
};

export default Posts;
