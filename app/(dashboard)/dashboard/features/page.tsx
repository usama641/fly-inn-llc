"use client";

import { Button, Modal, Tag } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useApiGet } from "@/http-service";
import { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";

interface DataType {
  id: string;
  feature: string;
  subfeature: string[];
}

export default function Features() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  // ✅ Correct MRT Columns
  const mrtColumns: MRT_ColumnDef<DataType>[] = [
    {
      accessorKey: "id",
      header: "Id",
      Cell: ({ cell }) => (
        <span className="font-semibold">{cell.getValue<string>()}</span>
      ),
    },
    {
      accessorKey: "feature",
      header: "Feature",
      Cell: ({ cell }) => (
        <span className="text-gray-700 font-medium">
          {cell.getValue<string>()}
        </span>
      ),
    },
    {
      accessorKey: "subfeature",
      header: "Sub Feature",
      Cell: ({ cell }) => {
        const subs = cell.getValue<string[]>();
        return (
          <div className="flex flex-wrap gap-2">
            {subs.map((sub) => (
              <Tag
                key={sub}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-300"
              >
                {sub}
              </Tag>
            ))}
          </div>
        );
      },
    },
    {
      id: "actions", // ✅ must provide id because header is not just a string
      header: "Actions",
      Cell: ({ row }) => {
        const record = row.original;
        return (
          <div className="flex gap-3">
            <button
              onClick={() =>
                router.push(`/dashboard/features/edit-feature/${record.id}`)
              }
              className="px-3 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-50"
            >
              <EditOutlined />
            </button>

            <button
              onClick={() => console.log("Delete feature:", record.id)}
              className="px-3 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-50"
            >
              <DeleteOutlined />
            </button>
          </div>
        );
      },
    },
  ];

  // ✅ Fetch API
  const { data: getFeatures, isLoading } = useApiGet({
    endpoint: `/stay/feature-sub_features`,
    queryKey: ["stay/feature-sub_features"],
  });

  // ✅ Transform Data
  const tableData: DataType[] =
    getFeatures?.features?.map((feature: any) => ({
      id: feature.id,
      feature: feature.name,
      subfeature: feature.sub_features.map((sub: any) => sub.name),
    })) || [];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Features</h1>
          <Button
            icon={<PlusOutlined />}
            size="large"
            onClick={() => router.push("/dashboard/features/add-feature")}
            className="bg-[#CE2029] text-white"
          >
            Add Feature
          </Button>
        </div>

        {/* ✅ MRT Table */}
        <div className="bg-[#F9FAFB] rounded-lg shadow-sm overflow-hidden">
          <MaterialReactTable
            columns={mrtColumns}
            data={tableData}
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
                { value: tableData.length, label: "All" }, // ✅ fixed (was dataSource)
              ],
              showFirstButton: false,
              showLastButton: false,
            }}
            positionActionsColumn="last"
          />
        </div>
      </div>

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
}
