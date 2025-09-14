"use client";
import Image from "next/image";
import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { useApiGet } from "@/http-service";
import { useSession } from "next-auth/react";

const ReviewsPage = () => {
  const { data: session } = useSession();

  const user_id = session?.user?.id;

  const { data: review } = useApiGet({
    endpoint: `/review/${user_id}`,
    queryKey: ["review"],
    config: {
      select: (res) => res?.data?.doc,
    },
  });

  if (!review) {
    return <p>No Reviews found...</p>;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Reviews</h1>
      </div>
      <div className="max-w-[300px] p-4 flex flex-col gap-1 items-center border border-[#C0BFBF] rounded-lg shadow-sm">
        <span className="flex gap-1 font-normal text-base text-black">
          Review ID:
          <p className="font-bold text-base text-[#CE2029] italic">
            {review?.id}
          </p>
        </span>

        <span className="flex gap-1 font-normal text-base text-black">
          Business ID:
          <p className="font-bold text-base text-[#CE2029] italic">
            {review?.business}
          </p>
        </span>

        <Image
          src="/assets/images/airplane-bg.png"
          alt="avatar"
          className="object-cover rounded-full h-16 w-16"
          height={100}
          width={100}
        />

        <span className="font-normal text-md italic text-[#CE2029]">Guest</span>
        <span className="font-medium text-lg text-[#2D2929]">
          {review?.guest}
        </span>

        <span className="font-normal text-sm text-[#A8A8A8]">
          Created At: {new Date(review?.createdAt).toLocaleDateString()}
        </span>

        {/* Stars */}
        <div className="flex gap-1 items-center">
          {Array.from({ length: review?.rating }).map((_, idx) => (
            <RiStarSFill key={idx} color="black" className="h-6 w-6" />
          ))}
        </div>

        <span className="font-normal text-sm text-[#A8A8A8]">
          {review?.rating} Stars
        </span>

        <p className="font-normal text-md text-[#2D2929] text-center my-3">
          {review?.comment}
        </p>

        <div className="flex gap-4 items-center">
          <IoEye color="#CE2029" className="h-10 w-10" />
          <MdRateReview color="#CE2029" className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
