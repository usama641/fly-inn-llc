import { FaBed, FaUser } from "react-icons/fa";

const BedroomSection = () => {
  const bedrooms = [
    {
      id: 1352,
      name: "Master",
      no_of_guest: 2,
      no_of_bed: 1,
      bed_type: "King",
    },
    {
      id: 1353,
      name: "Bedroom 2",
      no_of_guest: 2,
      no_of_bed: 1,
      bed_type: "Queen",
    },
    {
      id: 1354,
      name: "Bedroom 3",
      no_of_guest: 2,
      no_of_bed: 1,
      bed_type: "Queen",
    },
  ];
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-primary mt-6 mb-4">
        Bedroom Details
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bedrooms.map((room) => (
          <div
            key={room.id}
            className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-base font-medium text-gray-700 mb-4 tracking-tight">
              {room.name}
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaUser className="text-gray-500 text-base" />
                <span>
                  {room.no_of_guest}{" "}
                  {room.no_of_guest === 1 ? "Guest" : "Guests"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaBed className="text-gray-500 text-base" />
                <span>
                  {room.no_of_bed} {room.bed_type}{" "}
                  {room.no_of_bed > 1 ? "Beds" : "Bed"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedroomSection;
