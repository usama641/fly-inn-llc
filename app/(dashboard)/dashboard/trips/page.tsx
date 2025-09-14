"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  Button,
  Select,
  Space,
  Tooltip,
  Tag,
  Dropdown,
  Modal,
  Badge,
  Form,
  Input,
  Rate,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  MoreOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { useApiGet, useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import { FaPowerOff } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { CiStar } from "react-icons/ci";
import { MaterialReactTable } from "material-react-table";
import { MRT_ColumnDef } from "material-react-table";




const { Option } = Select;

interface BookingListing {
  address: string;
  amount: string;
  arrival_date: string;
  created_at: string;
  departure_date: string;
  guest: Guest;
  id: number | string;
  listing: Listing;
  meta_data: string;
  no_of_children: number;
  no_of_guests: number;
  no_of_infants: number;
  no_of_pets: number;
  status: any;
  taxes: string;
  is_disable: number;
}

interface Listing {
  address: string;
  host: Host;
  host_id: number;
  id: number;
  title: string;
}

interface Guest {
  display_name: string;
  id: number;
  image: string;
}

interface Host {
  display_name: string;
  id: number;
  image: string;
}

const Tripspage = () => {
  const router = useRouter();
  const { data: session } = useSession();


  const { message: appMessage } = useApp();
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedBooking, setSelectedBooking] = useState<BookingListing | null>(
    null
  );

    const { data: bookingList, isPending } = useApiGet({
        endpoint: `/stay/booking`,
    queryKey: ["stay"],
  });

const { data: reviewList, isPending: reviewingList } = useApiGet({
  endpoint: selectedBooking?.id
    ? `/review?populate=["guest"]&stay=${selectedBooking.id}`
    : null,
  queryKey: ["review", selectedBooking?.id], // unique per booking
});


  console.log("selectedBooking", selectedBooking?.id);

  // inside Tripspage component
const { mutate: createReview, isPending: creatingReview } = useApiMutation({
  endpoint: `/review`,
  method: "post",
  config: {
    onSuccess: () => {
      appMessage.success("Feedback submitted successfully!");
refetch()
    },
    onError: (err) => {
      appMessage.error(
        err?.response?.data?.message || "Failed to submit feedback"
      );
    },
  },
});


  console.log("reviewList", reviewList);


  const rawBookings = bookingList?.docs || [];

  const bookingData: BookingListing[] = rawBookings.map(
    (booking: any, index: number) => {
      return {
        id: booking.id || index + 1,
        address: booking.stay?.address?.address || "N/A",
        amount: booking.amount?.toString() || "0",
        arrival_date: booking.arrival_date,
        departure_date: booking.departure_date,
        created_at: booking.createdAt,
        guest: {
          display_name: "GuestUser",
          id: 0,
          image: "",
        },
        listing: {
          address: booking.stay?.address?.address || "N/A",
          host: {
            display_name: "HostUser",
            id: 0,
            image: "",
          },
          host_id: 0,
          id: 0,
          title: booking.stay?.stay_title || "No Title",
        },
        meta_data: booking.meta_data || "",
        no_of_children: 0,
        no_of_guests: booking.no_of_guests,
        no_of_infants: booking.no_of_infants,
        no_of_pets: 0,
        status: booking.status,
        taxes: booking.taxes?.toString() || "0",
        is_disable: 0,
      };
    }
  );

  // Toggle stay status mutation
  const { mutate: toggleStayStatus, isPending: togglingStatus } =
    useApiMutation({
      endpoint: `/stays/${selectedBooking?.id}/toggle-status`,
      method: "patch",
      config: {
        onSuccess: () => {
          appMessage.success("Stay status updated successfully!");
        },
        onError: (err) => {
          appMessage.error(
            err?.response?.data?.message || "Failed to update stay status"
          );
        },
      },
    });


  const getStatusColor = (status: number, isDisable: number) => {
    if (isDisable === 1) return "default";
    if (status === 1) return "success";
    if (status === 0) return "warning";
    return "default";
  };

  const getStatusText = (status: number, isDisable: number) => {
    if (isDisable === 1) return "Deactivated";
    if (status === 1) return "Published";
    if (status === 0) return "Pending";
    return "Unknown";
  };

  const getListingTypeColor = (type: string) => {
    switch (type?.toLowerCase()) {
      case "short-term rental":
        return "blue";
      case "long-term rental":
        return "green";
      case "vacation rental":
        return "purple";
      default:
        return "default";
    }
  };

  const handleReviewList = (record) =>{
    console.log("id", record);
    setSelectedBooking(record);
    setIsModalOpen(true);
  }


const columns: MRT_ColumnDef<BookingListing>[] = [
  {
    header: "ID",
    accessorKey: "id",
    size: 80,
    Cell: ({ cell }) => (
      <span className="text-sm font-medium text-gray-900">
        {cell.getValue<string>().toString().slice(0, 6)}...
      </span>
    ),
  },
  {
    header: "Host",
    accessorKey: "listing",
    size: 120,
    Cell: ({ row }) => (
      <span className="text-sm font-medium text-gray-900">
        {row.original.listing?.host?.display_name}
      </span>
    ),
  },
  {
    header: "Date Created",
    accessorKey: "created_at",
    size: 140,
    Cell: ({ cell }) => (
      <span className="text-sm text-gray-700">
        {new Date(cell.getValue<string>()).toLocaleDateString()}
      </span>
    ),
  },
  {
    header: "Address",
    accessorKey: "address",
    size: 200,
    Cell: ({ cell }) => (
      <Tooltip title={cell.getValue<string>()}>
        <span className="text-sm font-medium text-gray-900 truncate block max-w-xs">
          {cell.getValue<string>()}
        </span>
      </Tooltip>
    ),
  },
  {
    header: "Check In",
    accessorKey: "arrival_date",
    size: 120,
    Cell: ({ cell }) => (
      <span className="text-sm text-gray-700">
        {new Date(cell.getValue<string>()).toLocaleDateString()}
      </span>
    ),
  },
  {
    header: "Check Out",
    accessorKey: "departure_date",
    size: 120,
    Cell: ({ cell }) => (
      <span className="text-sm text-gray-700">
        {new Date(cell.getValue<string>()).toLocaleDateString()}
      </span>
    ),
  },
  {
    header: "Rent",
    accessorKey: "amount",
    size: 120,
    Cell: ({ cell }) => (
      <span className="text-sm font-semibold text-green-600">
        ${parseFloat(cell.getValue<string>() || "0").toFixed(2)}
      </span>
    ),
  },
  {
    header: "Additional Guest",
    accessorKey: "additional_guest",
    size: 120,
    Cell: () => <span className="text-sm text-gray-700">$100.00</span>,
  },
  {
    header: "Pet Fee",
    accessorKey: "pet_fee",
    size: 120,
    Cell: () => <span className="text-sm text-gray-700">$50.00</span>,
  },
  {
    header: "Extra Services",
    accessorKey: "extra_services",
    size: 140,
    Cell: () => <span className="text-sm text-gray-700">$200.00</span>,
  },
  {
    header: "Cleaning Fee",
    accessorKey: "cleaning_fee",
    size: 140,
    Cell: () => <span className="text-sm text-gray-700">$75.00</span>,
  },
  {
    header: "Total Before Taxes",
    accessorKey: "total_before_taxes",
    size: 160,
    Cell: ({ row }) => (
      <span className="text-sm font-semibold text-gray-800">
        ${(parseFloat(row.original.amount) + 100 + 50 + 200 + 75).toFixed(2)}
      </span>
    ),
  },
  {
    header: "Taxes",
    accessorKey: "taxes",
    size: 120,
    Cell: ({ cell }) => (
      <span className="text-sm text-gray-700">
        ${parseFloat(cell.getValue<string>() || "0").toFixed(2)}
      </span>
    ),
  },
  {
    header: "Total",
    accessorKey: "total",
    size: 140,
    Cell: ({ row }) => {
      const base =
        parseFloat(row.original.amount) + 100 + 50 + 200 + 75; // Rent + fees
      const tax = parseFloat(row.original.taxes || "0");
      return (
        <span className="text-sm font-bold text-green-700">
          ${(base + tax).toFixed(2)}
        </span>
      );
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    size: 120,
    Cell: ({ row }) => (
      <Badge
        status={getStatusColor(row.original.status, row.original.is_disable) as any}
        text={getStatusText(row.original.status, row.original.is_disable)}
        className="text-xs"
      />
    ),
  },
  {
    header: "Actions",
    accessorKey: "actions",
    size: 120,
    Cell: ({ row }) => (
      <Dropdown
        menu={{
          items: [
            {
              key: "view",
              label: (
                <Space>
                  <EyeOutlined />
                  View
                </Space>
              ),
              onClick: () => router.push(`/dashboard/bookings/${row.original.id}`),
            },
            {
              key: "review",
              label: (
                <Space>
                  <CiStar />
                  Review
                </Space>
              ),
              onClick: () => handleReviewList(row.original),
            },
          ],
        }}
        trigger={["click"]}
        placement="bottomRight"
      >
        <Button
          type="text"
          icon={<MoreOutlined />}
          className="hover:bg-gray-100"
        />
      </Dropdown>
    ),
    enableColumnActions: false,
    enableSorting: false,
  },
];


  const filteredData = bookingData?.filter((booking: BookingListing) => {
    if (selectedStatus === "all") return true;
    if (selectedStatus === "mine")
      return booking.status === 1 && booking.is_disable === 0;
    if (selectedStatus === "other")
      return booking.status === 0 && booking.is_disable === 0;
    if (selectedStatus === "deactivated") return booking.is_disable === 1;
    return true;
  });


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="w-full mx-auto">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              My Trips
            </h1>
          </div>
        </div>

        <div className="bg-[#F9FAFB] rounded-lg shadow-sm overflow-hidden">
          <MaterialReactTable
  columns={columns}
  data={filteredData}
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
  muiPaginationProps={{
    rowsPerPageOptions: [
      { value: 10, label: "10" },
      { value: 25, label: "25" },
      { value: 50, label: "50" },
      { value: 100, label: "100" },
      { value: filteredData.length, label: "All" },
    ],
    showFirstButton: false,
    showLastButton: false,
  }}
  positionActionsColumn="last"
/>

        </div>
      </div>
      <div>
        <Modal
  title="Review"
  open={isModalOpen}
  onOk={handleOk}
  onCancel={handleCancel}
  footer={null}
  centered
  bodyStyle={{
    maxHeight: 500,
    overflowY: "auto",
  }}
>
  {/* Existing reviews */}
  <div className="my-6">
    {reviewingList? (
      <p>Loading reviews...</p>
    ) : ( reviewList?.docs?.map((review: any) => (
      <div key={review.id} className="mb-4 p-4 border rounded-lg">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold mb-2">
            {review?.guest?.display_name}
          </h2>
          <span className="font-semibold text-lg">{review.comment}</span>
          <div className="flex gap-1 items-center">
            {Array.from({ length: review?.rating }).map((_, idx) => (
              <CiStar key={idx} color="black" className="h-6 w-6" />
            ))}
          </div>
        </div>
      </div>
    )))}
  </div>

  <div className="flex justify-center items-center">

  {reviewList?.docs?.length === 0 && (<p>No Reviews found...</p>)}

  </div>

  <hr className="my-4" />

  {/* Feedback Form */}
  <Form
    layout="vertical"
    onFinish={(values) => {
      if (!selectedBooking) {
        appMessage.error("No booking selected for feedback!");
        return;
      }
      createReview({
        rating: values.rating,
        type: 0,
        comment: values.message,
        stay: selectedBooking?.id, 
        guest: selectedBooking?.id,
      });
    }}
  >
    <Form.Item
      label="Your Feedback"
      name="message"
      rules={[{ required: true, message: "Please enter your feedback!" }]}
    >
      <Input.TextArea rows={4} placeholder="Write your feedback here..." />
    </Form.Item>

    <Form.Item
      label="Your Rating"
      name="rating"
      rules={[{ required: true, message: "Please select a rating!" }]}
    >
      <Rate />
    </Form.Item>

    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        block
        loading={creatingReview}
      >
        Submit Feedback
      </Button>
    </Form.Item>
  </Form>
</Modal>


    </div>
    </div>

  );
};

export default Tripspage;
