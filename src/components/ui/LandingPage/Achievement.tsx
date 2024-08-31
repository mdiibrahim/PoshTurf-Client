// src/components/AchievementsSection.tsx

import React from "react";
import { FaTrophy, FaUsers, FaHandshake } from "react-icons/fa";

const achievementsData = [
  {
    icon: <FaTrophy size={50} className="text-yellow-500" />,
    title: "10,000+",
    subtitle: "Successful Bookings",
  },
  {
    icon: <FaUsers size={50} className="text-blue-500" />,
    title: "5,000+",
    subtitle: "Satisfied Customers",
  },
  {
    icon: <FaHandshake size={50} className="text-green-500" />,
    title: "100+",
    subtitle: "Facility Partnerships",
  },
];

const Achievement: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 shadow-lg rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            <div className="mb-4">{achievement.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
            <p className="text-gray-600">{achievement.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
