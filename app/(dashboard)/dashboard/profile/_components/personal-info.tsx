import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input, Select, Form } from "antd";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { languageOptions } from "@/constants/profile";

const { TextArea } = Input;
const { Option } = Select;

const PersonalInfo = () => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6"
      id="personal-information"
    >
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-600 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Your legal first name as it appears on official documents
          </p>
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="John"
                  status={errors.first_name ? "error" : ""}
                  className="w-full"
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.first_name.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Middle Name */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Middle Name
          </label>
          <p className="text-sm text-gray-500 mb-3">Your middle name/surname</p>
          <Controller
            name="middle_name"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="Doe"
                  status={errors.middle_name ? "error" : ""}
                  className="w-full"
                />
                {errors.middle_name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.middle_name.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Last name */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Your legal last name/surname
          </p>
          <Controller
            name="last_name"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="Doe"
                  status={errors.last_name ? "error" : ""}
                  className="w-full"
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.last_name.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Display Name */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Display Name
          </label>
          <p className="text-sm text-gray-500 mb-3">
            How your name will appear to other users on the platform
          </p>
          <Controller
            name="display_name"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="John D."
                  status={errors.display_name ? "error" : ""}
                  className="w-full"
                />
                {errors.display_name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.display_name.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Native Language */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Native Language
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Your primary language for communication
          </p>
          <Controller
            name="native_language"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select your native language"
                  status={errors.native_language ? "error" : ""}
                  className="w-full text-sm"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                >
                  {languageOptions.map((option) => (
                    <Option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    >
                      {option.label}
                    </Option>
                  ))}
                </Select>
                {errors.native_language && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.native_language.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Other Languages */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Other Languages
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Select all languages you're comfortable communicating in
          </p>
          <Controller
            name="other_language"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  mode="multiple"
                  placeholder="Select languages you speak"
                  status={errors.other_language ? "error" : ""}
                  className="w-full text-sm"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                >
                  {languageOptions.map((option) => (
                    <Option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    >
                      {option.label}
                    </Option>
                  ))}
                </Select>
                {errors.other_language && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.other_language.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Primary contact number for account verification
          </p>
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={value}
                  onChange={onChange}
                  className={`border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-3 py-2 w-full`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.phone.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Additional Phone */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Phone
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Optional backup phone number
          </p>
          <Controller
            name="other_phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={value}
                  onChange={onChange}
                  className={`border ${
                    errors.other_phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-3 py-2 w-full`}
                />
                {errors.other_phone && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.other_phone.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Primary email for account notifications
          </p>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  type="email"
                  size="large"
                  placeholder="john@example.com"
                  status={errors.email ? "error" : ""}
                  className="w-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Additional Email */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Email
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Optional backup email address
          </p>
          <Controller
            name="additional_email"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  type="email"
                  size="large"
                  placeholder="backup@example.com"
                  status={errors.additional_email ? "error" : ""}
                  className="w-full"
                />
                {errors.additional_email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.additional_email.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Bio */}
        <div className="col-span-2 flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Tell others about yourself, your aviation interests, and experiences
          </p>
          <Controller
            name="bio"
            control={control}
            render={({ field }) => (
              <div>
                <TextArea
                  {...field}
                  rows={4}
                  placeholder="Share your story..."
                  status={errors.bio ? "error" : ""}
                  className="w-full"
                />
                {errors.bio && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.bio.message?.toString()}
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

export default PersonalInfo;
