import React, { useState } from "react";
import WelcomeSection from "./WelcomeSection";
import BookingsSection from "./BookingsSection";
import Sidebar from "./Sidebar";
import ProfileSection from "./ProfileSection";

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("welcome");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-r from-green-50 to-blue-100 p-6 lg:p-8 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto">
          {activeSection === "welcome" && <WelcomeSection />}
          {activeSection === "bookings" && <BookingsSection />}
          {activeSection === "profile" && <ProfileSection />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
