import StayCard from "@/components/shared/stay-card";
import { Divider } from "antd";
import React from "react";

const SimilarStays = ({ similarStays }: any) => {
  return (
    <div className="mt-12">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-2">
          Similar Stays Nearby
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {similarStays?.map((item: any) => {
          return <StayCard key={item?.id} stay={item} index={item?.id} />;
        })}
      </div>
    </div>
  );
};

export default SimilarStays;
