import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base API setup
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Facility", "Bookings"],
  endpoints: () => ({}),
});
