"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import { Button } from "antd";
import ListingFormFields from "./_components/ListingFormFields";
import * as yup from "yup";
import LocationFormFields from "./_components/LocationFormFields";
import ImagesForm from "./_components/ImagesForm";
import InformationFields from "./_components/InformationFields";
import BedroomFields from "./_components/BedroomFields";
import AirportInformationFields from "./_components/AirportInformationFields";
import PricingInformationFields from "./_components/PricingInformationFields";
import ExtraServices from "./_components/ExtraServices";
import Features from "./_components/Features";
import TermsAndRules from "./_components/TermsAndRules";
import BlockedDateCalender from "./_components/BlockedDateCalender";
import {
  addListingDefaultValues,
  addListingValidationSchema,
} from "@/constants/stays";

// Validation schema for the stays form

const ListingPage = () => {
  const router = useRouter();
  const { message } = useApp();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create form with validation
  const methods = useForm({
    mode: "onChange",
    defaultValues: addListingDefaultValues,
    resolver: yupResolver(addListingValidationSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  // API mutation for creating/updating stays
  const { mutate: saveStay, isPending: savingStay } = useApiMutation({
    endpoint: "/stays",
    method: "post",
    config: {
      onSuccess: () => {
        message.success("Stay saved successfully!");
        router.push("/dashboard/listings/stays");
      },
      onError: (err) => {
        message.error(err?.response?.data?.message || "Failed to save stay");
      },
    },
  });

  // Handle form submission
  const onSubmit = useCallback(
    async (formValues: any) => {
      try {
        setIsSubmitting(true);
        console.log("stay payload", formValues)
        saveStay(formValues);
      } catch (error) {
        console.error("Error submitting form:", error);
        message.error("An error occurred while submitting the form");
      } finally {
        setIsSubmitting(false);
      }
    },
    [saveStay, message]
  );

  const onError = (errors: any) => {
    console.log("Form validation errors:", errors);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Add New Stay
          </h1>
          <p className="text-gray-600">
            Create a new stay listing for your property
          </p>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="space-y-6">
              <ListingFormFields />
              <LocationFormFields />
              <ImagesForm />
              <InformationFields />
              <BedroomFields />
              <AirportInformationFields />
              <PricingInformationFields />
              <ExtraServices />
              <Features />
              <TermsAndRules />
              <BlockedDateCalender />
              {/* Add more form sections here as needed */}

              <div className="sticky bottom-0 bg-white shadow-sm border-gray-200 py-4 px-6  mt-8 z-10">
                <div className="flex justify-end gap-4">
                  <Button onClick={() => router.back()} size="large">
                    Cancel
                  </Button>
                  <Button
                    type="default"
                    size="large"
                    loading={savingStay || isSubmitting}
                  >
                    Save as Draft
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={savingStay || isSubmitting}
                  >
                    Save as Listing
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

// Main page component
export default function ListingFormPage() {
  return <ListingPage />;
}
