import React, { useState } from "react";
import { useCreateFacilityMutation } from "../../../../redux/api/user/adminApi";
import { toast } from "react-toastify";

const AddFacilitySection: React.FC = () => {
  const [createFacility, { isLoading }] = useCreateFacilityMutation();
  const [newFacility, setNewFacility] = useState({
    name: "",
    description: "",
    pricePerHour: "",
    location: "",
    image: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewFacility({
      ...newFacility,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateFacility = async () => {
    // Validate fields
    if (
      !newFacility.name ||
      !newFacility.description ||
      !newFacility.pricePerHour ||
      !newFacility.location ||
      !newFacility.image
    ) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Convert pricePerHour to a number before sending
    const facilityData = {
      ...newFacility,
      pricePerHour: Number(newFacility.pricePerHour),
    };

    // Ensure that pricePerHour is a valid number
    if (isNaN(facilityData.pricePerHour)) {
      toast.error("Price per hour must be a valid number.");
      return;
    }

    try {
      await createFacility(facilityData).unwrap();
      toast.success("Facility created successfully!");
      setNewFacility({
        name: "",
        description: "",
        pricePerHour: "",
        location: "",
        image: "",
      });
    } catch (error) {
      toast.error("Failed to create facility. Please try again.");
      console.error("Error creating facility:", error);
    }
  };

  return (
    <div>
      <h4 className="text-xl font-bold mb-2">Add New Facility</h4>
      <input
        type="text"
        name="name"
        placeholder="Facility Name"
        value={newFacility.name}
        onChange={handleInputChange}
        className="p-2 border border-gray-400 rounded w-full"
      />
      <textarea
        name="description"
        placeholder="Facility Description"
        value={newFacility.description}
        onChange={handleInputChange}
        className="p-2 border border-gray-400 rounded mt-2 w-full"
      />
      <input
        type="text"
        name="pricePerHour"
        placeholder="Price per Hour"
        value={newFacility.pricePerHour}
        onChange={handleInputChange}
        className="p-2 border border-gray-400 rounded mt-2 w-full"
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={newFacility.location}
        onChange={handleInputChange}
        className="p-2 border border-gray-400 rounded mt-2 w-full"
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={newFacility.image}
        onChange={handleInputChange}
        className="p-2 border border-gray-400 rounded mt-2 w-full"
      />
      <button
        onClick={handleCreateFacility}
        disabled={isLoading}
        className={`bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600 ${
          isLoading && "opacity-50 cursor-not-allowed"
        }`}
      >
        {isLoading ? "Creating..." : "Create Facility"}
      </button>
    </div>
  );
};

export default AddFacilitySection;
