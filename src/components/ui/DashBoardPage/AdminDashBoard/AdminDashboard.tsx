import React from "react";

import WelcomeSection from "./WelcomeSection";
import ProfileSection from "./ProfileSection";
import FacilitiesSection from "./FacilitiesSection";
import BookingsSection from "./BookingsSection";
import AddFacilitySection from "./AddFacilitySection";
import AddAdminSection from "./AddAdminSection";
import SharedDashboard from "../../../layouts/SharedDashboard";

const AdminDashboard: React.FC = () => {
  const sections = {
    welcome: <WelcomeSection />,
    profile: <ProfileSection />,
    facilities: <FacilitiesSection />,
    bookings: <BookingsSection />,
    addFacility: <AddFacilitySection />,
    addAdmin: <AddAdminSection />,
  };

  return <SharedDashboard sections={sections} />;
};

export default AdminDashboard;
