import { baseApi } from "../api";

// Authentication API endpoints
export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({ url: "/user/profile/", method: "GET" }),
    }),
    getUserBookings: builder.query({
      query: () => ({ url: "/bookings/user", method: "GET" }),
    }),
    cancelBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bookings"],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetUserBookingsQuery,
  useCancelBookingMutation,
} = userApi;
