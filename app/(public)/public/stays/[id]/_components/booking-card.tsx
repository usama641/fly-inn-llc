import React, { useState } from "react";
import { Button, DatePicker, Divider, Dropdown } from "antd";
import { FaCalendarAlt, FaChevronDown, FaMinus, FaPlus } from "react-icons/fa";

const { RangePicker } = DatePicker;

const guestTypes = [
  { key: "adults", label: "Adults", description: "Ages 13 or above" },
  { key: "children", label: "Children", description: "Ages 2 – 12" },
  { key: "infants", label: "Infants", description: "Under 2" },
  { key: "pets", label: "Pets", description: "Bringing a service animal?" },
];

const BookingCard = ({ mockListing }: any) => {
  const [guestCounts, setGuestCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [dateRange, setDateRange] = useState([]);

  const totalGuests =
    guestCounts.adults +
    guestCounts.children +
    guestCounts.infants +
    guestCounts.pets;

  const updateCount = (type: string, delta: number) => {
    setGuestCounts((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type as keyof typeof prev] + delta),
    }));
  };

  const handleDateChange = (dates: any) => {
    setDateRange(dates);
  };

  const guestDropdownMenu = (
    <div className="w-[340px] bg-white rounded-xl shadow-lg p-5 space-y-6">
      {guestTypes.map(({ key, label, description }) => (
        <div key={key} className="flex justify-between items-center">
          <div>
            <div className="text-[15px] font-medium text-gray-800">{label}</div>
            <div className="text-sm text-gray-500">{description}</div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => updateCount(key, -1)}
              disabled={guestCounts[key as keyof typeof guestCounts] === 0}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition
                ${
                  guestCounts[key as keyof typeof guestCounts] === 0
                    ? "border-gray-300 text-gray-300 cursor-not-allowed"
                    : "border-gray-400 text-gray-700 hover:bg-gray-100"
                }`}
            >
              <FaMinus size={12} />
            </button>
            <span className="w-4 text-center">
              {guestCounts[key as keyof typeof guestCounts]}
            </span>
            <button
              onClick={() => updateCount(key, 1)}
              className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
            >
              <FaPlus size={12} />
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between pt-4 border-t border-gray-200">
        <button
          onClick={() =>
            setGuestCounts({ adults: 1, children: 0, infants: 0, pets: 0 })
          }
          className="text-sm text-gray-500 hover:underline"
        >
          Clear all
        </button>
        <button className="text-sm font-semibold text-[#FF5A5F] hover:opacity-90">
          Done
        </button>
      </div>
    </div>
  );

  return (
    <div className="border border-gray-200 rounded-2xl p-6 mb-6 shadow-xl bg-white sticky top-24 transition-all hover:shadow-2xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">
            ${parseFloat(mockListing.nightly_price).toFixed(2)}{" "}
            <span className="text-lg font-normal text-gray-500">night</span>
          </h2>
        </div>
      </div>

      <div className="rounded-lg border border-gray-300 overflow-hidden mb-4">
        <RangePicker
          className="w-full border-0 p-4"
          suffixIcon={<FaCalendarAlt className="text-gray-400" />}
          separator={<span className="text-gray-300">→</span>}
          onChange={handleDateChange}
          size="small"
          placeholder={["CHECK-IN", "CHECKOUT"]}
        />
      </div>

      <Dropdown
        popupRender={() => guestDropdownMenu}
        trigger={["click"]}
        placement="bottomLeft"
      >
        <div className="flex justify-between items-center rounded-lg border border-gray-300 px-4 py-3 mb-4 cursor-pointer hover:border-gray-500 transition-colors">
          <div>
            <div className="text-xs font-medium text-gray-500 ">GUESTS</div>
            <div className="font-medium">
              {totalGuests} guest{totalGuests !== 1 ? "s" : ""}
            </div>
          </div>
          <FaChevronDown className="text-gray-500" />
        </div>
      </Dropdown>

      <Button
        type="primary"
        block
        className="h-12 text-lg font-medium rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg border-0"
      >
        Reserve
      </Button>

      <div className="mt-4 text-center text-sm text-gray-600">
        You won't be charged yet
      </div>

      <Divider className="my-4" dashed />
    </div>
  );
};

export default BookingCard;
