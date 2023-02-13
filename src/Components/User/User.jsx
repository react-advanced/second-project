import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import imagePlaceholder from "../../Assets/placeholder.jpeg";

const User = ({
  id,
  firstName,
  lastName,
  image,
  setUserId,
  domain,
  ip,
  password,
}) => {
  return (
    <div
      className="border border-indigo-600 pt-3 text-center rounded-md hover:bg-indigo-600 hover:-translate-y-2 duration-300 hover:cursor-pointer group"
      onClick={() => setUserId(id)}
    >
      {domain ? (
        <h4 className="text-sm mb-1">
          <span className="block font-bold">Domain: </span>
          {domain}
        </h4>
      ) : (
        <></>
      )}
      {password ? (
        <h4 className="text-sm mb-1">
          <span className="block font-bold">Password: </span>
          {password}
        </h4>
      ) : (
        <></>
      )}
      {ip ? (
        <h4 className="text-sm mb-1">
          <span className="block font-bold">IP: </span>
          {ip}
        </h4>
      ) : (
        <></>
      )}
      <LazyLoadImage
        src={image}
        alt={firstName + " " + lastName}
        className="mx-auto"
        effect="blur"
        placeholderSrc={imagePlaceholder}
      />
    </div>
  );
};

export default User;
