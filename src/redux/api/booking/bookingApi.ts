/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../api";

// Authentication API endpoints
export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkAvailability: builder.mutation({
      query: ({ date, facility }) => ({
        url: `/check-availability`,
        method: "GET",
        params: { date, facility },
      }),
    }),
    createBooking: builder.mutation<
      any,
      { facilityId: string; date: string; timeSlot: string }
    >({
      query: (bookingData) => ({
        url: `/bookings`,
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["Bookings"],
    }),
  }),
});

export const { useCheckAvailabilityMutation, useCreateBookingMutation } =
  bookingApi;
