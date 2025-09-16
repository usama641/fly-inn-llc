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
      <div className="flex flex-col gap-6">
        <SummaryCard />

        <div className="flex flex-col gap-6">
          <div className="col-span-1 lg:col-span-7">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className=" flex flex-col gap-6">

                  {/* Certifications */}
                  <Certifications />
                  {/* Personal Information */}
                  <PersonalInfo />

                  {/* Mailing Address */}
                  <MailingAddress />

                  {/* Emergency Contact */}
                  <EmergencyContact />

                  <SocialMediaForm />

                  {/* Sticky Save Button - Fixed at bottom */}
                  <div className="sticky bottom-0 bg-white shadow-sm border-gray-200 py-4 px-6 mt-6 z-10">
                    <div className="flex justify-end gap-4">
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        loading={updatingProfile}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
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
