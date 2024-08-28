import React from "react";

interface SidebarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection }) => {
  return (
    <aside className="w-1/4 bg-purple-500 p-8 text-white">
      <div className="text-2xl font-bold mb-8">Dashboard</div>
      <nav>
        <ul className="space-y-4">
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
              onClick={() => setActiveSection("profile")}
              className="hover:bg-purple-600 p-2 rounded block"
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
