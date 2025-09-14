"use client";

import { ConfigProvider, Select } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import { useRouter } from "next/navigation";

const { Option } = Select;

const schema = yup.object().shape({
  lodgingType: yup.string().required("Lodging type is required"),
  featureTitle: yup.string().required("Feature title is required"),
  beforeCheckIn: yup.string().required("Before Check In is required"),
  afterCheckIn: yup.string().required("After Check In is required"),
});

export default function AddPolicy() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      lodgingType: "",
      featureTitle: "",
      beforeCheckIn: "",
      afterCheckIn: "",
    },
  });

  const { message } = useApp();
  const router = useRouter();

  const customTheme = {
    token: {
      colorPrimary: "#EF5350",
      colorBorder: "#696666",
    },
    components: {
      Select: {
        selectorBorderColor: "#696666",
        selectorBorderColorHover: "#0056b3",
        selectorBorderColorFocus: "#0056b3",
      },
    },
  };

  const { mutate: savePolicy, isPending: savingPolicy } = useApiMutation({
    endpoint: "/stay/cancellation-policy",
    method: "post",
    config: {
      onSuccess: () => {
        message.success("Policy saved successfully!");
        router.push("/dashboard/cancellation-policy");
      },
      onError: (err) => {
        message.error(err?.response?.data?.message || "Failed to save policy");
      },
    },
  });

  const onSubmit = (data: any) => {
    const payload = {
      type: data.lodgingType,
      name: data.featureTitle,
      before_check_in: data.beforeCheckIn,
      after_check_in: data.afterCheckIn,
    };

    console.log("payload:", payload);
    savePolicy(payload);
  };

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Add Cancellation Policy
      </h1>

      <div className="w-full bg-white shadow-lg rounded-2xl px-6 py-16">
        <div className="w-full mx-auto">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-3 items-center">
              <div className="w-full flex flex-col gap-4">
                <ConfigProvider theme={customTheme}>
                  <Controller
                    name="lodgingType"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        size="large"
                        placeholder="Select a lodging type"
                        className="w-full h-[48px] focus:outline-none "
                        onChange={(val) => field.onChange(val)}
                        value={field.value || undefined}
                      >
                        <Option value="0">Short Term Cancellation</Option>
                        <Option value="1">Long Term Cancellation</Option>
                      </Select>
                    )}
                  />
                </ConfigProvider>
                {errors.lodgingType && (
                  <p className="text-red-500 text-sm">
                    {errors.lodgingType.message}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-4">
                <Controller
                  name="featureTitle"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Feature Title"
                      className="w-full h-[48px] p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400"
                    />
                  )}
                />
                {errors.featureTitle && (
                  <p className="text-red-500 text-sm">
                    {errors.featureTitle.message}
                  </p>
                )}
              </div>
            </div>

            <Controller
              name="beforeCheckIn"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Before Check In"
                  className="w-full p-3 border rounded-lg focus:outline-none "
                />
              )}
            />
            {errors.beforeCheckIn && (
              <p className="text-red-500 text-sm">
                {errors.beforeCheckIn.message}
              </p>
            )}

            <Controller
              name="afterCheckIn"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="After Check In"
                  className="w-full p-3 border rounded-lg focus:outline-none "
                />
              )}
            />
            {errors.afterCheckIn && (
              <p className="text-red-500 text-sm">
                {errors.afterCheckIn.message}
              </p>
            )}

            <div className="text-center mt-4">
              <button
                type="submit"
                disabled={savingPolicy}
                className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 border border-red-400 disabled:opacity-50"
              >
                {savingPolicy ? "Saving..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
