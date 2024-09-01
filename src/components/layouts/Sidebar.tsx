import React from "react";

interface SidebarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  options: { label: string; section: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection, options }) => {
  return (
    <aside className="w-full lg:w-64 bg-primary p-6 text-white min-h-screen shadow-lg fixed lg:relative">
      <h2 className="text-3xl font-extrabold mb-8">Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          {options.map((option) => (
            <li key={option.section}>
              <button
                onClick={() => setActiveSection(option.section)}
                className="hover:bg-primary-dark p-3 rounded-lg w-full text-left transition-colors duration-200"
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
