import { baseApi } from "../api";

// Authentication API endpoints
export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminProfile: builder.query({
      query: () => ({
        url: "/user/profile", // Define the URL here
        method: "GET", // Specify the method (for GET requests, this is optional since it's the default)
      }),
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET", // Specify method if it's not a default GET request
      }),
      providesTags: ["Bookings"],
    }),
    getAllFacilities: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
      providesTags: ["Facility"],
    }),
    createFacility: builder.mutation({
      query: (newFacility) => ({
        url: "/facility",
        method: "POST", // For mutation, specify method as POST
        body: newFacility, // Include body data
      }),
      invalidatesTags: ["Facility"],
    }),
    updateFacility: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/facility/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Facility"],
    }),

    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE", // DELETE method
      }),
      invalidatesTags: ["Facility"],
    }),
    createAdmin: builder.mutation({
      query: (newAdmin) => ({
        url: "/auth/create-admin",
        method: "POST",
        body: { ...newAdmin },
      }),
    }),
  }),
});

export const {
  useGetAdminProfileQuery,
  useGetAllBookingsQuery,
  useGetAllFacilitiesQuery,
  useCreateFacilityMutation,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
  useCreateAdminMutation,
} = adminApi;
