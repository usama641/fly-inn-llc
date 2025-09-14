"use client";

import React, { useRef, useState, useEffect } from "react";
import { Upload, Button, Spin } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

interface ImageUploaderProps {
  value?: string;
  onChange?: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ value, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string>("");

  // Add dummy image if no value is provided
  useEffect(() => {
    if (!value) {
      setPreview("https://randomuser.me/api/portraits/men/32.jpg");
    } else {
      setPreview(value);
    }
  }, [value]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);

    // Simulate upload delay
    setTimeout(() => {
      setLoading(false);
      const url = URL.createObjectURL(file);
      setPreview(url);
      onChange?.(file);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <div
        className="w-36 h-36 rounded-full border border-dashed border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-500"
        onClick={handleClick}
      >
        {loading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        ) : preview ? (
          <img src={preview} alt="avatar" className="w-full h-full object-cover" />
        ) : (
          <PlusOutlined className="text-gray-400 text-2xl" />
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      <Button type="primary" icon={<PlusOutlined />} onClick={handleClick}>
        Upload Photo
      </Button>
    </div>
  );
};

export default ImageUploader;