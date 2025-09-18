"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useApiGet, useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import { Button } from "antd";

import {
  addBusinessDefaultValues,
  addBusinessValidationSchema,
} from "@/constants/business";

import Discount from "../_components/Discount";
import AirportInformation from "../_components/AirportInformation";
import ContactInfo from "../_components/ContactInfo";
import BusinessDetails from "../_components/BusinessDetails";
import BusinessLocation from "../_components/ImageComponents/BusinessLocation";

const BusinessForm = () => {
  const router = useRouter();
  const { message } = useApp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { businessId } = useParams();

  const methods = useForm({
    mode: "onChange",
    defaultValues: addBusinessDefaultValues,
    resolver: yupResolver(addBusinessValidationSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  // Fetch business details
  const { data: businessDetails, isPending: businessDetailsLoading } = useApiGet({
    endpoint: `/business/${businessId}`,
    queryKey: ["business", businessId],
    config: {
      select: (res) => res?.data?.doc || null,
    },
  });

  // Reset form when data is loaded
  useEffect(() => {
    if (businessDetails) {
      reset({
        name: businessDetails.name || "",
        country: businessDetails.address?.country || "",
        state: businessDetails.address?.state || "",
        city: businessDetails.address?.city || "",
        zipcode: businessDetails.address?.zipcode || "",
        area: businessDetails.address?.area || "",
        address: businessDetails.address?.address || "",
        apt_suite: businessDetails.address?.apartment || "",
        longitude: businessDetails.address?.location?.coordinates?.[0] || "",
        latitude: businessDetails.address?.location?.coordinates?.[1] || "",
        photo_images: businessDetails.images || [],
        logo_image: businessDetails.logo || "",
        type: businessDetails.business_type || [],
        business_details: businessDetails.description || "",
        tag_line: businessDetails.tagline || "",
        phone: businessDetails.phone || "",
        airport: businessDetails.airport || "",
        distance_from_runway: businessDetails.distance_from_runway || "",
        url: businessDetails.url || "",
      });
    }
  }, [businessDetails, reset]);

  // Mutation for update (PATCH)
  const { mutate: updateBusiness, isPending: updatingBusiness } = useApiMutation({
    endpoint: `/business/${businessId}`,
    method: "patch",
    axiosConfig: {
      headers: {
        "Content-Type": "application/json",
      },
    },
    config: {
      onSuccess: () => {
        message.success("Business updated successfully!");
        router.push("/dashboard/business");
      },
      onError: (err) => {
        message.error(err?.response?.data?.message || "Failed to update business");
      },
    },
  });

  // Submit handler
  const onSubmit = useCallback(
    async (formValues: any) => {
   const businessPayload = {
  name: formValues.name,
  address: {
    country: formValues.country || null,
    state: formValues.state || null,
    city: formValues.city || null,
    zipcode: formValues.zipcode || null,
    area: formValues.area || null,        // prevent empty string
    address: formValues.address || null,
    apartment: formValues.apt_suite || null, // prevent empty string
    location: {
      type: "Point",
      coordinates: [
        Number(formValues.longitude) || 0,
        Number(formValues.latitude) || 0,
      ],
    },
  },
  images: formValues.photo_images?.map((img: any, idx: number) => ({
    image: typeof img === "string" ? img : img.image || img.url,
    sort_order: img.sort_order || idx + 1,
    is_active: true,
  })),
  logo: typeof formValues.logo_image === "string" ? formValues.logo_image : formValues.logo_image?.url,
  business_type: formValues.type?.map((t: any) => (t._id ? t._id : t)), // ensure ObjectId
  description: formValues.business_details || null,
  tagline: formValues.tag_line || null,
  phone: formValues.phone || null,
  airport: formValues.airport || null,
  distance_from_runway: Number(formValues.distance_from_runway) || 0,
  url: formValues.url || null,
  operation_hours: {
    monday: { open: "04:00", close: "04:00" },
    tuesday: { open: "04:00", close: "04:00" },
    wednesday: { open: "04:00", close: "04:00" },
    thursday: { open: "04:00", close: "04:00" },
    friday: { open: "04:00", close: "04:00" },
    saturday: { open: "04:00", close: "04:00" },
  },
};


      try {
        setIsSubmitting(true);
        updateBusiness(businessPayload);
      } catch (error) {
        console.error("Error submitting form:", error);
        message.error("An error occurred while updating the business");
      } finally {
        setIsSubmitting(false);
      }
    },
    [updateBusiness, businessDetails, message]
  );

  const onError = (errors: any) => {
    console.log("Form validation errors:", errors);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {businessId ? "Edit Business" : "Add New Business"}
          </h1>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="space-y-6">
              <BusinessLocation />
              <BusinessDetails />
              <ContactInfo />
              <AirportInformation />
              <Discount />

              <div className="sticky bottom-0 bg-white shadow-sm border-gray-200 py-4 px-6 mt-8 z-10">
                <div className="flex justify-end gap-4">
                  <Button onClick={() => router.back()} size="large">
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={updatingBusiness || isSubmitting}
                  >
                    {businessId ? "Update Business" : "Save Business"}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default function BusinessFormPage() {
  return <BusinessForm />;
}