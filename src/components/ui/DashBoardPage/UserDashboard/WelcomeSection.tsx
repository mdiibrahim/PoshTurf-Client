import React from "react";
import { useGetUserProfileQuery } from "../../../../redux/api/user/userApi";
import { FaUserCircle } from "react-icons/fa";

const WelcomeSection: React.FC = () => {
  const { data: profile, isLoading, error } = useGetUserProfileQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading profile.</p>;
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
