import React, { useState } from "react";
import { useCreateFacilityMutation } from "../../../redux/api/user/adminApi";

const AddFacilitySection: React.FC = () => {
  const [createFacility] = useCreateFacilityMutation();
  const [newFacility, setNewFacility] = useState({
    name: "",
    description: "",
  });

  const handleCreateFacility = async () => {
    await createFacility(newFacility);
    setNewFacility({ name: "", description: "" });
  };

  return (
    <div>
      <h4 className="text-xl font-bold mb-2">Add New Facility</h4>
      <input
        type="text"
        placeholder="Facility Name"
        value={newFacility.name}
        onChange={(e) =>
          setNewFacility({ ...newFacility, name: e.target.value })
        }
        className="p-2 border border-gray-400 rounded"
      />
      <textarea
        placeholder="Facility Description"
        value={newFacility.description}
        onChange={(e) =>
          setNewFacility({ ...newFacility, description: e.target.value })
        }
        className="p-2 border border-gray-400 rounded mt-2"
      />
      <button
        onClick={handleCreateFacility}
        className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600"
      >
        Create Facility
      </button>
    </div>
  );
};

export default AddFacilitySection;
