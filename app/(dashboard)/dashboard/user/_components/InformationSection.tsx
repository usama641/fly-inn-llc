"use client";

import { memo } from "react";
import { useParams, useRouter } from "next/navigation";
import { useFormContext, Controller } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import PhoneInput from "react-phone-number-input";
import {
  Eye,
  CheckCircle,
  Mail,
  XCircle,
} from "lucide-react"; // react-icons alternative: import { FaEye } from "react-icons/fa";
import "react-phone-number-input/style.css";

import useModal from "@/hooks/useModal";
import { useApp } from "@/providers/AppMessageProvider";
import { useApiMutation } from "@/http-service";
// import UpdateStatusModal from "../components/update-status-modal";

interface InformationSectionProps {
  userData: any;
  user: string;
}

const InformationSection: React.FC<InformationSectionProps> = ({
  userData,
  user,
}) => {
  const params = useParams();
  const queryClient = useQueryClient();
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

    const { message } = useApp();
    const router = useRouter();
  

  const {
    open: isUpdateStatusModal,
    openModal: openUpdateStatusModal,
    closeModal: closeUpdateStatusModal,
    additionalState: updateUserModalData,
  } = useModal();

    const { mutate: updateVerificationStatus, isPending: updatingVerificationStatus } = useApiMutation({
   endpoint: `user/${params?.id}`,
      method: "post",
      config: {
        onSuccess: () => {
          message.success("User has been successfully updated!");
          router.push("/dashboard/user");
        },
        onError: (err) => {
          message.error(err?.response?.data?.message || "Failed to save stay");
        },
      },
    });

  const textInputFields = [
    { name: "first_name", label: "First Name" },
    { name: "last_name", label: "Last Name" },
    { name: "username", label: "Username", disabled: true },
    { name: "display_name", label: "Display Name" },
    { name: "native_language", label: "Native / Fluent Languages" },
    { name: "other_language", label: "Other Languages" },
    { name: "email", label: "Email", type: "email", disabled: true },
    { name: "additional_email", label: "Additional Email", type: "email" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-6">User Information</h2>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {textInputFields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1">
            <Controller
              name={field.name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <input
                    id={field.name}
                    placeholder={field.label}
                    value={value || ""}
                    onChange={onChange}
                    disabled={field.disabled}
                    type={field.type || "text"}
                    className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 ${
                      errors?.[field.name] ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors?.[field.name]?.message && (
                    <span className="text-xs text-red-500">
                      {String(errors?.[field.name]?.message)}
                    </span>
                  )}
                </>
              )}
            />
          </div>
        ))}

        {/* Phone Fields */}
        {["phone", "other_phone"].map((phoneField) => (
          <div key={phoneField} className="flex flex-col">
            <PhoneInput
              placeholder="Enter phone number"
              value={getValues(phoneField)}
              international
              defaultCountry="US"
              countryCallingCodeEditable={false}
              onChange={(value) => {
                if (!value || value.length <= 15) {
                  setValue(phoneField, value, { shouldValidate: true });
                }
              }}
              className={`rounded-lg border px-3 py-2 text-sm ${
                errors?.[phoneField]?.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors?.[phoneField]?.message && (
              <span className="text-xs text-red-500">
                {String(errors?.[phoneField]?.message)}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Email Verification */}
      <div className="mt-4 flex flex-col gap-2">
        {userData?.email_verified_at && (
          <button
            disabled
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white text-sm"
          >
            <CheckCircle size={18} /> Verified
          </button>
        )}

        {!userData?.email_verified && (
          <button
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white text-sm"
            onClick={() =>
              openUpdateStatusModal({
                id: params.id,
                description: `Are you sure you want to verify user's email address?`,
                confirmText: "Verify Email",
                confirmAction: () => {
                  const payload = {
                    email_verified_at: new Date().toISOString(),
                    _method: "PATCH",
                  };
                  updateVerificationStatus(payload);
                },
              })
            }
          >
            <Mail size={18} /> Click to Verify
          </button>
        )}
      </div>

      {/* TODO: Driving License, Airmen Certificate, Bio sections (can be migrated similarly) */}
    </div>
  );
};

export default memo(InformationSection);
