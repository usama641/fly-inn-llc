import React from "react";
import { Input, Card, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const { Title } = Typography;

const SocialMediaForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  // Type assertion for nested social_links errors
  const socialLinksErrors = errors.social_links as any;

  return (
    <Card id="social-media" className="shadow-sm">
      <Title level={4} className="mb-6">
        Social Media URLs
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Facebook */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Facebook URL
          </label>
          <Controller
            name="social_links.facebook_url"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  type="url"
                  status={socialLinksErrors?.facebook_url ? "error" : ""}
                  className="w-full"
                  placeholder="https://facebook.com/yourprofile"
                />
                {socialLinksErrors?.facebook_url && (
                  <p className="text-red-500 text-sm mt-2">
                    {socialLinksErrors.facebook_url.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Instagram */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Instagram URL
          </label>
          <Controller
            name="social_links.instagram_url"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  type="url"
                  status={socialLinksErrors?.instagram_url ? "error" : ""}
                  className="w-full"
                  placeholder="https://instagram.com/yourprofile"
                />
                {socialLinksErrors?.instagram_url && (
                  <p className="text-red-500 text-sm mt-2">
                    {socialLinksErrors.instagram_url.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Airbnb */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Airbnb URL
          </label>
          <Controller
            name="social_links.airbnb_url"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  type="url"
                  status={socialLinksErrors?.airbnb_url ? "error" : ""}
                  className="w-full"
                  placeholder="https://airbnb.com/yourprofile"
                />
                {socialLinksErrors?.airbnb_url && (
                  <p className="text-red-500 text-sm mt-2">
                    {socialLinksErrors.airbnb_url.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* VRBO */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            VRBO URL
          </label>
          <Controller
            name="social_links.vrbo_url"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  type="url"
                  status={socialLinksErrors?.vrbo_url ? "error" : ""}
                  className="w-full"
                  placeholder="https://vrbo.com/yourprofile"
                />
                {socialLinksErrors?.vrbo_url && (
                  <p className="text-red-500 text-sm mt-2">
                    {socialLinksErrors.vrbo_url.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* YouTube */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            YouTube URL
          </label>
          <Controller
            name="social_links.youtube_url"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  type="url"
                  status={socialLinksErrors?.youtube_url ? "error" : ""}
                  className="w-full"
                  placeholder="https://youtube.com/yourchannel"
                />
                {socialLinksErrors?.youtube_url && (
                  <p className="text-red-500 text-sm mt-2">
                    {socialLinksErrors.youtube_url.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Twitter/X */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            X (Twitter) URL
          </label>
          <Controller
            name="social_links.twitter_url"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  type="url"
                  status={socialLinksErrors?.twitter_url ? "error" : ""}
                  className="w-full"
                  placeholder="https://x.com/yourprofile"
                />
                {socialLinksErrors?.twitter_url && (
                  <p className="text-red-500 text-sm mt-2">
                    {socialLinksErrors.twitter_url.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            LinkedIn URL
          </label>
          <Controller
            name="social_links.linkedin_url"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  type="url"
                  status={socialLinksErrors?.linkedin_url ? "error" : ""}
                  className="w-full"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
                {socialLinksErrors?.linkedin_url && (
                  <p className="text-red-500 text-sm mt-2">
                    {socialLinksErrors.linkedin_url.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Pinterest */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pinterest URL
          </label>
          <Controller
            name="social_links.pinterest_url"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  type="url"
                  status={socialLinksErrors?.pinterest_url ? "error" : ""}
                  className="w-full"
                  placeholder="https://pinterest.com/yourprofile"
                />
                {socialLinksErrors?.pinterest_url && (
                  <p className="text-red-500 text-sm mt-2">
                    {socialLinksErrors.pinterest_url.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Vimeo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vimeo URL
          </label>
          <Controller
            name="social_links.vimeo_url"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  type="url"
                  status={socialLinksErrors?.vimeo_url ? "error" : ""}
                  className="w-full"
                  placeholder="https://vimeo.com/yourprofile"
                />
                {socialLinksErrors?.vimeo_url && (
                  <p className="text-red-500 text-sm mt-2">
                    {socialLinksErrors.vimeo_url.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Top Advisor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Top Advisor URL
          </label>
          <Controller
            name="social_links.top_advisor_url"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  size="large"
                  type="url"
                  status={socialLinksErrors?.top_advisor_url ? "error" : ""}
                  className="w-full"
                  placeholder="https://topadvisor.com/yourprofile"
                />
                {socialLinksErrors?.top_advisor_url && (
                  <p className="text-red-500 text-sm mt-2">
                    {socialLinksErrors.top_advisor_url.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>
    </Card>
  );
};

export default SocialMediaForm;
