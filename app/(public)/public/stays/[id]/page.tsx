"use client";
import React from "react";
import NewsletterSection from "../../../_components/newsletter-section";
import { mockListing } from "@/constants/stays"; // Assuming this path is correct for your mock data

import { HeroImagesSection } from "./_components/hero-section";
import FeatureDetails from "./_components/feature-details";
import AirportDetails from "./_components/airport-details";
import StayInfo from "./_components/stay-info";
import BedroomSection from "./_components/bedrooms";
import MapLocation from "./_components/map-location";
import HouseRules from "./_components/house-rules";
import CancellationPolicy from "./_components/cancellation-policy";
import AvailabilityCalendar from "./_components/availability-calendar";
import SimilarStays from "./_components/similar-stays";
import HostCard from "./_components/host-details";
import TitleLocation from "./_components/title-location";
import Description from "./_components/description";
import SummaryCard from "./_components/summary-card";
import BookingCard from "./_components/booking-card";

const StayDetails = () => {
  return (
    <div className="py-12">
      <main className="app-container">
        <TitleLocation mockListing={mockListing} />

        <HeroImagesSection images={mockListing?.images} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <SummaryCard mockListing={mockListing} />

            <Description mockListing={mockListing} />

            <AirportDetails airports={mockListing?.airports} />

            <StayInfo />

            <BedroomSection />

            <FeatureDetails features={mockListing.features} />

            <MapLocation />

            <HouseRules mockListing={mockListing} />

            <CancellationPolicy mockListing={mockListing} />

            <AvailabilityCalendar />
          </div>

          <div className="md:col-span-1">
            <BookingCard mockListing={mockListing} />
          </div>
        </div>
      </main>

      <div className="app-container">
        <HostCard />
        <SimilarStays similarStays={mockListing?.similarStays} />
      </div>

      <section className="bg-gray-100">
        <div className="app-container py-12">
          <NewsletterSection />
        </div>
      </section>
    </div>
  );
};

export default StayDetails;
