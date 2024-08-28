import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">PoshTurf</Link>
        </div>
        <nav className="space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-gray-900">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-primary text-white  px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
