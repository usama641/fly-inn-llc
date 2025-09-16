"use client";
import { useState } from "react";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useApiGet } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import useAxiosAuth from "@/hooks/use-axios-auth";
import { useRouter } from "next/navigation";
export default function AddFeatureForm() {
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
  const [subFeatures, setSubFeatures] = useState<Array<any>>([]);
  const [featureTitle, setFeatureTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { message: appMessage } = useApp();
  const axiosAuth = useAxiosAuth();
  const router = useRouter();

  const handleAddSubFeature = () => {
    setSubFeatures([...subFeatures, ""]);
  };

  const handleRemoveSubFeature = async (index: number) => {
    const newFeatures = subFeatures.filter((_, i) => i !== index);
    setSubFeatures(newFeatures);
    await axiosAuth
      .delete(`/stay/feature/${subFeatures[index].id}`)
      .catch((err) => {
        console.log("Error updating main feature title:", err);
        appMessage.error(
          err?.response?.data?.message || "Failed to update main feature title"
        );
      });
  };

  const handleChange = (index: number, value: string) => {
    const newFeatures = [...subFeatures];
    newFeatures[index] = value;
    setSubFeatures(newFeatures);
  };

  const handleSubmit = async () => {
    if (!featureTitle || featureTitle.length < 3) {
      appMessage.error(
        "Feature title is required & length must be at least 3 characters"
      );
      return;
    }
    if (subFeatures.filter((f) => f.length < 3).length > 0) {
      appMessage.error("Sub feature length should be at least 3 characters");
      return;
    }

    try {
      setLoading(true);

      const mainFeatureResponse = await axiosAuth.post(`/stay/feature/`, {
        name: featureTitle,
      });
      const mainFeature = mainFeatureResponse.data.data.doc;

      const promises: Array<Promise<any>> = [];
      subFeatures.forEach((subFeature: any) => {
        promises.push(
          axiosAuth
            .post(`/stay/feature/`, { name: subFeature, parent: mainFeature.id })
            .catch((err) => {
              console.log("Error updating main feature title:", err);
              appMessage.error(
                err?.response?.data?.message ||
                  "Failed to update main feature title"
              );
            })
        );
      });

      await Promise.all(promises);

      appMessage.success("Feature and Sub-features updated successfully!");
      router.push(`/dashboard/features/`);
    } catch (err: any) {
      console.log("Error updating features:", err);
      appMessage.error(
        err?.response?.data?.message || "Failed to update features"
      );
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Feature Title"
        value={featureTitle}
        onChange={(e) => setFeatureTitle(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4 focus:outline-none "
      />

      {subFeatures.map((name, index) => (
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
          disabled={loading} // 👈 disable while loading
          className={`px-6 py-2 rounded-lg shadow-md border border-red-400 ${
            loading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </>
  );
};
