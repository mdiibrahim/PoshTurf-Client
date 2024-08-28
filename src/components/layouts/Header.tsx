import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/features/auth/authSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
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
      navigate("/profile"); // Admin Dashboard
    } else {
      navigate("/profile"); // User Dashboard
    }
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">PoshTurf</Link>
        </div>
        <nav className="space-x-4 flex items-center">
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
