import { baseApi } from "../api";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ["Reviews"],
    }),
    addReview: builder.mutation({
      query: (newReview) => ({
        url: "/reviews",
        method: "POST",
        body: newReview,
      }),

      invalidatesTags: ["Reviews"],
    }),
  }),
});

export const { useGetReviewsQuery, useAddReviewMutation } = reviewApi;
