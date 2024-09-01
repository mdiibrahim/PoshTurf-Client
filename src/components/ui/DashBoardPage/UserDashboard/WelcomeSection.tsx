import React from "react";
import { useGetUserProfileQuery } from "../../../../redux/api/user/userApi";
import { FaUserCircle } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const WelcomeSection: React.FC = () => {
  const { data: profile, isLoading, error } = useGetUserProfileQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <ClipLoader color="#663635" size={50} />
      </div>
    );
  }

  if (error) {
    toast.error("Error loading facilities. Please try again.");
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
        Error loading facilities. Please try again later.
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-r from-green-50 to-blue-100  p-8 rounded-lg mb-6 shadow-lg text-primary">
      {/* Background Decoration */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: "url('/user.jpg')" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center">
        <FaUserCircle className="text-6xl mr-4" />
        <div>
          <h2 className="text-4xl font-extrabold mb-2">
            Welcome back, {profile?.name || "User"}!
          </h2>
          <p className="text-lg">
            Stay updated with your latest activities and explore new features in
            your portal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
