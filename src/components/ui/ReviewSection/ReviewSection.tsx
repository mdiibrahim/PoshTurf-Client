/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  useAddReviewMutation,
  useGetReviewsQuery,
} from "../../../redux/api/review/reviewApi";
import { FaStar } from "react-icons/fa";

interface ReviewSectionProps {
  facility: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ facility }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const { data: reviews, refetch } = useGetReviewsQuery(facility);
  const [addReview] = useAddReviewMutation();
  const [newReview, setNewReview] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const handleAddReview = async () => {
    if (!newReview.trim() || rating === 0) {
      return;
    }
    const reviewData = { facility, comment: newReview, rating };

    try {
      await addReview(reviewData).unwrap();
      setNewReview("");
      setRating(0);
      refetch();
    } catch (error: any) {
      console.error("Failed to add review:", error);
    }
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-primary text-center">
        Reviews
      </h3>

      {token ? (
        <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here..."
            className="p-4 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="flex items-center mb-4">
            <span className="mr-3 text-lg font-semibold">Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-3xl transition-colors duration-300 ${
                  star <= rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleAddReview}
            className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-dark hover:bg-green-600 transition-all duration-300 w-full"
          >
            Submit Review
          </button>
        </div>
      ) : (
        <p className="text-lg text-gray-700 mb-4 text-center">
          You need to be logged in to write a review.
        </p>
      )}

      <div className="mt-8 ">
        <h4 className="text-xl font-bold mb-4 text-center">User Reviews:</h4>
        {reviews?.data?.length ? (
          <ul className="space-y-6">
            {reviews.data.map((review: any) => (
              <li
                key={review._id}
                className="p-6 border rounded-lg bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center  mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`text-2xl ${
                        star <= review.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-800 mb-2">{review.comment}</p>
                <p className="text-gray-600 text-sm">- {review.user.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 text-center">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
