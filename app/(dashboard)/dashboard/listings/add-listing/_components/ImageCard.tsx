import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Card, Button, Tooltip, Badge } from "antd";
import {
  StarFilled,
  StarOutlined,
  DeleteOutlined,
  EditOutlined,
  DragOutlined,
} from "@ant-design/icons";
import { Image as AntImage } from "antd";

// Type definitions for better type safety
interface ImageItem {
  id?: string;
  data_url?: string;
  image?: string;
  file_name?: string;
  description?: string;
  sort_order?: number;
  uid?: string;
  name?: string;
  status?: "done" | "uploading" | "error";
  percent?: number;
}

interface ImageCardProps {
  image: ImageItem;
  index: number;
  moveImage: (fromIndex: number, toIndex: number) => void;
  onDelete: (index: number, id?: string) => void;
  isFeatured: boolean;
  onStarClick: (index: number) => void;
  onDescriptionClick: (image: ImageItem, index: number) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  image,
  index,
  moveImage,
  onDelete,
  isFeatured,
  onStarClick,
  onDescriptionClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Drag and drop functionality
  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "image",
    hover: (item: { index: number }) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  // Combine drag and drop refs
  drag(drop(ref));

  const getImageSrc = (image: ImageItem): string => {
    return image.data_url || image.image || image.file_name || "";
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-200 ${
        isDragging ? "opacity-50 scale-95" : "opacity-100 scale-100"
      }`}
      onContextMenu={handleContextMenu}
    >
      <Card
        hoverable
        className={`h-48 overflow-hidden border-2 ${
          isFeatured
            ? "border-blue-500 shadow-lg"
            : "border-gray-200 hover:border-gray-300"
        }`}
        bodyStyle={{ padding: "8px" }}
      >
        {/* Featured Badge */}
        {isFeatured && (
          <Badge
            count="Featured"
            className="absolute top-2 left-2 z-10"
            style={{ backgroundColor: "#1890ff" }}
          />
        )}

        {/* Image */}
        <div className="relative h-32 w-full overflow-hidden rounded-md bg-gray-100">
          <AntImage
            src={getImageSrc(image)}
            alt={image.name || `Property image ${index + 1}`}
            className="h-full w-full object-cover"
            fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
            preview={{
              maskClassName: "rounded-md",
              mask: <span className="text-white text-xs">Preview</span>,
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {/* Star Button */}
          <Tooltip title={isFeatured ? "Remove featured" : "Set as featured"}>
            <Button
              type="text"
              size="small"
              icon={
                isFeatured ? (
                  <StarFilled className="text-yellow-500" />
                ) : (
                  <StarOutlined />
                )
              }
              onClick={() => onStarClick(index)}
              className="bg-white/90 hover:bg-white shadow-sm"
            />
          </Tooltip>

          {/* Description Button */}
          <Tooltip title="Edit description">
            <Button
              type="text"
              size="small"
              icon={<EditOutlined />}
              onClick={() => onDescriptionClick(image, index)}
              className={`bg-white/90 hover:bg-white shadow-sm ${
                image.description ? "text-green-600" : "text-gray-600"
              }`}
            />
          </Tooltip>

          {/* Delete Button */}
          <Tooltip title="Delete image">
            <Button
              type="text"
              size="small"
              icon={<DeleteOutlined />}
              onClick={() => onDelete(index, image.id)}
              className="bg-white/90 hover:bg-white shadow-sm text-red-500 hover:text-red-600"
            />
          </Tooltip>
        </div>

        {/* Drag Handle */}
        <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Tooltip title="Drag to reorder">
            <DragOutlined className="text-gray-400 text-lg cursor-move" />
          </Tooltip>
        </div>

        {/* Image Info */}
        <div className="mt-2 px-1">
          <p className="text-xs text-gray-600 truncate">
            {image.name || `Image ${index + 1}`}
          </p>
          {image.description && (
            <p className="text-xs text-green-600 truncate mt-1">
              ✓ Has description
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ImageCard;
