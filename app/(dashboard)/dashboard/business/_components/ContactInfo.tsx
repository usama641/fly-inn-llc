import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { FaClock, FaPhone, FaGlobe } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { Radio } from "antd";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import SectionField from "./section";

const ContactInfo: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const selectedProtocol = useWatch({
    control,
    name: "url_protocol_selection",
    defaultValue: "https://",
  });

  const currentUrlValue = useWatch({
    control,
    name: "url",
    defaultValue: "https://",
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="airport-information">
      <div className="md:col-span-2 mt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <RiContactsBook3Fill className=" mr-2" size={24} />
          Contact Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hours of Operation */}
          <div>
            <SectionField
              title="Hours of Operation"
              desc="Your regular business hours (e.g. Mon-Fri 9am-5pm)"
              icon={<FaClock size={16} />}
            />

            <Controller
              name="operational_hrs"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <input
                    {...field}
                    type="text"
                    placeholder="e.g. Mon-Fri: 9AM-5PM, Sat: 10AM-2PM"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.operational_hrs && (
                    <p className="text-red-500 text-sm mt-2">
                      <i className="fa fa-exclamation-circle mr-1"></i>
                      {errors.operational_hrs.message as string}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Phone Number */}
          <div>
            <SectionField
              title="Phone Number"
              desc="Primary contact number for your business"
              icon={<FaPhone size={16} />}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field: { value, onChange } }) => (
                <div className="flex flex-col" id="phone">
                  <PhoneInput
                    placeholder="Enter phone number"
                    defaultCountry="US"
                    value={value}
                    international={false}
                    countryCallingCodeEditable={false}
                    withCountryCallingCode
                    onChange={onChange}
                    className="border h-10 pl-2.5 rounded-[8px] border-[#d9d9d9] text-base border-solid"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message?.toString()}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Website URL */}
          <div>
            <SectionField
              title="Website URL"
              desc="Your business website (include http:// or https://)"
              icon={<FaGlobe size={16} />}
            />

            {/* Radio Buttons for Scheme Selection */}
            <div className="flex items-center mb-3">
              <Controller
                name="url_protocol_selection"
                control={control}
                defaultValue="https://"
                render={({ field }) => (
                  <Radio.Group
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  >
                    <Radio value="https://">HTTPS</Radio>
                    <Radio value="http://">HTTP</Radio>
                  </Radio.Group>
                )}
              />
            </div>

            {/* URL Input */}
            <Controller
              name="url"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <div className="flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      {selectedProtocol}
                    </span>
                    <input
                      {...field}
                      type="text"
                      placeholder="yourbusiness.com"
                      className="flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border"
                      onChange={(e) => {
                        const domainOnly = e.target.value.replace(
                          /^https?:\/\//,
                          ""
                        );
                        field.onChange(`${selectedProtocol}${domainOnly}`);
                      }}
                      value={currentUrlValue.replace(/^https?:\/\//, "")}
                    />
                  </div>
                  {errors.url && (
                    <p className="text-red-500 text-sm mt-2">
                      <i className="fa fa-exclamation-circle mr-1"></i>
                      {errors.url.message as string}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
