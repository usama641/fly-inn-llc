import {
  CarOutlined,
  CompassOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  ApartmentOutlined,
  StarOutlined,
  BankOutlined,
} from "@ant-design/icons";
import React from "react";
import FiltersModal from "./components/filter-modal";
import { MdFlight } from "react-icons/md";
import Link from "next/link";

const FilterLinks = () => {
  return (
    <div className="bg-white border-t border-gray-200 shadow-lg">
      <div className="app-container ">
        <div className="flex items-center justify-center gap-8  py-2 ">
          <div className="flex space-x-8">
            {[
              { icon: <HomeOutlined />, label: "Stays", link: "/listings" },
              {
                icon: <CompassOutlined />,
                label: "Experiences",
                link: "/experiences",
              },
              {
                icon: <CarOutlined />,
                label: "Car Rentals",
                link: "/car-rentals",
              },
              {
                icon: <EnvironmentOutlined />,
                label: "Attractions",
                link: "/attractions",
              },
              { icon: <MdFlight />, label: "Flights", link: "/flights" },
              {
                icon: <ApartmentOutlined />,
                label: "Vacation Homes",
                link: "/vacation-homes",
              },
              {
                icon: <ApartmentOutlined />,
                label: "Apartments",
                link: "/apartments",
              },
              { icon: <StarOutlined />, label: "Resorts", link: "/resorts" },
              { icon: <HomeOutlined />, label: "Villas", link: "/villas" },
              { icon: <BankOutlined />, label: "Hostels", link: "/hostels" },
              { icon: <BankOutlined />, label: "B&Bs", link: "/b-and-bs" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center cursor-pointer group"
              >
                <Link href={item.link}>
                  <div className="p-2 rounded-full transition-all duration-200 transform group-hover:scale-[1.1] group-hover:bg-white group-hover:shadow-md">
                    <div className="flex text-black items-center justify-center transition-transform duration-200">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-xs text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <FiltersModal />
        </div>
      </div>
    </div>
  );
};

export default FilterLinks;
