import React from "react";
import { FaFlag, FaTrophy, FaGlobe, FaCheckCircle } from "react-icons/fa";

const milestonesData = [
  {
    year: "2015 - Founded",
    description:
      "PoshTurf was founded with a vision to revolutionize sports facility management and booking.",
    icon: <FaFlag className="text-[#663635] text-3xl" />,
  },
  {
    year: "2017 - First 100 Facilities",
    description:
      "We reached a milestone of having 100 sports facilities available on our platform, making it easier for sports enthusiasts to find venues.",
    icon: <FaTrophy className="text-[#663635] text-3xl" />,
  },
  {
    year: "2020 - National Expansion",
    description:
      "Expanded our services nationwide, covering major cities and towns with top-quality sports facilities.",
    icon: <FaGlobe className="text-[#663635] text-3xl" />,
  },
  {
    year: "2023 - 10,000+ Successful Bookings",
    description:
      "We surpassed 10,000 successful bookings, helping athletes and enthusiasts alike to connect with the best sports facilities.",
    icon: <FaCheckCircle className="text-[#663635] text-3xl" />,
  },
];

const HistoryMilestones: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-100 py-12">
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#663635]">
          Our Journey
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="relative border-l border-gray-200">
            {milestonesData.map((milestone, index) => (
              <li key={index} className="mb-10 ml-16">
                <div className="absolute -left-8 flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full ring-8 ring-gray-50">
                  {milestone.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-[#663635]">
                  {milestone.year}
                </h3>
                <p className="text-gray-700">{milestone.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HistoryMilestones;
