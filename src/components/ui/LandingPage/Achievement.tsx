import React from "react";
import {
  FaTrophy,
  FaUsers,
  FaHandshake,
  FaMedal,
  FaStar,
} from "react-icons/fa";

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
  {
    icon: <FaMedal size={50} className="text-purple-500" />,
    title: "50+",
    subtitle: "Awards Won",
  },
  {
    icon: <FaStar size={50} className="text-yellow-500" />,
    title: "4.8/5",
    subtitle: "Average Rating",
  },
  {
    icon: <FaTrophy size={50} className="text-orange-500" />,
    title: "10+",
    subtitle: "Years of Experience",
  },
];

const Achievement: React.FC = () => {
  return (
    <div className="container my-10 p-12 bg-gradient-to-r from-green-50 to-blue-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-primary">
        Our Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className="bg-white p-8 shadow-lg rounded-lg transition-transform transform hover:scale-105"
          >
            <div className="flex justify-center mb-6">{achievement.icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-center">
              {achievement.title}
            </h3>
            <p className="text-gray-700 text-center">{achievement.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
