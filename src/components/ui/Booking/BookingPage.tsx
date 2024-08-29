/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useGetFacilityByIdQuery } from "../../../redux/api/facility/facilityApi";
import { RootState } from "../../../redux/store";
import {
  useBookFacilityMutation,
  useCheckAvailabilityQuery,
} from "../../../redux/api/booking/bookingApi";
import { format } from "date-fns";

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: facility, isLoading, error } = useGetFacilityByIdQuery(id);
  const token = useSelector((state: RootState) => state?.auth?.token);
  const [createBooking] = useBookFacilityMutation();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [availableSlots, setAvailableSlots] = useState<
    Array<{ startTime: string; endTime: string }>
  >([]);
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const { data: availabilityData } = useCheckAvailabilityQuery(
    {
      date: format(selectedDate || new Date(), "yyyy-MM-dd"),
      facility: id,
    },
    {
      skip: !selectedDate,
    }
  );

  useEffect(() => {
    if (availabilityData) {
      setAvailableSlots(availabilityData.data);
    }
  }, [availabilityData]);

  const handleBooking = async () => {
    if (!selectedSlot) {
      toast.error("Please select a time slot.");
      return;
    }

    if (!token) {
      toast.error("You must be logged in to book a facility.");
      navigate("/login");
      return;
    }

    try {
      const bookingData: any = {
        facilityId: id,
        date: format(selectedDate || new Date(), "yyyy-MM-dd"),
        timeSlot: selectedSlot,
      };
      const bookingResponse = await createBooking(bookingData).unwrap();

      toast.success("Booking successful!");
      navigate(`/payment/${bookingResponse.bookingId}`);
    } catch (error: any) {
      console.log(error);
      toast.error("Booking failed. Please try again.");
    }
  };

  if (isLoading) return <p>Loading facility details...</p>;
  if (error) return <p>Error loading facility details.</p>;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Book {facility.name}</h2>

      <div className="mb-6">
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <p className="text-gray-600 mb-2">Location: {facility.location}</p>
        <p className="text-gray-600 mb-2">Price: ${facility.pricePerHour}/hr</p>
        <p className="text-gray-600">{facility.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Check Availability</h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="p-2 border border-gray-400 rounded w-full mb-4"
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          showDisabledMonthNavigation
        />

        {availableSlots.length > 0 && (
          <div className="mt-4">
            <h4 className="text-xl font-bold mb-2">Available Slots</h4>
            <ul>
              {availableSlots.map((slot) => (
                <li key={slot.startTime} className="mb-2">
                  <button
                    onClick={() => setSelectedSlot(slot.startTime)}
                    className={`px-4 py-2 rounded ${
                      selectedSlot === slot.startTime
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {slot.startTime} - {slot.endTime}
                  </button>
                </li>
              ))}
            </ul>
          </div>
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

export default BookingPage;
