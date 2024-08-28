/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  useGetAllFacilitiesQuery,
  useDeleteFacilityMutation,
} from "../../../../redux/api/user/adminApi";

const FacilitiesSection: React.FC = () => {
  const { data, error, isLoading } = useGetAllFacilitiesQuery(undefined);
  const [deleteFacility] = useDeleteFacilityMutation();

  const handleDeleteFacility = async (id: string) => {
    await deleteFacility(id);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading facilities</p>;
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Facilities</h3>
      <ul>
        {data?.data?.map((facility: any) => (
          <li
            key={facility.id}
            className="bg-white p-4 mb-4 shadow-lg rounded-lg"
          >
            <h4 className="font-bold">{facility.name}</h4>
            <p>{facility.description}</p>
            <button
              onClick={() => handleDeleteFacility(facility.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacilitiesSection;
