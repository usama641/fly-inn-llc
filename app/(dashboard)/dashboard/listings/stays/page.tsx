"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Space,
  Image,
  Tag,
  Dropdown,
  Modal,
  Badge,
  Tooltip,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  MoreOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { FaPowerOff } from "react-icons/fa";
import { useApiGet, useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import { BsInfoCircleFill } from "react-icons/bs";

interface StayListing {
  id: number;
  title: string;
  listing_type: string;
  lodging_type: string;
  type_of_space: string;
  nightly_price: string;
  no_of_bedrooms: number;
  no_of_bathrooms: string;
  no_of_guest: number;
  unit_of_measure: string;
  is_disable: number;
  status: number;
  images: Array<{ id: number; image: string }>;
}

const StaysListingPage = () => {
  const router = useRouter();
  const { message: appMessage } = useApp();
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedStay, setSelectedStay] = useState<StayListing | null>(null);
  const [open, setOpen] = useState(true)

  const { data: staysData = [], refetch } = useApiGet({
    endpoint: "/stay",
    queryKey: ["stay", selectedStatus],
    config: { select: (res) => res?.data?.docs || [] },
  });

  const { mutate: deleteStay, isPending: deletingStay } = useApiMutation({
    endpoint: `/stay/${selectedStay?.id}`,
    method: "delete",
    config: {
      onSuccess: () => {
        appMessage.success("Stay deleted successfully!");
        setDeleteModalVisible(false);
        setSelectedStay(null);
        refetch();
      },
      onError: (err) =>
        appMessage.error(err?.response?.data?.message || "Failed to delete stay"),
    },
  });

  const { mutate: toggleStayStatus, isPending: togglingStatus } = useApiMutation({
    endpoint: `/stay/${selectedStay?.id}/toggle-status`,
    method: "patch",
    config: {
      onSuccess: () => {
        appMessage.success("Stay status updated successfully!");
        refetch();
      },
      onError: (err) =>
        appMessage.error(err?.response?.data?.message || "Failed to update stay status"),
    },
  });

  const handleDelete = (stay: StayListing) => {
    setSelectedStay(stay);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedStay) deleteStay(selectedStay.id);
  };

  const handleToggleStatus = (stay: StayListing) => {
    setSelectedStay(stay);
    toggleStayStatus({ id: stay.id, is_disable: stay.is_disable === 1 ? 0 : 1 });
  };

  const mrtColumns: MRT_ColumnDef<StayListing>[] = [
    {
      accessorKey: "id",
      header: "ID",
      Cell: ({ cell }) => <span className="font-medium">#{cell.getValue<number>()}</span>,
      size: 80,
    },
    {
      accessorKey: "images",
      header: "Image",
      Cell: ({ row }) => {
        const images = row.original.images;
        return images?.length ? (
          <Image
            src={images[0]?.image}
            alt="Stay"
            width={60}
            height={60}
            className="rounded-lg object-cover"
          />
        ) : (
          <div className="w-15 h-15 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-xs">No Image</span>
          </div>
        );
      },
      size: 100,
    },
  {
    accessorKey: "stay_title",
    header: "Stay Title",
    Cell: ({ cell }) => (
      <Tooltip title={cell.getValue<string>()}>
        <span className="truncate block max-w-xs">{cell.getValue<string>()}</span>
      </Tooltip>
    ),
  },
  {
    accessorKey: "stay_type",
    header: "Stay Type",
    Cell: ({ cell }) => <Tag color="purple">{cell.getValue<string>()}</Tag>,
  },
    {
      accessorKey: "space_type",
      header: "Lodging Type",
    Cell: ({ cell }) => <Tag color="green">{cell.getValue<string>()}</Tag>,

    },
    {
      accessorKey: "nightly_price",
      header: "Price",
      Cell: ({ cell }) => (
        <span className="font-semibold text-green-600">
          ${parseFloat(cell.getValue<string>() || "0").toFixed(2)}
        </span>
      ),
    },
    {
      accessorKey: "no_of_bedrooms",
      header: "Bedrooms",
    },
    {
      accessorKey: "no_of_bathrooms",
      header: "Bathrooms",
      Cell: ({ cell }) => parseFloat(cell.getValue<string>() || "0").toFixed(1),
    },
    {
      accessorKey: "no_of_guest",
      header: "Guests",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ row }) => {
        const { status, is_disable } = row.original;
        const text =
          status === 0 ? "Pending" : status === 1 ? "Published" : status === 2 ? "Draft" : status === 3 ? "Featured" : status === 4 ? "Waiting Approval" : "Deactivated";
        const badgeStatus =
          is_disable === 1 ? "default" : status === 1 ? "success" : "warning";
        return <Badge status={badgeStatus as any} text={text} />;
      },
    },
    {
      id: "actions",
      header: "Actions",
      Cell: ({ row }) => {
        const record = row.original;
        return (
          <Dropdown
            menu={{
              items: [
                {
                  key: "view",
                  label: (
                    <Space>
                      <EyeOutlined /> View Stay
                    </Space>
                  ),
                  onClick: () => router.push(`/stays/${record.id}`),
                },
                {
                  key: "edit",
                  label: (
                    <Space>
                      <EditOutlined /> Edit Stay
                    </Space>
                  ),
                  onClick: () => router.push(`/listings/stays/edit/${record.id}`),
                },
                {
                  key: "toggle",
                  label: (
                    <Space>
                      {record.is_disable === 1 ? <FaPowerOff /> : <PoweroffOutlined />}
                      {record.is_disable === 1 ? "Activate" : "Deactivate"}
                    </Space>
                  ),
                  onClick: () => handleToggleStatus(record),
                  disabled: togglingStatus,
                },
                {
                  key: "delete",
                  label: (
                    <Space className="text-red-500">
                      <DeleteOutlined /> Delete Stay
                    </Space>
                  ),
                  onClick: () => handleDelete(record),
                },
              ],
            }}
            trigger={["click"]}
          >
            <Button type="text" icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
      size: 120,
    },
  ];

  const filteredData = staysData?.filter((stay: StayListing) => {
    if (selectedStatus === "all") return true;
    if (selectedStatus === "published") return stay.status === 1;
    if (selectedStatus === "pending") return stay.status === 0 ;
    if (selectedStatus === "drafts") return stay.status === 2 ;
    if (selectedStatus === "featured") return stay.status === 3 ;
    if (selectedStatus === "waiting approval") return stay.status === 4;
    if (selectedStatus === "deactivated") return stay.status === 5;
    return true;
  });

  const listingButtons = [
  { id: 0, title: "All" },
  { id: 1, title: "Published" },
  { id: 2, title: "Pending" },
  { id: 3, title: "Drafts" },
  { id: 4, title: "Featured" },
  { id: 5, title: "Waiting Approval" },
  { id: 6, title: "Deactivated" },
];


  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Listing</h1>
          <p className="text-gray-600">Manage your properties.</p>
             <Button
          type="primary"
          icon={<PlusOutlined />}
          className="bg-[#CE2029]"
          onClick={() => router.push("/dashboard/listings/stays/add-stay-listing")}
        >
          Add Listing
        </Button>
        </div>
      </div>

      {/* Filter Buttons */}
        <div className="mb-4 flex flex-wrap gap-2">
          {listingButtons.map((button) => (
            <Button
              key={button.id}
              onClick={() => setSelectedStatus(button.title.toLowerCase())}
              className={`font-medium text-sm border-[#CE2029] ${
                selectedStatus === button.title.toLowerCase()
                  ? "bg-[#CE2029] text-white"
                  : "bg-white text-[#CE2029]"
              }`}
            >
              {button.title}
            </Button>
          ))}
        </div>

      <MaterialReactTable
        columns={mrtColumns}
        data={filteredData}
        muiTableBodyRowProps={({ row }) => ({
          sx: { backgroundColor: row.index % 2 === 0 ? "white" : "#fdf4f4" },
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
            { value: filteredData?.length, label: "All" },
          ],
        }}
        positionActionsColumn="last"
      />

      {/* Delete Modal */}
      <Modal
        title="Delete Stay"
        open={deleteModalVisible}
        onOk={confirmDelete}
        confirmLoading={deletingStay}
        onCancel={() => setDeleteModalVisible(false)}
        okText="Delete"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p>
          Are you sure you want to delete "{selectedStay?.title}"? This action cannot be
          undone.
        </p>
      </Modal>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={350}
        centered
        >
          <div className="w-full flex flex-col items-center text-sm text-black">
            <BsInfoCircleFill color="#9DE0F6" size={44} className="mb-3" />
              <span className="text-center">
                Please scroll right and left to view more columns.
              </span>
                <button
                  onClick={() => setOpen(false)}
                    className="text-white bg-[#CE2029] border-none px-4 py-2 rounded-md mt-4"
                    >
                      OK
                  </button>
            </div>
        </Modal>
    </div>
  );
};

export default StaysListingPage;