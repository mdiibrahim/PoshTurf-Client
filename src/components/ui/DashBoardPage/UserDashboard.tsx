/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  useGetUserBookingsQuery,
  useGetUserProfileQuery,
} from "../../../redux/api/user/userApi";

const UserDashboard: React.FC = () => {
  const { data: profile } = useGetUserProfileQuery(undefined);
  const { data: bookings } = useGetUserBookingsQuery(undefined);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <h3 className="text-xl mb-4">Profile</h3>
      <div>
        <p>
          <strong>Name:</strong> {profile?.name}
        </p>
        <p>
          <strong>Email:</strong> {profile?.email}
        </p>
        {/* Display other profile info */}
      </div>
      <h3 className="text-xl mb-4 mt-8">Bookings</h3>
      <ul>
        {bookings?.map((booking: any) => (
          <li key={booking.id}>
            Facility: {booking.facilityName} | Date: {booking.date} | Status:{" "}
            {booking.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
