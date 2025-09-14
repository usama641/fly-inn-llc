import React from "react";

const HouseRules = ({ mockListing }: { mockListing: any }) => {
  const business = mockListing;
  const parseRules = (htmlString: any) => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return Array.from(doc.body.children).map((p) => p.textContent);
  };

  const houseRules = parseRules(mockListing.rules);

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-2">House Rules</h2>
        <p className="text-gray-600">Important guidelines for your stay</p>
      </div>

      {/* General Rules */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <ul className="list-disc list-inside text-foreground space-y-2">
          {houseRules.map((item, index) => (
            <li key={index} className="text-base pl-1">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Children & Infant Policy */}
          <div className="">
            <div className="flex-shrink-0 mt-1">
              <i className="fa fa-child text-gray-700 text-lg w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-800">Children & Infants</h3>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    business.children_allowed
                      ? "bg-gray-100 text-gray-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {business.children_allowed ? "Allowed" : "Not allowed"}
                </span>
              </div>
              <p className="text-gray-700 mb-2">
                {business.children_allowed
                  ? business.children_rules
                  : "Children are not permitted"}
              </p>
              {business.children_allowed && (
                <div className=" text-sm text-gray-600 mt-2">
                  <div className="flex items-center gap-1">
                    <i className="fa fa-baby text-gray-500 text-xs" />
                    <span>
                      Infants: {business.infant_start_age}-
                      {business.infant_end_age}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="fa fa-child text-gray-500 text-xs" />
                    <span>
                      Children: {business.child_start_age}-
                      {business.child_end_age}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Party Policy */}
          <div className="">
            <div className="flex-shrink-0 mt-1">
              <i className="fa fa-glass-cheers text-gray-700 text-lg w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-800">Parties & Events</h3>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    business.party_allowed
                      ? "bg-gray-100 text-gray-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {business.party_allowed ? "Allowed" : "Not allowed"}
                </span>
              </div>
              <p className="text-gray-700">
                {business.party_allowed
                  ? business.party_rules || "Permitted with guidelines"
                  : "Not permitted on the property"}
              </p>
            </div>
          </div>

          {/* Smoking Policy */}
          <div className="">
            <div className="flex-shrink-0 mt-1">
              <i className="fa fa-smoking-ban text-gray-700 text-lg w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-800">Smoking</h3>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    business.smoking_allowed
                      ? "bg-gray-100 text-gray-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {business.smoking_allowed ? "Allowed" : "Not allowed"}
                </span>
              </div>
              <p className="text-gray-700">
                {business.smoking_allowed
                  ? business.smoking_rules || "Designated areas only"
                  : "Strictly prohibited"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Pet Policy */}
          <div className="">
            <div className="flex-shrink-0 mt-1">
              <i className="fa fa-paw text-gray-700 text-lg w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-800">Pets</h3>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    business.pet_allowed || business.rules_pet_allowed
                      ? "bg-gray-100 text-gray-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {business.pet_allowed || business.rules_pet_allowed
                    ? "Allowed"
                    : "Not allowed"}
                </span>
              </div>
              <p className="text-gray-700 mb-2">
                {business.pet_allowed || business.rules_pet_allowed
                  ? business.pet_rules || "Allowed with conditions"
                  : "Pets are not permitted"}
              </p>
              {(business.pet_allowed || business.rules_pet_allowed) &&
                business.price_per_pet && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                    <i className="fa fa-tag text-gray-500 text-xs" />
                    <span>
                      <span className="font-medium">Fee:</span> $
                      {business.price_per_pet} per pet
                    </span>
                  </div>
                )}
            </div>
          </div>

          {/* Booking Duration */}
          <div className="">
            <div className="flex-shrink-0 mt-1">
              <i className="fa fa-calendar-alt text-gray-700 text-lg w-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Booking Duration</h3>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <i className="fa fa-arrow-down text-gray-500 text-xs" />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Minimum Stay</p>
                    <p className="font-semibold text-gray-800">
                      {business.min_day_booking}{" "}
                      {business.min_day_booking === 1 ? "day" : "days"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa fa-arrow-up text-gray-500 text-xs" />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Maximum Stay</p>
                    <p className="font-semibold text-gray-800">
                      {business.max_day_booking}{" "}
                      {business.max_day_booking === 1 ? "day" : "days"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseRules;
