import { baseApi } from "../api";

// Authentication API endpoints
export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => "/profile", // Replace with your user profile endpoint
    }),
    getUserBookings: builder.query({
      query: () => "/user", // Replace with your user bookings endpoint
    }),
    getAllBookings: builder.query({
      query: () => "/bookings", // Admin only: get all bookings
    }),
    getAllFacilities: builder.query({
      query: () => "/facility", // Admin only: get all facilities
    }),
    addFacility: builder.mutation({
      query: (newFacility) => ({
        url: "/facility",
        method: "POST",
        body: newFacility,
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetUserBookingsQuery,
  useGetAllBookingsQuery,
  useGetAllFacilitiesQuery,
  useAddFacilityMutation,
} = userApi;
