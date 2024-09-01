import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/features/auth/authSlice";
import logo from "../../assets/poshturf-logo.png";
import { useAppDispatch } from "../../redux/hooks";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Access token and role from Redux state
  const token = useSelector((state: RootState) => state?.auth.token);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleDashboardRedirect = () => {
    navigate("/me"); // Admin and User Dashboard Redirect
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">Posh</span>
          <img
            src={logo}
            alt="PoshTurf Logo"
            className="h-10 w-auto rounded-lg"
          />
          <span className="text-xl font-bold text-gray-900">Turf</span>
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to="/facilities"
            className="text-gray-700 hover:text-primary transition-colors duration-200"
          >
            Facilities
          </Link>
          {token && (
            <button
              onClick={handleDashboardRedirect}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Dashboard
            </button>
          )}
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-16 left-0">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="/facilities"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Facilities
            </Link>
            {token && (
              <button
                onClick={() => {
                  handleDashboardRedirect();
                  toggleMenu();
                }}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Dashboard
              </button>
            )}
            {token ? (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={toggleMenu}
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
