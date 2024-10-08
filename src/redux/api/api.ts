/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base API setup
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://posh-turf-server.vercel.app/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.token;
      if (token) {
        headers.set("Authorization", `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["User", "Facility", "Bookings", "Reviews"],
  endpoints: () => ({}),
});
