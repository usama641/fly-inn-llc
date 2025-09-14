"use client";

import { useApiGet, useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import {
  DeleteOutlined,
  EyeOutlined,
  HeartFilled,
  HomeOutlined,
  UserOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space, Tooltip, Table, Modal } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiExchangeLine } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";


export default function FavouritesPage() {
  const [layout, setLayout] = useState("list");
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [open, setOpen] = useState(true)
  const router = useRouter();
    const { message: appMessage } = useApp();
      const { data: session } = useSession();
    
  const {
    data: favData,
    isPending,
    refetch,
  } = useApiGet({
    endpoint: `/user/favourite?user=${session?.user.id}&populate=["stay"]`,
    queryKey: ["favourite", selectedStatus],
    config: {
      select: (res) => res?.data?.docs || [],
    },
  });

    const { mutate: removeFav, isPending: removing } = useApiMutation({
      endpoint: `/user/favourite/${selectedStatus}`,
      method: "delete",
      config: {
        onSuccess: () => {
          appMessage.success("Favourite removed successfully!");
          setSelectedStatus(null);
          refetch();
        },
        onError: (err) => {
          appMessage.error(
            err?.response?.data?.message || "Failed to remove favourite.",
          );
        },
      },
    });



  const handleDelete = (record: any) => {
    console.log("Delete record", record);
    setSelectedStatus(record?.id);
    removeFav();
  };

  // Ant Design table columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
      render: (id: number) => (
        <span className="text-sm font-medium text-gray-900">{id}</span>
      ),
    },
    {
      title: "Title",
      dataIndex: ["stay", "stay_title"],
      key: "stay_title",
      width: 250,
      render: (title: string) => (
        <Tooltip title={title}>
          <span className="text-sm font-medium text-gray-900 truncate block max-w-xs">
            {title}
          </span>
        </Tooltip>
      ),
    },
    {
      title: "Bedrooms",
      dataIndex: ["stay", "no_of_bedrooms"],
      key: "no_of_bedrooms",
      width: 100,
    },
    {
      title: "Bathrooms",
      dataIndex: ["stay", "no_of_bathrooms"],
      key: "no_of_bathrooms",
      width: 100,
    },
    {
      title: "Guests",
      dataIndex: ["stay", "no_of_guest"],
      key: "no_of_guest",
      width: 80,
    },
    {
      title: "Actions",
      key: "actions",
      width: 120,
      fixed: "right" as const,
      render: (_: any, record: any) => (
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
                onClick: () => router.push(`/stays/${record?.stay?.id}`),
              },
              {
                key: "delete",
                label: (
                  <Space className="text-red-500">
                    <DeleteOutlined />
                    Remove
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
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold">Favourite Listings</h2>

      <div className="flex justify-end my-6 sm:my-4">
        <Button
          type="primary"
          icon={<RiExchangeLine />}
          size="large"
          onClick={() => {
            setLayout(layout === "list" ? "card" : "list");
          }}
        >
          Change Layout to {layout === "list" ? "card" : "list"}
        </Button>
      </div>

      {layout === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {favData?.map((fav: any) => {
            const stay = fav.stay;
            return (
              <div
                key={stay.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition relative"
              >
                <img
                  src={stay?.images?.[0]?.image}
                  alt={stay.stay_title}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div 
                onClick={() => handleDelete(fav)}
                className="absolute top-3 right-3 bg-white rounded-full p-1 shadow cursor-pointer">
                  <HeartFilled className="text-[#E53935] text-xl" />
                </div>
                <div className="p-4">
                  <div className="font-bold text-base leading-tight">
                    {stay.stay_title}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    {stay?.address?.city}, {stay?.address?.country}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                    <span>
                      <HomeOutlined className="mr-1" />
                      {stay.no_of_bedrooms}
                    </span>
                    <span>
                      <UserOutlined className="mr-1" />
                      {stay.no_of_guest}
                    </span>
                    <span>
                      <i className="ri-bathtub-line mr-1" />
                      {stay.no_of_bathrooms}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#E53935] font-bold text-lg">
                      ${stay?.pricing?.nightly_price}
                    </span>
                    <span className="font-semibold text-base ml-1">/ Night</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Table
            columns={columns}
            dataSource={favData}
            rowKey="id"
            loading={isPending}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} stays`,
            }}
            scroll={{ x: 1500 }}
            className="ant-table-stays"
          />
        </div>
      )}
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
}
