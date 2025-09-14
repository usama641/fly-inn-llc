import React from "react";

import { stays } from "@/constants/google-map";
import StayCard from "@/components/shared/stay-card";

const HomeStays = () => {
  // Map stays from constants to the StayCard expected structure
  const mappedStays = stays.map((stay) => ({
    name: stay.name,
    location: "", // Not available in stays, so leave blank or map as needed
    price: stay.pricePerNight,
    rating: stay.rating,
    image: stay.imageUrl,
    beds: 1, // Dummy/default values, update if you have real data
    baths: 1,
    guests: 2,
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-6">
      {[...mappedStays, ...mappedStays].map((stay, idx) => (
        <StayCard
          key={idx}
          stay={stay}
          index={idx}
          isLiked={false}
          isCompared={false}
          onToggleLike={() => {}}
          onToggleCompare={() => {}}
        />
      ))}
    </div>
  );
};

export default HomeStays;
