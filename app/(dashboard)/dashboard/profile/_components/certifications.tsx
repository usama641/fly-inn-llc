import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Badge, Alert, Button, message } from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import ImageUpload from "./image-upload";

interface CertificationFile {
  file: File;
  preview: string;
}

type DocumentStatus =
  | "not-submitted"
  | "under-review"
  | "rejected"
  | "verified";

interface DocumentSection {
  status: DocumentStatus;
  lastUpdated?: string;
  adminNotes?: string;
}

// Airmen Certificate Form Schema
interface AirmenFormData {
  airmen_certificate_front: any;
  airmen_certificate_back: any;
}

// Driver License Form Schema
interface DriverLicenseFormData {
  driver_license_front: any;
  driver_license_back: any;
}

const Certifications = () => {
  // Airmen Certificate Form
  const airmenForm = useForm<AirmenFormData>({
    defaultValues: {
      airmen_certificate_front: null,
      airmen_certificate_back: null,
    },
  });

  // Driver License Form
  const driverLicenseForm = useForm<DriverLicenseFormData>({
    defaultValues: {
      driver_license_front: null,
      driver_license_back: null,
    },
  });

  const [certificationFiles, setCertificationFiles] = useState<{
    [key: string]: CertificationFile;
  }>({});

  // Mock status data - in real app this would come from API
  const [documentStatuses, setDocumentStatuses] = useState<{
    airmen: DocumentSection;
    driver: DocumentSection;
  }>({
    airmen: {
      status: "under-review",
      lastUpdated: "2024-01-15",
      adminNotes:
        "Front certificate looks good. Back certificate needs better image quality.",
    },
    driver: {
      status: "not-submitted",
    },
  });

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

  const handleRemoveCertification = (type: string) => {
    setCertificationFiles((prev) => {
      const newFiles = { ...prev };
      if (newFiles[type]?.preview) {
        URL.revokeObjectURL(newFiles[type].preview);
      }
      delete newFiles[type];
      return newFiles;
    });
  };

  const handleCertificationUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
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

    // Create preview URL
    const previewUrl = URL.createObjectURL(file);

    setCertificationFiles((prev) => {
      // Cleanup old preview URL if it exists
      if (prev[type]?.preview) {
        URL.revokeObjectURL(prev[type].preview);
      }

      return {
        ...prev,
        [type]: {
          file,
          preview: previewUrl,
        },
      };
    });
  };

  // Handle Airmen Certificate Save
  const onAirmenSubmit = (data: AirmenFormData) => {
    const { airmen_certificate_front, airmen_certificate_back } = data;

    if (!airmen_certificate_front || !airmen_certificate_back) {
      message.error(
        "Please upload both front and back of your airmen certificate"
      );
      return;
    }

    // Here you would typically make an API call to save the airmen certificate
    message.success("Airmen certificate submitted successfully!");

    // Update status to under review
    setDocumentStatuses((prev) => ({
      ...prev,
      airmen: {
        ...prev.airmen,
        status: "under-review",
        lastUpdated: new Date().toISOString().split("T")[0],
      },
    }));

    // Reset the form
    // airmenForm.reset();
  };

  // Handle Driver License Save
  const onDriverLicenseSubmit = (data: DriverLicenseFormData) => {
    const { driver_license_front, driver_license_back } = data;

    if (!driver_license_front || !driver_license_back) {
      message.error("Please upload both front and back of your driver license");
      return;
    }

    // Here you would typically make an API call to save the driver license
    message.success("Driver license submitted successfully!");

    // Update status to under review
    setDocumentStatuses((prev) => ({
      ...prev,
      driver: {
        ...prev.driver,
        status: "under-review",
        lastUpdated: new Date().toISOString().split("T")[0],
      },
    }));

    // Reset the form
    driverLicenseForm.reset();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="certifications">
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
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
        Certifications & Documents
      </h2>

      <div className="text-gray-600 mb-6">
        Upload clear photos of your certifications. These help verify your
        identity and qualifications.
      </div>

      {/* Airmen Certificate Section - Independent Form */}
      <form onSubmit={airmenForm.handleSubmit(onAirmenSubmit)}>
        <div className="border border-gray-200 rounded-xl p-4 mb-6">
          {/* Header with Status */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Airmen Certificate
              </h3>
              <p className="text-sm text-gray-600">
                Upload both sides of your airmen certificate
              </p>
            </div>
            <div className="flex items-center gap-2">
              {getStatusConfig(documentStatuses.airmen.status).icon}
              <Badge
                status={
                  getStatusConfig(documentStatuses.airmen.status).color as any
                }
                text={getStatusConfig(documentStatuses.airmen.status).text}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Airmen Certificate Front
            </label>

            <Controller
              name="airmen_certificate_front"
              control={airmenForm.control}
              render={({ field }) => {
                return (
                  <>
                    <ImageUpload
                      value={field.value}
                      setValue={(
                        fieldName: string,
                        value: any,
                        options?: any
                      ) =>
                        airmenForm.setValue(
                          fieldName as keyof AirmenFormData,
                          value,
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

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Airmen Certificate Back
            </label>

            <Controller
              name="airmen_certificate_back"
              control={airmenForm.control}
              render={({ field }) => {
                return (
                  <>
                    <ImageUpload
                      value={field.value}
                      setValue={(
                        fieldName: string,
                        value: any,
                        options?: any
                      ) =>
                        airmenForm.setValue(
                          fieldName as keyof AirmenFormData,
                          value,
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

          {/* Airmen Save Button */}
          <div className="flex justify-end mt-4">
            <Button
              type="primary"
              icon={<SaveOutlined />}
              htmlType="submit"
              className="bg-green-600 hover:bg-green-700"
            >
              Submit Airmen Certificate
            </Button>
          </div>

          {/* Admin Notes for Airmen */}
          {/* {documentStatuses.airmen.adminNotes && (
            <Alert
              message="Admin Notes"
              description={documentStatuses.airmen.adminNotes}
              type={
                documentStatuses.airmen.status === "rejected" ? "error" : "info"
              }
              showIcon
              className="mt-4"
            />
          )} */}

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

      {/* Driver License Section - Independent Form */}
      <form onSubmit={driverLicenseForm.handleSubmit(onDriverLicenseSubmit)}>
        <div className="border border-gray-200 rounded-xl p-4 mb-6">
          {/* Header with Status */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Driver License
              </h3>
              <p className="text-sm text-gray-600">
                Upload both sides of your driver license
              </p>
            </div>
            <div className="flex items-center gap-2">
              {getStatusConfig(documentStatuses.driver.status).icon}
              <Badge
                status={
                  getStatusConfig(documentStatuses.driver.status).color as any
                }
                text={getStatusConfig(documentStatuses.driver.status).text}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Driver License Front
            </label>

            <Controller
              name="driver_license_front"
              control={driverLicenseForm.control}
              render={({ field }) => {
                return (
                  <>
                    <ImageUpload
                      value={field.value}
                      setValue={(
                        fieldName: string,
                        value: any,
                        options?: any
                      ) =>
                        driverLicenseForm.setValue(
                          fieldName as keyof DriverLicenseFormData,
                          value,
                          options
                        )
                      }
                      fieldName="driver_license_front"
                      label="Document"
                    />
                    {driverLicenseForm.formState.errors
                      .driver_license_front && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {driverLicenseForm.formState.errors.driver_license_front.message?.toString()}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Driver License Back
            </label>

            <Controller
              name="driver_license_back"
              control={driverLicenseForm.control}
              render={({ field }) => {
                return (
                  <>
                    <ImageUpload
                      value={field.value}
                      setValue={(
                        fieldName: string,
                        value: any,
                        options?: any
                      ) =>
                        driverLicenseForm.setValue(
                          fieldName as keyof DriverLicenseFormData,
                          value,
                          options
                        )
                      }
                      fieldName="driver_license_back"
                      label="Document"
                    />
                    {driverLicenseForm.formState.errors.driver_license_back && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {driverLicenseForm.formState.errors.driver_license_back.message?.toString()}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>

          {/* Driver License Save Button */}
          <div className="flex justify-end mt-4">
            <Button
              type="primary"
              icon={<SaveOutlined />}
              htmlType="submit"
              className="bg-green-600 hover:bg-green-700"
            >
              Submit Driver License
            </Button>
          </div>

          {/* Admin Notes for Driver License */}
          {documentStatuses.driver.adminNotes && (
            <Alert
              message="Admin Notes"
              description={documentStatuses.driver.adminNotes}
              type={
                documentStatuses.driver.status === "rejected" ? "error" : "info"
              }
              showIcon
              className="mt-4"
            />
          )}

          {/* Last Updated for Driver License */}
          {documentStatuses.driver.lastUpdated && (
            <p className="text-xs text-gray-500 mt-3">
              Last updated:{" "}
              {new Date(
                documentStatuses.driver.lastUpdated
              ).toLocaleDateString()}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Certifications;
