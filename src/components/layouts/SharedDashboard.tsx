import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LayoutProps {
  sections: { [key: string]: React.ReactNode };
}

const SharedDashboard: React.FC<LayoutProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("welcome");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar
        setActiveSection={setActiveSection}
        options={Object.keys(sections).map((section) => ({
          label: section.charAt(0).toUpperCase() + section.slice(1),
          section,
        }))}
      />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 bg-gradient-to-r from-green-50 to-blue-100">
        <div className="bg-white shadow-md rounded-lg p-6">
          {sections[activeSection]}
        </div>
      </main>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default SharedDashboard;
