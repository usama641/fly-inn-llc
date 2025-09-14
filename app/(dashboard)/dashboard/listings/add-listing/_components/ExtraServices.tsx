/* eslint-disable react/jsx-props-no-spreading */
import { Input, Select, InputNumber, Button } from "antd";
import React, { memo } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

const { Option } = Select;

const ExtraServices = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext(); // Access form context

  const watchFieldArray = watch("extra_service");
  const extraServices = watch("extra_services");

  const { fields, append, remove } = useFieldArray({
    control, // Pass the control object from `useForm`
    name: "extra_service", // Name of the field array
  });

  // Type assertion for extra_service errors
  const extraServiceErrors = (errors.extra_service as any) || [];

  // Combine field metadata and watched values for each dependant
  const extraServiceList = fields.map((field, index) => {
    return {
      ...field, // Include field metadata from `useFieldArray`
      ...watchFieldArray?.[index], // Include watched values from `watch`
    };
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="services">
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-600 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Extra Services
      </h2>

      <div className="text-gray-600 mb-6">
        Offer additional services to enhance your guests' experience
      </div>

      {/* Extra Services Toggle */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Extra Services Available
        </label>
        <p className="text-sm text-gray-500 mb-3">
          Do you have any extra services you would like to offer?
        </p>
        <Controller
          name="extra_services"
          control={control}
          render={({ field }) => (
            <div>
              <Select
                {...field}
                size="large"
                placeholder="Select option"
                status={errors?.extra_services ? "error" : ""}
                className="w-full"
              >
                <Option value={1}>Yes</Option>
                <Option value={0}>No</Option>
              </Select>
              {errors?.extra_services && (
                <p className="text-red-500 text-sm mt-2">
                  <i className="fa fa-exclamation-circle mr-1"></i>
                  {errors.extra_services.message?.toString()}
                </p>
              )}
            </div>
          )}
        />
      </div>

      {/* Extra Services List */}
      {extraServices === 1 &&
        extraServiceList?.map((service, index) => {
          return (
            <div
              key={`${service?.id}-${index}`}
              className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50"
              id="extra_service"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Service Name */}
                <div className="flex flex-col justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Name
                  </label>
                  <p className="text-sm text-gray-500 mb-3">
                    Name of the service you offer
                  </p>
                  <Controller
                    name={`extra_service[${index}].name`}
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Input
                          {...field}
                          size="large"
                          placeholder="e.g. Catering"
                          status={
                            extraServiceErrors?.[index]?.name ? "error" : ""
                          }
                          className="w-full"
                        />
                        {extraServiceErrors?.[index]?.name?.message && (
                          <p className="text-red-500 text-sm mt-2">
                            <i className="fa fa-exclamation-circle mr-1"></i>
                            {extraServiceErrors[index].name.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>

                {/* Service Price */}
                <div className="flex flex-col justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price
                  </label>
                  <p className="text-sm text-gray-500 mb-3">
                    Cost of the service
                  </p>
                  <Controller
                    name={`extra_service[${index}].price`}
                    control={control}
                    render={({ field }) => (
                      <div>
                        <InputNumber
                          {...field}
                          size="large"
                          placeholder="e.g. 50"
                          min={0}
                          step={0.01}
                          status={
                            extraServiceErrors?.[index]?.price ? "error" : ""
                          }
                          className="w-full"
                          formatter={(value) =>
                            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          }
                          parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
                        />
                        {extraServiceErrors?.[index]?.price?.message && (
                          <p className="text-red-500 text-sm mt-2">
                            <i className="fa fa-exclamation-circle mr-1"></i>
                            {extraServiceErrors[index].price.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>

                {/* Service Type */}
                <div className="flex flex-col justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pricing Type
                  </label>
                  <p className="text-sm text-gray-500 mb-3">
                    How the service is charged
                  </p>
                  <Controller
                    name={`extra_service[${index}].type`}
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Select
                          {...field}
                          size="large"
                          placeholder="Select pricing type"
                          status={
                            extraServiceErrors?.[index]?.type ? "error" : ""
                          }
                          className="w-full"
                        >
                          <Option value="Single Fee">Single Fee</Option>
                          <Option value="Per Night">Per Night</Option>
                          <Option value="Per Guest">Per Guest</Option>
                          <Option value="Per Night Per Guest">
                            Per Night Per Guest
                          </Option>
                        </Select>
                        {extraServiceErrors?.[index]?.type?.message && (
                          <p className="text-red-500 text-sm mt-2">
                            <i className="fa fa-exclamation-circle mr-1"></i>
                            {extraServiceErrors[index].type.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>

                {/* Quantity Available */}
                <div className="flex flex-col justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity Available
                  </label>
                  <p className="text-sm text-gray-500 mb-3">
                    How many of this service can be provided
                  </p>
                  <Controller
                    name={`extra_service[${index}].quantity`}
                    control={control}
                    render={({ field }) => (
                      <div>
                        <InputNumber
                          {...field}
                          size="large"
                          placeholder="e.g. 1"
                          min={0}
                          status={
                            extraServiceErrors?.[index]?.quantity ? "error" : ""
                          }
                          className="w-full"
                        />
                        {extraServiceErrors?.[index]?.quantity?.message && (
                          <p className="text-red-500 text-sm mt-2">
                            <i className="fa fa-exclamation-circle mr-1"></i>
                            {extraServiceErrors[index].quantity.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Remove Service Button */}
              {extraServiceList?.length > 1 && (
                <div className="flex justify-end mt-6">
                  <Button
                    type="text"
                    danger
                    size="large"
                    onClick={() => remove(index)}
                    className="hover:bg-red-50"
                  >
                    Remove Service
                  </Button>
                </div>
              )}
            </div>
          );
        })}

      {/* Add New Service Button */}
      {extraServices === 1 && (
        <Button
          type="dashed"
          size="large"
          onClick={() => {
            append({
              name: "",
              price: "",
              type: "",
              quantity: "",
            });
          }}
          className="w-full border-2 border-dashed border-gray-300  py-4"
        >
          + Add New Service
        </Button>
      )}
    </div>
  );
};

export default memo(ExtraServices);
