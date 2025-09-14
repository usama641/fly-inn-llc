"use client";
import { Button, Input } from "antd";
import dynamic from "next/dynamic";
import MagazineEndorsementsSection from "./_components/magazine-endorsements-section";
import PromisesSection from "./_components/promises-section";
import FindSpacesSection from "./_components/find-spaces-section";
import SharePropertySection from "./_components/share-property-section";
import FeaturedStaysSection from "./_components/featured-stays-section";
import TestimonialsSection from "./_components/testimonials-section";
import AppPromotionSection from "./_components/app-promotion-section";
import NewsletterSection from "./_components/newsletter-section";
import Loading from "@/src/components/Loading";
import HeroSection from "./_components/hero-section";

const GoogleMapComponent = dynamic(
  () => import("../../components/shared/map"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-gray-100 flex items-center justify-center">
        <Loading size="large" />
      </div>
    ),
  }
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />

        {/* Magazine Endorsements */}
        <MagazineEndorsementsSection />

        {/* 5 Promises Section */}
        <PromisesSection />

        {/* Find Spaces Section */}
        <FindSpacesSection />

        {/* Share Your Property Section */}
        <SharePropertySection />

        {/* Featured Stays Section */}
        <FeaturedStaysSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* App Promotion Section */}
        <AppPromotionSection />

        {/* Newsletter Section */}
        <section className="bg-gray-100">
          <div className="app-container py-12">
            <NewsletterSection />
          </div>
        </section>
      </main>
    </div>
  );
}
