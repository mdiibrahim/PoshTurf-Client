/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider from "react-slick";
import { useGetTestimonialsQuery } from "../../../redux/api/review/reviewApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RingLoader } from "react-spinners";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface Testimonial {
  _id: string;
  facility: {
    name: string;
    location: string;
    image: string;
  };
  comment: string;
  rating: number;
  user: {
    name: string;
  };
}

const CustomerTestimonial: React.FC = () => {
  const { data, isLoading, error } = useGetTestimonialsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <RingLoader color="#663635" size={50} />
      </div>
    );
  }

  // Enhanced error handling
  if (error) {
    const fetchError = error as FetchBaseQueryError;
    if (fetchError?.data && (fetchError.data as any).statusCode === 404) {
      return (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
          No Reviews At all!!
        </div>
      );
    } else {
      return (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
          An error occurred while fetching testimonials. Please try again later.
        </div>
      );
    }
  }
  console.log(data.data);

  // Handle case when there's no testimonials data
  if (!data?.data || data.data.length === 0) {
    return (
      <div className="bg-yellow-100 text-yellow-700 p-4 rounded-lg text-center">
        No Testimonials Available at the moment.
      </div>
    );
  }

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
      <h2 className="text-4xl font-bold text-center mb-16 text-primary">
        Customer Testimonials
      </h2>
      <Slider {...settings}>
        {data.data.map((testimonial: Testimonial) => (
          <div key={testimonial._id} className="p-4">
            <div
              className="relative h-[350px] rounded-lg shadow-lg overflow-hidden"
              style={{
                backgroundImage: `url(${testimonial.facility.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                {/* Content */}
                <div className="text-center text-white p-6 bg-primary bg-opacity-60 rounded-lg max-w-md mx-auto">
                  <h3 className="text-xl font-bold mb-2">
                    {testimonial.facility.name || "Facility Name"}
                  </h3>
                  <p className="text-sm mb-4">
                    {testimonial.facility.location || "Facility Location"}
                  </p>
                  <p className="text-lg font-semibold mb-4">
                    "{testimonial.comment || "No comment provided."}"
                  </p>
                  <p className="text-sm">
                    - {testimonial.user.name || "Anonymous"}
                  </p>
                  <div className="text-yellow-500 mt-2">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerTestimonial;
