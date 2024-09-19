/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useGetTopRatedFacilitiesQuery } from "../../../redux/api/facility/facilityApi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

// Define Facility type to avoid using "any"
interface Facility {
  _id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  pricePerHour: number;
}

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

  // Use useEffect to show toast when there's an error
  useEffect(() => {
    if (error) {
      toast.error("Error loading facilities. Please try again.");
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <RingLoader color="#663635" size={50} />
      </div>
    );
  }

  // Enhanced error handling
  if (error && "data" in error) {
    console.log(error);
    const fetchError = error as FetchBaseQueryError;
    if (fetchError?.data && (fetchError.data as any).statusCode === 404) {
      return (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
          No Facilities At all!!
        </div>
      );
    } else {
      return (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
          An error occurred while fetching facilities. Please try again later.
        </div>
      );
    }
  }
  console.log(data.data);

  // Handle case when there's no facilities data
  if (!data?.data || data.data.length === 0) {
    return (
      <div className="bg-yellow-100 text-yellow-700 p-4 rounded-lg text-center">
        No Facilities Available at the moment.
      </div>
    );
  }

  return (
    <div className="container my-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Top Rated Facilities
      </h2>
      <Slider {...settings}>
        {data.data.map((facility: Facility) => (
          <div key={facility._id} className="relative p-6 w-full">
            <div
              className="bg-cover bg-center h-[400px] rounded-lg shadow-lg overflow-hidden"
              style={{
                backgroundImage: `url(${facility.image})`,
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
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
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
