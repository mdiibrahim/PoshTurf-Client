import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/features/auth/authSlice";
import logo from "../../assets/poshturf-logo.png";
import { useAppDispatch } from "../../redux/hooks";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Access token and role from Redux state
  const token = useSelector((state: RootState) => state.auth.token);
  const role = useSelector((state: RootState) => state.auth.role);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleDashboardRedirect = () => {
    if (role === "admin") {
      navigate("/me"); // Admin Dashboard
    } else {
      navigate("/me"); // User Dashboard
    }
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">Posh</span>
            <img
              src={logo}
              alt="PoshTurf Logo"
              className="h-8 w-auto rounded-2xl"
            />
            <span className="text-lg font-bold text-gray-900">Turf</span>
          </Link>
        </div>

        <nav className="space-x-4 flex items-center">
          <Link to="/facilities" className="text-gray-700 hover:text-gray-900">
            Facilities
          </Link>
          {token && (
            <button
              onClick={handleDashboardRedirect}
              className="text-gray-700 hover:text-gray-900 mr-4"
            >
              Dashboard
            </button>
          )}
          {token ? (
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-gray-900"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-gray-900">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
