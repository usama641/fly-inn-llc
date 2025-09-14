"use client";

import React from "react";
import { Card, Input, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const { Title, Text } = Typography;

const SocialMediaSection: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fields = [
    { name: "facebook_url", label: "Facebook URL" },
    { name: "instagram_url", label: "Instagram URL" },
    { name: "airbnb_url", label: "Airbnb URL" },
    { name: "google_plus_url", label: "VRBO URL" },
    { name: "youtube_url", label: "YouTube URL" },
    { name: "twitter_url", label: "X (Formerly Twitter) URL" },
    { name: "linkedin_url", label: "LinkedIn URL" },
    { name: "pinterest_url", label: "Pinterest URL" },
    { name: "vimeo_url", label: "Vimeo URL" },
    { name: "top_advisor_url", label: "Top Advisor URL" },
  ];

  return (
    <Card className="p-6">
      <Title level={4} className="mb-6">
        Social Media URLs
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <Controller
              name={field.name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    id={field.name}
                    placeholder={field.label}
                    value={value}
                    onChange={onChange}
                    status={errors?.[field.name] ? "error" : ""}
                  />
                  {errors?.[field.name]?.message && (
                    <Text type="danger" className="text-xs mt-1">
                      {String(errors?.[field.name]?.message)}
                    </Text>
                  )}
                </>
              )}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SocialMediaSection;