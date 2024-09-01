import React from "react";
import { useGetUserProfileQuery } from "../../../../redux/api/user/userApi";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const WelcomeSection: React.FC = () => {
  const { data: user, isLoading, error } = useGetUserProfileQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <ClipLoader color="#663635" size={60} />
      </div>
    );
  }

  if (error) {
    toast.error("Error loading profile. Please try again.");
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
        <p>Error loading profile. Please try again later.</p>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1573495612897-cf5a3c55690c")`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-md text-center">
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
