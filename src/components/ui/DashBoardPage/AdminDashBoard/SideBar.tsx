import React from "react";

interface SidebarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection }) => {
  return (
    <aside className="w-1/4 bg-primary p-8 text-white min-h-screen shadow-lg">
      <h2 className="text-3xl font-bold mb-10">Admin Dashboard</h2>
      <nav>
        <ul className="space-y-6">
          <li>
            <button
              onClick={() => setActiveSection("profile")}
              className="hover:bg-primary-dark p-3 rounded-lg w-full text-left transition-colors duration-200"
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("facilities")}
              className="hover:bg-primary-dark p-3 rounded-lg w-full text-left transition-colors duration-200"
            >
              Facilities
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("bookings")}
              className="hover:bg-primary-dark p-3 rounded-lg w-full text-left transition-colors duration-200"
            >
              Bookings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("addFacility")}
              className="hover:bg-primary-dark p-3 rounded-lg w-full text-left transition-colors duration-200"
            >
              Add Facility
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("addAdmin")}
              className="hover:bg-primary-dark p-3 rounded-lg w-full text-left transition-colors duration-200"
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
