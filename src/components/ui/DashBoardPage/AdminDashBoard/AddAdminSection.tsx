import React, { useState } from "react";
import { useCreateAdminMutation } from "../../../../redux/api/user/adminApi";
import { toast } from "react-toastify";

const AddAdminSection: React.FC = () => {
  const [createAdmin, { isLoading }] = useCreateAdminMutation();
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleCreateAdmin = async () => {
    // Validate fields
    if (!newAdmin.name || !newAdmin.email || !newAdmin.password) {
      toast.error("Please fill out all required fields.");
      return;
    }

    try {
      await createAdmin(newAdmin).unwrap();
      toast.success("Admin created successfully!");
      setNewAdmin({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      toast.error("Failed to create admin. Please try again.");
      console.error("Error creating admin:", error);
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-primary">Add New Admin</h3>
      <input
        type="text"
        placeholder="Name"
        value={newAdmin.name}
        onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={newAdmin.email}
        onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={newAdmin.password}
        onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Phone"
        value={newAdmin.phone}
        onChange={(e) => setNewAdmin({ ...newAdmin, phone: e.target.value })}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Address"
        value={newAdmin.address}
        onChange={(e) => setNewAdmin({ ...newAdmin, address: e.target.value })}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <button
        onClick={handleCreateAdmin}
        disabled={isLoading}
        className={`bg-primary text-white px-4 py-2 rounded mt-2 hover:bg-primary-dark transition-colors duration-300 ${
          isLoading && "opacity-50 cursor-not-allowed"
        }`}
      >
        {isLoading ? "Creating..." : "Create Admin"}
      </button>
    </div>
  );
};

export default AddAdminSection;
