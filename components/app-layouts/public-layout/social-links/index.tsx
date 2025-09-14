import {
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

import React from "react";

const SocialLinks = () => {
  // Social media data with links and colors
  const socialMedia = [
    {
      icon: <YoutubeOutlined className="text-2xl" />, // Increased size slightly for better visibility
      name: "YouTube",
      url: "https://youtube.com",
      color: "hover:text-[#FF0000]",
    },
    {
      icon: <FaXTwitter className="text-xl" />,
      name: "Twitter",
      url: "https://twitter.com/FlyInnLLC", // Updated to your provided Twitter URL
      color: "hover:text-[#1DA1F2]",
    },
    {
      icon: <InstagramOutlined className="text-2xl" />,
      name: "Instagram",
      url: "https://www.instagram.com/flyinnllc/", // Updated to your provided Instagram URL
      color: "hover:text-[#E1306C]",
    },
    {
      icon: <FaFacebookF className="text-xl" />,
      name: "Facebook",
      url: "https://www.facebook.com/FlyInnLLC/", // Updated to your provided Facebook URL
      color: "hover:text-[#1877F2]",
    },
  ];

  return (
    <div className="bg-gray-900 py-3">
      <div className="app-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <div className="text-white text-sm flex items-center">
            <div className="hidden sm:inline-block bg-brand h-2 w-2 rounded-full mr-2 animate-pulse"></div>
            Follow us on socials to see what we're up to
          </div>

          <div className="flex items-center gap-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white transition-all duration-300 ${social.color} hover:scale-110`}
                aria-label={`Visit our ${social.name} page`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
