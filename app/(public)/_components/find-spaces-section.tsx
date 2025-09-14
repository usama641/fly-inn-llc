import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "swiper/css";
import "swiper/css/navigation";

const FindSpacesSection = () => (
  <section className=" bg-white my-8">
    <div className="app-container">
      <div className=" mx-auto ">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-center md:text-left sm:text-3xl md:text-4xl">
              Find <span className="text-primary">Spaces</span> that suit your
              style
            </h2>
            <p className="text-gray-600 text-center md:text-left max-w-2xl mt-2">
              Explore unique accommodations tailored to your preferences
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Swiper
          loop={false}
          modules={[Navigation, Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          navigation={{
            nextEl: ".spaces-swiper-next",
            prevEl: ".spaces-swiper-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 5, spaceBetween: 16 },
          }}
          className=""
        >
          {[
            { type: "Apartment", image: "/assets/images/apartment.png" },
            {
              type: "Bed & Breakfast",
              image: "/assets/images/BedAndBreakfast.png",
            },
            { type: "Beachfront", image: "/assets/images/Beachfront.png" },
            { type: "Cabin", image: "/assets/images/Cabin.png" },
            { type: "Villa", image: "/assets/images/Villa.png" },
            { type: "Villa1", image: "/assets/images/Villa.png" },
          ].map((item) => (
            <SwiperSlide key={item.type}>
              <div className="relative cursor-pointer overflow-hidden h-60 sm:h-80 rounded-xl group transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.type}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl" />
                <div className="absolute bottom-0 left-0 w-full p-4 ">
                  <div className="text-lg font-bold text-white sm:text-xl">
                    {item.type}
                  </div>
                  <div className="mt-1 w-8 h-1 bg-red-500 rounded-full transition-all duration-500 group-hover:w-12"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Arrows */}
        <div className="spaces-swiper-prev absolute 5 top-1/2 -translate-y-1/2 -translate-x-1/2   left-0 z-10 cursor-pointer p-3 rounded-full bg-white hover:bg-gray-200 transition-all duration-500 shadow-lg  hidden md:flex md:justify-center md:items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="spaces-swiper-next absolute 5 top-1/2 -translate-y-1/2 translate-x-1/2  right-0 z-10 cursor-pointer p-3 rounded-full bg-white hover:bg-gray-200 transition-all duration-500  shadow-lg hidden md:flex md:justify-center md:items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default FindSpacesSection;
