/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  useCancelBookingMutation,
  useGetUserBookingsQuery,
} from "../../../../redux/api/user/userApi";
import { toast } from "react-toastify";

const BookingsSection: React.FC = () => {
  const { data, refetch, isLoading, error } =
    useGetUserBookingsQuery(undefined);
  const [cancelBooking] = useCancelBookingMutation();

  // Handle booking cancellation
  const handleCancelBooking = async (id: string) => {
    try {
      const result = await cancelBooking(id);
      refetch();
      const successMessage =
        result?.data?.message ||
        "An unexpected error occurred. Please try again.";
      toast.success(successMessage);
    } catch (error: any) {
      const errorMessage =
        error?.data?.message ||
        error?.message ||
        "An unexpected error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading bookings.</p>;
  }

  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">My Bookings</h3>
      {data?.data?.length ? (
        <ul className="space-y-4">
          {data?.data?.map((booking: any) => (
            <li
              key={booking._id}
              className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h4 className="font-bold text-lg">{booking.facilityName}</h4>
                <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
                <p>Status: {booking.status}</p>
              </div>
              <div>
                <button
                  onClick={() => handleCancelBooking(booking._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Cancel Booking
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings available.</p>
      )}
    </section>
  );
};

export default BookingsSection;
