"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
  Card,
  Divider,
  Avatar,
  Button,
  Tooltip,
  Progress,
  Row,
  Col,
} from "antd";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaIdBadge,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaTimesCircle,
  FaCheckCircle,
  FaComments,
} from "react-icons/fa";

import { useApiGet } from "@/http-service";

// Skeleton loader placeholder
const ViewUserSkeletonLoader = () => (
  <div className="p-6 animate-pulse">Loading user details...</div>
);

// Reusable Info Row
const InfoRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | null | undefined;
}) => (
  <div className="flex items-center gap-2 border-b border-gray-200 py-2">
    <span className="text-gray-500">{icon}</span>
    <span className="text-sm text-gray-600 min-w-[120px]">{label}</span>
    <span className="font-semibold text-gray-900">
      {value || "N/A"}
    </span>
  </div>
);

// Status Badge
const StatusChip = ({
  label,
  verified,
}: {
  label: string;
  verified: boolean;
}) => (
  <div
    className={`flex items-center gap-1 border px-3 py-1 rounded-full text-sm ${
      verified
        ? "border-green-500 text-green-600"
        : "border-red-500 text-red-600"
    }`}
  >
    {verified ? <FaCheckCircle /> : <FaTimesCircle />}
    {label}
  </div>
);

const Page = () => {
  const params = useParams<{ userId: string }>();

  const { data: userData, isLoading } = useApiGet({
    endpoint: `/user/${params.userId}`,
    queryKey: ["user", params.userId],
    config: {
      select: (data) => data?.data?.doc,
    },
  });

  console.log("User Data:", userData);
  console.log("param idd:", params);


  if (isLoading) return <ViewUserSkeletonLoader />;

  return (
    <Row gutter={[24, 24]}>
      {/* User Header */}
      <Col span={24}>
        <Card className="shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar
                size={120}
                src={
                  userData?.photo ||
                  "https://via.placeholder.com/120x120.png?text=User"
                }
              />
              <h2 className="text-xl font-bold">
                {userData?.first_name} {userData?.middle_name}{" "}
                {userData?.last_name}
              </h2>
            </div>
          </div>

          {/* Profile completeness */}
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Profile Completeness - {userData?.complete_percentage?.percentage}%
            </p>
            <Progress
              percent={userData?.complete_percentage?.percentage || 0}
              showInfo={false}
            />
          </div>

          <div className="mt-4 text-right">
            <Tooltip title="Chat will only be created once the booking is confirmed">
              <Button type="primary" icon={<FaComments />}>
                Chat with {userData?.first_name}
              </Button>
            </Tooltip>
          </div>
        </Card>
      </Col>

      {/* Verification */}
      <Col xs={24} md={12}>
        <Card className="shadow-sm h-full">
          <h3 className="text-lg font-semibold mb-2">Verification Status</h3>
          <Divider />
          <div className="flex flex-wrap gap-2">

            {userData?.complete_percentage?.completed_fields?.map((field: string) => (
              <StatusChip key={field} 
               label={field.replace(/_/g, ' ')}
              verified={true} />
            ))}

            {userData?.complete_percentage?.remaining_fields?.map((field: string) => (
              <StatusChip key={field} label={field.replace(/_/g, ' ')} verified={false} />
            ))}
            {/* <StatusChip
              label="Email Verified"
              verified={!!userData?.email_verified}
            />
            <StatusChip
              label="ID Verified"
              verified={!!userData?.id_verified}
            />
            <StatusChip
              label="Driving License"
              verified={!!userData?.driving_license_verified}
            /> */}
          </div>
        </Card>
      </Col>

      {/* Basic Info */}
      <Col xs={24} md={12}>
        <Card className="shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Basic Information</h3>
          <Divider />
          <InfoRow
            icon={<FaUser />}
            label="Display Name"
            value={userData?.display_name}
          />
          <InfoRow
            icon={<FaPhone />}
            label="Phone"
            value={userData?.phone}
          />
          <InfoRow
            icon={<FaEnvelope />}
            label="Email"
            value={userData?.email}
          />
          <InfoRow
            icon={<FaEnvelope />}
            label="Additional Email"
            value={userData?.additional_email}
          />
          <InfoRow
            icon={<FaIdBadge />}
            label="Native Language"
            value={userData?.native_language}
          />
          <InfoRow
            icon={<FaIdBadge />}
            label="Other Language"
            value={userData?.other_language?.join(", ")}
          />
        </Card>
      </Col>

      {/* Address (not in API, so left empty) */}
      <Col xs={24} md={12}>
        <Card className="shadow-sm h-full">
          <h3 className="text-lg font-semibold mb-2">Mailing Address</h3>
          <Divider />
          <InfoRow icon={<FaIdBadge />} label="Street Address" value={undefined} />
          <InfoRow icon={<FaIdBadge />} label="City" value={undefined} />
          <InfoRow icon={<FaIdBadge />} label="State" value={undefined} />
          <InfoRow icon={<FaIdBadge />} label="Zip Code" value={undefined} />
          <InfoRow icon={<FaIdBadge />} label="Country" value={undefined} />
        </Card>
      </Col>

      {/* Social Links */}
      <Col xs={24} md={12}>
        <Card className="shadow-sm h-full">
          <h3 className="text-lg font-semibold mb-2">Social Links</h3>
          <Divider />
          <InfoRow
            icon={<FaFacebook />}
            label="Facebook"
            value={userData?.facebook_link}
          />
          <InfoRow
            icon={<FaGoogle />}
            label="Google"
            value={userData?.google_link}
          />
          <InfoRow

            icon={<FaInstagram />}
            label="Instagram"
            value={userData?.instagram_link}
          />
          <InfoRow
            icon={<FaLinkedin />}
            label="LinkedIn"
            value={userData?.linkedin_link}
          />
          <InfoRow
            icon={<FaPinterest />}
            label="Pinterest"
            value={userData?.pinterest_link}
          />
          <InfoRow
            icon={<FaTwitter />}
            label="Twitter"
            value={userData?.twitter_link}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Page;
