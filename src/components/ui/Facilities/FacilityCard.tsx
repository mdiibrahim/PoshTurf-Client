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
    <div className="bg-white shadow rounded-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">Price: ${pricePerHour}/hr</p>
      <p className="text-gray-600 mb-4">Location: {location}</p>
      <Link to={`/facility/${id}`} className="text-blue-600 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default FacilityCard;
