import { Select } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import SectionField from "./section";
import { distanceOptions } from "@/constants/stays";

const AirportInformation = () => {
  const {
    control,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext(); // Access form context
  const { Option } = Select; // Extract Option from Select

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="airport-information">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <FaPlaneDeparture className="text-amber-500 mr-2" size={25} />
        Airport Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Distance from Runway */}
        <div>
          <SectionField
            title="Distance from Runway"
            desc="How far is your business from the nearest runway?"
            icon={<FaRoad size={16} />}
          />

          <div className="relative">
            <Controller
              name="distance_from_runway"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  size="large"
                  placeholder="Select a lodging type"
                  className="w-full h-[48px] focus:outline-none"
                  onChange={(val) => field.onChange(val)}
                  value={field.value ?? undefined}
                >
                  {distanceOptions.map((option) => (
                    <Option key={option.key} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              )}
            />

            {errors.distance_from_runway && (
              <p className="text-red-500 text-sm mt-2">
                <i className="fa fa-exclamation-circle mr-1"></i>
                {errors.distance_from_runway.message}
              </p>
            )}
          </div>
        </div>

        {/* Airport Identifier */}
        <div>
          <SectionField
            title="Airport Identifier"
            desc="4-letter airport code (e.g. KJFK, KLAX)"
            icon={<FaMapMarkerAlt size={16} />}
          />

          <Controller
            name="airport"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <input
                  {...field}
                  type="text"
                  placeholder="e.g. KJFK"
                  maxLength={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 uppercase"
                />
                {errors.airport && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.airport.message}
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

export default AirportInformation;
