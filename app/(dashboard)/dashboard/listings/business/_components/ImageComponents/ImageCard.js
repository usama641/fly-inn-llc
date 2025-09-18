import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { FaStar, FaTrash } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdDescription } from "react-icons/md";
import { useFormContext } from "@/providers";

export const ImageCard = ({
  image,
  index,
  moveImage,
  onDelete,
  isFeatured,
  onStarClick,
  onDescriptionClick,
}) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "image",
    hover: (item) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const disableRightClick = (e) => {
    e.preventDefault();
  };
  const dragClass = isDragging ? "dragging" : "";
  drag(drop(ref));

  const handleDescriptionClick = () => {
    // Set the description value in form context
    onDescriptionClick(image, index); // Call the onDescriptionClick function from the parent
  };

  const renderImage = (image) => {
    if (typeof image === "string") {
      // This is for existing images from the API
      if (image.includes("https://s3.")) {
        return image;
      }
    } else if (image instanceof File) {
      // This is for newly uploaded images
      return URL.createObjectURL(image);
    }
    // Fallback for other cases
    return image;
  };

  return (
    <div
      ref={ref}
      className={`image-item ${dragClass}`}
      style={{ margin: "12px", cursor: "move", position: "relative" }}
      onContextMenu={disableRightClick}
    >
      <div style={{ height: "150px", backgroundColor: "rgb(246, 248, 250)" }}>
        <img
          src={
            renderImage(image.data_url) ||
            renderImage(image.image) ||
            renderImage(image.file_name)
          }
          alt=""
          style={{ width: "120px", height: "120px" }}
          onContextMenu={disableRightClick}
        />

        {/* Delete Button */}
        <div
          onClick={() => onDelete(index, image?.id)}
          style={{
            position: "absolute",
            top: "127px",
            right: "5px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "larger",
            color: "#3b4249",
          }}
        >
          <FaTrash />
        </div>

        {/* Description Button */}
        <div
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "100%",
            background: image.description ? "#8ec639" : "",
            paddingTop: image.description ? "4px" : "5px",
            paddingLeft: image.description ? "1px" : "",
            position: "absolute",
            display: "flex",
            left: "42px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            onClick={handleDescriptionClick} // Use the new description click handler
            style={{
              border: "none",
              cursor: "pointer",
              fontSize: "larger",
              color: image.description ? "#fff" : "#3b4249",
            }}
          >
            <MdDescription />
          </div>
        </div>

        {/* Star Button */}
        <div
          onClick={() => onStarClick(index)}
          style={{
            position: "absolute",
            top: "127px",
            left: "5px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "larger",
            color: "#3b4249",
          }}
        >
          {isFeatured ? <FaStar /> : <CiStar />}
        </div>
      </div>
    </div>
  );
};
