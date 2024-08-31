/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useGetTopRatedFacilitiesQuery } from "../../../redux/api/facility/facilityApi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopRatedFacilities: React.FC = () => {
  const { data, isLoading, error } = useGetTopRatedFacilitiesQuery(undefined);

  if (isLoading) return <p>Loading top-rated facilities...</p>;
  if (error) return <p>Error loading top-rated facilities.</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Top Rated Facilities</h2>
      <Slider {...settings}>
        {data?.data?.map((facility: any) => (
          <div key={facility._id} className="relative p-4">
            <div
              className="bg-cover bg-center h-[400px] rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${facility?.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {facility.name}
                </h3>
                <p className="text-lg text-white mb-4">{facility.location}</p>
                <div className="text-yellow-500 mb-4">
                  {"★".repeat(facility.rating)}
                  {"☆".repeat(5 - facility.rating)}
                </div>
                <p className="text-lg text-white mb-4">
                  ${facility.pricePerHour}/hr
                </p>
                <Link
                  to={`/facility/${facility._id}`}
                  className="bg-primary btn text-white px-4 py-2 rounded hover:bg-brown-700"
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
