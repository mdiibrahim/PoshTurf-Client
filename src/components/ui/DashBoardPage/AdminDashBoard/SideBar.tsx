import React from "react";

interface SidebarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection }) => {
  return (
    <aside className="w-1/4 bg-gray-800 p-8 text-white">
      <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveSection("profile")}
              className="hover:bg-purple-600 p-2 rounded block"
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("facilities")}
              className="hover:bg-purple-600 p-2 rounded block"
            >
              Facilities
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("bookings")}
              className="hover:bg-purple-600 p-2 rounded block"
            >
              Bookings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("addFacility")}
              className="hover:bg-purple-600 p-2 rounded block"
            >
              Add Facility
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("addAdmin")}
              className="hover:bg-purple-600 p-2 rounded block"
            >
              Add Admin
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
