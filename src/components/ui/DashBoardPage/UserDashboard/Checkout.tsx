/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useGetBookingDetailsQuery } from "../../../../redux/api/booking/bookingApi";
import axios from "axios";
import { toast } from "react-toastify";

const CheckoutPage: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const token = useSelector((state: RootState) => state.auth.token);
  const { data, isLoading, error } = useGetBookingDetailsQuery(
    bookingId as string
  );

  const navigate = useNavigate();
  const booking = data?.data[0] || [];

  if (isLoading) return <p>Loading booking details...</p>;
  if (error) return <p>Error loading booking details.</p>;

  const handlePayment = async () => {
    if (!token) {
      navigate("/login");
      toast.error("Please log in to proceed with the payment.");
    } else {
      const transactionId = `TXN-${Date.now()}`;
      try {
        // Save booking ID to local storage before payment
        localStorage.setItem("currentBookingId", bookingId as string);

        const paymentResponse = await axios.post(
          "http://localhost:5000/api/payment",
          {
            transactionId,
            totalPrice: booking.payableAmount,
            customerName: booking.user.name,
            customerEmail: booking.user.email,
            customerPhone: booking.user.phone,
            customerAddress: booking.user.address,
            bookingId,
          }
        );

        if (paymentResponse.data.success) {
          window.location.href = paymentResponse.data.data.payment_url;
        } else {
          toast.error("Failed to initiate payment.");
        }
      } catch (err) {
        console.log(err);
        toast.error("Payment failed. Please try again.");
      }
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h2 className="text-3xl font-bold mb-6 text-primary">Checkout</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Booking Summary
          </h3>
          <p className="text-gray-700">
            <strong>Facility:</strong> {booking?.facility.name}
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> {booking?.facility.location}
          </p>
          <p className="text-gray-700">
            <strong>Date:</strong> {booking?.date}
          </p>
          <p className="text-gray-700">
            <strong>Name:</strong> {booking?.user?.name}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {booking?.user?.email}
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {booking?.user?.phone}
          </p>
          <p className="text-gray-700">
            <strong>Time Slots:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700">
            {booking?.timeSlots.map((slot: any, slotIndex: number) => (
              <li key={slotIndex}>
                {slot.startTime} - {slot.endTime}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg font-semibold text-gray-800">
            <strong>Total Amount:</strong> ${booking?.payableAmount.toFixed(2)}
          </p>
        </div>

        <button
          onClick={handlePayment}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 w-full"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
