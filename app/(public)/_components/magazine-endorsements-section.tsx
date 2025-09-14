import React from "react";
import Image from "next/image";

const logos = [
  { src: "/flying-logo.png", alt: "Flying", width: 120, height: 32 },
  {
    src: "/barnstormers-logo.png",
    alt: "Barnstormers",
    width: 180,
    height: 40,
  },
  {
    src: "/robb-report-logo-white.png",
    alt: "Robb Report",
    width: 140,
    height: 32,
  },
  {
    src: "/general-aviation-news-logo.png",
    alt: "General Aviation News",
    width: 100,
    height: 40,
  },
  { src: "/piper-logo.png", alt: "Piper", width: 100, height: 40 },
];

const MagazineEndorsementsSection = () => (
  <section className=" bg-white">
    <div className="mx-auto">
      <p
        className="font-semibold text-center py-3"
        style={{
          fontFamily: "Montserrat, Arial, sans-serif",
          fontSize: "24px",
          fontWeight: 500,
          lineHeight: "22px",
        }}
      >
        See what the magazines say about{" "}
        <span
          style={{
            color: "#D32F2F",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "22px",
          }}
        >
          FLY-INN
        </span>
      </p>
      <div
        className="overflow-hidden "
        style={{
          background: "linear-gradient(90deg, #C1272D 0%, #7B1F24 100%)",
          height: "67px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="flex items-center animate-marquee whitespace-nowrap"
          style={{ animationDuration: "30s" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center px-6">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-marquee {
        display: flex;
        animation: marquee linear infinite;
      }
    `}</style>
  </section>
);

export default MagazineEndorsementsSection;
