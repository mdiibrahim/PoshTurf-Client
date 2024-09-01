import React from "react";
import { useGetUserProfileQuery } from "../../../../redux/api/user/userApi";
import { FaUserCircle } from "react-icons/fa";

const ProfileSection: React.FC = () => {
  const { data, isLoading, error } = useGetUserProfileQuery(undefined);
  const profile = data?.data;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading profile.</p>;
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
