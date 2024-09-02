/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import FacilityCard from "./FacilityCard";
import { useGetFacilitiesQuery } from "../../../redux/api/facility/facilityApi";
import { RingLoader } from "react-spinners";

import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const FacilityListingPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [facilitiesPerPage] = useState(6); // Number of facilities per page
  const { data, isLoading, error } = useGetFacilitiesQuery(undefined);

  const facilities = data?.data;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<string>("default");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <RingLoader color="#663635" size={50} />
      </div>
    );
  }

  if (error && "data" in error) {
    const fetchError = error as FetchBaseQueryError;
    if (fetchError?.data && (fetchError.data as any).statusCode === 404) {
      return (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
          No Facilities At all!!
        </div>
      );
    }
  }

  // Filter and Sort facilities based on search term, price filter, and sort order
  const filteredFacilities = facilities
    ?.filter(
      (facility: any) =>
        facility.isDeleted === false &&
        facility.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    ?.sort((a: any, b: any) => {
      if (sortOrder === "low-to-high") {
        return a.pricePerHour - b.pricePerHour;
      }
      if (sortOrder === "high-to-low") {
        return b.pricePerHour - a.pricePerHour;
      }
      return 0; // default order
    });

  // Pagination Logic
  const indexOfLastFacility = currentPage * facilitiesPerPage;
  const indexOfFirstFacility = indexOfLastFacility - facilitiesPerPage;
  const currentFacilities = filteredFacilities?.slice(
    indexOfFirstFacility,
    indexOfLastFacility
  );

  const totalPages = Math.ceil(filteredFacilities?.length / facilitiesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Available Facilities</h2>

      {/* Search, Filters, and Sort */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search by facility name or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-400 rounded w-full"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border border-gray-400 rounded"
        >
          <option value="default">Sort by Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Facility Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentFacilities?.length ? (
          currentFacilities.map((facility: any) => (
            <FacilityCard
              key={facility._id}
              id={facility._id}
              name={facility.name}
              image={facility.image}
              pricePerHour={facility.pricePerHour}
              location={facility.location}
            />
          ))
        ) : (
          <p>No facilities found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-2 rounded  ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FacilityListingPage;
