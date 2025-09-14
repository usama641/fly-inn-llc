"use client";

import { Button, Modal } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useApiGet, useApiMutation } from "@/http-service";
import { useState } from "react";
import { useApp } from "@/providers/AppMessageProvider";
import { MaterialReactTable } from "material-react-table";
import { BsInfoCircleFill } from "react-icons/bs";

interface DataType {
  id: string;
  title: string;
  type: string;
  before: string;
  after: string;
}

export default function CancelationPolicy() {
  const router = useRouter();
  const { message: appMessage } = useApp();

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<DataType | null>(null);
  const [open, setOpen] = useState(true);

  const { data: cancellationPolicyList = [], refetch } = useApiGet({
    endpoint: `/stay/cancellation-policy`,
    queryKey: ["cancellation-policy"],
    config: {
      select: (data: any) =>
        data?.data?.docs?.map((item: any) => ({
          id: item.id,
          title: item.name,
          type: item.type === 1 ? "long" : "short",
          before: item.before_check_in,
          after: item.after_check_in,
        })) || [],
    },
  });

  const { mutate: deletePolicy, isPending: deletingPolicy } = useApiMutation({
    endpoint: `/stay/cancellation-policy/${selectedPolicy?.id}`,
    method: "delete",
    config: {
      onSuccess: () => {
        appMessage.success("Policy deleted successfully!");
        setDeleteModalVisible(false);
        setSelectedPolicy(null);
        refetch();
      },
      onError: (err) => {
        appMessage.error(
          err?.response?.data?.message || "Failed to delete stay"
        );
      },
    },
  });

  const handleDelete = (record: DataType) => {
    setSelectedPolicy(record);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedPolicy) {
      deletePolicy(selectedPolicy?.id);
    }
  };

  const mrtColumns = [
    { accessorKey: "id", header: "Id" },
    { accessorKey: "title", header: "Title" },
    { accessorKey: "type", header: "Type" },
    { accessorKey: "before", header: "Before Check In" },
    { accessorKey: "after", header: "After Check In" },
    {
      header: "Actions",
      accessorKey: "actions",
      Cell: ({ row }: any) => (
        <div className="flex gap-3">
          <button
            onClick={() =>
              router.push(`/dashboard/cancellation-policy/${row.original.id}`)
            }
            className="px-3 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            <EditOutlined />
          </button>
          <button
            onClick={() => handleDelete(row.original)}
            className="px-3 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-50"
          >
            <DeleteOutlined />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full mx-auto">
        <div className="mb-8">
          <div className="mt-4 sm:mt-0 flex justify-end">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              onClick={() => router.push("/dashboard/cancellation-policy/add")}
            >
              New Cancelation Policy
            </Button>
          </div>
        </div>

        <div className="bg-[#F9FAFB] rounded-lg shadow-sm overflow-hidden">
          <MaterialReactTable
            columns={mrtColumns}
            data={cancellationPolicyList}
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
                {
                  value: cancellationPolicyList.length,
                  label: "All",
                },
              ],
              showFirstButton: false,
              showLastButton: false,
            }}
            positionActionsColumn="last"
          />
        </div>

        {/* Delete Confirmation Modal */}
        <Modal
          title="Delete Stay"
          open={deleteModalVisible}
          onOk={confirmDelete}
          centered
          onCancel={() => {
            setDeleteModalVisible(false);
            setSelectedPolicy(null);
          }}
          confirmLoading={deletingPolicy}
          okText="Delete"
          cancelText="Cancel"
          okButtonProps={{ danger: true }}
        >
          <p>
            Are you sure you want to delete the stay "{selectedPolicy?.title}"?
            This action cannot be undone.
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
    </div>
  );
}
