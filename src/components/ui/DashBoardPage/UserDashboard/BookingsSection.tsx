/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  useCancelBookingMutation,
  useGetUserBookingsQuery,
} from "../../../../redux/api/user/userApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCalendarAlt, FaMoneyCheckAlt } from "react-icons/fa";

const BookingsSection: React.FC = () => {
  const { data, refetch, isLoading, error } =
    useGetUserBookingsQuery(undefined);
  const [cancelBooking] = useCancelBookingMutation();
  const navigate = useNavigate();

  const handleCancelBooking = async (id: string) => {
    try {
      const result = await cancelBooking(id);
      refetch();
      const successMessage =
        result?.data?.message || "Booking canceled successfully!";
      toast.success(successMessage);
    } catch (error: any) {
      const errorMessage =
        error?.data?.message ||
        error?.message ||
        "An unexpected error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  const handleMakePayment = (booking: any) => {
    navigate(`/checkout/${booking._id}`, { state: { booking } });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading bookings.</p>;
  }

  return (
    <section className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-3xl font-bold mb-6">My Bookings</h3>
      {data?.data?.length ? (
        <ul className="space-y-6">
          {data?.data?.map((booking: any) => (
            <li
              key={booking._id}
              className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg shadow"
            >
              <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-primary text-3xl" />
                <div>
                  <h4 className="font-bold text-lg">{booking.facilityName}</h4>
                  <p className="text-gray-700">
                    Date: {new Date(booking.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700">Status: {booking.isBooked}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-4">
                <button
                  disabled={booking.isBooked === "confirmed"}
                  onClick={() => handleCancelBooking(booking._id)}
                  className={`px-4 py-2 rounded-lg text-white ${
                    booking.isBooked === "confirmed"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  Cancel
                </button>
                <button
                  disabled={booking.isBooked === "confirmed"}
                  onClick={() => handleMakePayment(booking)}
                  className={`px-4 py-2 rounded-lg text-white ${
                    booking.isBooked === "confirmed"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  <FaMoneyCheckAlt className="inline mr-2" />
                  Pay
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
