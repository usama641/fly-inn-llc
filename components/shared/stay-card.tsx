"use client";
import React from "react";
import Image from "next/image";
import { Button, Tooltip, Rate } from "antd";
import { HeartOutlined, HeartFilled, StarFilled } from "@ant-design/icons";
import { FaBed, FaBath, FaUser, FaPlane, FaExchangeAlt } from "react-icons/fa";

type Stay = {
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  beds: number;
  baths: number;
  guests: number;
};

type Props = {
  stay: Stay;
  index: number;
  isLiked?: boolean;
  isCompared?: boolean;
  onToggleLike?: (index: number) => void;
  onToggleCompare?: (index: number) => void;
};

const StayCard = ({
  stay,
  index,
  isLiked,
  isCompared,
  onToggleLike,
  onToggleCompare,
}: Props) => {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="relative aspect-[4/3]">
        <Image
          src={stay.image}
          alt={stay.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Tooltip
            title={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            <Button
              shape="circle"
              icon={
                isLiked ? (
                  <HeartFilled className="text-[#AF2322]" />
                ) : (
                  <HeartOutlined />
                )
              }
              className="bg-white shadow-md flex items-center justify-center w-9 h-9"
              onClick={() => onToggleLike?.(index)}
            />
          </Tooltip>
          <Tooltip
            placement="bottom"
            title={isCompared ? "Remove from compare" : "Add to compare"}
          >
            <Button
              shape="circle"
              icon={
                <FaExchangeAlt className={isCompared ? "text-[#AF2322]" : ""} />
              }
              className={`bg-white shadow-md flex items-center justify-center w-9 h-9 ${
                isCompared ? "!border-[#AF2322]" : ""
              }`}
              onClick={() => onToggleCompare?.(index)}
            />
          </Tooltip>
        </div>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center max-w-[80%]">
          <FaPlane className="text-[#AF2322] mr-1 flex-shrink-0" />
          <span className="text-xs font-medium truncate">{stay.location}</span>
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <Tooltip title={stay.name}>
          <h3 className="font-bold text-gray-900 text-base truncate">
            {stay.name}
          </h3>
        </Tooltip>

        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center">
            <Rate
              disabled
              defaultValue={stay.rating}
              allowHalf
              className="text-xs [&>li]:!mr-0.5"
              character={<StarFilled className="text-[#AF2322]" />}
            />
            <span className="text-xs text-gray-600 ml-1">{stay.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-2">
          <Tooltip title={`${stay.beds} bedrooms`}>
            <div className="flex items-center gap-1 text-gray-600">
              <FaBed className="text-sm" />
              <span className="text-xs">{stay.beds}</span>
            </div>
          </Tooltip>
          <Tooltip title={`${stay.baths} bathrooms`}>
            <div className="flex items-center gap-1 text-gray-600">
              <FaBath className="text-sm" />
              <span className="text-xs">{stay.baths}</span>
            </div>
          </Tooltip>
          <Tooltip title={`Sleeps ${stay.guests} guests`}>
            <div className="flex items-center gap-1 text-gray-600">
              <FaUser className="text-sm" />
              <span className="text-xs">{stay.guests}</span>
            </div>
          </Tooltip>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
          <p className="text-lg font-bold text-[#AF2322]">
            ${stay.price}
            <span className="text-sm font-normal text-gray-500 ml-1">
              /night
            </span>
          </p>
          <Button size="small" className="text-xs font-medium border-gray-300">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
