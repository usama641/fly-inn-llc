"use client";

import React, { useState } from "react";
import Image from "next/image";
import NewsletterSection from "../../_components/newsletter-section";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Fly Inn Guest",
    img: "/assets/images/testimonials/testimonials-1.jpg",
    text: `"I've been using Fly-Inn for years, and it's been incredible to watch this community take off. At first, I'd book whatever was available just for the thrill of landing somewhere new and connecting with fellow aviators. But now? The selection has grown so much—from cozy hangar-side cabins to full-service FBO stays—that I find myself scrolling just for fun, imagining future trips. It's not just a booking platform anymore; it's inspiration."`,
  },
  {
    name: "Jane Doe",
    role: "Fly Inn Guest",
    img: "/assets/images/testimonials/testimonials-2.jpg",
    text: `"I've been using Fly-Inn for years, and it's been incredible to watch this community take off. At first, I'd book whatever was available just for the thrill of landing somewhere new and connecting with fellow aviators. But now? The selection has grown so much—from cozy hangar-side cabins to full-service FBO stays—that I find myself scrolling just for fun, imagining future trips. It's not just a booking platform anymore; it's inspiration."`,
  },
  {
    name: "Jane Doe",
    role: "Fly Inn Guest",
    img: "/assets/images/testimonials/testimonials-3.jpg",
    text: `"I've been using Fly-Inn for years, and it's been incredible to watch this community take off. At first, I'd book whatever was available just for the thrill of landing somewhere new and connecting with fellow aviators. But now? The selection has grown so much—from cozy hangar-side cabins to full-service FBO stays—that I find myself scrolling just for fun, imagining future trips. It's not just a booking platform anymore; it's inspiration."`,
  },
];

const getVisibleTestimonials = (current: number) => {
  // Always show 3, center is current
  const total = testimonials.length;
  const left = (current + total - 1) % total;
  const right = (current + 1) % total;
  return [left, current, right];
};

const TestimonialsPage = () => {
  const [current, setCurrent] = useState(1);
  const visible = getVisibleTestimonials(current);

  const handlePrev = () =>
    setCurrent(
      (prev) => (prev + testimonials.length - 1) % testimonials.length
    );
  const handleNext = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[80px] md:min-h-[120px] flex flex-col items-center justify-center mb-8 md:mb-12 overflow-hidden rounded-b-2xl shadow-md bg-[#b71c1c]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-bg.jpg"
            alt="Testimonials Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-2 md:px-4 text-center gap-2 py-6 md:py-8">
          <h1 className="text-lg md:text-2xl font-bold text-white mb-2">
            "Hear from Our Hosts & Guests"
          </h1>
          <p className="text-white text-xs md:text-base max-w-2xl md:max-w-6xl mx-auto">
            In the world of aviation, trust and excellence are everything.
            Whether you're a host welcoming fellow aviators or a guest
            experiencing the finest hospitality, your feedback fuels our
            commitment to exceptional service. Hear directly from aviation
            enthusiasts who've shared unforgettable moments through our
            platform. Their stories inspire us to keep soaring higher
          </p>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <div className="w-full flex justify-center items-center mb-16">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-[#b71c1c] text-[#b71c1c] hover:bg-[#b71c1c] hover:text-white transition-colors mr-2"
        >
          <IoChevronBack size={22} />
        </button>
        <div className="flex gap-6 w-full max-w-5xl justify-center">
          {visible.map((idx, i) => (
            <div
              key={idx}
              className={`
                flex-1 bg-white rounded-xl border transition-all duration-300 flex flex-col items-center px-6 py-8 shadow-sm relative
                ${
                  i === 1
                    ? "!bg-[#b71c1c] text-white border-[#b71c1c] z-10 scale-105"
                    : "border-[#b71c1c] text-gray-900 opacity-90"
                }
                ${i !== 1 ? "hidden md:flex" : "flex"}
              `}
              style={{ minWidth: 220, maxWidth: 370 }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-2">
                  <Image
                    src={testimonials[idx].img}
                    alt={testimonials[idx].name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="font-semibold text-base md:text-lg mb-0">
                  {testimonials[idx].name}
                </div>
                <div className="italic text-xs md:text-sm mb-2 opacity-80">
                  {testimonials[idx].role}
                </div>
              </div>
              <div className="text-xs md:text-base text-center">
                {testimonials[idx].text}
              </div>
            </div>
          ))}
        </div>
        <button
          aria-label="Next"
          onClick={handleNext}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-[#b71c1c] text-[#b71c1c] hover:bg-[#b71c1c] hover:text-white transition-colors ml-2"
        >
          <IoChevronForward size={22} />
        </button>
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
};

export default TestimonialsPage;
