import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import imagePlaceholder from "../../Assets/placeholder.jpeg";

const User = ({ id, firstName, lastName, image, setUserId }) => {
  return (
    <div
      className="border border-indigo-600 text-center rounded-md hover:bg-indigo-600 hover:-translate-y-2 duration-300 hover:cursor-pointer group"
      onClick={() => setUserId(id)}
    >
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
