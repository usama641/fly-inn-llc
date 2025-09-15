"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import { Button } from "antd";
import * as yup from "yup";

import {
  addListingDefaultValues,
  addListingValidationSchema,
} from "@/constants/stays";
import ListingFormFields from "../../listings/stays/stays-form/_components/ListingFormFields";
import LocationFormFields from "../../listings/stays/stays-form/_components/LocationFormFields";
import ImagesForm from "../../listings/stays/stays-form/_components/ImagesForm";
import InformationFields from "../../listings/stays/stays-form/_components/InformationFields";
import BedroomFields from "../../listings/stays/stays-form/_components/BedroomFields";
import AirportInformationFields from "../../listings/stays/stays-form/_components/AirportInformationFields";
import PricingInformationFields from "../../listings/stays/stays-form/_components/PricingInformationFields";
import ExtraServices from "../../listings/stays/stays-form/_components/ExtraServices";
import Features from "../../features/page";
import TermsAndRules from "../../listings/stays/stays-form/_components/TermsAndRules";
import BlockedDateCalender from "../../listings/stays/stays-form/_components/BlockedDateCalender";
import Discount from "../_components/Discount";
import AirportInformation from "../_components/AirportInformation";
import ContactInfo from "../_components/ContactInfo";
import BusinessDetails from "../_components/BusinessDetails";
import BusinessLocation from "../_components/ImageComponents/BusinessLocation";
import {
  addBusinessDefaultValues,
  addBusinessValidationSchema,
} from "@/constants/business";
import useAxiosAuth from "@/hooks/use-axios-auth";

// Validation schema for the stays form

const BusinessForm = () => {
  const router = useRouter();
  const { message } = useApp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const axiosAuth = useAxiosAuth()
  // Create form with validation
  const methods = useForm({
    mode: "onChange",
    defaultValues: addBusinessDefaultValues,
    resolver: yupResolver(addBusinessValidationSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const { mutate: addBusiness, isPending: savingBusiness } = useApiMutation({
    endpoint: "/business",
    method: "post",
    axiosConfig:{
      headers:{
         'Content-Type': 'multipart/form-data'
      }
    },
    config: {
      onSuccess: () => {
        message.success("Booking created successfully!");
        router.push("/dashboard/business");
      },
      onError: (err) => {
        message.error(err?.response?.data?.message || "Failed to save stay");
      },
    },
  });

  // Handle form submission
  const onSubmit = useCallback(
    async (formValues: any) => {

  console.log("formValues.photo_images", formValues.photo_images)

  const businessPayload = {
  name: formValues.name,
  address: {
    country: formValues.country,
    state: formValues.state,
    city: formValues.city,
    zipcode: formValues.zipcode,
    area:  formValues.area,
    address: formValues.address,
    apartment: formValues.apt_suite,
    location: {
      type: "Point",
      coordinates: [formValues.longitude, formValues.latitude]
    }
  },
  images: formValues.photo_images,
  logo: formValues.logo_image,
  business_type: formValues.type,
  description: formValues.business_details,
  tagline: formValues.tag_line,
  phone: formValues.phone,
  airport: formValues.airport,
  distance_from_runway: formValues.distance_from_runway,
  url: formValues.url,
  operation_hours: {
    monday: { open: "04:00", close: "04:00" },
    tuesday: { open: "04:00", close: "04:00" },
    wednesday: { open: "04:00", close: "04:00" },
    thursday: { open: "04:00", close: "04:00" },
    friday: { open: "04:00", close: "04:00" },
    saturday: { open: "04:00", close: "04:00" }
  }
};
      try {
        setIsSubmitting(true);
        // axiosAuth.postForm('/business',formValues)
        addBusiness(businessPayload);
        console.log("formValues", formValues);
        console.log("businessPayload", businessPayload);
      } catch (error) {
        console.error("Error submitting form:", error);
        message.error("An error occurred while submitting the form");s
      } finally {
        setIsSubmitting(false);
      }
    },
    [addBusiness, message]
  );

  const onError = (errors: any) => {
    console.log("Form validation errors:", errors);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Add New Business
          </h1>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="space-y-6">
              <BusinessLocation />
              {/* <ImagesForm /> */}
              <BusinessDetails />
              <ContactInfo />
              <AirportInformation />
              <Discount />

              {/* Add more form sections here as needed */}

              <div className="sticky bottom-0 bg-white shadow-sm border-gray-200 py-4 px-6  mt-8 z-10">
                <div className="flex justify-end gap-4">
                  <Button onClick={() => router.back()} size="large">
                    Cancel
                  </Button>
                  <Button
                    type="default"
                    size="large"
                    loading={savingBusiness || isSubmitting}
                  >
                    Save as Draft
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={savingBusiness || isSubmitting}
                  >
                    Save as Booking
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
export default function BusinessFormPage() {
  return <BusinessForm />;
}
