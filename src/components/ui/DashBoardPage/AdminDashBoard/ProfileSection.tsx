import React from "react";
import { useGetAdminProfileQuery } from "../../../../redux/api/user/adminApi";

const ProfileSection: React.FC = () => {
  const { data, error, isLoading } = useGetAdminProfileQuery(undefined);
  const profile = data?.data;
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading profile</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold">Profile</h2>
      <div className="bg-white shadow rounded-lg p-6">
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
    </div>
  );
};

export default ProfileSection;
