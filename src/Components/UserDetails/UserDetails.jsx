import { useEffect, useState } from "react";
import { axiosInstance } from './../../api/axios.config';
import ImageSkeleton from './../../Shared/ImageSkeleton';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const UserDetails = ({ id, setUserId }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/users/${id}`)
      .then(({ data }) => setUser(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if(isLoading) return <ImageSkeleton isCentered/>
  return (
    <div className="flex flex-col my-5 max-w-xs mx-auto items-center border border-indigo-600 text-center rounded-md hover:bg-indigo-600 duration-300">
      <div
        onClick={() => setUserId(-1)}
        className="text-3xl hover:cursor-pointer"
      >
        ⬅️
      </div>
      <LazyLoadImage
        src={user.image}
        alt={user.firstName + " " + user.lastName}
        className="mx-auto"
        effect="blur"
      />
    </div>
  );
};

export default UserDetails;
