import React, { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Badge, Alert, Button, message } from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ImageUpload from "./image-upload";
import { useProfileContext } from "./profile-context";
import { useApiGet, useApiMutation } from "@/http-service";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { PiUploadDuotone } from "react-icons/pi";

type DocumentStatus =
  | "not-submitted"
  | "under-review"
  | "rejected"
  | "verified";

// Airmen Certificate Form Schema with Yup validation
const airmenValidationSchema = yup.object({
  airmen_certificate_front: yup
    .mixed()
    .required("Front image is required")
    .test("fileType", "Only image files are allowed", (value) => {
      if (!value) return false;
      if (value instanceof File) {
        return value.type.startsWith("image/");
      }
      if (typeof value === "string") {
        // Allow string URLs (existing images)
        return value.startsWith("http") || value.startsWith("data:");
      }
      return true;
    })
    .test("fileSize", "File size must be less than 5MB", (value) => {
      if (!value) return false;
      if (value instanceof File) {
        return value.size <= 5 * 1024 * 1024; // 5MB
      }
      // Skip size validation for string URLs (existing images)
      return true;
    }),
  airmen_certificate_back: yup
    .mixed()
    .required("Back image is required")
    .test("fileType", "Only image files are allowed", (value) => {
      if (!value) return false;
      if (value instanceof File) {
        return value.type.startsWith("image/");
      }
      if (typeof value === "string") {
        // Allow string URLs (existing images)
        return value.startsWith("http") || value.startsWith("data:");
      }
      return true;
    })
    .test("fileSize", "File size must be less than 5MB", (value) => {
      if (!value) return false;
      if (value instanceof File) {
        return value.size <= 5 * 1024 * 1024; // 5MB
      }
      // Skip size validation for string URLs (existing images)
      return true;
    }),
});

type AirmenFormData = yup.InferType<typeof airmenValidationSchema>;

