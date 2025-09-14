import React from "react";

const Description = ({ mockListing }: any) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-primary mt-6 mb-4">
        About this stay
      </h2>
      <div
        dangerouslySetInnerHTML={{ __html: mockListing.description }}
        className="text-gray-600 font-light text-[15px] leading-[22px]"
      />
    </div>
  );
};

export default Description;
