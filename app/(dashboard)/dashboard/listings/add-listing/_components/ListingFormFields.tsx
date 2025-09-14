import { listingTypes } from "@/constants/stays";
import { useApp } from "@/providers/AppMessageProvider";
import React, { memo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input, Select } from "antd";
import { MdQuestionMark } from "react-icons/md";

const { Option } = Select;

/**
 * A form field component for selecting the listing type using react-hook-form
 * and styled with Ant Design components and Tailwind CSS.
 * This component is memoized for performance.
 */
const ListingFormFields = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // Access form context for form state
  const { message } = useApp();

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="listing-form-fields">
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-600 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Listing Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Listing Type Field */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Listing Type
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Choose the type of listing you want to create
          </p>
          <Controller
            name="listing_type"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select a listing type"
                  status={errors?.listing_type ? "error" : ""}
                  className="w-full"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                >
                  {listingTypes.map((option: any) => (
                    <Option
                      key={option.key}
                      value={option.value}
                      label={option.label}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </Option>
                  ))}
                </Select>
                {errors?.listing_type?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.listing_type.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ListingFormFields);
