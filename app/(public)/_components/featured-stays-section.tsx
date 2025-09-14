"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button, Tooltip, Rate } from "antd";
import { HeartOutlined, HeartFilled, StarFilled } from "@ant-design/icons";
import { FaBed, FaBath, FaUser, FaPlane, FaExchangeAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StayCard from "@/components/shared/stay-card";

const FeaturedStaysSection = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [comparedItems, setComparedItems] = useState<number[]>([]);

  const toggleLike = (index: number) => {
    setLikedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleCompare = (index: number) => {
    setComparedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const stays = [
    {
      name: "Luxury Lakeview Resort & Spa with Private Dock",
      location: "Denver International Airport (DEN)",
      price: 189,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      beds: 3,
      baths: 2,
      guests: 6,
    },
    {
      name: "Mountain Cabin Retreat with Panoramic Views",
      location: "Aspen-Pitkin County Airport (ASE)",
      price: 210,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800",
      beds: 2,
      baths: 1,
      guests: 4,
    },
    {
      name: "Beachfront Villa with Infinity Pool",
      location: "Miami International Airport (MIA)",
      price: 299,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      beds: 4,
      baths: 3,
      guests: 8,
    },
    {
      name: "Desert Oasis Retreat with Private Spa",
      location: "Phoenix Sky Harbor International (PHX)",
      price: 159,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
      beds: 3,
      baths: 2,
      guests: 6,
    },
    {
      name: "Downtown Urban Loft with Rooftop Access",
      location: "John F. Kennedy International (JFK)",
      price: 245,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      beds: 2,
      baths: 1,
      guests: 4,
    },
    {
      name: "Country Estate with Private Airstrip Access",
      location: "Dallas/Fort Worth International (DFW)",
      price: 325,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800",
      beds: 5,
      baths: 4,
      guests: 10,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="app-container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl mb-1">
            Our <span className="text-[#AF2322]">Featured</span> Stays
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Discover premium properties near major airports, perfect for
            aviation travelers
          </p>
        </div>

        {/* Desktop Grid (5 columns) */}
        <div className="hidden xl:grid grid-cols-5 gap-5">
          {stays.map((item, idx) => (
            <StayCard
              key={idx}
              stay={item}
              index={idx}
              isLiked={likedItems.includes(idx)}
              isCompared={comparedItems.includes(idx)}
              onToggleLike={toggleLike}
              onToggleCompare={toggleCompare}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="xl:hidden relative">
          <Swiper
            loop={false}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation={{
              prevEl: ".featured-prev",
              nextEl: ".featured-next",
            }}
            pagination={{ clickable: true }}
          >
            {stays.map((item, idx) => (
              <SwiperSlide key={idx}>
                <StayCard
                  key={idx}
                  stay={item}
                  index={idx}
                  isLiked={likedItems.includes(idx)}
                  isCompared={comparedItems.includes(idx)}
                  onToggleLike={toggleLike}
                  onToggleCompare={toggleCompare}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-3 mt-10">
            <div className="featured-prev flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer transition-all duration-300 hover:border-[#AF2322] hover:text-[#AF2322]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
                />
              </svg>
            </div>
            <div className="featured-next flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer transition-all duration-300 hover:border-[#AF2322] hover:text-[#AF2322]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStaysSection;
