import React from "react";
import { FaSearch, FaCalendarCheck, FaSmile } from "react-icons/fa";

const WorkFlow: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-green-50 to-blue-100 my-10">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center step">
            <FaSearch className="text-6xl text-primary0 mb-6 animate-bounce text-primary" />
            <h3 className="text-2xl font-bold mb-4 text-primary">Firstly</h3>
            <p className="text-lg text-gray-700">
              Select your preferred facility and check availability.
            </p>
          </div>
          <div className="flex flex-col items-center step">
            <FaCalendarCheck className="text-6xl text-primary mb-6 animate-bounce" />
            <h3 className="text-2xl font-bold mb-4 text-primary">Then</h3>
            <p className="text-lg text-gray-700">
              Confirm your booking and make the payment.
            </p>
          </div>
          <div className="flex flex-col items-center step">
            <FaSmile className="text-6xl text-primary mb-6 animate-bounce" />
            <h3 className="text-2xl font-bold mb-4 text-primary">Finally</h3>
            <p className="text-lg text-gray-700">
              Enjoy the facility at the selected time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
