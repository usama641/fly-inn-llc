import React from "react";
import { Button, Input, Card, Avatar } from "antd";
import {
  UserOutlined,
  MailOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const values = [
  {
    icon: "🤝",
    title: "Teamwork",
    desc: "From coding to customer service, our team's synergy fuels FLY-INN's success. Because in aviation and hospitality, getting details right requires perfect teamwork - both on the ground and in the cloud.",
  },
  {
    icon: "🛡️",
    title: "Integrity & Respect",
    desc: "We honour the trust you place in us. From accurate listings to secure transactions, our actions reflect deep respect for your time, property, and love of flight. This isn't just policy—it's our identity.",
  },
  {
    icon: "🧬",
    title: "Quality & Innovation",
    desc: "Quality is in our DNA: intuitive platforms, verified properties, and innovative tools designed specifically for aviation travellers. We evolve through user feedback and technological advancement.",
  },
];

const team = [
  {
    name: "John Smith",
    title: "CEO",
    img: "/assets/images/placeholder.jpg",
    quote:
      "\"At FLY-INN, we're not just changing how pilots travel - we're redefining where aviation feels like home.\"",
  },
  {
    name: "John Smith",
    title: "CTO",
    img: "/assets/images/placeholder.jpg",
    quote:
      "\"At FLY-INN, we're not just changing how pilots travel - we're redefining where aviation feels like home.\"",
  },
  {
    name: "John Smith",
    title: "COO",
    img: "/assets/images/placeholder.jpg",
    quote:
      "\"At FLY-INN, we're not just changing how pilots travel - we're redefining where aviation feels like home.\"",
  },
  {
    name: "John Smith",
    title: "CFO",
    img: "/assets/images/placeholder.jpg",
    quote:
      "\"At FLY-INN, we're not just changing how pilots travel - we're redefining where aviation feels like home.\"",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-full px-0 py-8 bg-primary rounded-b-4xl">
        <h2 className="mb-2 text-2xl font-semibold text-white">
          "About FLY-INN"
        </h2>
        <p className="max-w-3xl text-center text-white">
          FLY-INN revolutionizes aviation travel by connecting pilots with
          unique stays at airports worldwide. Founded by aviators for aviators,
          we simplify the search for hangar homes, FBO suites, and crew-friendly
          lodging. Our platform combines insider knowledge with smart booking
          tools - because every fly-in deserves the perfect basecamp.
        </p>
      </div>

      {/* Main Video Section */}
      <div className="flex justify-center mt-8">
        <div className="relative w-full max-w-6xl overflow-hidden bg-white shadow rounded-2xl">
          <img
            src="/lakeview-resort.png"
            alt="Main Video"
            className="w-full h-[400px] object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center border-0">
            <span className="p-6 bg-white rounded-full shadow-lg bg-opacity-80">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="#DC2626" />
                <polygon points="28,22 46,32 28,42" fill="#fff" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="mb-6 text-xl font-semibold text-center text-red-700">
          Our Values
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={i}
              className="border-2 border-gray-100 rounded-xl p-6 bg-white flex flex-col items-center text-center min-h-[220px]"
            >
              <span className="mb-2 text-4xl">{v.icon}</span>
              <div className="mb-1 text-lg font-semibold text-red-700">
                {v.title}
              </div>
              <div className="text-sm text-gray-700">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="px-2 py-8 mt-12 ">
        <div
          className="max-w-6xl mx-auto my-12 py-6 rounded-xl"
          style={{
            background: "linear-gradient(90deg, #CE2029 0%, #681015 100%)",
          }}
        >
          <h3 className="text-xl font-semibold text-center text-white mb-6">
            "Fueled by Passion, Driven by Expertise"
          </h3>
          <p className="max-w-3xl mx-auto mb-8 text-center text-white">
            Tap into our team's stories—from former airline pros to startup
            veterans, each member brings unique skills to ensure FLY-INN soars
            above expectations. Ready for take off with us?
          </p>
        </div>
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <div
              key={i}
              className="rounded-xl p-6 flex flex-col items-center text-center text-white"
              style={{
                background: "linear-gradient(90deg, #CE2029 0%, #681015 100%)",
              }}
            >
              <Avatar
                src={member.img}
                size={80}
                icon={<UserOutlined />}
                className="mb-3"
              />
              <div className="mb-1 text-lg font-semibold">{member.name}</div>
              <div className="mb-2 text-sm">{member.title}</div>
              <div className="mb-3 text-xs italic">{member.quote}</div>
              <div className="flex gap-2 text-xl">
                <FacebookFilled />
                <InstagramFilled />
                <LinkedinFilled />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
