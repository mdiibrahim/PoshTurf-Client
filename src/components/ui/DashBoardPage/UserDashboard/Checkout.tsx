/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const { booking } = location.state || {};
  console.log(booking);
  useEffect(() => {
    if (!booking) {
      toast.error("No booking information available.");
    }
  }, [booking]);

  const handlePayment = async () => {
    try {
      const response = await fetch(
        "https://sandbox.aamarpay.com/jsonpost.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cus_name: booking.customerName,
            cus_email: booking.customerEmail,
            cus_phone: booking.customerPhone,
            cus_add1: booking.customerAddress,
            amount: booking.payableAmount,
            currency: "BDT",
            tran_id: booking._id,
            success_url: "http://localhost:3000/payment-success", // Replace with your actual success URL
            fail_url: "http://localhost:3000/payment-fail", // Replace with your actual failure URL
            cancel_url: "http://localhost:3000/payment-cancel", // Replace with your actual cancel URL
            desc: booking.facilityName,
          }),
        }
      );

      const paymentData = await response.json();

      if (paymentData.status === "success") {
        window.location.href = paymentData.payment_url; // Redirect to payment gateway
      } else {
        toast.error("Failed to initiate payment.");
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Error initiating payment. Please try again.");
    }
  };

  if (!booking) {
    return <p>No booking data available.</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <p className="mb-2">
        <strong>Facility:</strong> {booking.facilityName}
      </p>
      <p className="mb-2">
        <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}
      </p>
      <p className="mb-2">
        <strong>Price:</strong> {booking.price} BDT
      </p>
      <button
        onClick={handlePayment}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutPage;
