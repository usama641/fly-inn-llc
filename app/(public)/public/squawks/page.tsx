"use client";

import React from "react";
import { Button, Input, Card, Tabs } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import NewsletterSection from "../../_components/newsletter-section";

const { TabPane } = Tabs;

const squawks = Array.from({ length: 24 }).map((_, i) => ({
  title: `Squawk Report #${i + 1}`,
  description: "This is a sample squawk description for pilots and hosts.",
  date: "May 9, 2025",
  img: `/lakeview-resort.png`,
}));

const airShows = Array.from({ length: 11 }).map((_, i) => ({
  title: `11 Most Popular Air Shows in the United States`,
  date: "May 8, 2025",
}));

const promises = [
  {
    title: "Premium Accommodations Tailored for Aviators",
    description: "Private hangar access and crew quarters at every location",
    date: "May 9, 2025",
    readMore: "Read More",
    image: "/lakeview-resort.png", // Replace with actual image
  },
  {
    title: "24/7 Runway-to-Resort Concierge Service",
    description: "We handle everything from fuel orders to dinner reservations",
    date: "May 9, 2025",
    readMore: "Read More",
    image: "/lakeview-resort.png", // Replace with actual image
  },
  {
    title: "Aviation-Grade Security for You and Your Aircraft",
    description: "Guarded ramps and AI-powered surveillance at all properties",
    date: "May 9, 2025",
    readMore: "Read More",
    image: "/lakeview-resort.png", // Replace with actual image
  },
  {
    title: "Weather & Flight Planning Support Included",
    description: "Dedicated briefing rooms with real-time METAR/TAF feeds",
    date: "May 9, 2025",
    readMore: "Read More",
    image: "/lakeview-resort.png", // Replace with actual image
  },
];

export default function SquawksPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Swiper Carousel */}
      {/* Hero Swiper Carousel */}
      <div className="px-8 py-4 mx-auto max-w-7xl rounded-xl overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          className="h-[400px] md:h-[500px]"
        >
          {promises.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <img
                src="/lakeview-resort.png" // Replace with your actual image path
                alt="Hero background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content Overlay */}
              <div className="relative z-20 flex flex-col items-center justify-center h-full text-left text-white px-8">
                <h1 className="w-full text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {item.title}
                </h1>
                <div className="flex flex-col items-start w-full gap-2">
                  <p className="text-sm md:text-base">{item.date}</p>
                  <a
                    href="#"
                    className="text-sm md:text-base font-semibold underline hover:no-underline"
                  >
                    {item.readMore}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tabs Section */}
      <div className="px-8 py-4 mx-auto max-w-7xl">
        <Tabs defaultActiveKey="1">
          <TabPane tab="All" key="1">
            {/* Content for All tab */}
          </TabPane>
          <TabPane tab="Newsst" key="2">
            {/* Content for Newsst tab */}
          </TabPane>
          <TabPane tab="Guests" key="3">
            {/* Content for Guests tab */}
          </TabPane>
          <TabPane tab="Hosts" key="4">
            {/* Content for Hosts tab */}
          </TabPane>
        </Tabs>
      </div>

      {/* Squawks List */}
      <div className="px-8 py-8 mx-auto max-w-7xl">
        {/* <h2 className="mb-4 text-2xl font-semibold">Recent <span className="text-red-600">Squawks</span></h2> */}
        <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {squawks.slice(0, 8).map((squawk, idx) => (
            <Link href={`/squawks/${idx}`} key={idx}>
              <Card
                key={idx}
                className="flex flex-col p-0 overflow-hidden border border-gray-200 shadow-sm rounded-xl"
                bodyStyle={{ padding: 0 }}
              >
                <img
                  src={squawk.img}
                  alt={squawk.title}
                  className="object-cover w-full h-32"
                />
                <div className="flex flex-col justify-between px-3 py-2">
                  <div className="mb-1 text-sm font-semibold">
                    {squawk.title}
                  </div>
                  <div className="mb-1 text-xs text-gray-500">
                    {squawk.date}
                  </div>
                  <div className="mb-1 text-xs text-gray-600">
                    {squawk.description}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mb-8">
          <Button className="flex items-center gap-2 px-8 py-2 text-white bg-gray-800 rounded-lg">
            Show More
          </Button>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
