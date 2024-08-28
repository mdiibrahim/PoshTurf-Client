import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import FacilitiesSection from "./FacilitiesSection";
import BookingsSection from "./BookingsSection";
import AddFacilitySection from "./AddFacilitySection";
import AddAdminSection from "./AddAdminSection";
import Sidebar from "./SideBar";
import WelcomeSection from "./WelcomeSection";

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("welcome");

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        {activeSection === "welcome" && <WelcomeSection />}
        {activeSection === "profile" && <ProfileSection />}
        {activeSection === "facilities" && <FacilitiesSection />}
        {activeSection === "bookings" && <BookingsSection />}
        {activeSection === "addFacility" && <AddFacilitySection />}
        {activeSection === "addAdmin" && <AddAdminSection />}
      </main>
    </div>
  );
};

export default AdminDashboard;
