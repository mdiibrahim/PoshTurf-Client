import React from "react";
import { useGetAdminProfileQuery } from "../../../../redux/api/user/adminApi";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const ProfileSection: React.FC = () => {
  const { data, error, isLoading } = useGetAdminProfileQuery(undefined);
  const profile = data?.data;

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
    <div>
      <h2 className="text-4xl font-bold text-primary mb-6">Profile</h2>
      <div className="bg-white shadow rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-lg">
            <strong>Name:</strong> {profile?.name}
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {profile?.email}
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> {profile?.phone}
          </p>
          <p className="text-lg">
            <strong>Address:</strong> {profile?.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
