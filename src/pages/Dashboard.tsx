import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import AdminDashboard from "../components/ui/DashBoardPage/AdminDashboard";
import UserDashboard from "../components/ui/DashBoardPage/UserDashboard";

const Dashboard: React.FC = () => {
  const role = useSelector((state: RootState) => state.auth.role);

  return (
    <div className="container mx-auto px-4 py-12">
      {role === "admin" ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
};

export default Dashboard;
