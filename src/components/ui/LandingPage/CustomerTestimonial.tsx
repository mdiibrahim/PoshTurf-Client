/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider from "react-slick";
import { useGetTestimonialsQuery } from "../../../redux/api/review/reviewApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerTestimonial: React.FC = () => {
  const { data, isLoading, error } = useGetTestimonialsQuery(undefined);

  if (isLoading)
    return (
      <div className="container mx-auto p-8 text-center">
        <p>Loading testimonials...</p>
      </div>
    );
  if (error)
    return (
      <div className="container mx-auto p-8 text-center">
        <p>Error loading testimonials.</p>
      </div>
    );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container bg-gradient-to-r from-green-50 to-blue-100 p-8 my-10">
      <h2 className="text-4xl font-bold text-center mb-16">
        Customer Testimonials
      </h2>
      <Slider {...settings}>
        {data?.data?.map((testimonial: any) => (
          <div
            key={testimonial._id}
            className="p-4"
            style={{
              backgroundImage: `url(${
                testimonial?.facility?.image || "/default-image.jpg"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="bg-white bg-opacity-80 shadow rounded-lg p-10 max-w-md text-center">
              <h3 className="text-xl font-bold mb-2">
                {testimonial.facility.name || "Facility Name"}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                {testimonial.facility.location || "Facility Location"}
              </p>
              <p className="text-lg font-semibold mb-2">
                "{testimonial.comment || "No comment provided."}"
              </p>
              <p className="text-sm text-gray-500">
                - {testimonial.user.name || "Anonymous"}
              </p>
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
