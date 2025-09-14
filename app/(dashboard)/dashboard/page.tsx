"use client";
import React from "react";
import { useRouter } from "next/navigation";
import BookingPage from "./bookings/page";

const Page = () => {
  const router = useRouter();

  const renderCard = (title: string, description: string, link: string) => (
    <div className="p-4 h-40 border border-gray-200 bg-white rounded-xl flex justify-between items-start shadow-sm">
      <div className="text-left">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        onClick={() => router.push(link)}
        className="px-3 py-1 bg-[#A02020] text-white text-sm border-[#A02020] rounded-md">
        Manage
      </button>
    </div>
  );
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {renderCard("Listings", "0 New Listing", "/dashboard/listings")}
        {renderCard("Reservations", "0 New Reservation", "/dashboard/reservations")}
        {renderCard("Users", "0 New User", "/dashboard/users")}
      </div>

        <div>
          <BookingPage  />
        </div>
    </>
  );
};

export default Page;
