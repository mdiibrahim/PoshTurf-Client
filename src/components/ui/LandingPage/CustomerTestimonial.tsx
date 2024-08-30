/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Slider from "react-slick";
import { useGetTestimonialsQuery } from "../../../redux/api/review/reviewApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerTestimonial: React.FC = () => {
  const { data, isLoading, error } = useGetTestimonialsQuery(undefined);

  if (isLoading) return <p>Loading testimonials...</p>;
  if (error) return <p>Error loading testimonials.</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
      <Slider {...settings}>
        {data?.data?.map((testimonial: any) => (
          <div
            key={testimonial._id}
            className="p-4"
            style={{
              backgroundImage: `url(${testimonial.facility.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
            }}
          >
            <div className="bg-white bg-opacity-80 shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                {testimonial.facility.name}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                {testimonial.facility.location}
              </p>
              <p className="text-lg font-semibold mb-2">
                "{testimonial.comment}"
              </p>
              <p className="text-sm text-gray-500">- {testimonial.user.name}</p>
              <div className="text-yellow-500">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerTestimonial;
