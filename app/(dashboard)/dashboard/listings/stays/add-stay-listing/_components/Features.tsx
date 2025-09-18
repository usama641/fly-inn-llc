/* eslint-disable react/jsx-props-no-spreading */
import { useApiGet } from "@/http-service";
import React, { memo } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Select, Checkbox, Button, Row, Col } from "antd";
import type { GetProp } from "antd";

const { Option } = Select;

const Features = () => {
  const { data: featuresData, isLoading } = useApiGet({
    endpoint: `/stay/feature-sub_features`,
    queryKey: ["stay/feature-sub_features"],
  });

  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const watchFieldArray = watch("features");
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "features",
  });

  const featuresErrors = (errors.features as any) || [];

  const featuresList = fields.map((field, index) => ({
    ...field,
    ...watchFieldArray?.[index],
  }));

  const handleFeatureChange = (index: number, value: string) => {
    const selectedFeature = featuresData?.features?.find(
      (item: any) => item.id === value
    );
    const subFeatures = selectedFeature?.sub_features || [];

    update(index, {
      ...featuresList[index],
      id: value,
      sub_features: [],
      sub_feature_options: subFeatures,
    });
  };

  if (isLoading) return <p>Loading features...</p>;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="features">
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-600 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Features
      </h2>

      <div className="text-gray-600 mb-6">
        Select features and sub-features that your property offers to guests
      </div>

      {featuresList?.map((feature, index) => (
        <div
          key={feature.id || index}
          className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50"
        >
          <div className="grid grid-cols-1 gap-6">
            {/* Feature Dropdown */}
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Feature
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Choose a main feature category
              </p>
              <Controller
                name={`features[${index}].id`}
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      size="large"
                      placeholder="Select a feature"
                      status={featuresErrors?.[index]?.id ? "error" : ""}
                      className="w-full"
                      onChange={(newValue) => {
                        field.onChange(newValue);
                        handleFeatureChange(index, newValue);
                      }}
                    >
                      {featuresData?.features?.map((option: any) => (
                        <Option key={option.id} value={option.id}>
                          {option.name}
                        </Option>
                      ))}
                    </Select>
                    {featuresErrors?.[index]?.id?.message && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {featuresErrors[index].id.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>

            {/* Sub Features Checkboxes */}
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sub-Features
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Select specific sub-features within this category
              </p>
              <Controller
                name={`features[${index}].sub_features`}
                control={control}
                render={({ field }) => (
                  <>
                    <CheckboxGroup
                      options={feature.sub_feature_options || []}
                      value={field.value || []}
                      onChange={field.onChange}
                    />
                    {featuresErrors?.[index]?.sub_features?.message && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {featuresErrors[index].sub_features.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          {/* Remove Feature Button */}
          {featuresList?.length > 1 && (
            <div className="flex justify-end mt-6">
              <Button
                type="text"
                danger
                size="large"
                onClick={() => remove(index)}
                className="hover:bg-red-50"
              >
                Remove Feature
              </Button>
            </div>
          )}
        </div>
      ))}

      {/* Add More Feature Button */}
      <Button
        type="dashed"
        size="large"
        onClick={() =>
          append({
            id: "",
            sub_features: [],
            sub_feature_options: [],
          })
        }
        className="w-full border-2 border-dashed border-gray-300 py-4"
      >
        + Add More Feature
      </Button>
    </div>
  );
};

export default memo(Features);

// ✅ Ant Design Checkbox.Group component
const CheckboxGroup: React.FC<{
  options: Array<{ id: string; name: string }>;
  value: string[];
  onChange: (checkedValues: string[]) => void;
}> = ({ options, value = [], onChange }) => {
  const handleChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    onChange(checkedValues as string[]);
  };

  return (
    <Checkbox.Group style={{ width: "100%" }} onChange={handleChange} value={value}>
      <Row gutter={[16, 16]}>
        {options.map((option) => (
          <Col span={8} key={option.id}>
            <Checkbox value={option.id}>{option.name}</Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
};
