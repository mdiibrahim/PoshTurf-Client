import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetFacilityByIdQuery } from "../../../redux/api/facility/facilityApi";

const FacilityDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetFacilityByIdQuery(id);
  const facility = data?.data;
  console.log(facility);
  const navigate = useNavigate();

  if (isLoading) return <p>Loading facility details...</p>;
  if (error) return <p>Error loading facility details.</p>;

  const handleBooking = () => {
    navigate(`/check-availability`);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">{facility.name}</h2>

      <div className="flex flex-col md:flex-row">
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full md:w-1/2 h-auto object-cover rounded mb-4 md:mr-6"
        />
        <div className="md:w-1/2">
          <p className="text-gray-600 mb-4">Location: {facility.location}</p>
          <p className="text-gray-600 mb-4">
            Price: ${facility.pricePerHour}/hr
          </p>
          <p className="text-gray-600 mb-4">{facility.description}</p>
          <button
            onClick={handleBooking}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetailsPage;
