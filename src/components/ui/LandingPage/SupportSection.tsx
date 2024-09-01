// src/components/SupportSection.tsx

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const SupportSection: React.FC = () => {
  return (
    <div className="container my-10 p-8 bg-gradient-to-r from-green-50 to-blue-100 rounded-lg ">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        24/7 Support
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center">
          <FaPhoneAlt size={50} className="text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2 text-primary">
            Call Us Anytime
          </h3>
          <p className="text-gray-600">+1 234 567 890</p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope size={50} className="text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2 text-primary">Email Us</h3>
          <p className="text-gray-600">support@example.com</p>
        </div>
        <div className="flex flex-col items-center">
          <FaClock size={50} className="text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2 text-primary">
            24/7 Availability
          </h3>
          <p className="text-gray-600">We are always here for you</p>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
