import GoogleMapComponent from "@/components/shared/map";
import { Button } from "antd";
import React, { useState } from "react";
import HomeStays from "./home-stays";

const HeroSection = () => {
  const [showList, setShowList] = useState(false);
  return (
    <section className="relative bg-white">
      <div className="relative">
        {showList ? <HomeStays /> : <GoogleMapComponent height="h-[600px]" />}
        <div className="absolute bottom-4 left-[50%] translate-x-[-50%]">
          <Button
            type="primary"
            onClick={() => {
              setShowList(!showList);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                d="M15.5 21.5v-17m0 17h-.333l-.358-.22A12 12 0 0 0 8.52 19.5H8.5m7 2h.177a12 12 0 0 0 6.173-1.71l.65-.39V2.5h-.25l-.357.22a12 12 0 0 1-6.29 1.78h-.353l-.483-.29A12 12 0 0 0 8.593 2.5H8.5m0 0h-.176A12 12 0 0 0 2.15 4.21l-.65.39v16.9h.25l.357-.22a12 12 0 0 1 6.29-1.78m.103-17v17m0 0h-.104m0 0H8.25"
                strokeWidth={1}
              ></path>
            </svg>
            {showList ? "Show Map" : "Show List"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
