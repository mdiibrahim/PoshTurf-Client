/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import FacilityCard from "./FacilityCard";
import { useGetFacilitiesQuery } from "../../../redux/api/facility/facilityApi";

const FacilityListingPage: React.FC = () => {
  const { data, isLoading, error } = useGetFacilitiesQuery(undefined);
  const facilities = data?.data;
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  if (isLoading) return <p>Loading facilities...</p>;
  if (error) return <p>Error loading facilities.</p>;

  // Filter facilities based on search term and price filter
  const filteredFacilities = facilities?.filter(
    (facility: any) =>
      facility.isDeleted === false &&
      facility.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (priceFilter === null || facility.pricePerHour <= priceFilter)
  );

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Available Facilities</h2>

      {/* Search and Filters */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search by facility name or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-400 rounded w-full"
        />
        <select
          value={priceFilter ?? ""}
          onChange={(e) =>
            setPriceFilter(e.target.value ? Number(e.target.value) : null)
          }
          className="p-2 border border-gray-400 rounded"
        >
          <option value="">Filter by Price</option>
          <option value="50">Up to $50/hr</option>
          <option value="100">Up to $100/hr</option>
          <option value="200">Up to $200/hr</option>
        </select>
      </div>

      {/* Facility Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFacilities?.length ? (
          filteredFacilities.map((facility: any) => (
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
    </div>
  );
};

export default FacilityListingPage;
