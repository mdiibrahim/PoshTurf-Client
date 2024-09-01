/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  useGetAllFacilitiesQuery,
  useDeleteFacilityMutation,
} from "../../../../redux/api/user/adminApi";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const FacilitiesSection: React.FC = () => {
  const { data, error, isLoading } = useGetAllFacilitiesQuery(undefined);
  const [deleteFacility] = useDeleteFacilityMutation();

  const handleDeleteFacility = async (id: string) => {
    try {
      const result = await deleteFacility(id);
      const successMessage =
        result?.data?.message || "Facility deleted successfully!";
      toast.success(successMessage);
    } catch (error: any) {
      const errorMessage =
        error?.data?.message ||
        error?.message ||
        "An unexpected error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <ClipLoader color="#663635" size={50} />
      </div>
    );
  }

  if (error) {
    toast.error("Error loading facilities. Please try again.");
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
        Error loading facilities. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-3xl font-bold mb-6 text-primary">Facilities</h3>
      <ul className="space-y-4">
        {data?.data?.map((facility: any) => (
          <li key={facility._id} className="bg-white p-6 shadow-lg rounded-lg">
            <h4 className="font-bold text-lg">{facility.name}</h4>
            <p className="text-gray-700">{facility.description}</p>
            <button
              onClick={() => handleDeleteFacility(facility._id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
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
