"use client";

import { useForm, Controller, useFormContext } from "react-hook-form";
import { Input, Select, Tooltip, Button } from "antd";
import { MdQuestionMark } from "react-icons/md";

const { Option } = Select;

const PricingForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // Access form context


  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 space-y-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">Pricing</h2>

      {/* Instant Booking */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Instant Booking
        </label>
        <Controller
          name="instant_booking"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              size="large"
              placeholder="Select option"
              status={errors?.instant_booking ? "error" : ""}
              className="w-full"
            >
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
          )}
        />
        {errors?.instant_booking && (
          <p className="text-red-500 text-sm mt-2">
            {errors.instant_booking.message?.toString()}
          </p>
        )}
      </div>

      {/* Nightly Price */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nightly Price
        </label>
        <Controller
          name="nightly_price"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              size="large"
              placeholder="Enter nightly price"
              status={errors?.nightly_price ? "error" : ""}
              className="w-full"
            />
          )}
        />
        {errors?.nightly_price && (
          <p className="text-red-500 text-sm mt-2">
            {errors.nightly_price.message?.toString()}
          </p>
        )}
      </div>

       <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
         Nightly Price (if 7+ nights)
        </label>
        <Controller
          name="nightly_price_seven_plus"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              size="large"
              placeholder="Enter nightly price"
              status={errors?.nightly_price_seven_plus ? "error" : ""}
              className="w-full"
            />
          )}
        />
        {errors?.nightly_price_seven_plus && (
          <p className="text-red-500 text-sm mt-2">
            {errors.nightly_price_seven_plus.message?.toString()}
          </p>
        )}
      </div>

      
       <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
         Nightly Price (if 30+ nights)
        </label>
        <Controller
          name="nightly_price_thirty_plus"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              size="large"
              placeholder="Enter nightly price"
              status={errors?.nightly_price_thirty_plus ? "error" : ""}
              className="w-full"
            />
          )}
        />
        {errors?.nightly_price_thirty_plus && (
          <p className="text-red-500 text-sm mt-2">
            {errors.nightly_price_thirty_plus.message?.toString()}
          </p>
        )}
      </div>
      </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {/* Apply Weekend Price */}

              <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Apply Weekend Price
        </label>
        <Controller
          name="apply_weekend_price"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              size="large"
              placeholder="Select option"
              status={errors?.apply_weekend_price ? "error" : ""}
              className="w-full"
            >
           <option disabled value={""}>
                None
              </option>
              <option value={"Friday and Saturday"}>

                Friday and Saturday
              </option>
              <option value={"Saturday and Sunday"}>
                Saturday and Sunday

              </option>
              <option value={"Friday, Saturday and Sunday"}>
                Friday, Saturday and Sunday

              </option>
            </Select>
          )}
        />
        {errors?.apply_weekend_price && (
          <p className="text-red-500 text-sm mt-2">
            {errors.apply_weekend_price.message?.toString()}
          </p>
        )}
      </div>

      {/* Weekend Nightly Price */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Weekend Nightly Price
          <Tooltip title="Enter price for weekends if different from nightly">
            <MdQuestionMark className="inline text-green-500 ml-1 cursor-pointer" />
          </Tooltip>
        </label>
        <Controller
          name="weekend"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              size="large"
              placeholder="Enter weekend price"
              status={errors?.weekend ? "error" : ""}
              className="w-full"
            />
          )}
        />
        {errors?.weekend && (
          <p className="text-red-500 text-sm mt-2">
            {errors.weekend.message?.toString()}
          </p>
        )}
      </div>

      </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">

      {/* Additional Guest */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Guests Allowed
        </label>
        <Controller
          name="additional_guest"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              size="large"
              placeholder="Select option"
              status={errors?.additional_guest ? "error" : ""}
              className="w-full"
            >
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          )}
        />
        {errors?.additional_guest && (
          <p className="text-red-500 text-sm mt-2">
            {errors.additional_guest.message?.toString()}
          </p>
        )}
      </div>

          {/* No of Additional Guests */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              No. of Additional Guests
            </label>
            <Controller
              name="no_of_additional_guest"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  size="large"
                  placeholder="Enter number"
                  status={errors?.no_of_additional_guest ? "error" : ""}
                  className="w-full"
                />
              )}
            />
          </div>

          {/* Price per Additional Guest */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price per Additional Guest
            </label>
            <Controller
              name="guest_price"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  size="large"
                  placeholder="Enter price"
                  status={errors?.guest_price ? "error" : ""}
                  className="w-full"
                />
              )}
            />
          </div>
   

      </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">


      {/* Pets Allowed */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pets Allowed
        </label>
        <Controller
          name="pet_allowed"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              size="large"
              placeholder="Select option"
              status={errors?.pet_allowed ? "error" : ""}
              className="w-full"
            >
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          )}
        />
      </div>

          {/* No of Pets */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              No. of Pets
            </label>
            <Controller
              name="no_of_pets"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  size="large"
                  placeholder="Enter number"
                  status={errors?.no_of_pets ? "error" : ""}
                  className="w-full"
                />
              )}
            />
          </div>

          {/* Price per Pet */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price per Pet
            </label>
            <Controller
              name="price_per_pet"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  size="large"
                  placeholder="Enter price"
                  status={errors?.price_per_pet ? "error" : ""}
                  className="w-full"
                />
              )}
            />
          </div>
     

      </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">


      {/* Cleaning Fee */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cleaning Fee
        </label>
        <Controller
          name="cleaning_fee"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              size="large"
              placeholder="Enter cleaning fee"
              status={errors?.cleaning_fee ? "error" : ""}
              className="w-full"
            />
          )}
        />
      </div>

      {/* Cleaning Fee Daily */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Stay / Daily
        </label>
        <Controller
          name="cleaning_fee_daily"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              size="large"
              placeholder="Enter daily fee"
              status={errors?.cleaning_fee_daily ? "error" : ""}
              className="w-full"
            />
          )}
        />
      </div>

      </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">


      {/* City Fee */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          City Fee{" "}
          <Tooltip title="Combined State, County, and City lodging tax rates.">
            <MdQuestionMark className="inline text-green-500 ml-1 cursor-pointer" />
          </Tooltip>
        </label>
        <Controller
          name="city_fee"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              size="large"
              placeholder="Enter city fee"
              status={errors?.city_fee ? "error" : ""}
              className="w-full"
            />
          )}
        />
      </div>

          {/* <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Instant Booking
        </label>
        <Controller
          name="instant_booking"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              size="large"
              placeholder="Select option"
              status={errors?.instant_booking ? "error" : ""}
              className="w-full"
            >
   <option value={"Per stay"}>Per stay </option>
                    <option value={"Daily"}>Daily</option>
            </Select>
          )}
        />
        {errors?.instant_booking && (
          <p className="text-red-500 text-sm mt-2">
            {errors.instant_booking.message?.toString()}
          </p>
        )}
      </div> */}


      {/* Tax Percentage */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tax %
        </label>
        <Controller
          name="tax_percentage"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              size="large"
              placeholder="Combined State, County, City & Lodging Tax"
              status={errors?.tax_percentage ? "error" : ""}
              className="w-full"
            />
          )}
        />
      </div>

      </div>
    </div>
  );
};

export default PricingForm;