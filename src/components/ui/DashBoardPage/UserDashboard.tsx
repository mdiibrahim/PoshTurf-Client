/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { Link } from "react-router-dom";
import {
  useGetUserBookingsQuery,
  useGetUserProfileQuery,
} from "../../../redux/api/user/userApi";

const Dashboard: React.FC = () => {
  const { data: profile } = useGetUserProfileQuery(undefined);
  const { data: bookings } = useGetUserBookingsQuery(undefined);
  console.log(profile, bookings);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-purple-500 p-8 text-white">
        <div className="text-2xl font-bold mb-8">Dashboard</div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="" className="hover:bg-purple-600 p-2 rounded block">
                Bookings
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:bg-purple-600 p-2 rounded block">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        {/* Welcome Banner */}
        <div className="bg-purple-200 p-6 rounded-lg mb-6">
          <h2 className="text-3xl font-bold text-purple-800">
            Welcome back, {profile?.name || "User"}!
          </h2>
          <p className="text-purple-700">
            Always stay updated in your student portal
          </p>
        </div>

        {/* Bookings Section */}
        <section>
          <h3 className="text-2xl font-bold mb-4">My Bookings</h3>
          {bookings?.length ? (
            <ul className="space-y-4">
              {bookings.map((booking: any) => (
                <li
                  key={booking.id}
                  className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-bold text-lg">
                      {booking.facilityName}
                    </h4>
                    <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
                    <p>Status: {booking.status}</p>
                  </div>
                  <div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                      Cancel Booking
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No bookings available.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
