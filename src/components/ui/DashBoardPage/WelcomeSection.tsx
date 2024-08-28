import React from "react";
import { useGetUserProfileQuery } from "../../../redux/api/user/userApi"; // Adjust path as per your file structure

const WelcomeSection: React.FC = () => {
  const { data: user, isLoading, error } = useGetUserProfileQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading profile.</p>;
  }

  return (
    <div
      className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url("https://example.com/path/to/your/image.jpg")`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-md text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome, {user?.name}!</h1>
        <p className="text-xl">
          We're glad to have you back. Ready to manage your bookings and
          facilities?
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
