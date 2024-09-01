import React from "react";

import WelcomeSection from "./WelcomeSection";
import BookingsSection from "./BookingsSection";
import ProfileSection from "./ProfileSection";
import SharedDashboard from "../../../layouts/SharedDashboard";

const UserDashboard: React.FC = () => {
  const sections = {
    welcome: <WelcomeSection />,
    bookings: <BookingsSection />,
    profile: <ProfileSection />,
  };

  return <SharedDashboard sections={sections} />;
};

export default UserDashboard;
