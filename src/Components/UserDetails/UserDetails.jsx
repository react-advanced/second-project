import { axiosInstance } from "./../../api/axios.config";
import ImageSkeleton from "./../../Shared/ImageSkeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useQuery, useQueryClient } from "react-query";
import CachedEmoji from "../CachedEmoji";

const UserDetails = ({ id, setUserId }) => {
  const queryClient = useQueryClient();
  const isCached = queryClient.getQueryData(["user" , id]);
  // const [user, setUser] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   axiosInstance
  //     .get(`/users/${id}`)
  //     .then(({ data }) => setUser(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setIsLoading(false));
  // }, []);

  // react query
  //!SECTION - users
  const getUser = async () => {
    const { data } = await axiosInstance.get(`/users/${id}`);
    return data;
  };
  const { data, isLoading } = useQuery(["user", id], () => getUser());

  if (isLoading) return <ImageSkeleton isCentered />;
  return (
    <div className="flex flex-col my-5 py-3 max-w-xs mx-auto items-center border border-indigo-600 text-center rounded-md hover:bg-indigo-600 duration-300">
      <div
        onClick={() => setUserId(-1)}
        className="text-2xl hover:cursor-pointer shadow-sm bg-slate-100 mt-3 rounded-md"
      >
        ⬅️
      </div>
      <LazyLoadImage
        src={data.image}
        alt={data.firstName + " " + data.lastName}
        className="mx-auto"
        effect="blur"
      />
      <CachedEmoji isCached={isCached}/>
    </div>
  );
};

export default UserDetails;
