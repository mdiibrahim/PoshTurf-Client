/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AvailabilityCheckerProps {
  facilityId: string;
}

const AvailabilityChecker: React.FC<AvailabilityCheckerProps> = ({
  facilityId,
}) => {
  const [isBookingLoading, setIsBookingLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlots, setSelectedSlots] = useState<
    Array<{ startTime: string; endTime: string }>
  >([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { data: availableSlots, refetch } = useCheckAvailabilityQuery({
    date: format(selectedDate, "yyyy-MM-dd"),
    facility: facilityId,
  });

  const [bookFacility] = useBookFacilityMutation();
  const token = useSelector((state: RootState) => state.auth.token);
  const role = useSelector((state: RootState) => state.auth.role);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [selectedDate, refetch]);

  const handleSlotSelection = (slot: {
    startTime: string;
    endTime: string;
  }) => {
    const isSelected = selectedSlots.some(
      (s) => s.startTime === slot.startTime && s.endTime === slot.endTime
    );
    if (isSelected) {
      setSelectedSlots(
        selectedSlots.filter(
          (s) => s.startTime !== slot.startTime || s.endTime !== slot.endTime
        )
      );
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const handleBooking = async () => {
    try {
      setIsBookingLoading(true);
      if (role === "admin") {
        toast.error("Admins cannot book facilities.");
        setIsBookingLoading(false);
        return;
      }

      if (!agreedToTerms) {
        toast.error(
          "You must agree to the terms and conditions before booking."
        );
        setIsBookingLoading(false);
        return;
      }

      if (selectedSlots.length === 0) {
        toast.warning("Please select at least one time slot.");
        setIsBookingLoading(false);
        return;
      }

      if (!token) {
        toast.error("You must be logged in to book a facility.");
        setIsBookingLoading(false);
        navigate("/login");
        return;
      }

      const bookingData = {
        facility: facilityId,
        date: format(selectedDate, "yyyy-MM-dd"),
        timeSlots: selectedSlots.map((slot) => ({
          startTime: slot.startTime,
          endTime: slot.endTime,
        })),
      };

      const result = await bookFacility(bookingData).unwrap();

      setIsBookingLoading(false);
      if (result.success) {
        const bookingId = result?.data?._id;
        if (bookingId) {
          toast.info(
            "Your Booking Received. You can find the booking also in your dashboard!"
          );
          navigate(`/checkout/${bookingId}`);
        }
      }
    } catch (err) {
      setIsBookingLoading(false);
      toast.error("Booking failed. Please try again.");
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4 text-primary">
        Check Availability & Book
      </h3>

      <div className="mb-4">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date as Date)}
          dateFormat="yyyy-MM-dd"
          className="p-2 border border-gray-400 rounded w-full"
          minDate={new Date()} // Users can select today and any future date
          showDisabledMonthNavigation
        />
      </div>

      <div className="mb-4">
        <h4 className="font-bold text-lg">Available Time Slots:</h4>
        {availableSlots?.data?.length ? (
          <div className="flex flex-wrap gap-3 mt-4">
            {availableSlots.data.map((slot: any) => (
              <button
                key={slot.startTime}
                onClick={() => handleSlotSelection(slot)}
                className={`px-4 py-2 border rounded-lg transition-all duration-300 ${
                  selectedSlots.some(
                    (s) =>
                      s.startTime === slot.startTime &&
                      s.endTime === slot.endTime
                  )
                    ? "bg-primary text-white"
                    : "bg-white text-gray-800 border-gray-400 hover:bg-gray-100"
                }`}
              >
                {slot.startTime} - {slot.endTime}
              </button>
            ))}
          </div>
        ) : (
          <p>No available slots for this date.</p>
        )}
      </div>

      <div className="mb-6">
        {isBookingLoading && <div className="text-center">Processing...</div>}
        <h3 className="text-2xl font-bold mb-4">Booking Details</h3>
        <p>Date: {format(selectedDate, "yyyy-MM-dd")}</p>
        <p>
          Selected Time Slots:{" "}
          {selectedSlots
            .map((slot) => `${slot.startTime} - ${slot.endTime}`)
            .join(", ")}
        </p>

        <div className="mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={() => setAgreedToTerms(!agreedToTerms)}
              className="mr-2"
            />
            <span>
              I agree to the{" "}
              <a href="/terms" className="text-blue-500 underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-blue-500 underline">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>

        <button
          onClick={handleBooking}
          disabled={!agreedToTerms || isBookingLoading}
          className={`bg-primary text-white px-4 py-2 rounded hover:bg-green-600 mt-4 ${
            !agreedToTerms ? "opacity-50 cursor-not-allowed" : ""
          } w-full md:w-auto`}
        >
          {isBookingLoading ? "Processing..." : "Confirm Booking"}
        </button>
      </div>
    </div>
  );
};

export default AvailabilityChecker;
