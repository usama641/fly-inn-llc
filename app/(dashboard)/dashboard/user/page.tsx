"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Space, Dropdown, Modal, Tag, Avatar } from "antd";
import {
  EditOutlined,
  EyeOutlined,
  MoreOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import { useApiGet, useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import { useSession } from "next-auth/react";
import VerificationButtons from "./_components/VerificationButtons";
import { MaterialReactTable } from "material-react-table";
import { BsInfoCircleFill } from "react-icons/bs";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  email_verified: boolean;
  driver_verification: boolean;
  airmen_verification: boolean;
  status: string;
  user_info: string;
  display_name: string;
  profile_photo: string;
  created_at: string;
  updated_at: string;
}

const UserPage = () => {
  const router = useRouter();
  const { message: appMessage } = useApp();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [open, setOpen] = useState(true);

  const { data: session } = useSession();
  const user_id = session?.user?.id;

  const {
    data: UserData = [],
    refetch,
  } = useApiGet({
    endpoint: `/users`,
    queryKey: ["users"],
    config: {
      select: (res) =>
        res?.data?.docs?.map((u: any) => ({
          id: u.id,
          name: `${u.first_name} ${u.last_name}`,
          email: u.email,
          phone: u.phone,
          email_verified: u.email_verified,
          driver_verification: u.driving_license_verified,
          airmen_verification:
            !!u.airmen_certificate_front && !!u.airmen_certificate_back,
          status: u.status === 0 ? "Inactive" : "Active",
          user_info: `${u.first_name} ${u.middle_name ?? ""} ${u.last_name}`,
          display_name: u.display_name,
          profile_photo: u.photo,
          created_at: u.createdAt,
          updated_at: u.updatedAt,
        })) || [],
    },
  });

  const { mutate: updateUser, isPending: updatingUser } = useApiMutation({
    endpoint: `/user/${selectedUser?.id}`,
    method: "patch",
    config: {
      onSuccess: () => {
        appMessage.success("User updated successfully!");
        setDeleteModalVisible(false);
        setSelectedUser(null);
        refetch();
      },
      onError: (err) => {
        appMessage.error(
          err?.response?.data?.message || "Failed to update user"
        );
      },
    },
  });

  const handleDeactivate = (user: User) => {
    setSelectedUser(user);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedUser) {
      updateUser({ status: 2 }); 
    }
  };

  // ✅ define MRT columns
  const mrtColumns = [
    {
      accessorKey: "user_info",
      header: "User Info",
      Cell: ({ row }: any) => {
        const record = row.original as User;
        return (
          <Space>
            <Avatar src={record.profile_photo} />
            <div>
              <div className="font-medium">{record.name}</div>
              <div className="text-gray-500 text-xs">{record.email}</div>
            </div>
          </Space>
        );
      },
    },
    { accessorKey: "display_name", header: "Display Name" },
    { accessorKey: "phone", header: "Phone" },
    {
      accessorKey: "email_verified",
      header: "Email Verified",
      Cell: ({ row }: any) => {
        const record = row.original as User;
        return (
          <VerificationButtons
            isVerified={record.email_verified}
            label={record.email_verified ? "Verified" : "Not Verified"}
            onVerify={() => updateUser({ email_verified: true })}
          />
        );
      },
    },
    {
      accessorKey: "driver_verification", 
      header: "Driver Verification",
      Cell: ({ row }: any) => {
        const record = row.original as User;
        return (
          <VerificationButtons
            isVerified={record.driver_verification}
            label={record.driver_verification ? "Verified" : "Not Verified"}
            onVerify={() => updateUser({ driving_license_verified: true })}
          />
        );
      },
    },
    {
      accessorKey: "airmen_verification",
      header: "Airmen Verification",
      Cell: ({ row }: any) => {
        const record = row.original as User;
        return (
          <VerificationButtons
            isVerified={record.airmen_verification}
            label={record.airmen_verification ? "Verified" : "Not Verified"}
            onVerify={() => updateUser({ airmen_verified: true })}
          />
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }: any) => {
        const status = cell.getValue() as string;
        return status === "Active" ? (
          <Tag color="green">Active</Tag>
        ) : (
          <Tag color="red">Inactive</Tag>
        );
      },
    },
    {
      header: "Actions",
      accessorKey: "actions",
      Cell: ({ row }: any) => {
        const record = row.original as User;
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
                  onClick: () =>
                    router.push(`/dashboard/user/${record.id}`),
                },
                {
                  key: "edit",
                  label: (
                    <Space>
                      <EditOutlined /> Edit
                    </Space>
                  ),
                  onClick: () =>
                    router.push(`/dashboard/user/edit/${record.id}`),
                },
                {
                  key: "deactivate",
                  label: (
                    <Space className="text-red-500">
                      <UserDeleteOutlined /> Deactivate
                    </Space>
                  ),
                  onClick: () => handleDeactivate(record),
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Users</h1>
        </div>

        {/* Table */}
        <div className="bg-[#F9FAFB] rounded-lg shadow-sm overflow-hidden">
          <MaterialReactTable
            columns={mrtColumns}
            data={UserData}
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
                { value: UserData.length, label: "All" },
              ],
              showFirstButton: false,
              showLastButton: false,
            }}
            positionActionsColumn="last"
          />
        </div>
      </div>

      {/* Deactivate Modal */}
      <Modal
        title="Deactivate User"
        open={deleteModalVisible}
        onOk={confirmDelete}
        onCancel={() => {
          setDeleteModalVisible(false);
          setSelectedUser(null);
        }}
        confirmLoading={updatingUser}
        okText="Deactivate"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p>
          Are you sure you want to deactivate{" "}
          <strong>{selectedUser?.name}</strong>?
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

export default UserPage;
