"use client";

import { Button, Dropdown } from "antd";
import { useState } from "react";
import { MdRemove, MdAdd, MdSearch } from "react-icons/md";

const guestTypes = [
  { key: "adults", label: "Adults", description: "Ages 13 or above" },
  { key: "children", label: "Children", description: "Ages 2 – 12" },
  { key: "infants", label: "Infants", description: "Under 2" },
  { key: "pets", label: "Pets", description: "Bringing a service animal?" },
];

export default function AddGuestsDropdown() {
  const [counts, setCounts] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const updateCount = (type: string, delta: number) => {
    setCounts((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type as keyof typeof prev] + delta),
    }));
  };

  const totalGuests =
    counts.adults + counts.children + counts.infants + counts.pets;
  const label =
    totalGuests === 0 && typeof totalGuests === "string"
      ? "Add guests"
      : `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`;

  const menu = (
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
              disabled={counts[key as keyof typeof counts] === 0}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition
                ${
                  counts[key as keyof typeof counts] === 0
                    ? "border-gray-300 text-gray-300 cursor-not-allowed"
                    : "border-gray-400 text-gray-700 hover:bg-gray-100"
                }`}
            >
              <MdRemove size={16} />
            </button>
            <span className="w-4 text-center">
              {counts[key as keyof typeof counts]}
            </span>
            <button
              onClick={() => updateCount(key, 1)}
              className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
            >
              <MdAdd size={16} />
            </button>
          </div>
        </div>
      ))}

      {/* Optional: Add Clear / Apply buttons */}
      <div className="flex justify-end pt-2 border-t border-gray-200 mt-4">
        <Button
          onClick={() =>
            setCounts({ adults: 0, children: 0, infants: 0, pets: 0 })
          }
          className="text-sm text-gray-500 hover:underline "
          type="link"
        >
          Clear
        </Button>
        <Button
          className="text-sm font-semibold text-[#af2322] "
          type="default"
        >
          Apply
        </Button>
      </div>
    </div>
  );

  return (
    <Dropdown popupRender={() => menu} trigger={["click"]}>
      <div className="relative text-sm text-gray-500 min-w-[200px] hover:bg-gray-200 hover:rounded-full flex gap-2 items-center py-4 px-4 cursor-pointer transition">
        {label}
        <div
          className="absolute flex right-3 top-1/2 -translate-y-1/2 
        bg-gradient-to-br from-[#af2322] to-[#8e1a1a] 
        text-white rounded-full p-2 shadow-lg 
       
        hover:scale-105 active:scale-95 
        transition-all duration-150 ease-in-out"
        >
          <MdSearch size={20} color="white" />
        </div>
      </div>
    </Dropdown>
  );
}
