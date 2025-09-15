import React, { useCallback, useEffect, useRef } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { Input, Select } from "antd";
import { MdQuestionMark } from "react-icons/md";
import useGoogleMap from "@/hooks/use-google-hook";
import GoogleSearch from "@/components/shared/google-search";
import { MAP_THEME } from "@/constants/google-map";
import GoogleMapComponent from "@/components/shared/map";

const { Option } = Select;

/**
 * A form field component for handling location-related inputs, including a Google Map.
 * It is styled using Ant Design components and manages state with react-hook-form.
 */
const LocationFormFields = () => {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useFormContext();

  const latitude = watch("latitude");
  const longitude = watch("longitude");
  const { isLoaded, onLoad, onUnmount } = useGoogleMap();
  console.log({ latitude, longitude });

  const findAddress = useCallback(() => {
    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lng)) {
      console.error("Invalid latitude or longitude");
      return;
    }

    const latLng = new window.google.maps.LatLng(lat, lng);
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK" && results?.[0]) {
        const addressObject = results?.[0];
        const addressComponents = addressObject?.address_components || [];

        const getComponent = (type: string) =>
          addressComponents.find((component) => component.types.includes(type))
            ?.long_name || "";

        setValue("address", addressObject.formatted_address);
        setValue("city", getComponent("locality"));
        setValue("state", getComponent("administrative_area_level_1"));
        setValue("country", getComponent("country"));
        setValue("zipcode", getComponent("postal_code"));

        // Trigger validation for all fields
        trigger(["address", "city", "state", "country", "zipcode"]);
      } else {
        console.error("Geocoder failed due to: ", status);
      }
    });
  }, [latitude, longitude, setValue, trigger]);

  const onDragEnd = (e: any) => {
    const newLat = e.latLng.lat();
    const newLng = e.latLng.lng();
    console.log("New position:", { lat: newLat, lng: newLng });

    // Update the form values for latitude and longitude
    setValue("latitude", newLat);
    setValue("longitude", newLng);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6"
      id="location-form-fields"
    >
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-600 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        Location Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Address Search */}
        <div className="md:col-span-2">
          <div className="flex flex-col justify-between">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Address
            </label>
            <p className="text-sm text-gray-500 mb-3">
              Address MUST be TYPED in. Please START TYPING and choose an
              address that Google is suggesting BELOW the address field bar.
              Please do NOT choose an address that your device has saved.
            </p>
            <Controller
              name="address"
              control={control}
              render={({ field: { onChange, value } }) => (
                <div>
                  <GoogleSearch
                    isLoaded={isLoaded}
                    onChange={(address: any) => {
                      if (typeof address === "string") {
                        onChange(address);
                      } else if (address?.address) {
                        // Set all form values from the address object
                        onChange(address.address);
                        setValue("city", address.city, {
                          shouldValidate: true,
                        });
                        setValue("state", address.state, {
                          shouldValidate: true,
                        });
                        setValue("country", address.country, {
                          shouldValidate: true,
                        });
                        setValue("zipcode", address.zipcode, {
                          shouldValidate: true,
                        });
                        setValue("latitude", address.latitude, {
                          shouldValidate: true,
                        });
                        setValue("longitude", address.longitude, {
                          shouldValidate: true,
                        });
                      }
                    }}
                    value={value}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-2">
                      <i className="fa fa-exclamation-circle mr-1"></i>
                      {errors.address?.message?.toString()}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        {/* Apartment/Suite */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Apartment/Suite (optional)
          </label>
          <Controller
            name="apt_suite"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="e.g. Suite 405"
                  className="w-full"
                />
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
            name="city"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="e.g. New York"
                  status={errors.city ? "error" : ""}
                  className="w-full"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.city.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* State */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State
          </label>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="e.g. NY"
                  status={errors.state ? "error" : ""}
                  className="w-full"
                />
                {errors.state && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.state.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* ZIP / Postal Code */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ZIP / Postal Code
          </label>
          <Controller
            name="zipcode"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="e.g. 10001"
                  status={errors.zipcode ? "error" : ""}
                  className="w-full"
                  onChange={(e) => {
                    setValue("zipcode", e.target.value);
                    trigger("zipcode");
                  }}
                />
                {errors.zipcode && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.zipcode.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Area */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Area (optional)
          </label>
          <Controller
            name="area"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="e.g. Manhattan"
                  className="w-full"
                />
              </div>
            )}
          />
        </div>

        {/* Country */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="e.g. United States"
                  status={errors.country ? "error" : ""}
                  className="w-full"
                />
                {errors.country && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.country.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gsray-700 mb-2">
            Location Map
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Drag the marker to adjust your precise location. Coordinates will
            update automatically.
          </p>
        </div>

        <div className="h-[400px] w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm">
          <GoogleMapComponent height="h-[400px]" stayMark="false"/>
        </div>
      </div>

      {/* Coordinates Section */}
      <div className="mt-8  grid-cols-1 gap-6 md:grid-cols-3 hidden">
        {/* Latitude */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Latitude
          </label>
          <Controller
            name="latitude"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  type="number"
                  size="large"
                  min="-90"
                  max="90"
                  step="any"
                  placeholder="Latitude"
                  status={errors.latitude ? "error" : ""}
                  className="w-full"
                />
                {errors.latitude && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.latitude.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Longitude */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Longitude
          </label>
          <Controller
            name="longitude"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  type="number"
                  size="large"
                  min="-180"
                  max="180"
                  step="any"
                  placeholder="Longitude"
                  status={errors.longitude ? "error" : ""}
                  className="w-full"
                />
                {errors.longitude && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.longitude.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Find Address Button */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={findAddress}
            className="h-[40px] w-full rounded-md bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 font-medium text-white shadow-md transition-all duration-300 hover:from-red-700 hover:to-red-800"
          >
            <i className="fa fa-map-marked-alt mr-2" />
            Find Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationFormFields;
