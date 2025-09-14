import React from "react";
import { Button, Input, Select, Card, Avatar } from "antd";
import { HeartOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import GoogleMapComponent from "../../../../../components/shared/map";
import RelevantListing from "./_components/relevant-listing";

const { Option } = Select;

export default function SearchResultsPage() {
  const stays = [
    {
      name: "Luxury Lakeview Villa",
      location: "Skardu, Pakistan",
      price: 320,
      rating: 4.8,
      image: "/images/stays/lakeview-villa.jpg",
      beds: 3,
      baths: 2,
      guests: 6,
    },
    {
      name: "Mountain Cabin Escape",
      location: "Murree, Pakistan",
      price: 180,
      rating: 4.6,
      image: "/images/stays/mountain-cabin.jpg",
      beds: 2,
      baths: 1,
      guests: 4,
    },
    {
      name: "Modern City Apartment",
      location: "Islamabad, Pakistan",
      price: 220,
      rating: 4.7,
      image: "/images/stays/city-apartment.jpg",
      beds: 2,
      baths: 2,
      guests: 5,
    },
    {
      name: "Beachfront Bungalow",
      location: "Karachi, Pakistan",
      price: 280,
      rating: 4.5,
      image: "/images/stays/beach-bungalow.jpg",
      beds: 3,
      baths: 2,
      guests: 6,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
    {
      name: "Desert Glamping Tent",
      location: "Cholistan Desert",
      price: 150,
      rating: 4.2,
      image: "/images/stays/desert-glamp.jpg",
      beds: 1,
      baths: 1,
      guests: 2,
    },
  ];

  return (
    <div className="app-container my-10">
      {/* Main Content */}
      <div className="h-[calc(100vh-5rem)] flex gap-10">
        {/* Left Scrollable Listings */}
        <div className="w-1/2 h-full overflow-y-auto ">
          <p className="mb-4">Over 10 stays</p>
          <RelevantListing stays={stays} />
        </div>

        {/* Right Fixed Map */}
        <div className="w-1/2 h-[calc(100vh-10rem)] sticky top-0">
          <GoogleMapComponent
            height="h-full w-full "
            mapClasses="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
