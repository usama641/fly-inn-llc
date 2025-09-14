import React from "react";
import { FaUsers, FaBed, FaBath, FaUserCircle } from "react-icons/fa";

const SummaryCard = ({ mockListing }: any) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
      {/* Left Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          {mockListing.type_of_space} Hosted by{" "}
          <span className="text-gray-700">{"Sam"}</span>
        </h2>

        <div className="mt-2 flex flex-wrap items-center text-sm text-gray-600 gap-x-4 gap-y-2">
          <div className="flex items-center gap-1">
            <FaUsers className="text-gray-500" />
            <span>{mockListing.no_of_guest} Guests</span>
          </div>

          <div className="flex items-center gap-1">
            <FaBed className="text-gray-500" />
            <span>
              {mockListing.no_of_beds} Beds with {mockListing.no_of_bedrooms}{" "}
              Bedrooms
            </span>
          </div>

          <div className="flex items-center gap-1">
            <FaBath className="text-gray-500" />
            <span>{parseFloat(mockListing.no_of_bathrooms)} Full</span>
          </div>
        </div>
      </div>

      {/* Right Section: Host Avatar */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
          <FaUserCircle className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
