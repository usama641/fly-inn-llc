import GoogleMapComponent from "@/components/shared/map";
import React from "react";

const MapLocation = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-primary mt-6 mb-4">Location</h2>
      <GoogleMapComponent height="h-[350px]" />
      <p className="text-xs text-gray-500 mt-2">adress</p>
    </div>
  );
};

export default MapLocation;
