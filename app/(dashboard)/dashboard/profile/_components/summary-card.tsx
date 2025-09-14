import {
  CameraOutlined,
  CheckCircleFilled,
  DeleteOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import React, { useState } from "react";
import { useProfileContext } from "./profile-context";
import { useSession } from "next-auth/react";

const SummaryCard = () => {
  const { profileComplete, profileStatus } = useProfileContext();

    const { data: session } = useSession();

    console.log("session", session);
  

  console.log({ profileComplete, profileStatus });

  const [missingFields, setMissingFields] = useState<string[]>([
    "Emergency Contact",
    "ID Verification",
    "Mailing Address",
  ]);

  const [completionPercentage, setCompletionPercentage] = useState(35);

  const [profileImage, setProfileImage] = useState<File | null>(null);

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

  const [profilePreview, setProfilePreview] = useState<string>();
  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];

    // Check file type
    if (!file.type.startsWith("image/")) {
      alert("You can only upload image files!");
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be smaller than 5MB!");
      return;
    }

    // Cleanup old preview URL if it exists
    if (profilePreview !== "/assets/images/testimonials/user1.jpg") {
      URL.revokeObjectURL(profilePreview as string);
    }

    const previewUrl = URL.createObjectURL(file);
    setProfileImage(file);
    setProfilePreview(previewUrl);
  };

  const handleRemoveProfileImage = () => {
    if (profilePreview !== "/assets/images/testimonials/user1.jpg") {
      URL.revokeObjectURL(profilePreview as string);
    }
    setProfileImage(null);
    setProfilePreview("/assets/images/testimonials/user1.jpg");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
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
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full relative overflow-hidden border-4 border-white shadow-lg  flex items-center justify-center">
                  {profilePreview ? (
                    <Image
                      src={profilePreview}
                      alt="Profile"
                      className="w-full h-full object-cover"
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
              <label className="cursor-pointer  border-0 bg-gray-100 hover:bg-gray-200 rounded-full  flex items-center justify-center transition-colors absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[62px] h-[27px] gap-1">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleProfileUpload(e)}
                />
                <span className="text-sm">
                  {profilePreview ? "Edit" : "Upload"}
                </span>
                <CameraOutlined className="text-gray-700 text-md" />
              </label>
              {/* <div className="mt-3 flex gap-2 justify-center">
                {profilePreview && (
                  <button
                    className="bg-gray-100 border-0 hover:bg-gray-200 rounded-full w-4 h-4 flex items-center justify-center transition-colors"
                    onClick={handleRemoveProfileImage}
                  >
                    <DeleteOutlined className="text-gray-700 text-md" />
                  </button>
                )}
              </div> */}
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">
                {session?.user?.first_name}
              </h1>
              <p className="text-gray-500 mb-4">{session?.user?.role}</p>

              {/* Profile Completion */}
              <div className="mb-4">
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
                  <p className="text-sm text-gray-600 mt-2">
                    Complete your profile to unlock booking capabilities.
                    <span className="font-medium text-red-600">
                      {" "}
                      {100 - completionPercentage}%
                    </span>{" "}
                    remaining.
                  </p>
                )}
              </div>
            </div>

            {/* Missing Fields Section */}
            {/* {profileStatus === "incomplete" && missingFields.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <ExclamationCircleOutlined className="text-red-500" />
                  <h4 className="font-medium text-red-700">
                    Missing Required Fields
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {missingFields.map((field, index) => (
                    <button
                      key={index}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm hover:bg-red-200 transition-colors border border-red-200"
                      onClick={() =>
                        document
                          .getElementById(
                            field.replace(/\s+/g, "-").toLowerCase()
                          )
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      {field}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-red-600 mt-2">
                  Click on any field above to navigate to it
                </p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
