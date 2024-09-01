import React from "react";

const MapIntegration: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-50 to-blue-100 my-10 py-12">
      <section className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#663635] mb-10">
          Our Location
        </h2>
        <div className="flex justify-center items-center">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0879729373744!2d144.95565131531835!3d-37.81720997975183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb2d5b1ddc037888e!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1637102031568!5m2!1sen!2sau"
            width="100%"
            height="450"
            allowFullScreen={false}
            loading="lazy"
            className="border-0 rounded-lg shadow-lg"
            title="Our Location"
          ></iframe>
        </div>
        <p className="text-center mt-6 text-lg text-gray-700">
          Visit us at our office located at the heart of the city.
        </p>
      </section>
    </div>
  );
};

export default MapIntegration;
