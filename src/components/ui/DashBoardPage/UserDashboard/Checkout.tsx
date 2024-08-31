/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../redux/store";
import { useGetBookingDetailsQuery } from "../../../../redux/api/booking/bookingApi";

const CheckoutPage: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const token = useSelector((state: RootState) => state.auth.token);
  const { data, isLoading, error } = useGetBookingDetailsQuery(
    bookingId as string
  );

  const navigate = useNavigate();
  const bookings = data?.data || []; // Ensure we have an array

  if (isLoading) return <p>Loading booking details...</p>;
  if (error) return <p>Error loading booking details.</p>;

  const handlePayment = () => {
    if (!token) {
      navigate("/login");
    } else {
      // Logic for initiating payment, redirect to payment gateway
      alert("Proceed to payment gateway...");
      // Example: navigate to payment page
      navigate(`/payment/${bookingId}`);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {bookings.map((booking: any, index: number) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">
              Booking Summary {index + 1}
            </h3>
            <p>
              <strong>Facility:</strong> {booking?.facility.name}
            </p>
            <p>
              <strong>Location:</strong> {booking?.facility.location}
            </p>
            <p>
              <strong>Date:</strong> {booking?.date}
            </p>
            <p>
              <strong>Time Slots:</strong>
            </p>
            <ul className="list-disc list-inside">
              {booking?.timeSlots.map((slot: any, slotIndex: number) => (
                <li key={slotIndex}>
                  {slot.startTime} - {slot.endTime}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <strong>Total Amount:</strong> $
              {booking?.payableAmount.toFixed(2)}
            </p>
          </div>
        ))}

        <button
          onClick={handlePayment}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-6"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
