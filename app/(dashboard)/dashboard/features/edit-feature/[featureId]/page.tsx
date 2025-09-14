"use client";

import { useState } from "react";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

export default function EditFeatureForm() {
  const [featureTitle, setFeatureTitle] = useState("");
  const [subFeatures, setSubFeatures] = useState<string[]>([""]);

  const handleAddSubFeature = () => {
    setSubFeatures([...subFeatures, ""]);
  };

  const handleRemoveSubFeature = (index: number) => {
    const newFeatures = subFeatures.filter((_, i) => i !== index);
    setSubFeatures(newFeatures);
  };

  const handleChange = (index: number, value: string) => {
    const newFeatures = [...subFeatures];
    newFeatures[index] = value;
    setSubFeatures(newFeatures);
  };

  const handleSubmit = () => {
    const payload = {
      featureTitle,
      subFeatures,
    };
    console.log("Form Data:", payload);
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-6 text-black">
          Feature Form
        </h2>

        <input
          type="text"
          placeholder="Feature Title"
          value={featureTitle}
          onChange={(e) => setFeatureTitle(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none "
        />

        {subFeatures.map((sub, index) => (
          <div key={index} className="flex items-center mb-3">
            <input
              type="text"
              placeholder={`Sub-feature ${index + 1}`}
              value={sub}
              onChange={(e) => handleChange(index, e.target.value)}
              className="flex-1 p-3 border rounded-lg focus:outline-none "
            />
            <button
              onClick={() => handleRemoveSubFeature(index)}
              type="button"
              className="ml-3 px-3 py-2  rounded-full bg-red-100 text-red-500 border-red-500 hover:bg-red-200"
            >
              <MinusCircleOutlined size={8} />
            </button>
          </div>
        ))}

        <button
          onClick={handleAddSubFeature}
          className="w-full flex items-center justify-center p-3 border border-red-400 rounded-lg text-red-600 hover:bg-red-50 mb-4"
        >
          <PlusCircleOutlined className="mr-2" /> Add New Sub-Feature
        </button>

        <div className="text-right">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 border border-red-400"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
