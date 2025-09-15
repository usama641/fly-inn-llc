"use client";
import { useState } from "react";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useApiGet } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import useAxiosAuth from "@/hooks/use-axios-auth";
import { useRouter } from "next/navigation";
export default function AddFeatureForm() {
  const { message: appMessage } = useApp();
  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-6 text-black">
          Feature Form
        </h2>
        <SubFeatures />
      </div>
    </div>
  );
}
const SubFeatures = () => {
  const [subFeatures, setSubFeatures] = useState<Array<Object>>([])
  const [featureTitle, setFeatureTitle] = useState("");
  const { message: appMessage } = useApp();
  const axiosAuth = useAxiosAuth();
  const router = useRouter()
  const handleAddSubFeature = () => {
    setSubFeatures([...subFeatures, ""]);
  };
  const handleRemoveSubFeature = async (index: number) => {
    const newFeatures = subFeatures.filter((_, i) => i !== index);
    setSubFeatures(newFeatures);
    await axiosAuth.delete(`/stay/feature/${subFeatures[index].id}`).catch((err) => {
      console.log("Error updating main feature title:", err);
      appMessage.error(err?.response?.data?.message || "Failed to update main feature title");
    })
  };
  const handleChange = (index: number, value: string) => {
    const newFeatures = [...subFeatures];
    newFeatures[index] = value;
    setSubFeatures(newFeatures);
  };
  const handleSubmit = async () => {
    if (!featureTitle || featureTitle.length < 3) {
      appMessage.error("Feature title is required & length must be at least 3 characters");
    }
    if (subFeatures.filter(f => f.length < 3).length > 0) {c
      appMessage.error("Sub feature length should be at least 3 characters");
      return;
    }
    const mainFeatureResponse = await axiosAuth.post(`/stay/feature/`, { name: featureTitle })
    const mainFeature = mainFeatureResponse.data.data.doc
    const promises: Array<Promise<any>> = []
    subFeatures.forEach(async (subFeature: any, index) => {
      // New Sub-feature to be created
      promises.push(axiosAuth.post(`/stay/feature/`, { name: subFeature, parent: mainFeature.id }).catch((err) => {
        console.log("Error updating main feature title:", err);
        appMessage.error(err?.response?.data?.message || "Failed to update main feature title");
      }))
    })
    await Promise.all(promises).then(() => {
      appMessage.success("Feature and Sub-features updated successfully!");
      router.push(`/dashboard/features/`)
    }).catch((err) => {
      console.log("Error updating features:", err);
      appMessage.error(err?.response?.data?.message || "Failed to update features");
    })
  }
  return <> <input
    type="text"
    placeholder="Feature Title"
    value={featureTitle}
    onChange={(e) => setFeatureTitle(e.target.value)}
    className="w-full p-3 border rounded-lg mb-4 focus:outline-none "
  />
    {
      subFeatures.map(({ name }, index) => (
        <div key={index} className="flex items-center mb-3">
          <input
            type="text"
            placeholder={`Sub-feature ${index + 1}`}
            value={name}
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
      ))
    }
    < button
      onClick={handleAddSubFeature}
      className="w-full flex items-center justify-center p-3 border border-red-400 rounded-lg text-red-600 hover:bg-red-50 mb-4"
    >
      <PlusCircleOutlined className="mr-2" /> Add New Sub - Feature
    </button >
    <div className="text-right">
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 border border-red-400"
      >
        Save
      </button>
    </div>
  </>
}