import Image from "next/image";

import { Button } from "antd";
import Link from "next/link";
import DestinationDropdown from "./components/destination-dropdown";
import TravelDatesDropdown from "./components/travel-dates-dropdown";
import LodgingTypeDropdown from "./components/lodging-type-dropdown";
import AddGuestsDropdown from "./components/guest-dropdown";
import UserInfo from "./components/user-info";
import { FaBed } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="app-container flex items-center justify-between  py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/assets/logo/fly-inn-logo.png" // Replace with your own logo if needed
              alt="Logo"
              width={100}
              height={32}
              className="object-contain"
            />
          </Link>
        </div>
        {/* Center Search Bar */}
        <div className="hidden md:flex items-center justify-between border border-gray-200 rounded-full shadow-md hover:shadow-md transition cursor-pointer relative">
          <div className="flex items-center group">
            <DestinationDropdown />
            <div className="border-l border-gray-300 h-5 group-hover:border-white" />
          </div>
          <TravelDatesDropdown />
          <div className="border-l border-gray-300 h-5" />
          <LodgingTypeDropdown />
          <div className="border-l border-gray-300 h-5" />

          <AddGuestsDropdown />
        </div>
        {/* <FilterModal/> */}

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/public/become-a-host/list-space">
          <div className="border border-[#CE2029] rounded-md px-4 py-1 flex items-center gap-1 hover:shadow-md transition cursor-pointer">
            <FaBed color= "#CE2029"/>
            <Button
              type="link"
              className="text-sm font-semibold hidden md:block text-[#CE2029]"
            >
              Become a host
            </Button>
          </div>

          </Link>

          {/* Profile Menu */}
          <UserInfo />
        </div>
      </div>
    </header>
  );
}
