import React from "react";
import { useGetUserProfileQuery } from "../../../../redux/api/user/userApi";

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
    <section>
      <h3 className="text-2xl font-bold mb-4">My Profile</h3>
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
    </section>
  );
};

export default ProfileSection;
