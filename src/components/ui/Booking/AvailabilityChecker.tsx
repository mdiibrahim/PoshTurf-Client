/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import {
  useBookFacilityMutation,
  useCheckAvailabilityQuery,
} from "../../../redux/api/booking/bookingApi";
import { format } from "date-fns";

interface AvailabilityCheckerProps {
  facilityId: string;
}

const AvailabilityChecker: React.FC<AvailabilityCheckerProps> = ({
  facilityId,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const { data: availableSlots, refetch } = useCheckAvailabilityQuery({
    date: selectedDate.toISOString().split("T")[0],
    facility: facilityId,
  });

  const [bookFacility] = useBookFacilityMutation();
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    refetch(); // Refetch slots whenever the selected date changes
  }, [selectedDate, refetch]);

  const handleBooking = async () => {
    if (!token) {
      navigate("/login");
    } else if (selectedSlot) {
      await bookFacility({
        facilityId,
        date: selectedDate.toISOString().split("T")[0],
        startTime: selectedSlot.split(" - ")[0],
        endTime: selectedSlot.split(" - ")[1],
      });

      navigate("/checkout");
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Check Availability & Book</h3>

      <div className="mb-4">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date as Date)}
          dateFormat="yyyy-MM-dd"
          className="p-2 border border-gray-400 rounded"
          minDate={new Date()}
          showDisabledMonthNavigation
        />
      </div>

      <div className="mb-4">
        <h4 className="font-bold">Available Time Slots:</h4>
        {availableSlots?.data?.length ? (
          <ul className="space-y-2">
            {availableSlots.data.map((slot: any) => (
              <li
                key={slot.startTime}
                className={`p-2 border rounded cursor-pointer ${
                  selectedSlot === `${slot.startTime} - ${slot.endTime}`
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() =>
                  setSelectedSlot(`${slot.startTime} - ${slot.endTime}`)
                }
              >
                {slot.startTime} - {slot.endTime}
              </li>
            ))}
          </ul>
        ) : (
          <p>No available slots for this date.</p>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Booking Details</h3>
        <p>Date: {format(selectedDate || new Date(), "yyyy-MM-dd")}</p>
        <p>Selected Time Slot: {selectedSlot}</p>
        <button
          onClick={handleBooking}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default AvailabilityChecker;
