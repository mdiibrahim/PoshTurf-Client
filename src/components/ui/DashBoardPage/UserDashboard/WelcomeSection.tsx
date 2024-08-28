import React from "react";
import { useGetUserProfileQuery } from "../../../../redux/api/user/userApi";

const WelcomeSection: React.FC = () => {
  const { data: profile, isLoading, error } = useGetUserProfileQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading profile.</p>;
  }

  return (
    <div className="bg-purple-200 p-6 rounded-lg mb-6">
      <h2 className="text-3xl font-bold text-purple-800">
        Welcome back, {profile?.name || "User"}!
      </h2>
      <p className="text-purple-700">
        Always stay updated in your student portal
      </p>
    </div>
  );
};

export default WelcomeSection;
