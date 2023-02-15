import { useEffect, useState } from "react";
import Select from "../../Shared/Select/Select";
import Post from "./Post";
import PostDetails from "./PostDetails";
import TextSkeleton from "./../../Shared/TextSkeleton";
import Spinner from "../../Shared/Spinner/Spinner";
import Pagination from "../../Shared/Pagination/Pagination";
import useFetcher from "./../../hooks/useFetcher";

const Posts = () => {
  const [postId, setPostId] = useState(-1);
  const [limit, setLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [skipPosts, setSkipPosts] = useState(0);
  const TOTAL = 150;

  // offset(skip) = (currentPage - 1) * limit;

  // react query
  //!SECTION - posts
  const { data, isLoading, isFetching } = useFetcher(
    ["posts", limit, currentPage, skipPosts],
    `/posts?limit=${limit}&skip=${skipPosts}`
  );

  // ====== handelers =====
  const handelLimit = (e) => {
    setLimit(e.target.value);
  };

  const onClickNextHandler = () => {
    if (currentPage === Math.ceil(TOTAL / limit)) return;
    setCurrentPage((prev) => prev + 1);
  };
  const onClickPrevHandler = () => {
    if (currentPage <= 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    if (currentPage == 1) {
      setSkipPosts(0);
      return;
    }

    setSkipPosts((currentPage - 1) * limit);
  }, [currentPage, limit]);

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
            lastPage={Math.ceil(TOTAL / limit)}
            total={TOTAL}
            isNextBtnDisabled={currentPage == Math.ceil(TOTAL / limit)}
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
