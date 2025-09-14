"use client";

import React from "react";
import { Card, Input, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./PhoneInputCustom.css";

const { Title, Text } = Typography;

const EmergencyContactSection: React.FC = () => {
  const {
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <Card className="p-6">
      <Title level={4} className="mb-6">
        Emergency Contact
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contact Name */}
        <Controller
          name="contact_name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="flex flex-col gap-1">
              <Input
                id="contact_name"
                placeholder="Contact Name"
                value={value}
                onChange={onChange}
                status={errors?.contact_name ? "error" : ""}
              />
              {errors?.contact_name?.message && (
                <Text type="danger" className="text-xs">
                  {String(errors?.contact_name?.message)}
                </Text>
              )}
            </div>
          )}
        />

        {/* Relationship */}
        <Controller
          name="contact_relationship"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="flex flex-col gap-1">
              <Input
                id="contact_relationship"
                placeholder="Relationship"
                value={value}
                onChange={onChange}
                status={errors?.contact_relationship ? "error" : ""}
              />
              {errors?.contact_relationship?.message && (
                <Text type="danger" className="text-xs">
                  {String(errors?.contact_relationship?.message)}
                </Text>
              )}
            </div>
          )}
        />

        {/* Email */}
        <Controller
          name="contact_email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="flex flex-col gap-1">
              <Input
                id="contact_email"
                placeholder="Email"
                type="email"
                value={value}
                onChange={onChange}
                status={errors?.contact_email ? "error" : ""}
              />
              {errors?.contact_email?.message && (
                <Text type="danger" className="text-xs">
                  {String(errors?.contact_email?.message)}
                </Text>
              )}
            </div>
          )}
        />

        {/* Phone */}
        <Controller
          name="contact_phone"
          control={control}
          render={() => (
            <div className="flex flex-col gap-1" id="contact_phone">
              <PhoneInput
                placeholder="Enter phone number"
                defaultCountry="US"
                value={getValues("contact_phone")}
                countryCallingCodeEditable={false}
                international
                onChange={(value) => {
                  if (!value || value.length <= 15) {
                    setValue("contact_phone", value, { shouldValidate: true });
                  }
                }}
                className={`form-control phone-input border text-base !border-solid ${
                  errors?.contact_phone?.message ? "!border-[#ff4843]" : ""
                }`}
              />
              {errors?.contact_phone?.message && (
                <Text type="danger" className="text-xs">
                  {String(errors?.contact_phone?.message)}
                </Text>
              )}
            </div>
          )}
        />
      </div>
    </Card>
  );
};

export default EmergencyContactSection;
