/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useGetTopRatedFacilitiesQuery } from "../../../redux/api/facility/facilityApi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const TopRatedFacilities: React.FC = () => {
  const { data, isLoading, error } = useGetTopRatedFacilitiesQuery(undefined);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true, // Adjusts slider height based on content
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <ClipLoader color="#663635" size={50} />
      </div>
    );
  }

  if (error) {
    toast.error("Error loading facilities. Please try again.");
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
        Error loading facilities. Please try again later.
      </div>
    );
  }

  return (
    <div className="container my-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Top Rated Facilities
      </h2>
      <Slider {...settings}>
        {data?.data?.map((facility: any) => (
          <div key={facility._id} className="relative p-6 w-full">
            <div
              className="bg-cover bg-center h-[400px] rounded-lg shadow-lg overflow-hidden"
              style={{
                backgroundImage: `url(${facility?.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-2 text-center">
                  {facility.name}
                </h3>
                <p className="text-lg text-white mb-4 text-center">
                  {facility.location}
                </p>
                <div className="flex justify-center mb-4">
                  <div className="text-yellow-500 text-lg">
                    {"★".repeat(facility.rating)}
                    {"☆".repeat(5 - facility.rating)}
                  </div>
                </div>
                <p className="text-lg text-white mb-4 text-center">
                  ${facility.pricePerHour}/hr
                </p>
                <Link
                  to={`/facility/${facility._id}`}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopRatedFacilities;
