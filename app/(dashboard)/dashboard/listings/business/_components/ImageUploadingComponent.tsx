import React, { useState, useEffect } from "react";
import ImageUploading, {
  ImageListType,
  ImageType,
} from "react-images-uploading";
import { ModalImage } from "./ImageComponents/ModalImage";
import { ImageCard } from "./ImageComponents/ImageCard";
import imageCompression from "browser-image-compression";
import { FaImages, FaInfoCircle } from "react-icons/fa";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Assume this is your base URL for images from S3
const IMAGE_BASE_URL = "https://s3.amazonaws.com/flyinn-app-bucket/";

// Define backend image type (from API)
interface BackendImage {
  id: string | number;
  image: string;
  description?: string;
  type?: string;
}

// Props type for component
interface ImageUploadingComponentProps {
  value?: (ImageType | BackendImage)[];
  onChange: (images: ImageListType) => void;
  maxNumber?: number;
  errors?: { message?: string };
  setImagesMarkedForDeletion: React.Dispatch<
    React.SetStateAction<(string | number)[]>
  >;
}

// Internal extended image type (supports backend + uploading format)
interface ExtendedImageType extends ImageType {
  id?: string | number;
  description?: string;
  type?: string;
}

const ImageUploadingComponent: React.FC<ImageUploadingComponentProps> = ({
  value = [],
  onChange,
  maxNumber = 20,
  errors,
  setImagesMarkedForDeletion,
}) => {
  const [internalImages, setInternalImages] = useState<ExtendedImageType[]>([]);
  const [featuredIndex, setFeaturedIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<ExtendedImageType | null>(
    null
  );
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [compressing, setCompressing] = useState(false);

  // Effect: process incoming value prop
  useEffect(() => {
    if (value && value.length > 0) {
      const processedInitialImages: ExtendedImageType[] = value.map(
        (img: any) => {
          if (img.data_url) {
            return img as ExtendedImageType;
          } else {
            const fullImageUrl = img.image.startsWith("http")
              ? img.image
              : `${IMAGE_BASE_URL}${img.image}`;

            return {
              id: img.id,
              image: fullImageUrl,
              file: null,
              description: img.description || "",
              sort_order: 1,
              type: img.type || "photo",
            };
          }
        }
      );
      setInternalImages(processedInitialImages);
    } else {
      setInternalImages([]);
    }
  }, []);

  // Compression function
  const compressImage = async (file: File): Promise<File> => {
    const options = {
      maxSizeMB: 0.5,
      useWebWorker: true,
      maxWidthOrHeight: 1920,
      fileType: file.type,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      return new File([compressedFile], file.name || "compressed_image.jpeg", {
        type: compressedFile.type,
        lastModified: compressedFile.lastModified,
      });
    } catch (error) {
      console.error("Compression error:", error);
      return file;
    }
  };

  const handleImageUploadChange = async (newImageList: ImageListType) => {
    setCompressing(true);
    const processedImages: ExtendedImageType[] = [];

    for (const imageItem of newImageList) {
      if (imageItem.file) {
        let fileToProcess = imageItem.file;

        if (fileToProcess.size > 0.5 * 1024 * 1024) {
          fileToProcess = await compressImage(imageItem.file);
        }

        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(fileToProcess);
        });

        processedImages.push({
          image: fileToProcess,
          // file: fileToProcess,
          sort_order: 1,
        });
      } else {
        processedImages.push(imageItem as ExtendedImageType);
      }
    }

    setInternalImages(processedImages);
    onChange(processedImages);
    setCompressing(false);
  };

  const moveImage = (fromIndex: number, toIndex: number) => {
    const updatedImages = [...internalImages];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setInternalImages(updatedImages);
    onChange(updatedImages);
    setFeaturedIndex(toIndex);
  };

  const handleDelete = (
    index: number,
    id?: string | number,
    file?: ExtendedImageType
  ) => {
    const updatedImages = internalImages.filter((_, i) => i !== index);
    setInternalImages(updatedImages);
    onChange(updatedImages);

    if (!(file?.file instanceof File) && id) {
      setImagesMarkedForDeletion((prev) => [...prev, id]);
    }
  };

  const handleStarClick = (index: number) => {
    if (index === 0) return;
    moveImage(index, 0);
  };

  const handleDescriptionClick = (image: ExtendedImageType, index: number) => {
    setSelectedImage({ ...image, index });
    setDescription(image.description || "");
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
    setDescription("");
  };

  const saveDescription = () => {
    if (selectedImage) {
      const updatedImages = [...internalImages];
      updatedImages[(selectedImage as any).index] = {
        ...updatedImages[(selectedImage as any).index],
        description,
      };
      setInternalImages(updatedImages);
      onChange(updatedImages);
    }
    closeImageModal();
  };

  return (
    <div>
      {compressing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-lg font-medium text-gray-800">
              Optimizing images...
            </p>
            <p className="text-sm text-gray-600">
              Please wait, this might take a moment.
            </p>
          </div>
        </div>
      )}

      <ImageUploading
        multiple
        value={internalImages}
        onChange={handleImageUploadChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "jpeg", "png", "webp"]}
        beforeUpload={(files) => {
          const validTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp",
          ];
          if (files.some((file) => !validTypes.includes(file.type))) {
            alert("Only JPG, PNG, and WEBP images are allowed.");
            return false;
          }

          const MAX_INITIAL_FILE_SIZE = 15 * 1024 * 1024;
          if (files.some((file) => file.size > MAX_INITIAL_FILE_SIZE)) {
            alert(`Some files are too large (>15MB) and cannot be processed.`);
            return false;
          }
          return true;
        }}
      >
        {({ imageList, onImageUpload, isDragging, dragProps }) => (
          <div className="upload__image-wrapper">
            <div
              className="fu-text"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              {/* Upload UI */}
              <div className="add-list-media-wrap cursor-pointer">
                <div className="fuzone">
                  <div className="flex flex-col items-center px-4 py-3 border border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors w-full">
                    <span className="flex flex-col items-center">
                      <FaImages size={30} />
                      <br />
                      Drag and drop images to customize gallery order.
                      <div className="flex flex-col items-center justify-center text-sm text-gray-500 mt-2">
                        <FaInfoCircle size={30} />
                        Recommended: 5-20 photos (JPEG, PNG, WEBP, JPG). Images
                        over 1MB will be automatically optimized.
                      </div>
                    </span>
                    <div className="!text-center pt-[27px]">
                      <span className="bg-[#54C4D9] text-white px-2 pt-1 pb-1.5 rounded-md text-xs">
                        Select and upload
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DndProvider backend={HTML5Backend}>
              {/* Image list */}
              <div
                className="row"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                }}
              >
                {imageList.map((image, index) => (
                  <ImageCard
                    key={(image as any).id || index}
                    image={image}
                    index={index}
                    moveImage={moveImage}
                    onDelete={() =>
                      handleDelete(index, (image as any).id, image)
                    }
                    isFeatured={index === 0}
                    onStarClick={handleStarClick}
                    onDescriptionClick={handleDescriptionClick}
                  />
                ))}
              </div>
            </DndProvider>
          </div>
        )}
      </ImageUploading>

      {errors && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}

      {isImageModalOpen && (
        <ModalImage
          saveDescription={saveDescription}
          closeModal={closeImageModal}
          selectedImage={selectedImage}
          description={description}
          isModalOpen={isImageModalOpen}
          setDescription={setDescription}
        />
      )}
    </div>
  );
};

export default ImageUploadingComponent;
