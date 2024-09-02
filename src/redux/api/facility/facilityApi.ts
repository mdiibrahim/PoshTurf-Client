import { baseApi } from "../api";

export const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: () => "/facility",
      providesTags: ["Facility"],
    }),
    getFacilityById: builder.query({
      query: (id) => `/facility/${id}`,
    }),
    getTopRatedFacilities: builder.query({
      query: () => "/facility/featured",
      providesTags: ["Facility"],
    }),
  }),
});

export const {
  useGetFacilitiesQuery,
  useGetFacilityByIdQuery,
  useGetTopRatedFacilitiesQuery,
} = facilityApi;
