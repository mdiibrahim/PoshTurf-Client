import React from "react";

interface SidebarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection }) => {
  return (
    <aside className="w-1/4 bg-primary p-8 text-white min-h-screen shadow-lg">
      <div className="text-3xl font-extrabold mb-8 text-white">Dashboard</div>
      <nav>
        <ul className="space-y-4">
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
              onClick={() => setActiveSection("profile")}
              className="hover:bg-primary-dark p-3 rounded-lg w-full text-left transition-colors duration-200"
            >
              Profile
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
