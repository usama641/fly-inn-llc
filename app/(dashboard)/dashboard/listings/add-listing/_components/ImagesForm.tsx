import React, { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Modal, Input, message, Image as AntImage, Spin, Button } from "antd";
import { UploadOutlined, InfoCircleOutlined } from "@ant-design/icons";
import ImageUploading, { ImageListType } from "react-images-uploading";
import imageCompression from "browser-image-compression";
import ImageCard from "./ImageCard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const { TextArea } = Input;

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
  file?: File;
}

interface SelectedImage extends ImageItem {
  index: number;
}

interface ImagesFormProps {
  maxNumber?: number;
}

// Assume this is your base URL for images from S3
const IMAGE_BASE_URL = "https://s3.amazonaws.com/flyinn-app-bucket/";

export const ImagesForm: React.FC<ImagesFormProps> = ({ maxNumber = 70 }) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const images = watch("images") || [];
  const imgdescription = watch("imgdescription") || [];
  const deletedImages = watch("deleted_images") || [];

  const [internalImages, setInternalImages] = useState<ImageItem[]>([]);
  const [featuredIndex, setFeaturedIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [compressing, setCompressing] = useState(false);

  // Ref to track if we're updating the form internally
  const isInternalUpdate = useRef(false);

  //Effect to process incoming 'images' prop for existing images
  useEffect(() => {
    // Skip if this is an internal update
    if (isInternalUpdate.current) {
      isInternalUpdate.current = false;
      return;
    }

    if (images && images.length > 0) {
      const processedInitialImages = images.map((img: ImageItem) => {
        // Check if it's already in the react-images-uploading format (e.g., new upload)
        if (img.data_url) {
          return img;
        } else {
          // It's an existing image from the backend payload
          // Construct the full URL for display
          const fullImageUrl = img.image?.startsWith("http")
            ? img.image
            : `${IMAGE_BASE_URL}${img.image}`;

          return {
            id: img.id, // Keep the backend ID
            data_url: fullImageUrl, // This is what react-images-uploading uses for display
            file: null, // No file object for existing images unless re-uploaded
            description: img.description || "", // Assuming your backend provides description
            sort_order: img.sort_order || 0,
          };
        }
      });
      console.log(
        "Processed initial images for display:",
        processedInitialImages
      );
      setInternalImages(processedInitialImages);

      // Set featured index when images are loaded (do it here to avoid circular dependency)
      const featuredImageIndex = processedInitialImages.findIndex(
        (img: ImageItem) => img.sort_order === 0
      );
      setFeaturedIndex(featuredImageIndex !== -1 ? featuredImageIndex : 0);
    } else {
      // setInternalImages([]);
      // setFeaturedIndex(null);
    }
  }, [images]); // Only depend on the external images prop

  // Compression function with 0.5MB target
  const compressImage = async (file: File): Promise<File> => {
    console.log(`Original image: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Original image name: ${file.name}`);

    const options = {
      maxSizeMB: 0.5, // Target 0.5MB for the binary file
      useWebWorker: true,
      maxWidthOrHeight: 1920,
      fileType: file.type,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      console.log(
        `Compressed binary image: ${(compressedFile.size / 1024 / 1024).toFixed(
          2
        )} MB`
      );

      // Ensure the compressed file retains the original name
      const finalFile = new File(
        [compressedFile],
        file.name || "compressed_image.jpeg",
        {
          type: compressedFile.type,
          lastModified: compressedFile.lastModified,
        }
      );
      return finalFile;
    } catch (error) {
      console.error("Compression error:", error);
      return file; // Return original file if compression fails
    }
  };

  const handleImageUploadChange = async (newImageList: ImageListType) => {
    try {
      setCompressing(true);
      const processedImages: ImageItem[] = [];

      for (const imageItem of newImageList) {
        if (imageItem.file) {
          // This is a NEWLY SELECTED file
          let fileToProcess = imageItem.file;

          // Only compress if the file size is greater than 0.5MB
          if (fileToProcess.size > 0.5 * 1024 * 1024) {
            fileToProcess = await compressImage(imageItem.file);
          } else {
            console.log(
              `Image within size limit: ${(
                fileToProcess.size /
                1024 /
                1024
              ).toFixed(2)} MB`
            );
          }

          // Convert the final File/Blob back to data_url for display by react-images-uploading
          const dataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(fileToProcess);
          });

          processedImages.push({
            data_url: dataUrl,
            file: fileToProcess, // This is the compressed (or original if small) File object
            description: "",
            sort_order: processedImages.length,
          });
        } else {
          // This is an EXISTING image (from 'images' prop)
          // It's already in the correct format with data_url from the useEffect
          processedImages.push(imageItem as ImageItem);
        }
      }

      setInternalImages(processedImages); // Update internal state

      // Mark this as an internal update to prevent useEffect from running
      isInternalUpdate.current = true;
      setValue("images", processedImages); // Update form value
      setValue(
        "imgdescription",
        processedImages.map((img) => img.description || "")
      ); // Update descriptions
      setCompressing(false);
    } catch (error) {
      console.error("Error in handleImageUploadChange:", error);
      setCompressing(false);
    }
  };

  const moveImage = (fromIndex: number, toIndex: number) => {
    const updatedImages = [...internalImages];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);

    // Update sort_order for all images
    updatedImages.forEach((img, index) => {
      img.sort_order = index;
    });

    setInternalImages(updatedImages);

    // Mark this as an internal update
    isInternalUpdate.current = true;
    setValue("images", updatedImages);
    setFeaturedIndex(toIndex);

    // Update descriptions array
    if (imgdescription && Array.isArray(imgdescription)) {
      const updatedDescriptions = [...imgdescription];
      const [movedDescription] = updatedDescriptions.splice(fromIndex, 1);
      updatedDescriptions.splice(toIndex, 0, movedDescription || "");
      setValue("imgdescription", updatedDescriptions);
    }
  };

  const handleDelete = (index: number, id?: string, imageItem?: any) => {
    console.log({ index, id, imageItem });
    const updatedImages = internalImages.filter((_, i) => i !== index);
    setInternalImages(updatedImages);

    // Mark this as an internal update
    isInternalUpdate.current = true;
    setValue("images", updatedImages);

    // Update descriptions array
    if (imgdescription && Array.isArray(imgdescription)) {
      const updatedDescriptions = imgdescription.filter((_, i) => i !== index);
      setValue("imgdescription", updatedDescriptions);
    }

    // Mark for deletion if it's an existing image
    if (!imageItem?.file && id) {
      setValue("deleted_images", [...deletedImages, id]);
    }

    message.success("Image deleted successfully");
  };

  const handleStarClick = (index: number) => {
    if (index === 0) return;
    moveImage(index, 0);
    message.success("Featured image updated");
  };

  const handleDescriptionClick = (image: ImageItem, index: number) => {
    setSelectedImage({ ...image, index });
    setDescription(image.description || "");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setDescription("");
  };

  const saveDescription = () => {
    if (selectedImage) {
      const updatedImages = [...internalImages];
      updatedImages[selectedImage.index] = {
        ...updatedImages[selectedImage.index],
        description: description,
      };
      setInternalImages(updatedImages);

      // Mark this as an internal update
      isInternalUpdate.current = true;
      setValue("images", updatedImages);

      if (!Array.isArray(imgdescription)) {
        setValue("imgdescription", []);
        return;
      }

      const updatedDescriptions = [...imgdescription];
      while (updatedDescriptions.length <= selectedImage.index) {
        updatedDescriptions.push("");
      }

      updatedDescriptions[selectedImage.index] = description;
      setValue("imgdescription", updatedDescriptions);

      message.success("Description saved successfully");
    }
    closeModal();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-white rounded-xl shadow-sm p-6" id="images-form">
        <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-600 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
          Property Images
        </h2>

        {/* Compression Loading Overlay */}
        {compressing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Spin size="large" className="mb-4" />
              <p className="text-lg font-medium text-gray-800">
                Optimizing images...
              </p>
              <p className="text-sm text-gray-600">
                Please wait, this might take a moment.
              </p>
            </div>
          </div>
        )}

        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-4">
            Upload high-quality images of your property. For best results, your
            first five photos should be landscape (horizontal) orientation. You
            can drag and drop images to reorder them, and click the star icon to
            set the featured image.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <InfoCircleOutlined className="text-blue-500 text-lg mr-3 mt-0.5" />
              <div>
                <p className="text-sm text-blue-800 font-medium mb-1">
                  Image Guidelines
                </p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Recommended: 5-20 photos (JPEG, PNG, WEBP, JPG)</li>
                  <li>• Images over 0.5MB will be automatically optimized</li>
                  <li>• Maximum initial file size: 15MB</li>
                  <li>• First image will be featured automatically</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ImageUploading
          multiple
          value={internalImages}
          onChange={handleImageUploadChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          acceptType={["jpg", "jpeg", "png", "webp"]}
        >
          {({ imageList, onImageUpload, isDragging, dragProps }) => (
            <div className="upload__image-wrapper">
              {/* Upload Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragging
                    ? "border-blue-400 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                }`}
                onClick={onImageUpload}
                {...dragProps}
              >
                <UploadOutlined className="text-4xl text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">
                  {isDragging
                    ? "Drop images here"
                    : "Click to upload or drag and drop"}
                </p>
                <p className="text-sm text-gray-500">
                  Drag and drop images to customize the gallery order
                </p>
                <div className="mt-4">
                  <Button type="primary" size="large">
                    Select Images
                  </Button>
                </div>
              </div>

              {/* Image Grid */}
              {imageList.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Uploaded Images ({imageList.length})
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {imageList.map((image, index) => (
                      <ImageCard
                        key={image.id || index}
                        image={image as ImageItem}
                        index={index}
                        moveImage={moveImage}
                        onDelete={() => handleDelete(index, image.id, image)}
                        isFeatured={index === featuredIndex}
                        onStarClick={handleStarClick}
                        onDescriptionClick={handleDescriptionClick}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </ImageUploading>

        {/* Description Modal */}
        <Modal
          title="Edit Image Description"
          open={isModalOpen}
          onOk={saveDescription}
          onCancel={closeModal}
          okText="Save"
          cancelText="Cancel"
          okButtonProps={{ className: "bg-blue-600 hover:bg-blue-700" }}
        >
          {selectedImage && (
            <div className="space-y-4">
              <div className="text-center">
                <AntImage
                  src={selectedImage.data_url || selectedImage.image}
                  alt="Property"
                  width={200}
                  className="rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <TextArea
                  rows={4}
                  placeholder="Write a description for this image..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength={500}
                  showCount
                />
              </div>
            </div>
          )}
        </Modal>

        {errors?.images && (
          <p className="text-red-500 text-sm mt-2">
            <i className="fa fa-exclamation-circle mr-1"></i>
            {errors.images?.message?.toString()}
          </p>
        )}
      </div>
    </DndProvider>
  );
};

export default ImagesForm;
