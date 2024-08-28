import { Link } from "react-router-dom";
import notFoundImage from "../assets/notFound.png";
const NotFound = () => {
  return (
    <div className="container mx-auto text-center py-24">
      <img
        src={notFoundImage}
        alt="404 Not Found"
        className="mx-auto mb-8 w-1/2 h-auto"
      />
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="text-2xl mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
