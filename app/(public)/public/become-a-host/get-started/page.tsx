"use client";

import { Button } from "antd";
import { LeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "1. Write ",
    highlight: "Details",
    suffix: " about your House",
    description:
      "Add basic details, like location, landing details and how many guests can stay",
    image: "/assets/images/become-a-host/get-started-bed.png",
  },
  {
    title: "2. Make it ",
    highlight: "Unique",
    description:
      "Add some photos from good angles, write a detailed description and update permissions",
    image: "/assets/images/become-a-host/get-started-camera.png",
  },
  {
    title: "3. Finalize & ",
    highlight: "Publish",
    description:
      "Finalize your price bracket, verify some details and you’re good to go with your listing!",
    image: "/assets/images/become-a-host/get-started-publish.png",
  },
];

export default function GetStartedIntro() {
  return (
    <div className="app-container my-12">
      <div className="flex flex-col justify-between">
        {/* Back Button */}
        <Link href="/become-a-host/list-space">
          <Button
            type="default"
            icon={<LeftOutlined />}
            shape="round"
            className="mb-10 w-fit"
          >
            Back
          </Button>
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Text Content */}
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
              Hosting with <span className="text-primary">Fly-Inn</span> <br />{" "}
              is Super Easy!
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              A 3 Step Process and your listing is <br /> good to go on the
              Fly-Inn website
            </p>
          </div>

          {/* Steps List */}
          <div className="flex flex-col gap-6 w-full max-w-2xl">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex justify-between items-start border-b border-gray-200 pb-4"
              >
                <div>
                  <h3 className="text-base font-semibold text-black mb-1">
                    {step.title}
                    <span className="text-primary">{step.highlight}</span>
                    {step.suffix && <span>{step.suffix}</span>}
                  </h3>
                  <p className="text-gray-500 text-sm max-w-md">
                    {step.description}
                  </p>
                </div>
                <Image
                  src={step.image}
                  alt={`step-${index + 1}`}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full mt-12 flex justify-end">
          <Link href="/become-a-host/create-listing">
            <Button
              type="primary"
              size="large"
              className=" text-white px-8 py-2 rounded-md hover:opacity-90 transition"
              icon={<ArrowRightOutlined />}
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
