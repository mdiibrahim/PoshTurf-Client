/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useUpdateFacilityMutation } from "../../../../redux/api/user/adminApi";
import { ClipLoader } from "react-spinners";

interface UpdateFacilitySectionProps {
  facility: any;
  onClose: () => void;
}

const UpdateFacilitySection: React.FC<UpdateFacilitySectionProps> = ({
  facility,
  onClose,
}) => {
  const [updateFacility, { isLoading, error }] = useUpdateFacilityMutation();
  const [updatedFacility, setUpdatedFacility] = useState({
    name: facility.name,
    description: facility.description,
    pricePerHour: facility.pricePerHour.toString(), // Ensure it's a string for input
    location: facility.location,
    image: facility.image,
    isFeatured: facility.isFeatured ? "true" : "false", // Convert boolean to string for select field
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setUpdatedFacility({
      ...updatedFacility,
      [name]: value,
    });
  };

  const handleUpdateFacility = async () => {
    // Convert pricePerHour to number and isFeatured to boolean
    const facilityData = {
      id: facility._id,
      ...updatedFacility,
      pricePerHour: parseFloat(updatedFacility.pricePerHour),
      isFeatured: updatedFacility.isFeatured === "true", // Convert back to boolean
    };

    // Check if pricePerHour is a valid number
    if (isNaN(facilityData.pricePerHour)) {
      toast.error("Price per hour must be a valid number.");
      return;
    }

    try {
      await updateFacility({
        id: facility._id,
        updatedData: facilityData,
      }).unwrap();

      toast.success("Facility updated successfully!");
      onClose();
    } catch (error: any) {
      const errorMessage =
        error?.data?.message ||
        error?.message ||
        "Failed to update facility. Please try again.";
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
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h4 className="text-xl font-bold mb-4">Update Facility</h4>
        <input
          type="text"
          name="name"
          placeholder="Facility Name"
          value={updatedFacility.name}
          onChange={handleInputChange}
          className="p-2 border border-gray-400 rounded w-full mb-4"
        />
        <textarea
          name="description"
          placeholder="Facility Description"
          value={updatedFacility.description}
          onChange={handleInputChange}
          className="p-2 border border-gray-400 rounded w-full mb-4"
        />
        <input
          type="text"
          name="pricePerHour"
          placeholder="Price per Hour"
          value={updatedFacility.pricePerHour}
          onChange={handleInputChange}
          className="p-2 border border-gray-400 rounded w-full mb-4"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={updatedFacility.location}
          onChange={handleInputChange}
          className="p-2 border border-gray-400 rounded w-full mb-4"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={updatedFacility.image}
          onChange={handleInputChange}
          className="p-2 border border-gray-400 rounded w-full mb-4"
        />

        <div className="mb-4">
          <label className="block mb-2 font-bold">Featured Facility</label>
          <select
            name="isFeatured"
            value={updatedFacility.isFeatured}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded w-full"
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateFacility}
            disabled={isLoading}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 ${
              isLoading && "opacity-50 cursor-not-allowed"
            }`}
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateFacilitySection;
