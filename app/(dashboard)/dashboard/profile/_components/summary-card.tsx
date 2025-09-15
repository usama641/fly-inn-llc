import {
  CameraOutlined,
  CheckCircleFilled,
  UserOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Image, Dropdown, Modal, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { useProfileContext } from "./profile-context";
import { useApiMutation } from "@/http-service";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useApp } from "@/providers/AppMessageProvider";
import imageCompression from "browser-image-compression";

const SummaryCard = () => {
  const { profileComplete, profileStatus, userData } = useProfileContext();
  const { first_name, last_name, role, photo } = userData || {};
  const queryClient = useQueryClient();
  const completionPercentage = profileComplete?.percentage;
  const remainingFields = profileComplete?.remaining_fields || [];
  const { data: session } = useSession();
  const [compressingImage, setCompressingImage] = useState(false);
  const { message } = useApp();

  const getStatusConfig = () => {
    switch (profileStatus) {
      case "in-review":
        return {
          color: "bg-amber-500",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-200",
          textColor: "text-amber-700",
          icon: <ClockCircleOutlined className="text-amber-500" />,
          text: "Under Review",
          description:
            "Admin is reviewing your details and documents. This usually takes 1-2 business days.",
        };
      case "verified":
        return {
          color: "bg-emerald-500",
          bgColor: "bg-emerald-50",
          borderColor: "border-emerald-200",
          textColor: "text-emerald-700",
          icon: <CheckCircleFilled className="text-emerald-500" />,
          text: "Verified",
          description:
            "Your profile is verified! You can now book and host accommodations.",
        };
      default:
        return {
          color: "bg-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-700",
          icon: <ExclamationCircleOutlined className="text-red-500" />,
          text: "Action Required",
          description: "Complete your profile to book stays on Fly Inn",
        };
    }
  };

  const statusConfig = getStatusConfig();

  const [profilePreview, setProfilePreview] = useState<string>(
    photo || undefined
  );

  // Update profile preview when photo changes
  useEffect(() => {
    if (photo) {
      setProfilePreview(photo);
    }
  }, [photo]);

  // Image compression function
  const compressProfileImage = async (file: File): Promise<File> => {
    const options = {
      maxSizeMB: 0.5,
      useWebWorker: true,
      maxWidthOrHeight: 800,
      fileType: file.type,
    };

    try {
      return await imageCompression(file, options);
    } catch (error) {
      console.error("Profile image compression error:", error);
      return file;
    }
  };

  const handleProfileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];

    // Check file type
    if (!file.type.startsWith("image/")) {
      message.error("You can only upload image files!");
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      message.error("Image must be smaller than 5MB!");
      return;
    }

    setCompressingImage(true);

    try {
      // Compress image if needed
      let processedFile = file;
      if (file.size > 0.5 * 1024 * 1024) {
        processedFile = await compressProfileImage(file);
      }

      // Create preview URL
      const previewUrl = URL.createObjectURL(processedFile);
      setProfilePreview(previewUrl);

      // Create FormData and upload to server
      const formData = new FormData();
      formData.append("photo", processedFile);

      // Upload to server
      updateProfile(formData);
    } catch (error) {
      message.error("Failed to process image. Please try again.");
      console.error("Image processing error:", error);
    } finally {
      setCompressingImage(false);
    }
  };

  const getFieldDisplayName = (field: string) => {
    const fieldMap: { [key: string]: string } = {
      driving_license_front: "Driver License Front",
      driving_license_back: "Driver License Back",
      photo: "Profile Photo",
      bio: "Biography",
      "contact.name": "Emergency Contact Name",
      "contact.relationship": "Emergency Contact Relationship",
      "contact.email": "Emergency Contact Email",
      "contact.phone": "Emergency Contact Phone",
      "mailing_address.address": "Mailing Address",
      "mailing_address.city": "City",
      "mailing_address.state": "State",
      "mailing_address.zip_code": "ZIP Code",
      "mailing_address.country": "Country",
    };
    return (
      fieldMap[field] ||
      field.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    );
  };

  const getFieldSection = (field: string) => {
    if (field.includes("license")) return "driver-license";
    if (field.includes("certificate")) return "airmen-certifications";
    if (field.includes("photo")) return "image-upload";
    if (field.includes("contact.") || field.includes("mailing_address."))
      return "emergency-contact";
    if (field.includes("bio")) return "personal-info";
    return "personal-info";
  };

  const navigateToField = (field: string) => {
    const section = getFieldSection(field);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const { mutate: updateProfile, isPending: updatingProfile } = useApiMutation({
    endpoint: `/me`,
    method: "patch",
    config: {
      onSuccess: (res) => {
        console.log("invalidated", res);
        queryClient.invalidateQueries({ queryKey: ["me", session?.user.id] });
        message.success("Profile picture updated successfully!");
      },
      onError: (errRes) => {
        console.log("error", errRes);
        message.error(
          errRes?.response?.data?.message ||
            "An error occurred while updating the user"
        );
      },
    },
    axiosConfig: {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  });

  return (
    <div className="overflow-hidden">
      {/* Header with Status */}
      <div
        className={`${statusConfig.bgColor} ${statusConfig.borderColor} border-b px-6 py-4`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${statusConfig.bgColor}`}>
              {statusConfig.icon}
            </div>
            <div>
              <h3 className={`font-bold text-lg ${statusConfig.textColor}`}>
                Profile Status: {statusConfig.text}
              </h3>
              <p className={`text-sm ${statusConfig.textColor} opacity-80`}>
                {statusConfig.description}
              </p>
            </div>
          </div>

          {/* Verified Success */}
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          {/* Profile Image Section */}
          <div className="mx-auto flex flex-col items-center bg-white rounded-xl shadow-lg border border-gray-200 px-6">
            <div className="relative mb-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full relative overflow-hidden border-4 border-white shadow-lg flex items-center justify-center">
                  {profilePreview ? (
                    <Image
                      src={profilePreview}
                      alt="Profile"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      fallback="/placeholder-user.jpg"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <UserOutlined className="text-3xl text-gray-400" />
                      <span className="text-xs text-gray-500 mt-1">
                        No image
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <label
                className={`cursor-pointer border-0 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[82px] h-[27px] gap-1 ${
                  compressingImage || updatingProfile
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleProfileUpload(e)}
                  disabled={compressingImage || updatingProfile}
                />
                <span className="text-xs">
                  {compressingImage
                    ? "Processing..."
                    : updatingProfile
                    ? "Uploading..."
                    : profilePreview
                    ? "Edit"
                    : "Upload"}
                </span>
                {compressingImage ? (
                  <div className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <CameraOutlined className="text-gray-700 text-md" />
                )}
              </label>
            </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">
                {first_name} {last_name}
              </h1>
              <p className="text-gray-500 mb-4 uppercase">
                {role?.map((r: any) => r).join(", ")}
              </p>

          </div>

          {/* Profile Info Section */}
          <div className="flex-1 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="mb-6">
              
              {/* Profile Completion */}
              <div className="mb-4">
                          <div className="flex flex-col gap-4 mb-2">
                  <h2>Complete your Porfile</h2>
                  <p>Your Fly-Inn profile is an important part of every reservation. Complete yours to help other hosts and guests get to know you. The better the profile, the more chances of connection!</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Profile Completion
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      completionPercentage === 100
                        ? "text-emerald-500"
                        : "text-red-600"
                    }`}
                  >
                    {completionPercentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      completionPercentage === 100
                        ? "bg-emerald-500"
                        : "bg-red-600"
                    }`}
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>

                {profileStatus === "incomplete" && (
                  <p className="text-sm text-gray-600 mt-2 flex items-center">
                    Complete your profile to unlock booking capabilities.
                    <span className="font-medium text-red-600">
                      {" "}
                      {100 - completionPercentage}%
                    </span>{" "}
                    remaining.
                    <Dropdown
                      overlay={
                        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[250px]">
                          <div className="text-sm font-medium text-gray-800 mb-2">
                            Missing Fields ({remainingFields.length})
                          </div>
                          <div className="space-y-1">
                            {remainingFields.map(
                              (field: string, index: number) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
                                  onClick={() => navigateToField(field)}
                                >
                                  <span className="text-sm text-gray-700">
                                    {getFieldDisplayName(field)}
                                  </span>
                                  <ArrowRightOutlined className="text-gray-400 text-xs" />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      }
                      trigger={["click"]}
                      placement="bottomRight"
                    >
                      <span className="text-red-600 underline uppercase ml-1 cursor-pointer hover:text-red-700 flex items-center gap-1">
                        {remainingFields.length} fields remaining
                        <DownOutlined className="text-xs" />
                      </span>
                    </Dropdown>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compression Modal */}
      <Modal
        open={compressingImage}
        footer={null}
        closable={false}
        centered
        maskClosable={false}
        width={300}
      >
        <div className="flex flex-col items-center p-4">
          <Spin size="large" className="mb-4" />
          <h3 className="text-lg font-medium mb-1">Processing Image</h3>
          <p className="text-gray-600 text-center">
            Please wait while we optimize and upload your profile picture
          </p>
        </div>
      </Modal>
    </div>
    </div>

  );
};

export default SummaryCard;
