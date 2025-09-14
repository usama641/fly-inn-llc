import { Input, InputNumber, Button } from "antd";
import React, { memo } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { bedRoomsDefaultValues } from "../page";

const BedroomFields = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext(); // Access form context

  const watchFieldArray = watch("bedrooms");

  const { fields, append, remove } = useFieldArray({
    control, // Pass the control object from `useForm`
    name: "bedrooms", // Name of the field array
  });

  // Type assertion for bedrooms errors
  const bedroomErrors = (errors.bedrooms as any) || [];

  // Combine field metadata and watched values for each dependant
  const bedroomsList = fields.map((field, index) => {
    return {
      ...field, // Include field metadata from `useFieldArray`
      ...watchFieldArray?.[index], // Include watched values from `watch`
    };
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="bedroom-fields">
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-primary-500 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
        Bedrooms
      </h2>

      <div className="text-gray-600 mb-6">
        Configure individual bedroom details including capacity, bed types, and
        guest accommodations
      </div>

      {bedroomsList?.map((bedroom, index) => {
        return (
          <div
            key={bedroom.id}
            className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50"
            id="bedrooms"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bedroom Name */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedroom Name
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Give this bedroom a descriptive name
                </p>
                <Controller
                  name={`bedrooms[${index}].name`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input
                        {...field}
                        size="large"
                        placeholder="e.g. Master Bedroom"
                        status={bedroomErrors?.[index]?.name ? "error" : ""}
                        className="w-full"
                      />
                      {bedroomErrors?.[index]?.name?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {bedroomErrors[index].name.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Number of Guests */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  How many guests can this bedroom accommodate
                </p>
                <Controller
                  name={`bedrooms[${index}].no_of_guest`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <InputNumber
                        {...field}
                        size="large"
                        placeholder="e.g. 2"
                        min={0}
                        status={
                          bedroomErrors?.[index]?.no_of_guest ? "error" : ""
                        }
                        className="w-full"
                      />
                      {bedroomErrors?.[index]?.no_of_guest?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {bedroomErrors[index].no_of_guest.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Number of Beds */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Beds
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Total number of beds in this bedroom
                </p>
                <Controller
                  name={`bedrooms[${index}].no_of_bed`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <InputNumber
                        {...field}
                        size="large"
                        placeholder="e.g. 1"
                        min={0}
                        status={
                          bedroomErrors?.[index]?.no_of_bed ? "error" : ""
                        }
                        className="w-full"
                      />
                      {bedroomErrors?.[index]?.no_of_bed?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {bedroomErrors[index].no_of_bed.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Bed Type */}
              <div className="flex flex-col justify-between">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bed Type
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Type of bed(s) in this bedroom
                </p>
                <Controller
                  name={`bedrooms[${index}].bed_type`}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input
                        {...field}
                        size="large"
                        placeholder="e.g. King, Queen, Twin"
                        status={bedroomErrors?.[index]?.bed_type ? "error" : ""}
                        className="w-full"
                      />
                      {bedroomErrors?.[index]?.bed_type?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          <i className="fa fa-exclamation-circle mr-1"></i>
                          {bedroomErrors[index].bed_type.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button
                type="text"
                danger
                size="large"
                onClick={() => remove(index)}
                className="hover:bg-red-50"
              >
                Remove Bedroom
              </Button>
            </div>
          </div>
        );
      })}

      <Button
        type="dashed"
        size="large"
        onClick={() => {
          append(bedRoomsDefaultValues);
        }}
        className="w-full border-2 border-dashed border-gray-300  py-4"
      >
        + Add New Bedroom
      </Button>
    </div>
  );
};

export default memo(BedroomFields);
