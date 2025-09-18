"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Table, Button, Select, Space, Tooltip, Dropdown, Modal } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useApiGet, useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import { BsInfoCircleFill } from "react-icons/bs";

const { Option } = Select;

interface Business {
  id: string;
  name: string;
  logo: string;
  description: string;
  tagline: string;
  url: string;
  phone: string;
  airport: string;
  distance_from_runway: number;
  address: {
    country: string;
    state: string;
    city: string;
    zipcode: number;
    address: string;
  };
}

const BusinessPage = () => {
  const router = useRouter();
  const { message: appMessage } = useApp();
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [open, setOpen] = useState(true);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  const {
    data: businessData,
    isLoading,
    refetch,
  } = useApiGet({
    endpoint: `/business`,
    queryKey: ["business"],
    config: {
      select: (res) => res?.data?.docs || [], 
    },
  });

  const dataSource: Business[] = businessData || [];

  const { mutate: deleteBusiness, isPending: deletingBusiness } =
    useApiMutation({
      endpoint: `/business/${selectedBusiness?.id}`,
      method: "delete",
      config: {
        onSuccess: () => {
          appMessage.success("Business deleted successfully!");
          setDeleteModalVisible(false);
          setSelectedBusiness(null);
          refetch();
        },
        onError: (err) => {
          appMessage.error(
            err?.response?.data?.message || "Failed to delete business"
          );
        },
      },
    });

  const handleDelete = (business: Business) => {
    setSelectedBusiness(business);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedBusiness) {
      deleteBusiness(selectedBusiness.id);
    }
  };

  const mrtColumns: MRT_ColumnDef<Business>[] = [
    {
      accessorKey: "id",
      header: "ID",
      size: 200,
    },
    {
      accessorKey: "name",
      header: "Name",
      Cell: ({ cell }) => (
        <span className="text-sm font-medium text-gray-900">
          {cell.getValue<string>()}
        </span>
      ),
    },
    {
      accessorKey: "airport",
      header: "Airport",
    },
    {
      accessorKey: "distance_from_runway",
      header: "Distance from Runway",
      Cell: ({ cell }) => <span>{cell.getValue<number>()} miles</span>,
    },
    {
      accessorKey: "address.state",
      header: "State",
    },
    {
      accessorKey: "address.country",
      header: "Country",
    },
    {
      accessorKey: "url",
      header: "Website",
      Cell: ({ cell }) => {
        const url = cell.getValue<string>();
        return (
          <a href={url} target="_blank" rel="noreferrer" className="text-blue-500 underline">
            {url}
          </a>
        );
      },
    },
    {
      accessorKey: "phone",
      header: "Phone",
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
                      <EyeOutlined /> View
                    </Space>
                  ),
                  onClick: () => router.push(`/dashboard/business/${record.id}`),
                },
                {
                  key: "edit",
                  label: (
                    <Space>
                      <EditOutlined /> Edit
                    </Space>
                  ),
                  onClick: () =>
                    router.push(`/dashboard/listings/business/${record.id}`),
                },
                {
                  key: "delete",
                  label: (
                    <Space className="text-red-500">
                      <DeleteOutlined /> Delete
                    </Space>
                  ),
                  onClick: () => handleDelete(record),
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
        );
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Business</h1>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            onClick={() => router.push("/dashboard/business/new")}
          >
            Add Business
          </Button>
        </div>
      </div>

      {/* Business Table */}
      <div className="bg-[#F9FAFB] rounded-lg shadow-sm overflow-hidden">
        <MaterialReactTable
          columns={mrtColumns}
          data={dataSource}
          state={{ isLoading }}
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
              { value: dataSource.length, label: "All" },
            ],
            showFirstButton: false,
            showLastButton: false,
          }}
          positionActionsColumn="last"
        />
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        title="Delete Business"
        open={deleteModalVisible}
        onOk={confirmDelete}
        onCancel={() => {
          setDeleteModalVisible(false);
          setSelectedBusiness(null);
        }}
        confirmLoading={deletingBusiness}
        okText="Delete"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p>
          Are you sure you want to delete the business{" "}
          <strong>{selectedBusiness?.name}</strong>? This action cannot be
          undone.
        </p>
      </Modal>

      {/* Info Modal */}
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

export default BusinessPage;