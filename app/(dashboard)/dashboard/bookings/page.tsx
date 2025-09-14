"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Space,
  Tooltip,
  Dropdown,
  Modal,
  Badge,
  Select,
} from "antd";
import {
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useApiGet, useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import { useSession } from "next-auth/react";
import { BsInfoCircleFill } from "react-icons/bs";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";

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
  status: number;
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

const BookingPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { message: appMessage } = useApp();

  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedBooking, setSelectedBooking] = useState<BookingListing | null>(null);
  const [open, setOpen] = useState(true);

  // Fetch bookings
  const { data: bookingist, isLoading } = useApiGet({
    endpoint: `/stay/booking`,
    queryKey: ["stay"],
  });

  const rawBookings = bookingist?.docs || [];

  const bookingData: BookingListing[] = rawBookings.map((booking: any, index: number) => ({
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
  }));

  // Toggle booking status mutation
  const { mutate: toggleBookingStatus, isPending: togglingStatus } = useApiMutation({
    endpoint: `/bookings/${selectedBooking?.id}/toggle-status`, // ✅ fixed endpoint
    method: "patch",
    config: {
      onSuccess: () => {
        appMessage.success("Booking status updated successfully!");
      },
      onError: (err) => {
        appMessage.error(err?.response?.data?.message || "Failed to update booking status");
      },
    },
  });

  const handleToggleStatus = (booking: BookingListing) => {
    setSelectedBooking(booking);
    toggleBookingStatus({
      id: booking.id,
      is_disable: booking.is_disable === 1 ? 0 : 1,
    });
  };

  const getStatusColor = (status: number, isDisable: number) => {
    if (isDisable === 1) return "default";
    if (status === 1) return "success";
    if (status === 0) return "warning";
    return "default";
  };

  const getStatusText = (status: number, isDisable: number) => {
    if (isDisable === 1) return "Deactivated";
    if (status === 1) return "Confirmed";
    if (status === 0) return "Pending";
    return "Unknown";
  };

  // MRT Columns
  const mrtColumns: MRT_ColumnDef<BookingListing>[] = [
    {
      accessorKey: "id",
      header: "ID",
      size: 80,
      Cell: ({ cell }) => <span className="font-medium">#{cell.getValue<number>()}</span>,
    },
    {
      accessorKey: "listing.host.display_name",
      header: "Host",
      size: 120,
    },
    {
      accessorKey: "guest.display_name",
      header: "Guest",
      size: 120,
    },
    {
      accessorKey: "listing.title",
      header: "Listing Title",
      size: 200,
      Cell: ({ cell }) => (
        <Tooltip title={cell.getValue<string>()}>
          <span className="truncate block max-w-xs">{cell.getValue<string>()}</span>
        </Tooltip>
      ),
    },
    {
      accessorKey: "arrival_date",
      header: "Check In",
      size: 120,
      Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
    },
    {
      accessorKey: "departure_date",
      header: "Check Out",
      size: 120,
      Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
    },
    {
      accessorKey: "amount",
      header: "Rent",
      size: 100,
      Cell: ({ cell }) => <span className="text-green-600 font-semibold">${parseFloat(cell.getValue<string>() || "0").toFixed(2)}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      size: 120,
      Cell: ({ cell, row }) => (
        <Badge status={getStatusColor(cell.getValue<number>(), row.original.is_disable) as any} text={getStatusText(cell.getValue<number>(), row.original.is_disable)} />
      ),
    },
    {
      id: "actions",
      header: "Actions",
      size: 100,
      Cell: ({ row }) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "view",
                label: (
                  <Space>
                    <EyeOutlined /> View Booking
                  </Space>
                ),
                onClick: () => router.push(`/dashboard/bookings/${row.original.id}`),
              },
            ],
          }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Button type="text" icon={<MoreOutlined />} className="hover:bg-gray-100" />
        </Dropdown>
      ),
    },
  ];

  const filteredData = bookingData?.filter((booking: BookingListing) => {
    if (selectedStatus === "all") return true;
    if (selectedStatus === "mine") return booking.status === 1 && booking.is_disable === 0;
    if (selectedStatus === "other") return booking.status === 0 && booking.is_disable === 0;
    if (selectedStatus === "deactivated") return booking.is_disable === 1;
    return true;
  });

  return (
    <>
      <div className="min-h-screen bg-white p-6">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
        </div>

        {/* Filters */}
        {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Filter by Status:</span>
            <Select value={selectedStatus} onChange={setSelectedStatus} className="w-40" size="large">
              <Option value="all">All</Option>
              <Option value="mine">Mine</Option>
              <Option value="other">Others</Option>
              <Option value="deactivated">Deactivated</Option>
            </Select>
          </div>
          <div className="text-sm text-gray-500">{filteredData?.length || 0} bookings found</div>
        </div> */}

        {/* Table */}
        <div className="bg-[#F9FAFB] rounded-lg shadow-sm overflow-hidden">
          <MaterialReactTable
            columns={mrtColumns}
            data={filteredData}
            state={{ isLoading }}
            muiTableBodyRowProps={({ row }) => ({
              sx: { backgroundColor: row.index % 2 === 0 ? "white" : "#FFF9F9" },
            })}
            muiTableHeadCellProps={{
              sx: { backgroundColor: "#f9fafb", fontWeight: "bold" },
            }}
            muiTableContainerProps={{ sx: { backgroundColor: "#f9fafb" } }}
            muiPaginationProps={{
              rowsPerPageOptions: [
                { value: 10, label: "10" },
                { value: 25, label: "25" },
                { value: 50, label: "50" },
                { value: 100, label: "100" },
                { value: filteredData.length, label: "All" },
              ],
            }}
            positionActionsColumn="last"
          />
        </div>
      </div>

      {/* Info Modal */}
      <Modal open={open} onCancel={() => setOpen(false)} footer={null} width={350} centered>
        <div className="w-full flex flex-col items-center text-sm text-black">
          <BsInfoCircleFill color="#9DE0F6" size={44} className="mb-3" />
          <span className="text-center">Please scroll right and left to view more columns.</span>
          <button onClick={() => setOpen(false)} className="text-white bg-[#CE2029] px-4 py-2 rounded-md mt-4">
            OK
          </button>
        </div>
      </Modal>
    </>
  );
};

export default BookingPage;
