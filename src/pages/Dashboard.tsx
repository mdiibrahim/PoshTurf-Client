import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import AdminDashboard from "../components/ui/DashBoardPage/AdminDashBoard/AdminDashboard";
import UserDashboard from "../components/ui/DashBoardPage/UserDashboard/UserDashboard";

const Dashboard: React.FC = () => {
  const role = useSelector((state: RootState) => state.auth.role);

  return (
    <div className="min-h-screen my-24 bg-gradient-to-r from-green-50 to-blue-100">
      {role === "admin" ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
};

export default Dashboard;
