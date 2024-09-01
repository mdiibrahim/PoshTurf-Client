import React from "react";
import { useGetUserProfileQuery } from "../../../../redux/api/user/userApi";
import { FaUserCircle } from "react-icons/fa";
import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";

const ProfileSection: React.FC = () => {
  const { data, isLoading, error } = useGetUserProfileQuery(undefined);
  const profile = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <RingLoader color="#663635" size={50} />
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
    <section className="bg-white shadow-lg rounded-lg p-8">
      <div className="flex items-center mb-6">
        <FaUserCircle className="text-5xl text-primary mr-4" />
        <h3 className="text-3xl font-bold">My Profile</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
        <p>
          <strong>Name:</strong> {profile?.name}
        </p>
        <p>
          <strong>Email:</strong> {profile?.email}
        </p>
        <p>
          <strong>Phone:</strong> {profile?.phone}
        </p>
        <p>
          <strong>Address:</strong> {profile?.address}
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
