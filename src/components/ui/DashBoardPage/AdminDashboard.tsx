/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  useGetAllBookingsQuery,
  useGetAllFacilitiesQuery,
  useAddFacilityMutation,
} from "../../../redux/api/user/userApi";

const AdminDashboard: React.FC = () => {
  const { data: bookings } = useGetAllBookingsQuery(undefined); // Fix here by passing undefined
  const { data: facilities } = useGetAllFacilitiesQuery(undefined); // Fix here by passing undefined
  const [addFacility] = useAddFacilityMutation();
  const [newFacility, setNewFacility] = useState({ name: "", description: "" });

  const handleAddFacility = async () => {
    await addFacility(newFacility);
    setNewFacility({ name: "", description: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <h3 className="text-xl mb-4">Facilities</h3>
      <ul>
        {facilities?.map((facility: any) => (
          <li key={facility.id}>
            {facility.name} - {facility.description}
          </li>
        ))}
      </ul>

      <h3 className="text-xl mb-4 mt-8">Add Facility</h3>
      <div>
        <input
          type="text"
          placeholder="Facility Name"
          value={newFacility.name}
          onChange={(e) =>
            setNewFacility({ ...newFacility, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Facility Description"
          value={newFacility.description}
          onChange={(e) =>
            setNewFacility({ ...newFacility, description: e.target.value })
          }
        />
        <button onClick={handleAddFacility}>Add Facility</button>
      </div>

      <h3 className="text-xl mb-4 mt-8">Bookings</h3>
      <ul>
        {bookings?.map((booking: any) => (
          <li key={booking.id}>
            Facility: {booking.facilityName} | Date: {booking.date} | Status:{" "}
            {booking.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
