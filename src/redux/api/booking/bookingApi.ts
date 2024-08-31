import { baseApi } from "../api";

// Authentication API endpoints
export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkAvailability: builder.query({
      query: ({ date, facility }) => ({
        url: `/bookings/check-availability`,
        params: { date, facility },
      }),
    }),
    bookFacility: builder.mutation({
      query: (bookingDetails) => ({
        url: `/bookings`,
        method: "POST",
        body: bookingDetails,
      }),
    }),
    getBookingDetails: builder.query({
      query: (bookingId: string) => `/bookings/${bookingId}`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useCheckAvailabilityQuery,
  useBookFacilityMutation,
  useGetBookingDetailsQuery,
} = bookingApi;
