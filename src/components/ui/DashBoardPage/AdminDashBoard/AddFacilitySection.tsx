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
    isFeatured: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewFacility({
      ...newFacility,
      [name]: name === "isFeatured" ? value === "true" : value, // Convert to boolean for isFeatured
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

      // Reset form fields
      setNewFacility({
        name: "",
        description: "",
        pricePerHour: "",
        location: "",
        image: "",
        isFeatured: false, // Reset to default
      });
    } catch (error) {
      toast.error("Failed to create facility. Please try again.");
      console.error("Error creating facility:", error);
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h4 className="text-2xl font-bold mb-4 text-primary">Add New Facility</h4>
      <input
        type="text"
        name="name"
        placeholder="Facility Name"
        value={newFacility.name}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded w-full mb-2"
      />
      <textarea
        name="description"
        placeholder="Facility Description"
        value={newFacility.description}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded w-full mb-2"
      />
      <input
        type="text"
        name="pricePerHour"
        placeholder="Price per Hour"
        value={newFacility.pricePerHour}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded w-full mb-2"
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={newFacility.location}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded w-full mb-2"
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={newFacility.image}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded w-full mb-2"
      />
      <div className="mb-4">
        <label className="block mb-2 font-bold">Featured Facility</label>
        <select
          name="isFeatured"
          value={newFacility.isFeatured.toString()}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      </div>
      <button
        onClick={handleCreateFacility}
        disabled={isLoading}
        className={`bg-primary text-white px-4 py-2 rounded mt-2 hover:bg-primary-dark transition-colors duration-300 ${
          isLoading && "opacity-50 cursor-not-allowed"
        }`}
      >
        {isLoading ? "Creating..." : "Create Facility"}
      </button>
    </div>
  );
};

export default AddFacilitySection;
