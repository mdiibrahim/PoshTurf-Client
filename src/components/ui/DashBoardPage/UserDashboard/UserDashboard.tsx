import React, { useState } from "react";
import WelcomeSection from "./WelcomeSection";
import BookingsSection from "./BookingsSection";
import Sidebar from "./Sidebar";
import ProfileSection from "./ProfileSection";

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("welcome");

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        {activeSection === "welcome" && <WelcomeSection />}
        {activeSection === "bookings" && <BookingsSection />}
        {activeSection === "profile" && <ProfileSection />}
      </main>
    </div>
  );
};

export default Dashboard;
