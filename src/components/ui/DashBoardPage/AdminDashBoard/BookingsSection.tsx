/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useGetAllBookingsQuery } from "../../../../redux/api/user/adminApi";
import { toast } from "react-toastify";
import RingLoader from "react-spinners/RingLoader";

const BookingsSection: React.FC = () => {
  const { data, error, isLoading } = useGetAllBookingsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <RingLoader color="#663635" size={50} />
      </div>
    );
  }

  if (error) {
    toast.error("Error loading bookings. Please try again.");
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
        Error loading bookings. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-3xl font-bold mb-6 text-primary">Bookings</h3>
      <ul className="space-y-4">
        {data?.data?.map((booking: any) => (
          <li
            key={booking._id}
            className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center"
          >
            <div>
              <h4 className="font-bold text-lg">{booking.facility.name}</h4>
              <p className="text-gray-700">
                Date: {new Date(booking.date).toLocaleDateString()}
              </p>
              <p
                className={`font-semibold mt-1 ${
                  booking.isBooked ? "text-green-600" : "text-red-600"
                }`}
              >
                Status: {booking.isBooked ? "Confirmed" : "Pending"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsSection;
