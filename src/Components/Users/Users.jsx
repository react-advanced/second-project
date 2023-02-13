import { useState } from "react";
import { useQuery } from "react-query";
import Checkbox from "../../Shared/Checkbox/Checkbox";
import ImageSkeleton from "../../Shared/ImageSkeleton";
import Select from "../../Shared/Select/Select";
import User from "../User/User";
import { axiosInstance } from "./../../api/axios.config";
import UserDetails from "./../UserDetails/UserDetails";
import Spinner from './../../Shared/Spinner/Spinner';

const Users = () => {
  const [userId, setUserId] = useState(-1);
  const [limit, setLimit] = useState(20);
  const [queryParams, setQueryParams] = useState({
    ip: "",
    password: "",
    domain: "",
  });

  // react query
  //!SECTION - users
  const getUserList = async () => {
    const { ip, password, domain } = queryParams;
    const { data } = await axiosInstance.get(
      `/users?limit=${limit}&select=image${ip}${password}${domain}`
    );
    return data;
  };
  const { data, isLoading , isFetching } = useQuery(["users", limit, queryParams], () =>
    getUserList()
  );

  // ====== handelers =====
  const handelLimit = (e) => {
    setLimit(e.target.value);
  };
  const handelQueryParams = (e) => {
    const { name, checked } = e.target;
    setQueryParams({ ...queryParams, [name]: checked ? `,${name}` : "" });
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
          {isFetching ? <Spinner /> : null}

          <Select
            optionList={[5, 10, 20, 30, 50, 100]}
            label="limit"
            id="limit"
            value={limit}
            onChange={handelLimit}
          />
          <div className="flex items-center justify-center">
            <Checkbox
              label="ip"
              name="ip"
              onChange={handelQueryParams}
              isChecked={queryParams.ip}
            />
            <Checkbox
              label="domain"
              name="domain"
              onChange={handelQueryParams}
              isChecked={queryParams.domain}
            />
            <Checkbox
              label="password"
              name="password"
              onChange={handelQueryParams}
              isChecked={queryParams.password}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.users.map((user) => (
              <User key={user.id} {...user} setUserId={setUserId} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Users;
