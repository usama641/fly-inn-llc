"use client";
import {
  setDestination,
  setOpenDropdown,
} from "../../../../../redux/slices/filter-slice";
import { RootState } from "../../../../../redux/store";
import { Dropdown } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Peshawar",
  "Multan",
  "Faisalabad",
  "Quetta",
  "Rawalpindi",
  "Sialkot",
  "Murree",
  "Hunza",
  "Skardu",
  "Gilgit",
  "Bahawalpur",
  "Abbottabad",
  "Sargodha",
];

const DestinationDropdown = () => {
  const [search, setSearch] = useState("");
  const currentId = "userMenu";
  const dispatch = useDispatch();
  const { destination, openDropdown } = useSelector(
    (state: RootState) => state.filters
  );
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenChange = (open: boolean) => {
    dispatch(setOpenDropdown(open ? currentId : null));
  };

  const content = (
    <div className="w-[320px] p-4 bg-white rounded-xl shadow-lg">
      <h3 className="text-base font-semibold mb-3">Where are you going?</h3>
      <input
        type="text"
        placeholder="Search destinations"
        className="w-full border border-gray-300 rounded-md p-2 mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="max-h-[200px] overflow-y-auto">
        {filteredCities.length > 0 ? (
          filteredCities.map((city, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => {
                dispatch(setDestination(city));
              }}
            >
              {city}
            </div>
          ))
        ) : (
          <div className="text-gray-400 p-2">No results found</div>
        )}
      </div>
    </div>
  );

  return (
    <Dropdown
      popupRender={() => content}
      trigger={["click"]}
      open={openDropdown === currentId}
      onOpenChange={handleOpenChange}
    >
      <div
        onClick={(e) => e.preventDefault()}
        className={`text-sm px-4 py-4 min-w-[200px] hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all ${
          openDropdown === currentId
            ? "border-gray-200 rounded-full shadow-[4px_0_8px_-2px_rgba(0,0,0,0.1)] text-gray-700"
            : "text-gray-500"
        }`}
      >
        {destination || "Destination"}
      </div>
    </Dropdown>
  );
};

export default DestinationDropdown;
