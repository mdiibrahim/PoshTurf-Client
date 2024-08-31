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
    console.log(reviewData);

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
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Reviews</h3>

      {token ? (
        <div className="mb-4">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here..."
            className="p-2 border border-gray-400 rounded w-full mb-2"
          />
          <div className="flex items-center mb-2">
            <span className="mr-2">Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer ${
                  star <= rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleAddReview}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Review
          </button>
        </div>
      ) : (
        <p>You need to be logged in to write a review.</p>
      )}

      <div className="mt-4">
        <h4 className="text-lg font-bold mb-2">User Reviews:</h4>
        {reviews?.data?.length ? (
          <ul className="space-y-4">
            {reviews.data.map((review: any) => (
              <li key={review._id} className="p-4 border rounded bg-gray-100">
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`${
                        star <= review.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-800">{review.comment}</p>
                <p className="text-gray-600 text-sm">- {review.user.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
