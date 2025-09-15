"use client";
import { useState } from "react";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useParams, useSearchParams } from "next/navigation";
import { useApiGet } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import useAxiosAuth from "@/hooks/use-axios-auth";
export default function EditFeatureForm() {
  const params = useParams()
  const searchParams = useSearchParams()
  const { message: appMessage } = useApp();
  const { data: feature, isLoading, isError } = useApiGet({
    endpoint: `stay/feature?parent=${params.featureId}&populate=[{"path": "parent","select":"name"}]&fields=name,parent`,
    queryKey: ["stay/feature", params.id],
    config: {
      select: (res) => res?.data?.docs,
    },
  });
  if (isLoading && !isError) return <p>Loading...</p>
  if (isError) appMessage.error("Error fetching feature features")
  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-6 text-black">
          Feature Form
        </h2>
        <SubFeatures apiSubFeatures={feature} mainFeatureId={params.featureId} apiFeatureTitle={searchParams.get("name")} />
      </div>
    </div>
  );
}
const SubFeatures = ({ apiSubFeatures, mainFeatureId, apiFeatureTitle }: any) => {
  const [subFeatures, setSubFeatures] = useState<Array<Object>>(apiSubFeatures)
  const [featureTitle, setFeatureTitle] = useState(apiFeatureTitle || "");
  const { message: appMessage } = useApp();
  const axiosAuth = useAxiosAuth();
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
      return;
    }
       if (subFeatures.filter(f => f.length < 3).length > 0) {
      appMessage.error("Sub feature length should be at least 3 characters");
      return;
    }
    // Checking if featureTitle (Main Feature title) is changed
    if (featureTitle !== apiSubFeatures[0]?.parent?.name) {
      // Update the main feature title
      console.log("Main Feature Title changed to:", featureTitle);
      await axiosAuth.patch(`/stay/feature/${mainFeatureId}`, { name: featureTitle }).catch((err) => {
        console.log("Error updating main feature title:", err);
        appMessage.error(err?.response?.data?.message || "Failed to update main feature title");
      })
    }
    const promises: Array<Promise<any>> = []
    subFeatures.forEach(async (subFeature: any, index) => {
      if (typeof subFeature === "string") {
        // New Sub-feature to be created
        console.log("Creating new Sub-feature:", subFeature);
        promises.push(axiosAuth.post(`/stay/feature/`, { name: subFeature, parent: mainFeatureId }).catch((err) => {
          console.log("Error updating main feature title:", err);
          appMessage.error(err?.response?.data?.message || "Failed to update main feature title");
        }))
        // promises.push(createSubFeatureAPI({ name: subFeature, parent: apiSubFeatures[0]?.parent?._id }))
      }
      if (typeof subFeature === "object" && subFeature?.name !== apiSubFeatures[index]?.name) {
        // Existing Sub-feature to be updated
        console.log("Updating Sub-feature:", subFeature);
        promises.push(axiosAuth.patch(`/stay/feature/${subFeature.id}`, { name: subFeature.name }).catch((err) => {
          console.log("Error updating main feature title:", err);
          appMessage.error(err?.response?.data?.message || "Failed to update main feature title");
        }))
      }
    })
    await Promise.all(promises).then(() => {
      appMessage.success("Feature and Sub-features updated successfully!");
    }).catch((err) => {
      console.log("Error updating features:", err);
      appMessage.error(err?.response?.data?.message || "Failed to update features");
    })
  };
  return <>
    <input
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