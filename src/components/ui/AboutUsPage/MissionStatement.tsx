import React from "react";

const MissionStatement: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-100 py-12 my-10">
      <section className="container px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#663635]">
          Our Mission
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="border-t-4 border-[#663635] w-24 mx-auto mb-6"></div>
          <p className="text-center text-lg text-gray-700 leading-relaxed">
            At PoshTurf, we are committed to providing state-of-the-art sports
            facilities for everyone. Our goal is to make booking and accessing
            high-quality sports venues simple, affordable, and convenient for
            both casual and professional athletes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MissionStatement;
