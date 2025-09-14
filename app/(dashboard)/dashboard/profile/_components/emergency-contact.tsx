import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "antd";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const EmergencyContact = () => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  // Type assertion for nested contact errors
  const contactErrors = errors.contact as any;
  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="emergency-contact">
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-600 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        Emergency Contact
      </h2>

      <div className="text-gray-600 mb-6">
        Provide contact information for someone we can reach in case of
        emergency
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Name */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Name
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Full name of your emergency contact
          </p>
          <Controller
            name="contact.name"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="Jane Smith"
                  status={contactErrors?.name ? "error" : ""}
                  className="w-full"
                />
                {contactErrors?.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {contactErrors.name.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Relationship */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Relationship
          </label>
          <p className="text-sm text-gray-500 mb-3">
            How this person is related to you (cannot be yourself)
          </p>
          <Controller
            name="contact.relationship"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  placeholder="Spouse"
                  status={contactErrors?.relationship ? "error" : ""}
                  className="w-full"
                />
                {contactErrors?.relationship && (
                  <p className="text-red-500 text-sm mt-2">
                    {contactErrors.relationship.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Controller
            name="contact.email"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  type="email"
                  size="large"
                  placeholder="jane@example.com"
                  status={contactErrors?.email ? "error" : ""}
                  className="w-full"
                />
                {contactErrors?.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {contactErrors.email.message?.toString()}
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
          <Controller
            name="contact.phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={value}
                  onChange={onChange}
                  className={`border ${
                    contactErrors?.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-3 py-2 w-full`}
                />
                {contactErrors?.phone && (
                  <p className="text-red-500 text-sm mt-2">
                    {contactErrors.phone.message?.toString()}
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

export default EmergencyContact;
