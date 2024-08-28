import React from "react";
import { useGetAdminProfileQuery } from "../../../redux/api/user/adminApi";

const ProfileSection: React.FC = () => {
  const { data, error, isLoading } = useGetAdminProfileQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading profile</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold">Profile</h2>
      <p className="mt-4">
        <strong>Name:</strong> {data?.data?.name}
      </p>
      <p>
        <strong>Email:</strong> {data?.data?.email}
      </p>
    </div>
  );
};

export default ProfileSection;
