import StayCard from "@/components/shared/stay-card";
import React from "react";

const RelevantListing = ({ stays }: { stays: any[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {stays.map((stay, idx) => (
        <StayCard key={idx} stay={stay} index={idx} />
      ))}
    </div>
  );
};

export default RelevantListing;
