import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

interface SidebarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  options: { label: string; section: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="lg:hidden p-4 fixed top-0 left-0 z-50"
        onClick={toggleSidebar}
      >
        <FaBars className="text-primary text-2xl" />
      </button>

      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:relative top-0 left-0 w-64 bg-primary p-6 text-white min-h-screen shadow-lg transform transition-transform duration-300 z-40`}
      >
        <h2 className="text-3xl font-extrabold mb-8">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            {options.map((option) => (
              <li key={option.section}>
                <button
                  onClick={() => {
                    setActiveSection(option.section);
                    setIsOpen(false);
                  }}
                  className="hover:bg-primary-dark p-3 rounded-lg w-full text-left transition-colors duration-200"
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
