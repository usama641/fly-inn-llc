"use client";

import React from "react";
import { FormProvider } from "react-hook-form";
import ProfileCard from "./_components/summary-card";
import SummaryCard from "./_components/summary-card";
import PersonalInfo from "./_components/personal-info";
import Certifications from "./_components/certifications";
import MailingAddress from "./_components/mailing-address";
import EmergencyContact from "./_components/emergency-contact";
import SocialMediaForm from "./_components/social-media";
import { Button } from "antd";
import {
  ProfileProvider,
  useProfileContext,
} from "./_components/profile-context";

const ProfileContent = () => {
  const { methods, handleSubmit, onSubmit, onError, updatingProfile } =
    useProfileContext();

  return (
    <div className="">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="flex flex-col gap-6">
            <SummaryCard />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
                {/* Personal Information */}
                <PersonalInfo />

                {/* Mailing Address */}
                <MailingAddress />

                {/* Emergency Contact */}
                <EmergencyContact />

                <SocialMediaForm />
              </div>
              <div className="col-span-1 lg:col-span-4">
                {/* Certifications */}
                <Certifications />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="col-span-1 lg:col-span-8">
                <div className="flex justify-end gap-4  py-3  rounded-sm sticky bottom-0 w-full z-10">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={updatingProfile}
                  >
                    {"Save"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default function ProfilePage() {
  return (
    <ProfileProvider>
      <ProfileContent />
    </ProfileProvider>
  );
}
