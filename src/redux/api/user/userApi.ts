import { baseApi } from "../api";

// Authentication API endpoints
export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => "/user/profile/",
    }),
    getUserBookings: builder.query({
      query: () => "/bookings/user",
    }),
    cancelBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetUserBookingsQuery,
  useCancelBookingMutation,
} = userApi;
