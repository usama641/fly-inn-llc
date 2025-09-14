/* eslint-disable react/jsx-props-no-spreading */
import { lodgingType, spaceTypes, unitMeasure } from "@/constants/stays";
import React, { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input, Select, InputNumber } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import ReactQuillEditor from "@/components/shared/ReactQuillEditor";

const { TextArea } = Input;
const { Option } = Select;

const InformationFields = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // Access form context

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="information-fields">
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-600 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
        Property Information
      </h2>

      <div className="text-gray-600 mb-6">
        Provide detailed information about your property including space type,
        capacity, and amenities
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Type of Space */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type of Space
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Select the type of space you're offering
          </p>
          <Controller
            name="type_of_space"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select a space type"
                  status={errors?.type_of_space ? "error" : ""}
                  className="w-full"
                >
                  {spaceTypes.map((option) => (
                    <Option key={option.key} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
                {errors?.type_of_space && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.type_of_space.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Lodging Type */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lodging Type
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Choose the type of accommodation
          </p>
          <Controller
            name="lodging_type"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select a lodging type"
                  status={errors?.lodging_type ? "error" : ""}
                  className="w-full"
                >
                  {lodgingType.map((option) => (
                    <Option key={option.key} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
                {errors?.lodging_type && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.lodging_type.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      {/* Title Field */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Property Title
        </label>
        <p className="text-sm text-gray-500 mb-3">
          Format: (Airport Identifier) Airport Name - Title
        </p>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <div>
              <Input
                {...field}
                size="large"
                placeholder="(KJFK) John F. Kennedy Airport - Luxury Villa"
                status={errors?.title ? "error" : ""}
                className="w-full"
                suffix={
                  <InfoCircleOutlined
                    className="text-blue-500 cursor-help"
                    title="Please enter the airport identifier in parentheses, then a space, then the name of the airport, then space hyphen space, and then the title of your choice."
                  />
                }
              />
              {errors?.title && (
                <p className="text-red-500 text-sm mt-2">
                  <i className="fa fa-exclamation-circle mr-1"></i>
                  {errors.title.message?.toString()}
                </p>
              )}
            </div>
          )}
        />
      </div>

      {/* Capacity Fields - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Guests
          </label>
          <Controller
            name="no_of_guest"
            control={control}
            render={({ field }) => (
              <div>
                <InputNumber
                  {...field}
                  size="large"
                  placeholder="0"
                  min={0}
                  status={errors?.no_of_guest ? "error" : ""}
                  className="w-full"
                />
                {errors?.no_of_guest && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.no_of_guest.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Bedrooms
          </label>
          <Controller
            name="no_of_bedrooms"
            control={control}
            render={({ field }) => (
              <div>
                <InputNumber
                  {...field}
                  size="large"
                  placeholder="0"
                  min={0}
                  status={errors?.no_of_bedrooms ? "error" : ""}
                  className="w-full"
                />
                {errors?.no_of_bedrooms && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.no_of_bedrooms.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Beds
          </label>
          <Controller
            name="no_of_beds"
            control={control}
            render={({ field }) => (
              <div>
                <InputNumber
                  {...field}
                  size="large"
                  placeholder="0"
                  min={0}
                  status={errors?.no_of_beds ? "error" : ""}
                  className="w-full"
                />
                {errors?.no_of_beds && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.no_of_beds.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      {/* Bathrooms and Rooms - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Bathrooms
          </label>
          <Controller
            name="no_of_bathrooms"
            control={control}
            render={({ field }) => (
              <div>
                <InputNumber
                  {...field}
                  size="large"
                  placeholder="0"
                  min={0}
                  step={0.5}
                  status={errors?.no_of_bathrooms ? "error" : ""}
                  className="w-full"
                />
                {errors?.no_of_bathrooms && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.no_of_bathrooms.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Rooms
          </label>
          <Controller
            name="no_of_rooms"
            control={control}
            render={({ field }) => (
              <div>
                <InputNumber
                  {...field}
                  size="large"
                  placeholder="0"
                  min={0}
                  status={errors?.no_of_rooms ? "error" : ""}
                  className="w-full"
                />
                {errors?.no_of_rooms && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.no_of_rooms.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      {/* Size and Unit of Measure - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Size
          </label>
          <p className="text-sm text-gray-500 mb-3">Enter numbers only</p>
          <Controller
            name="size"
            control={control}
            render={({ field }) => (
              <div>
                <InputNumber
                  {...field}
                  size="large"
                  placeholder="0"
                  min={0}
                  status={errors?.size ? "error" : ""}
                  className="w-full"
                  suffix={
                    <InfoCircleOutlined
                      className="text-blue-500 cursor-help"
                      title="Please enter numbers only. You will be asked to choose square feet, square meters or acres in the next box."
                    />
                  }
                />
                {errors?.size && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.size.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Unit of Measure
          </label>
          <Controller
            name="unit_of_measure"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select a unit of measure"
                  status={errors?.unit_of_measure ? "error" : ""}
                  className="w-full"
                >
                  {unitMeasure.map((option) => (
                    <Option key={option.key} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
                {errors?.unit_of_measure && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.unit_of_measure.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      {/* Description Field */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <p className="text-sm text-gray-500 mb-3">
          Provide a detailed description of your property
        </p>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <div>
              <ReactQuillEditor
                name="description"
                placeholder="Describe your property..."
                rows={6}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
              {errors?.description && (
                <p className="text-red-500 text-sm mt-2">
                  <i className="fa fa-exclamation-circle mr-1"></i>
                  {errors.description.message?.toString()}
                </p>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default memo(InformationFields);
