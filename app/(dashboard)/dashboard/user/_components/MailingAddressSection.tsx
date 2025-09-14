"use client";

import React, { forwardRef } from "react";
import { Card, Input, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import GoogleSearch from "@/components/shared/google-search";
import useGoogleMap from "@/hooks/use-google-hook";


const { Title, Text } = Typography;

const MailingAddressSection = forwardRef<HTMLDivElement>((_props, ref) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { isLoaded } = useGoogleMap();

  return (
    <Card className="p-6" ref={ref}>
      <Title level={4} className="mb-6">
        Your Mailing Address
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Google Autocomplete Address */}
        <div className="col-span-2">
          <Controller
            name="address"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="flex flex-col gap-1 relative">
                <GoogleSearch
                  isLoaded={isLoaded}
                  onChange={(address) => {
                    onChange(address?.address ?? address);
                    if (address?.address) {
                      setValue("address", address.address);
                      setValue("city", address.city, { shouldValidate: true });
                      setValue("state", address.state, { shouldValidate: true });
                      setValue("country", address.country, { shouldValidate: true });
                      setValue("zip_code", address.zipcode, { shouldValidate: true });
                      setValue("latitude", address?.latitude, { shouldValidate: true });
                      setValue("longitude", address?.longitude, { shouldValidate: true });
                    }
                  }}
                  value={value}
                  error={!!errors?.address?.message}
                  helperText={errors?.address?.message as string}
                />
                {errors?.address?.message && (
                  <Text type="danger" className="text-xs mt-1">
                    {String(errors?.address?.message)}
                  </Text>
                )}
              </div>
            )}
          />
        </div>

        {/* Other Fields */}
        {[
          { name: "apt_suit", label: "Apartment/Suite (Optional)" },
          { name: "city", label: "City" },
          { name: "state", label: "State" },
          { name: "zip_code", label: "ZIP / Postal Code" },
          { name: "neighbourhood", label: "Neighborhood (Optional)" },
          { name: "country", label: "Country" },
        ].map((field) => (
          <div key={field.name} className="col-span-1">
            <Controller
              name={field.name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    id={field.name}
                    placeholder={field.label}
                    value={value}
                    onChange={onChange}
                    status={errors?.[field.name] ? "error" : ""}
                  />
                  {errors?.[field.name]?.message && (
                    <Text type="danger" className="text-xs mt-1">
                      {String(errors?.[field.name]?.message)}
                    </Text>
                  )}
                </>
              )}
            />
          </div>
        ))}
      </div>
    </Card>
  );
});

MailingAddressSection.displayName = "MailingAddressSection";
export default MailingAddressSection;