import React, { useState } from "react";
import { useCreateAdminMutation } from "../../../../redux/api/user/adminApi";

const AddAdminSection: React.FC = () => {
  const [createAdmin] = useCreateAdminMutation();
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  console.log(newAdmin);

  const handleCreateAdmin = async () => {
    try {
      await createAdmin(newAdmin);
    } catch (err) {
      console.log(err);
    }
    // setNewAdmin({ name: "", email: "", password: "", phone: "", address: "" });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Add New Admin</h3>
      <input
        type="text"
        placeholder="Name"
        value={newAdmin.name}
        onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
        className="p-2 border border-gray-400 rounded mb-2 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={newAdmin.email}
        onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
        className="p-2 border border-gray-400 rounded mb-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={newAdmin.password}
        onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
        className="p-2 border border-gray-400 rounded mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Phone"
        value={newAdmin.phone}
        onChange={(e) => setNewAdmin({ ...newAdmin, phone: e.target.value })}
        className="p-2 border border-gray-400 rounded mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Address"
        value={newAdmin.address}
        onChange={(e) => setNewAdmin({ ...newAdmin, address: e.target.value })}
        className="p-2 border border-gray-400 rounded mb-2 w-full"
      />
      <button
        onClick={handleCreateAdmin}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
      >
        Create Admin
      </button>
    </div>
  );
};

export default AddAdminSection;
