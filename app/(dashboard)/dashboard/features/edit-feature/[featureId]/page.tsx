"use client";
import { useEffect, useState } from "react";
import { PlusCircleOutlined, MinusCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import { useParams, useSearchParams } from "next/navigation";
import { useApiGet } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import useAxiosAuth from "@/hooks/use-axios-auth";

export default function EditFeatureForm() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { message: appMessage } = useApp();

  const { data: feature, isLoading, isError } = useApiGet({
    endpoint: `stay/feature?parent=${params.featureId}&populate=[{"path": "parent","select":"name"}]&fields=name,parent`,
    queryKey: ["stay/feature", params.id],
    config: {
      select: (res) => res?.data?.docs,
    },
  });

useEffect(() => {
  if (isError) {
    appMessage.error("Error fetching feature features");
  }
}, [isError, appMessage]);

if (isLoading && !isError) return <p>Loading...</p>;
  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-6 text-black">
          Feature Form
        </h2>
        <SubFeatures
          apiSubFeatures={feature}
          mainFeatureId={params.featureId}
          apiFeatureTitle={searchParams.get("name")}
        />
      </div>
    </div>
  );
}

const SubFeatures = ({ apiSubFeatures, mainFeatureId, apiFeatureTitle }: any) => {
  const [subFeatures, setSubFeatures] = useState<Array<any>>(apiSubFeatures);
  const [featureTitle, setFeatureTitle] = useState(apiFeatureTitle || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { message: appMessage } = useApp();
  const axiosAuth = useAxiosAuth();

  const handleAddSubFeature = () => {
    setSubFeatures([...subFeatures, ""]);
  };

  const handleRemoveSubFeature = async (index: number) => {
    const newFeatures = subFeatures.filter((_, i) => i !== index);
    setSubFeatures(newFeatures);
    await axiosAuth.delete(`/stay/feature/${subFeatures[index].id}`).catch((err) => {
      console.log("Error deleting sub-feature:", err);
      appMessage.error(err?.response?.data?.message || "Failed to delete sub-feature");
    });
  };

  const handleChange = (index: number, value: string) => {
    const newFeatures = [...subFeatures];
    if (typeof newFeatures[index] === "string") {
      newFeatures[index] = value;
    } else {
      newFeatures[index] = { ...newFeatures[index], name: value };
    }
    setSubFeatures(newFeatures);
  };

  const handleSubmit = async () => {
    if (!featureTitle || featureTitle.length < 3) {
      appMessage.error("Feature title is required & length must be at least 3 characters");
      return;
    }

    if (subFeatures.filter((f: any) => f?.length < 3 || f?.name?.length < 3).length > 0) {
      appMessage.error("Sub feature length should be at least 3 characters");
      return;
    }

    setIsSubmitting(true);

    try {
      // update main feature if changed
      if (featureTitle !== apiSubFeatures[0]?.parent?.name) {
        await axiosAuth.patch(`/stay/feature/${mainFeatureId}`, { name: featureTitle });
      }

      const promises: Array<Promise<any>> = [];

      subFeatures.forEach((subFeature: any, index) => {
        if (typeof subFeature === "string") {
          // create new sub-feature
          promises.push(
            axiosAuth.post(`/stay/feature/`, { name: subFeature, parent: mainFeatureId }).catch((err) => {
              console.log("Error creating sub-feature:", err);
              appMessage.error(err?.response?.data?.message || "Failed to create sub-feature");
            })
          );
        } else if (subFeature?.name !== apiSubFeatures[index]?.name) {
          // update existing sub-feature
          promises.push(
            axiosAuth.patch(`/stay/feature/${subFeature.id}`, { name: subFeature.name }).catch((err) => {
              console.log("Error updating sub-feature:", err);
              appMessage.error(err?.response?.data?.message || "Failed to update sub-feature");
            })
          );
        }
      });

      await Promise.all(promises);
      appMessage.success("Feature and Sub-features updated successfully!");
    } catch (err: any) {
      console.log("Error updating features:", err);
      appMessage.error(err?.response?.data?.message || "Failed to update features");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Feature Title"
        value={featureTitle}
        onChange={(e) => setFeatureTitle(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4 focus:outline-none"
      />

      {subFeatures?.map((sf: any, index) => (
        <div key={index} className="flex items-center mb-3">
          <input
            type="text"
            placeholder={`Sub-feature ${index + 1}`}
            value={typeof sf === "string" ? sf : sf?.name}
            onChange={(e) => handleChange(index, e.target.value)}
            className="flex-1 p-3 border rounded-lg focus:outline-none"
          />
          <button
            onClick={() => handleRemoveSubFeature(index)}
            type="button"
            className="ml-3 px-3 py-2 rounded-full bg-red-100 text-red-500 border-red-500 hover:bg-red-200"
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
          disabled={isSubmitting}
          className={`px-6 py-2 rounded-lg shadow-md border border-red-400 flex items-center justify-center ${
            isSubmitting
              ? "bg-red-400 cursor-not-allowed opacity-70"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
        >
          {isSubmitting ? (
            <>
              <LoadingOutlined className="animate-spin mr-2" /> Saving...
            </>
          ) : (
            "Save"
          )}
        </button>
      </div>
    </>
  );
};
