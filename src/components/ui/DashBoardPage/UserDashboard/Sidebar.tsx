import React from "react";

interface SidebarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection }) => {
  return (
    <aside className="w-full lg:w-1/4 bg-gradient-to-r from-green-50 to-blue-100 p-8 text-white transition-transform duration-300 transform lg:translate-x-0 translate-x-[-100%] lg:relative absolute shadow-lg">
      <div className="text-3xl font-extrabold mb-8 text-primary">Dashboard</div>
      <nav>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveSection("bookings")}
              className="hover:bg-purple-600 hover:bg-opacity-70 p-2 rounded-lg block w-full text-left transition-colors duration-200 bg-primary"
            >
              Bookings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("profile")}
              className="hover:bg-purple-600 hover:bg-opacity-70 p-2 rounded-lg block w-full text-left transition-colors duration-200 bg-primary"
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
