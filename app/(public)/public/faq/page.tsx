"use client";

import React from "react";
import Image from "next/image";
import { Collapse } from "antd";
import NewsletterSection from "../../_components/newsletter-section";
import { IoCaretForwardOutline } from "react-icons/io5";

const { Panel } = Collapse;

const faqData = [
  {
    section: "How to add a new listing on Fly-Inn.com",
    videoUrl: 'https://www.youtube.com/embed/BlXa5iIUCWA?si=-5sYTjQ5Y1o9SFHz',
    desc: 'Learn how to easily add your property listing to Fly-Inn.com and start hosting guests. This tutorial covers the step-by-step process of creating an attractive listing that stands out.',
  },
  {
    section: "April 11, 2024 - Platform Updates",
    videoUrl: "https://www.youtube.com/embed/_dTY5DbOCWM?si=dcXusRnE6-dVpH7v",
    desc: 'Watch our latest platform updates and new features released on April 11, 2024. Stay informed about the latest improvements to enhance your Fly-Inn hosting experience.',
  },
  {
    section: "How to sync Fly-Inn's iCal to other platforms",
    videoUrl: "https://www.youtube.com/embed/tClgM28kTsU?si=BlfrFPQrQ1sGMraa",
    desc: 'This guide shows you how to synchronize your Fly-Inn calendar with other booking platforms using iCal. Keep all your bookings in sync across multiple platforms effortlessly.',
  },
  {
    section: "How to Register on the Fly-Inn.com Platform",
    videoUrl: "https://www.youtube.com/embed/QfT_wgBOh3g?si=ACWbzXvwsMu3_YjV",
    desc: 'New to Fly-Inn? This video walks you through the simple registration process to create your host or guest account and start your journey with our platform.',
  },
];

const FaqPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[180px] md:h-[220px] flex items-center justify-center mb-12 overflow-hidden rounded-b-2xl shadow-md">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-bg.jpg"
            alt="FAQ Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#b71c1c]/80 to-[#212121]/80" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center gap-2">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            "Frequently Asked Questions"
          </h1>
          <p className="text-white text-sm md:text-base max-w-[80%] mx-auto">
            The FAQ is where we answer your questions in depth so the entire
            Fly-Inn Family can benefit! If your question isn't answered here, we
            would love to add it to our FAQ library of videos. Please ask us
            your questions by using our contact page, calling us, or sending us
            an email to PIC@fly-inn.com with "Suggestions" in the subject line.
            You SQUAWK, We WILCO
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="max-w-5xl mx-auto px-2 md:px-0 mb-16">
       

<Collapse defaultActiveKey={['1']}>


  {faqData.map((item, index) => (
          // <div key={section.section} className="mb-8">
          //   <h2
          //     className={`text-lg md:text-xl font-semibold mb-4 ${
          //       idx === 0 ? "mt-0" : "mt-8"
          //     } text-[#b71c1c]`}
          //   >
          //     {section.section}
          //   </h2>
          //   <div className="bg-white rounded-xl  p-6 mb-6">
          //     <div className="mb-4">
          //       <div className="aspect-w-16 aspect-h-9 w-full">
          //         <iframe
          //           width="100%"
          //           height="315"
          //           src={section.videoUrl}
          //           title={section.section}
          //           frameBorder="0"
          //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //           allowFullScreen
          //           className="rounded-lg shadow-md"
          //         ></iframe>
          //       </div>
          //       <p className="mt-4 text-gray-700">{section.desc}</p>
          //     </div>
          //   </div>

          
          // </div>
          <Panel header={item?.section} key={item?.videoUrl}>
                   <div className="mb-4">
               <div className="aspect-w-16 aspect-h-9 w-full">
                 <iframe
                   width="100%"
                   height="315"
                   src={item.videoUrl}
                   title={item.section}
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowFullScreen
                   className="rounded-lg shadow-md"
                 ></iframe>
               </div>
               <p className="mt-4 text-gray-700">{item?.desc}</p>
             </div>
          <p>{item?.desc}</p>
        </Panel>
        ))}
</Collapse>;
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
};

export default FaqPage;
