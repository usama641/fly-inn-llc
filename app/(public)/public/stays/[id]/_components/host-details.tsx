"use client";

import Image from "next/image";
import Link from "next/link";

const HostCard = () => {
  return (
    <section className="my-12">
      <h2 className="text-xl font-semibold text-primary mt-6 mb-4">
        Property Hosted by
      </h2>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-md flex flex-col md:flex-row p-6 md:p-8 gap-6 md:gap-10 items-center md:items-start">
        {/* Host Avatar + Info */}
        <div className="flex flex-col items-center md:items-center text-center md:text-left">
          <Image
            src="https://api.fly-inn.com/storage/profile/1745954856-68112828135f4.jpg" // Replace with real path
            alt="Host Avatar"
            width={100}
            height={100}
            className="rounded-full object-cover w-[100px] h-[100px]"
          />
          <p className="text-sm text-primary mt-3 font-medium flex items-center gap-1">
            Verified Host
            <span className="text-primary text-base">✔</span>
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-1">
            John Baker Doe
          </h3>
          <p className="text-gray-600 mt-1">
            2 Years hosting &middot; 3 Listings
          </p>
        </div>

        {/* Divider (only on desktop) */}
        <div className="hidden md:block w-px bg-gray-200"></div>

        {/* Host Details */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Host Details
          </h4>
          <p className="text-gray-700 leading-relaxed">
            John is a superhost with 2 years of experience hosting. He knows
            places around and would love to show you around. He's an aviation
            enthusiast who can talk about flying and planes non-stop. Hobbies
            include flying, go-karting, hunting, and birdwatching.
          </p>
          <Link
            href="#"
            className="inline-block mt-2 text-primary font-medium hover:underline"
          >
            Read More
          </Link>

          {/* Button */}
          <div className="mt-4">
            <Link
              href="#"
              className="inline-block bg-primary hover:bg-primary-700 text-white text-sm font-semibold px-6 py-2 rounded-lg transition"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostCard;
