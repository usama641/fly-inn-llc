import React, { memo } from "react";
import {
  Controller,
  useFieldArray,
  useFormContext,
  FieldErrors,
} from "react-hook-form";
import { FaTrashAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";

type Discount = {
  id?: string;
  title: string;
  description: string;
};

export type DiscountsFormValues = {
  discounts: Discount[];
};

const DiscountFields: React.FC = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<DiscountsFormValues>();

  const watchFieldArray = watch("discounts");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "discounts",
  });

  const discountList = fields.map((field, index) => ({
    ...field,
    ...watchFieldArray?.[index],
  }));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="discount">
      <div>
        <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
          <FaTag className="mr-2" />
          Manage Discounts
        </h2>
        <p className="text-gray-600 mb-6 p-0">
          Add and manage promotional discounts for your products or services.
          Each discount requires a title and a brief description.
        </p>

        {discountList?.length === 0 && (
          <p className="text-gray-500 italic mb-4">
            No discounts added yet. Click "Add New Discount" to get started.
          </p>
        )}

        {discountList?.map((discount, index) => (
          <div
            key={discount.id || index}
            className="flex flex-row gap-4 mb-6 items-end"
          >
            {/* Title Field */}
            <div className="flex-2">
              <label
                htmlFor={`discount-${index}-title`}
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Discount Title
              </label>
              <p className="text-xs text-gray-500 mb-2 p-0">
                A short, descriptive title for your discount (e.g., "Summer
                Sale").
              </p>
              <Controller
                name={`discounts.${index}.title`}
                control={control}
                rules={{ required: "Discount title is required." }}
                render={({ field }) => (
                  <div className="relative">
                    <input
                      {...field}
                      id={`discount-${index}-title`}
                      type="text"
                      placeholder="e.g. 10% Off All Items"
                      className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {(errors as FieldErrors<DiscountsFormValues>).discounts?.[
                      index
                    ]?.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {
                          (errors as FieldErrors<DiscountsFormValues>)
                            .discounts?.[index]?.title?.message
                        }
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Description Field */}
            <div className="flex-2">
              <label
                htmlFor={`discount-${index}-description`}
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Description
              </label>
              <p className="text-xs text-gray-500 mb-2 p-0">
                Provide more details about the discount, including terms or
                conditions.
              </p>
              <Controller
                name={`discounts.${index}.description`}
                control={control}
                rules={{ required: "Description is required." }}
                render={({ field }) => (
                  <div className="relative">
                    <input
                      {...field}
                      id={`discount-${index}-description`}
                      placeholder="e.g. Valid for purchases over $50, expires July 31st."
                      className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
                    />
                    {(errors as FieldErrors<DiscountsFormValues>).discounts?.[
                      index
                    ]?.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {
                          (errors as FieldErrors<DiscountsFormValues>)
                            .discounts?.[index]?.description?.message
                        }
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Remove Button */}
            <div className="flex-1">
              <button
                type="button"
                onClick={() => remove(index)}
                className="inline-flex group items-center gap-2 text-red-600 hover:!text-white bg-red-100 hover:bg-red-600 px-3 py-1.5 rounded-md text-sm transition-colors"
              >
                <FaTrashAlt />
                <span className="group-hover:text-white">Remove</span>
              </button>
            </div>
          </div>
        ))}

        {/* Add Button */}
        <button
          type="button"
          className="mt-4 border border-dashed px-6 py-3 text-black text-sm rounded-md hover:opacity-80 transition-opacity flex justify-center w-full items-center gap-2"
          onClick={() =>
            append({
              title: "",
              description: "",
            })
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add New Discount
        </button>
      </div>
    </div>
  );
};

export default memo(DiscountFields);
