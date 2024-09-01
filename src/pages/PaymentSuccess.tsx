import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove booking ID from local storage after successful payment
    localStorage.removeItem("currentBookingId");
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto p-8 text-center">
      <h2 className="text-4xl font-bold mb-6 text-green-600">
        Payment Successful!
      </h2>
      <p className="text-lg mb-6">
        Thank you for your payment. We appreciate your trust in our service.
      </p>
      <p className="text-lg mb-6">
        <q className="italic">
          "The only limit to our realization of tomorrow is our doubts of
          today." - Franklin D. Roosevelt
        </q>
      </p>

      <p className="text-lg">You will receive an email confirmation shortly.</p>
      <button
        onClick={handleGoHome}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-transform transform hover:scale-105"
      >
        Go to Home
      </button>
    </div>
  );
};

export default SuccessPage;
