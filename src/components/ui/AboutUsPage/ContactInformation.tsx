import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInformation: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-100 py-12 my-10">
      <section className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-[#663635]">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt size={40} className="text-[#663635] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Office Address</h3>
            <p className="text-lg text-gray-700">
              123 Sports Avenue, City, Country
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaPhoneAlt size={40} className="text-[#663635] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-lg text-gray-700">(123) 456-7890</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope size={40} className="text-[#663635] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-lg text-gray-700">
              <a
                href="mailto:contact@poshturf.com"
                className="text-blue-600 hover:underline"
              >
                contact@poshturf.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInformation;
