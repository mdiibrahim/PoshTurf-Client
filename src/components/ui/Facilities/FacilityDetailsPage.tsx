import React from "react";
import { useParams } from "react-router-dom";
import { useGetFacilityByIdQuery } from "../../../redux/api/facility/facilityApi";
import AvailabilityChecker from "../Booking/AvailabilityChecker";
import ReviewSection from "../ReviewSection/ReviewSection";

const FacilityDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetFacilityByIdQuery(id);
  const facility = data?.data;

  if (isLoading)
    return <p className="text-center text-lg">Loading facility details...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-500">
        Error loading facility details.
      </p>
    );

  return (
    <div className="container mx-auto p-6 md:p-8">
      <h2 className="text-4xl font-bold text-primary mb-6">{facility.name}</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full md:w-1/2 h-64 object-cover rounded shadow-lg"
        />
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-700">
            <strong>Location:</strong> {facility.location}
          </p>
          <p className="text-gray-700">
            <strong>Price:</strong> ${facility.pricePerHour}/hr
          </p>
          <p className="text-gray-700">{facility.description}</p>
        </div>
      </div>

      {/* Availability Checker Component */}
      <AvailabilityChecker facilityId={facility._id} />

      {/* Review Section */}
      <ReviewSection facility={facility._id} />
    </div>
  );
};

export default FacilityDetailsPage;
