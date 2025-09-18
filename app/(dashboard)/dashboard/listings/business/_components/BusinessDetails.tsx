import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ImageUploadingComponent from "./ImageUploadingComponent";
import { useSearchParams } from "next/navigation";
import { BUSINESS_SUBTYPES } from "@/constants/business";
import { Checkbox, Modal } from "antd";
import { FaChevronDown } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import imageCompression from "browser-image-compression";
import { MdOutlineCancel } from "react-icons/md";

const BusinessDetails = () => {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useFormContext();
  const photoImages = watch("photo_images") || [];
  const [imagesMarkedForDeletion, setImagesMarkedForDeletion] = useState([]);
  const [logoPreview, setLogoPreview] = useState(null);
  const [compressingLogo, setCompressingLogo] = useState(false);
  const [compressingMenuImages, setCompressingMenuImages] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlansAndBilling, setSelectedPlansAndBilling] = useState({});

  const businessDetails = watch("business_details") || "";
  const { id: businessId } = useSearchParams();

  const businessType = watch("type");

  // Compression function for a single logo image
  const compressLogoImage = async (file) => {
    const options = {
      maxSizeMB: 0.5, // Target 1MB for the binary logo file
      useWebWorker: true,
      maxWidthOrHeight: 800, // Logos typically don't need very high dimensions
      fileType: file.type,
    };

    try {
      const compressedFile = await imageCompression(file, options);

      return compressedFile;
    } catch (error) {
      console.error("Logo compression error:", error);
      return file; // Return original file if compression fails
    }
  };

  const handleLogoChange = async (e) => {
    const originalFile = e.target.files?.[0];

    if (!originalFile) {
      setValue("logo_image", null, { shouldValidate: true });
      setLogoPreview(null);
      return;
    }

    // Basic validation
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(originalFile.type)) {
      alert("Only JPG, JPEG, PNG, and WEBP images are allowed for the logo.");
      e.target.value = null;
      setValue("logo_image", null, { shouldValidate: true });
      setLogoPreview(null);
      return;
    }
    setCompressingLogo(true);

    try {
      let processedLogoFile = originalFile;

      if (originalFile.size > 0.5 * 1024 * 1024) {
        processedLogoFile = await compressLogoImage(originalFile);
      }

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(processedLogoFile);

      // Set the File object in form state
      setValue("logo_image", processedLogoFile, { shouldValidate: true });
    } catch (error) {
      console.error("Error processing logo image:", error);
      alert("Failed to process logo image. Please try again.");
      setValue("logo_image", null, { shouldValidate: true });
      setLogoPreview(null);
    } finally {
      setCompressingLogo(false);
    }
  };

  const handleRemoveLogo = () => {
    setValue("logo_image", null, { shouldValidate: true });
    setLogoPreview(null);
  };
  const handleMenuImagesChange = async (e, fieldOnChange, values) => {
    console.log({ values });
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length === 0) {
      // If no new files selected (e.g., user canceled file dialog)
      e.target.value = null; // Clear input value
      return;
    }

    const currentFiles = values || []; // Get current files from react-hook-form state

    // Pre-compression validation
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

    const invalidFiles = newFiles.filter(
      (file) => !validTypes.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      alert(
        "Some files were invalid. Only JPG, PNG, WEBP images are allowed, and each file must be smaller than 15MB before optimization."
      );
      e.target.value = null; // Clear the input
      return;
    }

    // Determine available slots based on maxNumber (20 in your example)
    const availableSlots = 20 - currentFiles.length;
    const filesToProcess = newFiles.slice(0, availableSlots);

    if (filesToProcess.length === 0 && availableSlots === 0) {
      alert("You have reached the maximum limit of 20 menu images.");
      e.target.value = null; // Clear the input
      return;
    }

    setCompressingMenuImages(true); // Show compressing indicator

    const processedNewFiles = [];

    try {
      for (const originalFile of filesToProcess) {
        let compressedFile = originalFile;

        // Only compress if the file size is greater than 1MB
        if (originalFile.size > 0.5 * 1024 * 1024) {
          compressedFile = await compressLogoImage(originalFile);
        } else {
          console.log(
            `Menu image within size limit: ${(
              originalFile.size /
              1024 /
              1024
            ).toFixed(2)} MB`
          );
        }

        // Ensure it's a File object with original name, even if browser-image-compression returns a Blob
        let finalFile;
        if (compressedFile instanceof File) {
          finalFile = compressedFile;
        } else if (compressedFile instanceof Blob) {
          const originalName =
            originalFile.name ||
            `menu_image_${Date.now()}.${
              compressedFile.type.split("/")[1] || "jpeg"
            }`;
          finalFile = new File([compressedFile], originalName, {
            type: compressedFile.type,
            lastModified: Date.now(),
          });
          console.log(
            `Converted menu image Blob to File. New File name: ${finalFile.name}`
          );
        } else {
          console.warn(
            "Unexpected menu image file type after processing:",
            typeof compressedFile,
            compressedFile
          );
          finalFile = originalFile; // Fallback to original
        }

        processedNewFiles.push(finalFile);
      }

      // Update react-hook-form state with the new array of compressed File objects
      fieldOnChange([...currentFiles, ...processedNewFiles]);
    } catch (error) {
      console.error("Error processing menu images:", error);
      alert("Failed to process some menu images. Please try again.");
      // Optionally, revert to previous state or handle partial success
    } finally {
      setCompressingMenuImages(false); // Hide compressing indicator
      e.target.value = null; // Clear the input to allow selecting the same file(s) again
    }
  };
  const isEditMode = Boolean(businessId);
  if (loadingData) return "Loading...";

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="business-details">
      <div className="border-b pb-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 !mb-2 flex items-center">
            <i className="fa fa-images text-purple-500 mr-2"></i>
            Business Photos
          </h3>

          <p className="text-sm text-blue-800">
            <i className="fa fa-info-circle mr-2"></i>
            This section is **optional**, but we highly recommend uploading at
            least 5 high-quality photos showcasing your business. Photos
            significantly help customers understand your offerings and
            atmosphere.
          </p>

          <Controller
            name="photo_images"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <div className="space-y-3 m-6">
                <ImageUploadingComponent
                  value={value}
                  onChange={onChange}
                  setImagesMarkedForDeletion={setImagesMarkedForDeletion}
                />
                {value && value?.length > 0 && (
                  <small className="text-sm !mt-0 !mb-2 text-gray-500 flex items-center gap-2 italic">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    Click the star under the image you want as your main photo.
                    The first one will be the main photo by default if no star
                    is clicked.
                  </small>
                )}

                {error && (
                  <p className="text-red-500 text-sm font-medium mt-2 flex items-center">
                    !{error.message}
                  </p>
                )}
              </div>
            )}
          />

          <div className="flex items-center mb-4">
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">
                  {photoImages.length} photos uploaded
                </span>
                <span
                  className={`text-sm font-medium ${
                    photoImages.length >= 5
                      ? "text-green-600"
                      : "text-orange-500"
                  }`}
                >
                  {photoImages.length >= 5
                    ? "✓ Recommendation met"
                    : "Recommendation pending"}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${
                    photoImages.length >= 5 ? "bg-green-500" : "bg-orange-400"
                  }`}
                  style={{
                    width: `${Math.min(100, (photoImages.length / 5) * 100)}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo Upload */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fa fa-image text-blue-500 mr-2"></i>
                Business Logo
              </label>
              <p className="text-sm text-gray-500 !mb-3">
                Upload your business logo. This will be displayed on your
                listing.
              </p>

              <>
                {compressingLogo && (
                  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <p className="text-lg font-medium">Optimizing logo...</p>
                      <p className="text-gray-600">
                        Please wait while we process your logo image.
                      </p>
                    </div>
                  </div>
                )}

                <Controller
                  name="logo_image"
                  control={control}
                  render={({ field }) => {
                    // Determine if we have a URL (edit mode) or File (create mode)
                    const isUrl = typeof field.value === "string";

                    return (
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center">
                          <label
                            htmlFor="logo_image-upload"
                            className="cursor-pointer flex items-center justify-center px-4 py-3 border border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors w-full"
                          >
                            <div className="text-center">
                              <i className="fa fa-cloud-upload-alt text-gray-400 text-2xl mb-2"></i>
                              <p className="text-sm text-gray-700 mb-0 text-center">
                                {field.value
                                  ? "Change Logo"
                                  : "Click to upload logo"}
                              </p>
                              <p className="text-xs text-center text-gray-500 mt-1 !mb-1">
                                JPG, PNG, WEBP, JPEG - Images over 1MB will be
                                automatically optimized.
                              </p>

                              <div className="text-center mt-2">
                                <span className="bg-[#54C4D9] text-white px-2 pt-1 pb-1.5 rounded-md text-xs">
                                  Select and upload
                                </span>
                              </div>
                            </div>
                            <input
                              id="logo_image-upload"
                              type="file"
                              accept="image/jpeg,image/png,image/webp,image/jpg"
                              className="hidden"
                              onChange={handleLogoChange}
                            />
                          </label>
                        </div>

                        {/* Logo Preview Section */}
                        {field.value && (
                          <div className="relative mt-3 w-fit">
                            <img
                              src={isUrl ? field.value : logoPreview}
                              alt="Logo Preview"
                              className="h-24 w-24 object-contain rounded-md border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                            />
                            <button
                              type="button"
                              className="absolute -top-2 -right-2 bg-red-500 text-white border-none rounded-full p-1 flex items-center justify-center shadow-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                              onClick={handleRemoveLogo}
                              title="Remove Logo"
                            >
                              <MdOutlineCancel className=" text-lg" />
                            </button>
                          </div>
                        )}

                        {errors.logo_image && (
                          <p className="text-red-500 text-sm mt-2">
                            <i className="fa fa-exclamation-circle mr-1"></i>
                            {errors.logo_image.message}
                          </p>
                        )}
                      </div>
                    );
                  }}
                />
              </>
            </div>
          </div>

          {/* Business Name */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fa fa-store text-blue-500 mr-2"></i>
                Business Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <p className="text-sm text-gray-500 !mb-3">
                The official name of your business as customers will see it.
              </p>

              <Controller
                name="name"
                control={control}
                rules={{
                  required: "Business name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  maxLength: {
                    value: 100,
                    message: "Name cannot exceed 100 characters",
                  },
                }}
                render={({ field }) => (
                  <div className="relative">
                    <input
                      {...field}
                      type="text"
                      placeholder="e.g. Skyline Restaurant"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fa fa-tag text-blue-500 mr-2"></i>
                Business Tagline
                <span className="text-red-500 ml-1">*</span>
              </label>
              <p className="text-sm text-gray-500 !mb-3">
                A short, catchy phrase that describes your business (max 100
                characters).
              </p>

              <Controller
                name="tag_line"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <input
                      {...field}
                      type="text"
                      placeholder="e.g. The best views in town!"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      maxLength={100}
                    />
                    <div className="text-xs text-gray-500 mt-1 text-right">
                      {field.value?.length || 0}/100 characters
                    </div>
                    {errors.tag_line && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {errors.tag_line.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

          {/* Business Type */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fa fa-building text-blue-500 mr-2"></i>
                Business Type
                <span className="text-red-500 ml-1">*</span>
              </label>
              <p className="text-sm text-gray-500 !mb-3">
                Select the category that best describe your business.
              </p>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="w-full border border-solid border-gray-300 rounded-md px-4 py-3 bg-white text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {(() => {
                    const isEditMode = !!businessId;
                    const selectedTypes = isEditMode
                      ? [businessType]
                      : businessType || [];

                    if (!selectedTypes.length) {
                      return "Select Business Types";
                    }

                    const allSubcategories = BUSINESS_SUBTYPES.flatMap(
                      (group) => group.subcategories
                    );

                    const selectedLabels = selectedTypes
                      ?.map(
                        (type) =>
                          allSubcategories.find((sub) => sub.type === type)
                            ?.label
                      )
                      .filter(Boolean);

                    const visibleLabels = selectedLabels.slice(0, 2);
                    const remainingCount =
                      selectedLabels.length - visibleLabels.length;

                    return (
                      <>
                        {visibleLabels.join(", ")}
                        {remainingCount > 0 && ` +${remainingCount} more`}
                      </>
                    );
                  })()}
                </button>

                <FaChevronDown className="absolute right-4 top-4 text-gray-400" />
                {errors.type && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.type.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Business Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fa fa-align-left text-blue-500 mr-2"></i>
                Business Description
                <span className="text-red-500 ml-1">*</span>
              </label>
              <p className="text-sm text-gray-500 !mb-3">
                Describe your business in detail. Include services, specialties,
                and what makes you unique.
              </p>

              <Controller
                name="business_details"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <textarea
                        {...field}
                        placeholder="Describe your business..."
                        className={`w-full border !m-0 ${
                          errors.business_details
                            ? "border-red-300 focus:ring-red-500"
                            : "border-gray-300 focus:ring-blue-500"
                        } rounded-md px-4 py-3 focus:ring-2 focus:border-transparent`}
                        rows={5}
                        maxLength={1000}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        {errors.business_details && (
                          <span className="text-red-500 text-sm font-medium flex items-center">
                            <i className="fa fa-exclamation-circle mr-1"></i>
                            {errors.business_details.message}
                          </span>
                        )}
                      </div>

                      <div
                        className={`text-sm ${
                          businessDetails.length < 5
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      >
                        {businessDetails.length}/1000
                        {businessDetails.length < 5 && (
                          <span className="ml-1">
                            ({5 - businessDetails.length} more needed)
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <FaLightbulb className="mr-2 text-yellow-500" />
                      <span>Tip: Mention what makes your business unique!</span>
                    </div>
                  </div>
                )}
              />
            </div>
            <Modal
              title="Select Business Type"
              open={showModal}
              onCancel={() => setShowModal(false)}
              footer={null}
              centered
              width={1200}
              styles={{
                body: { height: "800px", overflowY: "auto" },
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm m-10">
                {BUSINESS_SUBTYPES.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-base font-semibold text-red-600 mb-2">
                      {group.category}
                    </h3>
                    <ul className="space-y-2">
                      {group.subcategories.map((sub) => {
                        const selectedTypes =
                          businessType || (isEditMode ? "" : []);
                        const isSelected = isEditMode
                          ? selectedTypes === sub.type
                          : selectedTypes.includes(sub.type);

                        const handleChange = (e) => {
                          const checked = e.target.checked;

                          if (isEditMode) {
                            if (checked) {
                              setValue("type", sub.type, {
                                shouldValidate: true,
                              });
                            }
                          } else {
                            let updatedTypes = Array.isArray(selectedTypes)
                              ? [...selectedTypes]
                              : [];
                            let newPlans = { ...selectedPlansAndBilling };

                            if (checked) {
                              updatedTypes.push(sub.type);
                            } else {
                              updatedTypes = updatedTypes.filter(
                                (t) => t !== sub.type
                              );
                              if (newPlans[sub.type]) {
                                delete newPlans[sub.type];
                                setSelectedPlansAndBilling(newPlans);
                              }
                            }

                            setValue("type", updatedTypes, {
                              shouldValidate: true,
                            });
                          }
                        };

                        return (
                          <li key={sub.type}>
                            <Checkbox
                              checked={isSelected}
                              onChange={handleChange}
                              disabled={
                                isEditMode && selectedTypes !== sub.type
                              }
                            >
                              {sub.label}
                            </Checkbox>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
