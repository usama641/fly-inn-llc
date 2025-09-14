import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BecomeAHostSection = () => {
  return (
    <section className="bg-[#f3f3f3] ">
      <div className="app-container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Become a <span className="text-primary font-bold">Host</span> with
              Fly-Inn
            </h2>
            <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-md mx-auto md:mx-0">
              Fly-Inn lets you list your property and host pilots at your
              doorstep without any hassle
            </p>
            <div className="mt-6">
              <Link href="/become-a-host/get-started">
                <Button type="primary" size="large">
                  List Your Space
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 sm:w-80 md:w-96 lg:w-[420px] xl:w-[700px] relative aspect-[4/3]">
              <Image
                src="/assets/images/become-a-host/become-a-host-banner.png" // Place your image in public/images folder
                alt="Host Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAHostSection;