const AirmenCertifications = () => {
  const { documentStatuses } = useProfileContext();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const { mutate: updateProfile, isPending: updatingProfile } = useApiMutation({
    endpoint: `/me`,
    method: "patch",
    config: {
      onSuccess: (res) => {
        console.log("invalidated", res);
        queryClient.invalidateQueries({ queryKey: ["me", session?.user.id] });
        message.success("Profile updated successfully!");
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

  const { data: userData, isLoading: loadingUserData } = useApiGet({
    endpoint: `/me`,
    queryKey: ["me", session?.user.id],

    config: {
      select: (res: any) => {
        console.log({ res });
        return res?.data?.doc;
      },
    },
  });

  // Airmen Certificate Form with validation
  const airmenForm = useForm<AirmenFormData>({
    resolver: yupResolver(airmenValidationSchema),
    defaultValues: {
      airmen_certificate_front: undefined,
      airmen_certificate_back: undefined,
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (userData) {
      airmenForm.reset({
        airmen_certificate_front: userData?.airmen_certificate_front,
        airmen_certificate_back: userData?.airmen_certificate_back,
      });
    }
  }, [userData, airmenForm.reset]);

  console.log("getCert", airmenForm.getValues());

  const getStatusConfig = (status: DocumentStatus) => {
    switch (status) {
      case "verified":
        return {
          color: "success",
          icon: <CheckCircleFilled className="text-green-500" />,
          text: "Verified",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-700",
        };
      case "rejected":
        return {
          color: "error",
          icon: <CloseCircleFilled className="text-red-500" />,
          text: "Rejected",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-700",
        };
      case "under-review":
        return {
          color: "warning",
          icon: <ClockCircleOutlined className="text-amber-500" />,
          text: "Under Review",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-200",
          textColor: "text-amber-700",
        };
      default:
        return {
          color: "default",
          icon: <ExclamationCircleOutlined className="text-gray-400" />,
          text: "Not Submitted",
          bgColor: "bg-gray-50",
          borderColor: "border-gray-200",
          textColor: "text-gray-500",
        };
    }
  };

  const onAirmenSubmit = useCallback(
    async (data: AirmenFormData) => {
      try {
        const { airmen_certificate_front, airmen_certificate_back } = data;
        console.log("data", data);
        // Create FormData for file uploads
        const formData = new FormData();

        if (
          airmen_certificate_front instanceof File ||
          airmen_certificate_front instanceof Blob
        ) {
          console.log("append1");
          formData.append("airmen_certificate_front", airmen_certificate_front);
        }

        if (
          airmen_certificate_back instanceof File ||
          airmen_certificate_back instanceof Blob
        ) {
          console.log("append2");

          formData.append("airmen_certificate_back", airmen_certificate_back);
        }

        updateProfile(formData);

        // Here you would typically make an API call to save the airmen certificate
        message.success("Airmen certificate submitted successfully!");

        // Reset the form
      } catch (error) {
        message.error("Failed to submit airmen certificate. Please try again.");
        console.error("Airmen certificate submission error:", error);
      }
    },
    [airmenForm, message]
  );

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 w-full"
      id="airmen-certifications"
    >
      <div className="flex items-start justify-between mb-4 w-full">
        <h2 className="flex items-center text-xl font-bold text-gray-800 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Airmen Certificate
        </h2>
        <Badge
          status={getStatusConfig(documentStatuses.airmen.status).color as any}
          text={
            <span className="text-sm">
              {getStatusConfig(documentStatuses.airmen.status).text}
            </span>
          }
        />
      </div>

      <div className="text-gray-600 mb-6">
        Upload clear photos of your airmen certificate. Both front and back
        sides are required for verification.
      </div>

      {/* Airmen Certificate Section */}
      <form onSubmit={airmenForm.handleSubmit(onAirmenSubmit)}>
        <div className="border border-gray-200 rounded-xl p-4 mb-6">
          {/* Header with Status */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">
                Upload both sides of your airmen certificate
              </p>
            </div>
          </div>

          <div className="w-full flex items-center gap-4 mb-4">

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Airmen Certificate Front *
            </label>

            <div className="bg-[#E9E9E9] h-[221px] flex flex-col gap-2 justify-center items-center rounded-md">
              <PiUploadDuotone className="h-[40px] w-[40px]" />
              <span>Click or Drag Photo to Upload Image</span>
            </div>



            <Controller
              name="airmen_certificate_front"
              control={airmenForm.control}
              render={({ field }) => {
                return (
                  <>
                    <ImageUpload
                      value={field.value as string | File | null}
                      setValue={(
                        fieldName: string,
                        value: any,
                        options?: any
                      ) =>
                        airmenForm.setValue(
                          fieldName as keyof AirmenFormData,
                          value as any,
                          options
                        )
                      }
                      fieldName="airmen_certificate_front"
                      label="Document"
                    />
                    {airmenForm.formState.errors.airmen_certificate_front && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {airmenForm.formState.errors.airmen_certificate_front.message?.toString()}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Airmen Certificate Back *
            </label>

            <div className="bg-[#E9E9E9] h-[221px] flex flex-col gap-2 justify-center items-center rounded-md">
              <PiUploadDuotone className="h-[40px] w-[40px]" />
              <span>Click or Drag Photo to Upload Image</span>
            </div>



            <Controller
              name="airmen_certificate_back"
              control={airmenForm.control}
              render={({ field }) => {
                return (
                  <>
                    <ImageUpload
                      value={field.value as string | File | null}
                      setValue={(
                        fieldName: string,
                        value: any,
                        options?: any
                      ) =>
                        airmenForm.setValue(
                          fieldName as keyof AirmenFormData,
                          value as any,
                          options
                        )
                      }
                      fieldName="airmen_certificate_back"
                      label="Document"
                    />
                    {airmenForm.formState.errors.airmen_certificate_back && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {airmenForm.formState.errors.airmen_certificate_back.message?.toString()}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>

          </div>

          {/* File Requirements Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <h4 className="text-sm font-medium text-primary mb-2">
              File Requirements:
            </h4>
            <ul className="text-xs text-primary space-y-1">
              <li>• Only image files (JPG, PNG, GIF) are accepted</li>
              <li>• Both front and back images are required</li>
              <li>• Ensure images are clear and readable</li>
              <li>• License must be valid and not expired</li>
            </ul>
          </div>

          {/* Airmen Save Button */}
          <div className="flex justify-end mt-4">
            <Button
              type="primary"
              variant="dashed"
              icon={<SaveOutlined />}
              htmlType="submit"
              loading={updatingProfile}
              disabled={updatingProfile}
              //   disabled={!airmenForm.formState.isValid}
            >
              Submit Airmen Certificate
            </Button>
          </div>

          {/* Admin Notes for Airmen */}
          {documentStatuses.airmen.adminNotes && (
            <Alert
              message="Admin Notes"
              description={documentStatuses.airmen.adminNotes}
              type={
                documentStatuses.airmen.status === "rejected" ? "error" : "info"
              }
              showIcon
              className="mt-4"
            />
          )}

          {/* Last Updated for Airmen */}
          {documentStatuses.airmen.lastUpdated && (
            <p className="text-xs text-gray-500 mt-3">
              Last updated:{" "}
              {new Date(
                documentStatuses.airmen.lastUpdated
              ).toLocaleDateString()}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AirmenCertifications;
