"use client";

import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";

const schema = yup.object().shape({
  password_current: yup.string().required("Current password is required"),
  password_new: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must include at least one uppercase letter")
    .matches(/[a-z]/, "Must include at least one lowercase letter")
    .matches(/[0-9]/, "Must include at least one number")
    .matches(/[@$!%*?&]/, "Must include at least one special character")
    .required("New password is required"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password_new"), null], "Passwords must match")
    .required("Confirm password is required"),
});

type FormValues = yup.InferType<typeof schema>;

const FormField = ({
  name,
  label,
  control,
  placeholder,
  errors,
}: {
  name: keyof FormValues;
  label: string;
  control: any;
  placeholder: string;
  errors: any;
}) => (
  <div className="flex flex-col gap-2 w-full">
    <p className="text-sm font-medium text-gray-900">{label}</p>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input.Password {...field} placeholder={placeholder} className="h-11" />
      )}
    />
    {errors[name] && (
      <p className="text-red-500 text-xs">{errors[name]?.message}</p>
    )}
  </div>
);

export default function ChangePassword() {
  const router = useRouter();
  const { message: appMessage } = useApp();

  const { mutate: changePassword, isPending: changingPassword } =
    useApiMutation({
      endpoint: `/me/change-password`,
      method: "patch",
      config: {
        onSuccess: () => {
          appMessage.success("Password updated successfully!");
        },
        onError: (err) => {
          appMessage.error(
            err?.response?.data?.message || "Failed to update password"
          );
        },
      },
    });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      password_current: "",
      password_new: "",
      password_confirm: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    changePassword(data);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        </div>

        <div className="px-6 py-2 bg-white shadow-lg rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 my-5"
          >
            <FormField
              name="password_current"
              label="Current Password"
              placeholder="Enter your current password"
              control={control}
              errors={errors}
            />
            <div className="flex items-center gap-4">
              <FormField
                name="password_new"
                label="New Password"
                placeholder="Enter a strong password"
                control={control}
                errors={errors}
              />
              <FormField
                name="password_confirm"
                label="Confirm Password"
                placeholder="Re-enter your new password"
                control={control}
                errors={errors}
              />
            </div>

            <div className="flex justify-center mt-6">
              <Button
                type="primary"
                disabled={changingPassword}
                htmlType="submit"
                className="bg-[#CE2029] px-6 py-5 font-medium text-md"
              >
                {changingPassword ? "Updating..." : "Update Password"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
