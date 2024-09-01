import React from "react";
import { Link } from "react-router-dom";

interface FacilityCardProps {
  id: string;
  name: string;
  image: string;
  pricePerHour: number;
  location: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  id,
  name,
  image,
  pricePerHour,
  location,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-bold text-[#663635] mb-2">{name}</h3>
        <p className="text-gray-700 mb-2">
          Price: <span className="font-semibold">${pricePerHour}</span>/hr
        </p>
        <p className="text-gray-700 mb-4">Location: {location}</p>
        <Link
          to={`/facility/${id}`}
          className="inline-block bg-[#663635] w-full text-center text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FacilityCard;
