/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../redux/store";
import { useGetBookingDetailsQuery } from "../../../../redux/api/booking/bookingApi";
import axios from "axios";

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
    } else {
      const transactionId = `TXN-${Date.now()}`;
      try {
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
          // Redirect the user to the payment URL provided by Aamarpay
          window.location.href = paymentResponse.data.data.payment_url;
        } else {
          alert("Failed to initiate payment.");
        }
      } catch (err) {
        console.log(err);
        alert("Payment failed. Please try again.");
      }
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Booking Summary</h3>
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
            <strong>Total Amount:</strong> ${booking?.payableAmount.toFixed(2)}
          </p>
        </div>

        <button
          onClick={() => handlePayment()}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-6"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
