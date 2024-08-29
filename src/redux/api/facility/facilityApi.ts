import { baseApi } from "../api";

// Authentication API endpoints
export const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: () => "/facility",
      providesTags: ["Facility"],
    }),
    getFacilityById: builder.query({
      query: (id) => `/facility/${id}`,
    }),
  }),
});

export const { useGetFacilitiesQuery, useGetFacilityByIdQuery } = facilityApi;
