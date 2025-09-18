/* eslint-disable react/jsx-props-no-spreading */
import { Input, Select, InputNumber, Button } from "antd";
import React, { useRef } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  airportUse,
  distanceOptions,
  fuelOptions,
  groundTransportationOptions,
  hangarOptions,
  lighting,
  patternOptions,
} from "@/constants/stays";
import { airportDefaultValues } from "../page";

const { Option } = Select;

const AirportInformationFields = () => {
  const {
    control,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext(); // Access form context

  const watchFieldArray = watch("airports");

  const { fields, append, remove } = useFieldArray({
    control, // Pass the control object from `useForm`
    name: "airports", // Name of the field array
  });

  // Type assertion for airports errors
  const airportErrors = (errors.airports as any) || [];

  // Combine field metadata and watched values for each dependant
  const airPortList = fields.map((field, index) => {
    return {
      ...field, // Include field metadata from `useFieldArray`
      ...watchFieldArray?.[index], // Include watched values from `watch`
    };
  });

  // Utility to round to two decimal places
  const round2 = (val: number) => Math.round(val * 100) / 100;

  const elevationUnitA = watch("elevationUnitA");
  const elevationMin = watch("elevationMin");
  const elevationMax = watch("elevationMax");
  const length = watch("length");
  const width = watch("width");

  const handleUnitChange = (newUnit: "ft" | "m") => {
    if (newUnit === "m") {
      // Convert feet to meters
      setValue(
        "elevationMin",
        elevationMin !== "" && !isNaN(Number(elevationMin))
          ? round2(Number(elevationMin) * 0.3048)
          : ""
      );
      setValue(
        "elevationMax",
        elevationMax !== "" && !isNaN(Number(elevationMax))
          ? round2(Number(elevationMax) * 0.3048)
          : ""
      );
    } else if (newUnit === "ft") {
      // Convert meters to feet
      setValue(
        "elevationMin",
        elevationMin !== "" && !isNaN(Number(elevationMin))
          ? round2(Number(elevationMin) / 0.3048)
          : ""
      );
      setValue(
        "elevationMax",
        elevationMax !== "" && !isNaN(Number(elevationMax))
          ? round2(Number(elevationMax) / 0.3048)
          : ""
      );
    }
  };

  const handleDimensionUnitChange = (newUnit: "ft" | "m") => {
    if (newUnit === "m") {
      // Convert feet to meters
      setValue(
        "length",
        length !== "" && !isNaN(Number(length))
          ? round2(Number(length) * 0.3048)
          : ""
      );
      setValue(
        "width",
        width !== "" && !isNaN(Number(width))
          ? round2(Number(width) * 0.3048)
          : ""
      );
    } else if (newUnit === "ft") {
      // Convert meters to feet
      setValue(
        "length",
        length !== "" && !isNaN(Number(length))
          ? round2(Number(length) / 0.3048)
          : ""
      );
      setValue(
        "width",
        width !== "" && !isNaN(Number(width))
          ? round2(Number(width) / 0.3048)
          : ""
      );
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6"
      id="airport-information-fields"
    >
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-600 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
        Airport Information
      </h2>

      <div className="text-gray-600 mb-6">
        Provide detailed information about nearby airports including
        identifiers, facilities, and access details
      </div>

      {/* Helicopters Allowed */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Helicopters Allowed
        </label>
        <p className="text-sm text-gray-500 mb-3">
          Specify if helicopter operations are permitted at this location
        </p>
        <Controller
          name="helicopter_allowed"
          control={control}
          render={({ field }) => (
            <div>
              <Select
                {...field}
                size="large"
                placeholder="Select option"
                status={errors?.helicopter_allowed ? "error" : ""}
                className="w-full"
              >
                <Option value={1}>Yes</Option>
                <Option value={0}>No</Option>
              </Select>
              {errors?.helicopter_allowed && (
                <p className="text-red-500 text-sm mt-2">
                  <i className="fa fa-exclamation-circle mr-1"></i>
                  {errors.helicopter_allowed.message?.toString()}
                </p>
              )}
            </div>
          )}
        />
      </div>

      {airPortList?.map((airPort, index) => {
        return (
          <div
            key={airPort.id}
            id="airports"
            className="mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Airport Identifier */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Identifier
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  2-4 digit identifier or special designation
                </p>
                <Controller
                  name={`airports[${index}].airport_identifier`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input
                        {...field}
                        size="large"
                        placeholder="e.g., EGHG"
                        status={
                          airportErrors?.[index]?.airport_identifier
                            ? "error"
                            : ""
                        }
                        className="w-full"
                      />
                      {airportErrors?.[index]?.airport_identifier?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].airport_identifier.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Airport Name */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Airport Name
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Full name of the airport
                </p>
                <Controller
                  name={`airports[${index}].airport_name`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input
                        {...field}
                        size="large"
                        placeholder="e.g., Heathrow Airport"
                        status={
                          airportErrors?.[index]?.airport_name ? "error" : ""
                        }
                        className="w-full"
                      />
                      {airportErrors?.[index]?.airport_name?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].airport_name.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Airport Use */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Airport Use
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Type of airport operation
                </p>
                <Controller
                  name={`airports[${index}].airport_use`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Select
                        {...field}
                        size="large"
                        placeholder="Select airport use"
                        status={
                          airportErrors?.[index]?.airport_use ? "error" : ""
                        }
                        className="w-full"
                      >
                        {airportUse.map((option) => (
                          <Option key={option.key} value={option.value}>
                            {option.value}
                          </Option>
                        ))}
                      </Select>
                      {airportErrors?.[index]?.airport_use?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].airport_use.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Operation Hours */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Operation Hours
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  When the airport is operational
                </p>
                <Controller
                  name={`airports[${index}].operation_hours`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input
                        {...field}
                        size="large"
                        placeholder="e.g., 24 hours"
                        status={
                          airportErrors?.[index]?.operation_hours ? "error" : ""
                        }
                        className="w-full"
                      />
                      {airportErrors?.[index]?.operation_hours?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].operation_hours.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Lighting */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lighting
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Runway lighting availability
                </p>
                <Controller
                  name={`airports[${index}].lighting`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Select
                        {...field}
                        size="large"
                        placeholder="Select lighting option"
                        status={airportErrors?.[index]?.lighting ? "error" : ""}
                        className="w-full"
                      >
                        {lighting.map((option) => (
                          <Option key={option.key} value={option.value}>
                            {option.label}
                          </Option>
                        ))}
                      </Select>
                      {airportErrors?.[index]?.lighting?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].lighting.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* CTAF/UNICOM */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CTAF/UNICOM
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Communication frequency
                </p>
                <Controller
                  name={`airports[${index}].ctaf_unicom`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input
                        {...field}
                        size="large"
                        placeholder="e.g., 122.8"
                        status={
                          airportErrors?.[index]?.ctaf_unicom ? "error" : ""
                        }
                        className="w-full"
                      />
                      {airportErrors?.[index]?.ctaf_unicom?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].ctaf_unicom.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Fuel */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fuel Available
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Select available fuel types
                </p>
                <Controller
                  name={`airports[${index}].fuel`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Select
                        {...field}
                        mode="multiple"
                        size="large"
                        placeholder="Select fuel options"
                        status={airportErrors?.[index]?.fuel ? "error" : ""}
                        className="w-full"
                        options={fuelOptions}
                      />
                      {airportErrors?.[index]?.fuel?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].fuel.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Parking */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parking Available
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Aircraft parking options
                </p>
                <Controller
                  name={`airports[${index}].parking`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Select
                        {...field}
                        size="large"
                        placeholder="Select parking option"
                        status={airportErrors?.[index]?.parking ? "error" : ""}
                        className="w-full"
                      >
                        {hangarOptions.map((option) => (
                          <Option key={option.key} value={option.value}>
                            {option.value}
                          </Option>
                        ))}
                      </Select>
                      {airportErrors?.[index]?.parking?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].parking.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Orientation */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Runway Orientation
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Runway heading (XX/XX format)
                </p>
                <Controller
                  name={`airports[${index}].orientation`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input
                        {...field}
                        size="large"
                        placeholder="XX/XX"
                        status={
                          airportErrors?.[index]?.orientation ? "error" : ""
                        }
                        className="w-full"
                        onChange={(e) => {
                          let { value: val } = e.target;
                          val = val.replace(/[^\d]/g, "");
                          if (val.length > 2) {
                            val = `${val.slice(0, 2)}/${val.slice(2)}`;
                          }
                          if (val.length > 5) {
                            val = val.slice(0, 5);
                          }
                          field.onChange(val);
                        }}
                      />
                      {airportErrors?.[index]?.orientation?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].orientation.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            {/* Elevation Range */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Elevation Range
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Point A
                  </label>
                  <Controller
                    name="elevationMin"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Input
                          {...field}
                          size="large"
                          placeholder="Elevation"
                          type="number"
                          addonAfter={
                            <Controller
                              name="elevationUnitA"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  onChange={(value) => {
                                    handleUnitChange(value);
                                    field.onChange(value);
                                  }}
                                  value={field.value}
                                  style={{ minWidth: 60 }}
                                >
                                  <Option value="ft">ft</Option>
                                  <Option value="m">m</Option>
                                </Select>
                              )}
                            />
                          }
                        />
                        {errors.elevationMin && (
                          <p className="text-red-500 text-sm mt-2">
                            <i className="fa fa-exclamation-circle mr-1"></i>
                            {errors.elevationMin.message?.toString()}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Point B
                  </label>
                  <Controller
                    name="elevationMax"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Input
                          {...field}
                          size="large"
                          placeholder="Elevation"
                          type="number"
                          addonAfter={
                            <Controller
                              name="elevationUnitA"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  onChange={(value) => {
                                    handleUnitChange(value);
                                    field.onChange(value);
                                  }}
                                  value={field.value}
                                  style={{ minWidth: 60 }}
                                >
                                  <Option value="ft">ft</Option>
                                  <Option value="m">m</Option>
                                </Select>
                              )}
                            />
                          }
                        />
                        {errors.elevationMax && (
                          <p className="text-red-500 text-sm mt-2">
                            <i className="fa fa-exclamation-circle mr-1"></i>
                            {errors.elevationMax.message?.toString()}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Dimensions */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Runway Dimensions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Length
                  </label>
                  <Controller
                    name="length"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Input
                          {...field}
                          size="large"
                          placeholder="Length"
                          type="number"
                          addonAfter={
                            <Controller
                              name="dimensionUnit"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  onChange={(value) => {
                                    handleDimensionUnitChange(value);
                                    field.onChange(value);
                                  }}
                                  value={field.value}
                                  style={{ minWidth: 60 }}
                                >
                                  <Option value="ft">ft</Option>
                                  <Option value="m">m</Option>
                                </Select>
                              )}
                            />
                          }
                        />
                        {errors.length && (
                          <p className="text-red-500 text-sm mt-2">
                            <i className="fa fa-exclamation-circle mr-1"></i>
                            {errors.length.message?.toString()}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Width
                  </label>
                  <Controller
                    name="width"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Input
                          {...field}
                          size="large"
                          placeholder="Width"
                          type="number"
                          addonAfter={
                            <Controller
                              name="dimensionUnit"
                              control={control}
                              render={({ field }) => (
                                <Select {...field} style={{ minWidth: 60 }}>
                                  <Option value="ft">ft</Option>
                                  <Option value="m">m</Option>
                                </Select>
                              )}
                            />
                          }
                        />
                        {errors.width && (
                          <p className="text-red-500 text-sm mt-2">
                            <i className="fa fa-exclamation-circle mr-1"></i>
                            {errors.width.message?.toString()}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Pattern */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Traffic Pattern
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Standard traffic pattern direction
                </p>
                <Controller
                  name={`airports[${index}].pattern`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Select
                        {...field}
                        size="large"
                        placeholder="Select pattern"
                        status={airportErrors?.[index]?.pattern ? "error" : ""}
                        className="w-full"
                      >
                        {patternOptions.map((option) => (
                          <Option key={option.key} value={option.value}>
                            {option.label}
                          </Option>
                        ))}
                      </Select>
                      {airportErrors?.[index]?.pattern?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].pattern.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Distance from Runway */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Distance from Runway
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  How far accommodations are from the runway
                </p>
                <Controller
                  name={`airports[${index}].distance_from_runway`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Select
                        {...field}
                        size="large"
                        placeholder="Select distance"
                        status={
                          airportErrors?.[index]?.distance_from_runway
                            ? "error"
                            : ""
                        }
                        className="w-full"
                      >
                        {distanceOptions.map((option) => (
                          <Option key={option.key} value={option.value}>
                            {option.label}
                          </Option>
                        ))}
                      </Select>
                      {airportErrors?.[index]?.distance_from_runway
                        ?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].distance_from_runway.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Airnav.com Information */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Airnav.com Information
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Link to airport details on airnav.com
                </p>
                <Controller
                  name={`airports[${index}].air_nav`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input
                        {...field}
                        size="large"
                        placeholder="https://airnav.com/airport/"
                        status={airportErrors?.[index]?.air_nav ? "error" : ""}
                        className="w-full"
                        suffix={
                          <InfoCircleOutlined
                            className="text-blue-500 cursor-help"
                            title="Please find your airport on airnav.com and enter the URL here so people can look it up for additional information."
                          />
                        }
                      />
                      {airportErrors?.[index]?.air_nav?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].air_nav.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Ground Transportation */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ground Transportation
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Available transportation options
                </p>
                <Controller
                  name={`airports[${index}].ground_transportation`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Select
                        {...field}
                        size="large"
                        placeholder="Select transportation"
                        status={
                          airportErrors?.[index]?.ground_transportation
                            ? "error"
                            : ""
                        }
                        className="w-full"
                      >
                        {groundTransportationOptions.map((option) => (
                          <Option key={option.key} value={option.value}>
                            {option.label}
                          </Option>
                        ))}
                      </Select>
                      {airportErrors?.[index]?.ground_transportation
                        ?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {airportErrors[index].ground_transportation.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Ground Transportation Info
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Any additional details about transportation options
              </p>
              <Controller
                name={`airports[${index}].additional_info`}
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      size="large"
                      placeholder="e.g., Taxi, Uber, Shuttle"
                      status={
                        airportErrors?.[index]?.additional_info ? "error" : ""
                      }
                      className="w-full"
                    />
                    {airportErrors?.[index]?.additional_info?.message && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {airportErrors[index].additional_info.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Remove Airport Button */}
            {airPortList?.length > 1 && (
              <div className="flex justify-end">
                <Button
                  type="text"
                  danger
                  size="large"
                  onClick={() => remove(index)}
                  className="hover:bg-red-50"
                >
                  Remove Airport
                </Button>
              </div>
            )}
          </div>
        );
      })}

      <Button
        type="dashed"
        size="large"
        onClick={() => {
          append(airportDefaultValues);
        }}
        className="w-full border-2 border-dashed border-gray-300 hover:border-blue-400 hover:text-blue-600 py-4"
      >
        + Add New Airport
      </Button>
    </div>
  );
};

export default AirportInformationFields;
