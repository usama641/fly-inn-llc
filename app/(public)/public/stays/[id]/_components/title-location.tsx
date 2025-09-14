import {
  FacebookOutlined,
  HeartOutlined,
  LinkOutlined,
  ShareAltOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Tooltip } from "antd";
import React from "react";
import { useApp } from "@/providers/AppMessageProvider";

const TitleLocation = ({ mockListing }: any) => {
  const { message } = useApp();
  const handleSaveStay = () => {
    message.success("Stay saved to favorites!");
    // Implement your save logic here
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("http://localhost:3000/stays/stay-005");
    message.success("Link copied to clipboard!");
  };

  const handleShareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        "http://localhost:3000/stays/stay-005"
      )}`,
      "_blank"
    );
  };

  const handleShareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        "http://localhost:3000/stays/stay-005"
      )}&text=${encodeURIComponent(mockListing.title)}`,
      "_blank"
    );
  };

  const shareMenu = (
    <Dropdown
      menu={{
        items: [
          {
            key: "copyLink",
            label: "Copy link",
            icon: <LinkOutlined />,
            onClick: handleCopyLink,
          },
          {
            key: "facebook",
            label: "Share on Facebook",
            icon: <FacebookOutlined />,
            onClick: handleShareFacebook,
          },
          {
            key: "twitter",
            label: "Share on Twitter",
            icon: <TwitterOutlined />,
            onClick: handleShareTwitter,
          },
        ],
      }}
      trigger={["click"]}
    >
      <Button
        type="default"
        shape="circle"
        icon={<ShareAltOutlined />}
        className="text-gray-700 hover:text-blue-500 border-gray-300 hover:border-blue-500 transition-all duration-300"
        size="large" // Make the button larger
      />
    </Dropdown>
  );
  return (
    <div className="mb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-0 text-foreground">
            {mockListing.title}
          </h1>
          <p className="text-sm text-gray-500">{mockListing.address}</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Save/Favorite Button */}
          <Tooltip title="Save this stay" placement="bottom">
            <Button
              type="default" // Use default type for a clean look
              shape="circle"
              icon={<HeartOutlined />}
              onClick={handleSaveStay}
              className="text-red-500 hover:text-red-700 border-gray-300 hover:border-red-500 transition-all duration-300"
              size="large" // Make the button larger
            />
          </Tooltip>

          {/* Share Button with Dropdown */}
          {shareMenu}
        </div>
      </div>
    </div>
  );
};

export default TitleLocation;
