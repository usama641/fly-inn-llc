import React from "react";
import { Button, Input } from "antd";

const galleryItems = [
  { src: "/lakeview-resort.png", video: true, alt: "Wing Over Snow" },
  { src: "/lakeview-resort.png", video: false, alt: "Cockpit View" },
  { src: "/lakeview-resort.png", video: false, alt: "Red Plane" },
  { src: "/lakeview-resort.png", video: true, alt: "Mountain Airport" },
  { src: "/lakeview-resort.png", video: false, alt: "Wing in Clouds" },
  { src: "/lakeview-resort.png", video: false, alt: "Prop Plane on Ground" },
];

function VideoOverlay() {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="bg-white bg-opacity-80 rounded-full p-4 shadow-lg">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#DC2626" />
          <polygon points="20,16 34,24 20,32" fill="#fff" />
        </svg>
      </span>
    </span>
  );
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <div className="w-full bg-red-600 py-8 px-4 flex flex-col items-center justify-center rounded-b-2xl">
        <h2 className="text-white text-2xl font-semibold mb-2">"Explore the FLY-INN Experience"</h2>
        <p className="text-white text-center max-w-6xl">
          Browse our gallery to discover unique aviation stays – from hangar homes with runway views to cozy airport condos. Each property is pilot-approved, offering convenience and character for your next fly-in adventure. See where your wings can take you!
        </p>
      </div>

      {/* Custom Grid Layout */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-2 md:grid-cols-4 grid-rows-[repeat(6,_minmax(150px,_auto))] gap-4 auto-rows-auto">
        <div className="col-span-2 row-span-2 space-y-4">
        {/* Top left video */}
        <div className="relative col-span-2 row-span-1 ">
          <img src={galleryItems[0].src} alt={galleryItems[0].alt} className="w-full h-full object-cover rounded-2xl" />
          {galleryItems[0].video && <VideoOverlay />}
        </div>

        
        {/* Red Plane, left middle */}
        <div className="relative col-span-2 row-span-1">
          <img src={galleryItems[2].src} alt={galleryItems[2].alt} className="w-full h-full object-cover rounded-2xl" />
        </div>
</div>
        {/* Cockpit top right */}
        <div className="col-span-2 row-span-2">
          <img src={galleryItems[1].src} alt={galleryItems[1].alt} className="w-full h-full object-cover rounded-2xl" />
        </div>


                {/* Bottom left cloud wing */}
                <div className="col-span-1 row-span-2">
          <img src={galleryItems[4].src} alt={galleryItems[4].alt} className="w-full h-full object-cover rounded-2xl" />
        </div>

        {/* Airport & mountain video, center-right */}
        <div className="relative col-span-3 row-span-1">
          <img src={galleryItems[3].src} alt={galleryItems[3].alt} className="w-full h-full object-cover rounded-2xl" />
          {galleryItems[3].video && <VideoOverlay />}
        </div>



        {/* Bottom right prop plane */}
        <div className="relative col-span-3 row-span-1">
          <img src={galleryItems[5].src} alt={galleryItems[5].alt} className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col items-center justify-center py-8 bg-red-600">
        <h2 className="mb-4 text-xl font-semibold text-white">Subscribe to Our Newsletter Now!</h2>
        <div className="flex w-full max-w-xl gap-2 px-4">
          <Input placeholder="Enter your Email here" className="rounded-lg" />
          <Button type="primary" className="px-8 text-white bg-black rounded-lg">SUBSCRIBE</Button>
        </div>
      </div>
    </div>
  );
}
