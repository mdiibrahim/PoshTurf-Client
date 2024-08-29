/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import { useGetFacilityByIdQuery } from "../../../redux/api/facility/facilityApi";
import { RootState } from "../../../redux/store";
import {
  useCheckAvailabilityMutation,
  useCreateBookingMutation,
} from "../../../redux/api/booking/bookingApi";

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: facility, isLoading, error } = useGetFacilityByIdQuery(id);
  const [checkAvailability] = useCheckAvailabilityMutation(undefined);
  const [createBooking] = useCreateBookingMutation();

  const [bookingDate, setBookingDate] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const token = useSelector((state: RootState) => state?.auth?.token);

  const handleCheckAvailability = async () => {
    if (!bookingDate) {
      toast.error("Please select a date.");
      return;
    }

    try {
      const response = await checkAvailability({
        date: bookingDate,
        facility: id,
      }).unwrap();
      setAvailableSlots(response.data); // Assume API returns a `data` object
    } catch (error: any) {
      console.log(error);
      toast.error("Failed to check availability. Please try again.");
    }
  };

  const handleBooking = async () => {
    if (!selectedSlot) {
      toast.error("Please select a time slot.");
      return;
    }

    if (!token) {
      toast.error("You must be logged in to book a facility.");
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }

    try {
      const bookingData: any = {
        facilityId: id,
        date: bookingDate,
        timeSlot: selectedSlot,
      };
      const bookingResponse = await createBooking(bookingData).unwrap();

      toast.success("Booking successful!");
      // Redirect to payment page
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
        <input
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          className="p-2 border border-gray-400 rounded w-full mb-4"
        />
        <button
          onClick={handleCheckAvailability}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Check Availability
        </button>

        {availableSlots.length > 0 && (
          <div className="mt-4">
            <h4 className="text-xl font-bold mb-2">Available Slots</h4>
            <ul>
              {availableSlots.map((slot) => (
                <li key={slot} className="mb-2">
                  <button
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-4 py-2 rounded ${
                      selectedSlot === slot
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {slot}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Booking Details</h3>
        <p>Date: {bookingDate}</p>
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
