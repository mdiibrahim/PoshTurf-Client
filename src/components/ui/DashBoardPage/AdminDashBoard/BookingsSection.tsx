/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useGetAllBookingsQuery } from "../../../../redux/api/user/adminApi";

const BookingsSection: React.FC = () => {
  const { data, error, isLoading } = useGetAllBookingsQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading bookings</p>;
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Bookings</h3>
      <ul>
        {data?.data?.map((booking: any) => (
          <li
            key={booking.id}
            className="bg-white p-4 mb-4 shadow-lg rounded-lg"
          >
            <h4 className="font-bold">{booking.facility}</h4>
            <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
            <p>Status: {booking.isBooked}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsSection;
