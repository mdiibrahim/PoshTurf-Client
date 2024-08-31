import React from "react";
import { useNavigate } from "react-router-dom";

const FailPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRetryPayment = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto p-8 text-center">
      <h2 className="text-4xl font-bold mb-6 text-red-600">Payment Failed</h2>
      <p className="text-lg mb-6">
        Unfortunately, your payment could not be processed. Don't give up,
        success is just around the corner.
      </p>
      <p className="text-lg mb-6">
        <q className="italic">
          "Success is not final, failure is not fatal: It is the courage to
          continue that counts." - Winston Churchill
        </q>
      </p>
      <button
        onClick={handleRetryPayment}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-transform transform hover:scale-105"
      >
        Retry Payment
      </button>
    </div>
  );
};

export default FailPage;
