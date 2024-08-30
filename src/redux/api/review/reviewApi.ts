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
    getTestimonials: builder.query({
      query: () => "/reviews",
      providesTags: ["Reviews"],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useAddReviewMutation,
  useGetTestimonialsQuery,
} = reviewApi;
