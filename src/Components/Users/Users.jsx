import { useEffect, useState } from "react";
import ImageSkeleton from "../../Shared/ImageSkeleton";
import Select from "../../Shared/Select/Select";
import User from "../User/User";
import { axiosInstance } from "./../../api/axios.config";
import UserDetails from "./../UserDetails/UserDetails";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(-1);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    axiosInstance
      .get(`/users?limit=${limit}`)
      .then(({ data }) => setUserList(data.users))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [limit]);

  const handelLimit = (e) => {
    setLimit(e.target.value);
    console.log(e.target.value);
  };

  if (isLoading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array(20)
          .fill(1)
          .map((_, idx) => (
            <ImageSkeleton key={idx} />
          ))}
      </div>
    );
  return (
    <>
      {userId > 0 ? (
        <UserDetails id={userId} setUserId={setUserId} />
      ) : (
        <>
          <Select
            optionList={[5, 10, 20, 30, 50, 100]}
            label="limit"
            id="limit"
            value={limit}
            onChange={handelLimit}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {userList.map((user) => (
              <User key={user.id} {...user} setUserId={setUserId} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Users;
