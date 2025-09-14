"use client";

import React from "react";
import Image from "next/image";
import NewsletterSection from "../../_components/newsletter-section";
import { Button } from "antd";

const PhilanthropyPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[120px] flex flex-col items-center justify-center mb-12 overflow-hidden rounded-b-2xl shadow-md bg-[#b71c1c]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/philanthropy/banner.jpg"
            alt="Philanthropy Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center gap-2 py-8">
          <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
            "Philanthropy"
          </h1>
          <p className="text-white text-sm md:text-base max-w-6xl mx-auto">
            At FlyInn, we believe in the spirit of collaboration, reaching out
            to those in need. Through our philanthropy initiatives, we support
            education, healthcare, and sustainable development, powered
            sustainably by flying, and hope to bless the communities that
            welcome us. Join our mission to uplift lives by partnering with
            aviation-focused causes, where each mile we travel can help make a
            meaningful impact.
          </p>
        </div>
      </section>

      {/* WHAT IF IT WERE POSSIBLE... Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-[#b71c1c] font-bold text-lg mb-2">
            WHAT IF IT WERE POSSIBLE...
          </h2>
          <p className="mb-4 text-gray-800 text-base">
            To eradicate poverty in eight weeks. To create communities of
            dignity. To reduce the poor to such a degree that they cease to be
            poor. Forget how to be poor, and stay free.
          </p>

          <Button className="" type="primary" size="large">
            Transform a Life Now
          </Button>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/images/philanthropy/section1.jpg"
            alt="Philanthropy"
            width={350}
            height={250}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>

      {/* Who We Are / Our Philosophy / Our History */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card 1 */}
          <div className="flex-1 bg-white border border-gray-200 shadow flex flex-col items-center rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-red-400">
            <Image
              src="/assets/images/philanthropy/section2-1.jpg"
              alt="Who We Are"
              width={180}
              height={120}
              className="object-cover w-full"
            />
            <h3 className="text-white text-center py-2 font-bold w-full bg-red-500 rounded-b-2xl mb-3">
              Who We Are
            </h3>
            <p className="text-gray-700 text-sm text-center px-3">
              ADH is a group of committed people who believe in the power of
              community to change lives. We work to create sustainable solutions
              for poverty and hunger.
            </p>
            <a href="#" className="text-[#b71c1c] underline mt-2 text-sm mb-3">
              Read More
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-white border border-gray-200 shadow flex flex-col items-center rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-red-400">
            <Image
              src="/assets/images/philanthropy/section2-2.jpg"
              alt="Our Philosophy"
              width={180}
              height={120}
              className="object-cover w-full"
            />
            <h3 className="text-white text-center py-2 font-bold w-full bg-red-500 rounded-b-2xl mb-3">
              Our Philosophy
            </h3>
            <p className="text-gray-700 text-sm text-center px-3">
              Give a man a fish, you help him for a day. Teach a man to fish,
              you help him for a lifetime. We believe in empowering communities
              to become self-sufficient and thrive.
            </p>
            <a href="#" className="text-[#b71c1c] underline mt-2 text-sm mb-3">
              Read More
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-white border border-gray-200 shadow flex flex-col items-center rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-red-400">
            <Image
              src="/assets/images/philanthropy/section2-3.jpg"
              alt="Our History"
              width={180}
              height={120}
              className="object-cover w-full"
            />
            <h3 className="text-white text-center py-2 font-bold w-full bg-red-500 rounded-b-2xl mb-3">
              Our History
            </h3>
            <p className="text-gray-700 text-sm text-center px-3">
              Dewey Egalitarian Village Education, started in 2010, has helped
              thousands of children and families escape poverty through
              education and opportunity.
            </p>
            <a href="#" className="text-[#b71c1c] underline mt-2 text-sm mb-3">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* How P.E.T.E. came to be. */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-center text-[#b71c1c] font-bold text-lg mb-4">
          How P.E.T.E. came to be.
        </h2>
      </div>

      {/* Why P.E.T.E? */}
      <div className="max-w-7xl mx-auto px-4 mb-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/images/philanthropy/section3.png"
            alt="Why PETE"
            width={350}
            height={200}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-[#b71c1c] font-bold mb-2">Why P.E.T.E?</h3>
          <p className="text-gray-700 text-base">
            Because we care. Because we see 25,000 fellow human beings go hungry
            every day. That's 1 out of 8 people who die daily. That's 15,000,000
            people per year. Why should anyone starve when we can do something
            about it?
          </p>
        </div>
      </div>

      {/* What is our solution? */}
      <div className="max-w-7xl mx-auto px-4 mb-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-[#b71c1c] font-bold mb-2">
            What is our solution?
          </h3>
          <p className="text-gray-700 text-base mb-2">
            A simple two step process -
          </p>
          <ol className="list-decimal list-inside text-gray-700 text-base mb-2 pl-4">
            <li>
              Find the community utilizing a simple and completely random method
              (draw from a deck, weekly by a group of friends, using a
              dartboard, etc.), and send enough resources to lift every member
              above the poverty line.
            </li>
            <li>
              Track the results, measure improvements, and repeat the process in
              a new community.
            </li>
          </ol>
          <p className="text-gray-700 text-base">
            Each new community increases the probability of being contributed
            to, reducing the risk to teachers or others who are helping to
            forward.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/images/philanthropy/section4.jpg"
            alt="Solution"
            width={350}
            height={200}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>

      {/* Solution: P.E.T.E */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-center text-[#b71c1c] font-bold text-lg mb-4">
          Solution: P.E.T.E
        </h2>
      </div>

      {/* Solution Specifics */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div
          className="w-full mb-4"
          style={{
            backgroundImage: "url(/assets/images/philanthropy/section5.jpg)",
            height: "450px",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // transform: "rotate(180deg)",
            transformOrigin: "center",
          }}
        ></div>
        <h3 className="text-[#b71c1c] font-bold mb-2">Solution Specifics</h3>
        <p className="text-gray-700 text-base mb-2">
          1. We empower teachers to change village and city from the ground,
          through the experience of others who have gone before them. Real easy
          steps, real results, real change.
        </p>
        <p className="text-gray-700 text-base mb-2">
          2. We give a simple, repeatable method for helping a village or city,
          and a way to measure progress and share results. We help communities
          become self-sustaining and independent, so they can continue to thrive
          long after we're gone.
        </p>
        <p className="text-gray-700 text-base mb-2">
          3. We help communities connect with others who have similar goals, so
          they can share resources, ideas, and support. The income they get is
          sent out to broadcast and market more of their village's progress
          stories to drive more income and the betterment of their village.
        </p>
        <p className="text-gray-700 text-base mb-2">
          4. We give a simple way to measure impact, so that when they have
          basic needs, whole groups receive the help they need, and the income
          generated from their stories is reinvested in the next village or city
          that needs help. The cycle continues, and more communities are lifted
          out of poverty. Again, from one to many, from one village to the
          world.
        </p>
      </div>

      {/* Our Model */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div
          className="w-full mb-4"
          style={{
            backgroundImage: "url(/assets/images/philanthropy/section6.jpg)",
            height: "450px",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // transform: "rotate(180deg)",
            transformOrigin: "center",
          }}
        ></div>
        <h3 className="text-[#b71c1c] font-bold mb-2">Our Model</h3>
        <p className="text-gray-700 text-base mb-2">
          Our model is to take entire villages or, at some times the people,
          educate them, equip them, and help them escape poverty. From struggle
          of illness and hunger to thriving, self-sustaining communities. We
          believe in the power of education, opportunity, and community to
          change lives for the better.
        </p>
        <p className="text-gray-700 text-base mb-2">
          We work with local leaders, teachers, and organizations to identify
          the most pressing needs and develop sustainable solutions that address
          the root causes of poverty. We focus on education, healthcare, and
          economic development, and we measure our success by the number of
          lives changed and communities transformed.
        </p>
        <p className="text-gray-700 text-base mb-2">
          We are not alone in this mission. We have made our supporting
          organizations, individuals, and families who give of their time,
          talent, and resources to help us achieve our goals. Together, we are
          making a difference, one village at a time.
        </p>
        <p className="text-gray-700 text-base mb-2">
          Change is within the abilities of every person, no matter where we are
          living or our origins. Education improves quality of life and makes
          possible a better future for all.
        </p>
      </div>

      {/* Impact */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div
          className="w-full mb-4"
          style={{
            backgroundImage: "url(/assets/images/philanthropy/section7.jpg)",
            height: "450px",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // transform: "rotate(180deg)",
            transformOrigin: "center",
          }}
        ></div>
        <h3 className="text-[#b71c1c] font-bold mb-2">Impact</h3>
        <ul className="list-disc list-inside text-gray-700 text-base mb-2 pl-4">
          <li>We contribute our experience/ earnings in the following ways:</li>
          <li>
            Direct donations to local schools, clinics, and community
            organizations
          </li>
          <li>
            Supporting teachers and leaders in their efforts to create lasting
            change
          </li>
          <li>Sharing what we contribute to local humanitarian causes</li>
        </ul>
        <p className="text-gray-700 text-base mb-2">
          Your donations and your own FBO events assist with education,
          training, and providing vital support to our fellow human beings in
          the most remote areas and poorest of our world.
        </p>
        <p className="text-gray-700 text-base mb-2">
          We act by the blessing of thought: Eradication through education—the
          bedrock of teaching people to fish.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div
          className="w-full mb-4"
          style={{
            backgroundImage: "url(/assets/images/philanthropy/section8.jpg)",
            height: "450px",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // transform: "rotate(180deg)",
            transformOrigin: "center",
          }}
        ></div>
        <h3 className="text-[#b71c1c] font-bold mb-2">Vision & Mission</h3>
        <p className="text-gray-700 text-base mb-2">
          See and serve the often yet not-been-yet introduced and to raise human
          beings thriving, healthy, knowledgeable, well-nourished, well
          educated, and able to give back to their communities. We believe in
          the power of hope, love, and opportunity to transform lives and create
          a better world for all.
        </p>
        <p className="text-gray-700 text-base mb-2">
          Our vision is global, and is in many circles: homes, communities,
          ministries, and hearts that have been touched or changed for the
          better. We are committed to being a catalyst for change, bringing
          lasting blessings and happiness to other fellow human beings.
        </p>
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
};

export default PhilanthropyPage;
