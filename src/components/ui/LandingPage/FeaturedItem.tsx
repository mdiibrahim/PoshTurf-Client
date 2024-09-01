/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useGetTopRatedFacilitiesQuery } from "../../../redux/api/facility/facilityApi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div className="container mx-auto p-8 text-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"></div>
        <p className="text-lg mt-2">Loading top-rated facilities...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 text-center">
        <p className="text-lg text-red-500">
          Error loading top-rated facilities. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container ">
      <h2 className="text-3xl font-bold mb-6 text-center">
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
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
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
