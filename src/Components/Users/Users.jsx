import { useEffect, useState } from "react";
import ImageSkeleton from "../../Shared/ImageSkeleton";
import User from "../User/User";
import { axiosInstance } from "./../../api/axios.config";
import UserDetails from "./../UserDetails/UserDetails";

const Users = () => {
  // make state for users list
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(-1);
  console.log(userId);
  useEffect(() => {
    axiosInstance
      .get("/users?limit=400")
      .then(({ data }) => setUserList(data.users))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {userList.map((user) => (
            <User key={user.id} {...user} setUserId={setUserId} />
          ))}
        </div>
      )}
    </>
  );
};

export default Users;
