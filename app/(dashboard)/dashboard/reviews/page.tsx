"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiStarSFill, RiExchangeLine } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { useApiGet } from "@/http-service";
import { useSession } from "next-auth/react";
import { Button, Tooltip, Badge, Dropdown, Space } from "antd";
import { MoreOutlined, EyeOutlined } from "@ant-design/icons";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { MaterialReactTable } from "material-react-table";
import { MRT_ColumnDef } from "material-react-table";


type Review = {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
  guest: {
    display_name: string;
    email: string;
    phone: string;
    photo?: string;
  };
  stay: {
    id: string;
    stay_type: string;
    stay_title: string;
    images: { image: string; description?: string }[];
  };
};


const ReviewsPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [layout, setLayout] = useState<"card" | "list">("card");

  const user_id = session?.user?.id;

const { data: reviews } = useApiGet({
  endpoint: `/review?guest=${user_id} `,
  queryKey: ["review", user_id],
  config: {
    select: (res) => res?.data?.docs as Review[],
  },
});


  if (!reviews || reviews.length === 0) {
    return <p>No Reviews found...</p>;
  }

 const columns: MRT_ColumnDef<Review>[] = [
  {
    header: "Review ID",
    accessorKey: "id",
    Cell: ({ cell }) => (
      <span className="text-sm font-medium text-gray-900">
        {cell.getValue<string>().slice(0, 6)}...
      </span>
    ),
  },
  {
    header: "Stay Title",
    accessorFn: (row) => row.stay?.stay_title,
  },
  {
    header: "Stay Type",
    accessorFn: (row) => row.stay?.stay_type,
  },
  {
    header: "Guest Name",
    accessorFn: (row) => row.guest?.display_name,
  },
  {
    header: "Guest Email",
    accessorFn: (row) => row.guest?.email,
  },
  {
    header: "Rating",
    accessorKey: "rating",
    Cell: ({ cell }) => (
      <span className="text-sm text-gray-900">⭐ {cell.getValue<number>()}</span>
    ),
  },
  {
    header: "Comment",
    accessorKey: "comment",
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
    Cell: ({ cell }) => (
      <span className="text-sm text-gray-700">
        {new Date(cell.getValue<string>()).toLocaleDateString()}
      </span>
    ),
  },
];


  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">My Reviews</h1>

        <Button
          type="primary"
          icon={<RiExchangeLine />}
          size="large"
          onClick={() => setLayout(layout === "list" ? "card" : "list")}
        >
          Change Layout to {layout === "list" ? "Card" : "List"}
        </Button>
      </div>

      {layout === "card" ? (
        <div className="flex flex-wrap gap-6">
        {reviews.map((review) => (
  <div
    key={review.id}
    className="w-[300px] p-4 flex flex-col gap-2 items-center border border-[#C0BFBF] rounded-lg shadow-sm"
  >
    <span className="flex gap-1 font-normal text-base text-black">
      Review ID:
      <p className="font-bold text-base text-[#CE2029] italic">
        {review.id.slice(0, 9)}...
      </p>
    </span>

    <span className="flex gap-1 font-normal text-base text-black">
      Stay ID:
      <p className="font-bold text-base text-[#CE2029] italic">
        {review.stay.id.slice(0,9)}...
      </p>
    </span>

         <Image
          src="/assets/images/airplane-bg.png"
          alt="avatar"
          className="object-cover rounded-full h-16 w-16"
          height={100}
          width={100}
        />s


    <span className="font-normal text-md italic text-[#CE2029]">
      Guest
    </span>
    <span className="font-medium text-lg text-[#2D2929]">
      {review.guest.display_name}
    </span>

    <span className="font-normal text-sm text-[#A8A8A8]">
      Created At: {new Date(review.createdAt).toLocaleDateString()}
    </span>

    {/* Stars */}
    <div className="flex gap-1 items-center">
      {Array.from({ length: review.rating }).map((_, idx) => (
        <RiStarSFill key={idx} color="black" className="h-6 w-6" />
      ))}
    </div>

    <span className="font-normal text-sm text-[#A8A8A8]">
      {review.rating} Stars
    </span>

    <p className="font-normal text-md text-[#2D2929] text-center my-3">
      {review.comment}
    </p>

    {/* <div className="flex gap-4 items-center">
      <IoEye color="#CE2029" className="h-10 w-10" />
      <MdRateReview color="#CE2029" className="h-10 w-10" />
    </div> */}
  </div>
))}

        </div>
      ) : (
        <div className="bg-[#F9FAFB] rounded-lg shadow-sm overflow-hidden">
          <MaterialReactTable
            columns={columns}
            data={reviews}
            muiTableBodyRowProps={({ row }) => ({
              sx: {
                backgroundColor: row.index % 2 === 0 ? "white" : "#FFF9F9",
              },
            })}
            muiTableHeadCellProps={{
              sx: {
                backgroundColor: "#f9fafb",
                fontWeight: "bold",
              },
            }}
            muiTableContainerProps={{
              sx: {
                backgroundColor: "#f9fafb",
              },
            }}
            positionActionsColumn="last"
          />
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;
