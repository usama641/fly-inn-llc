import React, { useRef } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import { Controller, useFormContext } from "react-hook-form";
import { Input, Select } from "antd";
import useGoogleMap from "@/hooks/use-google-hook";
import GoogleSearch from "@/components/shared/google-search";

const { Option } = Select;

const MailingAddress = () => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const { isLoaded } = useGoogleMap();

  // Type assertion for nested mailing_address errors
  const mailingAddressErrors = errors.mailing_address as any;

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="mailing-address">
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-600 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        Mailing Address
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Street Address */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Street Address
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Start typing to search for your address
          </p>
          <Controller
            name="mailing_address.address"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="flex flex-col gap-1 relative">
                <GoogleSearch
                  isLoaded={isLoaded}
                  onChange={(address: {
                    address: any;
                    city: any;
                    state: any;
                    country: any;
                    zipcode: any;
                    latitude: any;
                    longitude: any;
                  }) => {
                    onChange(address?.address ?? address);
                    if (address?.address) {
                      // Set form values
                      setValue("mailing_address.address", address.address);
                      setValue("mailing_address.city", address.city, {
                        shouldValidate: true,
                      });
                      setValue("mailing_address.state", address.state, {
                        shouldValidate: true,
                      });
                      setValue("mailing_address.country", address.country, {
                        shouldValidate: true,
                      });
                      setValue("mailing_address.zip_code", address.zipcode, {
                        shouldValidate: true,
                      });
                      // setValue("mailing_address.latitude", address?.latitude, {
                      //   shouldValidate: true,
                      // });
                      // setValue(
                      //   "mailing_address.longitude",
                      //   address?.longitude,
                      //   {
                      //     shouldValidate: true,
                      //   }
                      // );
                    }
                  }}
                  value={value}
                />
                {mailingAddressErrors?.address && (
                  <p className="text-red-500 text-sm mt-2">
                    {mailingAddressErrors.address.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Apartment/Suite */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Apartment/Suite
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Optional - unit, suite, or building number
          </p>
          <Controller
            name="mailing_address.apartment"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="Apt 4B"
                  status={mailingAddressErrors?.apartment ? "error" : ""}
                  className="w-full"
                />
                {mailingAddressErrors?.apartment && (
                  <p className="text-red-500 text-sm mt-2">
                    {mailingAddressErrors.apartment.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* City */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <Controller
            name="mailing_address.city"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="New York"
                  status={mailingAddressErrors?.city ? "error" : ""}
                  className="w-full"
                />
                {mailingAddressErrors?.city && (
                  <p className="text-red-500 text-sm mt-2">
                    {mailingAddressErrors.city.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* State/Province */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State/Province
          </label>
          <Controller
            name="mailing_address.state"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="NY"
                  status={mailingAddressErrors?.state ? "error" : ""}
                  className="w-full"
                />
                {mailingAddressErrors?.state && (
                  <p className="text-red-500 text-sm mt-2">
                    {mailingAddressErrors.state.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* zip Code */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zip Code
          </label>
          <Controller
            name="mailing_address.zip_code"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="10001"
                  status={mailingAddressErrors?.zip_code ? "error" : ""}
                  className="w-full"
                />
                {mailingAddressErrors?.zip_code && (
                  <p className="text-red-500 text-sm mt-2">
                    {mailingAddressErrors.zip_code.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Area/Region */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Area/Region
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Optional - neighborhood, district, or region
          </p>
          <Controller
            name="mailing_address.neighbourhood"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="Manhattan"
                  status={mailingAddressErrors?.neighbourhood ? "error" : ""}
                  className="w-full"
                />
                {mailingAddressErrors?.neighbourhood && (
                  <p className="text-red-500 text-sm mt-2">
                    {mailingAddressErrors.neighbourhood.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Country */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <Controller
            name="mailing_address.country"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select your country"
                  status={mailingAddressErrors?.country ? "error" : ""}
                  className="w-full"
                >
                  <Option value="United States">United States</Option>
                  <Option value="Canada">Canada</Option>
                  <Option value="United Kingdom">United Kingdom</Option>
                  <Option value="Australia">Australia</Option>
                </Select>
                {mailingAddressErrors?.country && (
                  <p className="text-red-500 text-sm mt-2">
                    {mailingAddressErrors.country.message?.toString()}
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

export default MailingAddress;
