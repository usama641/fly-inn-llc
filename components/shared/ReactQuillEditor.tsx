"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Controller, useFormContext } from "react-hook-form";
// Dynamic import of React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-32 bg-gray-100 rounded-md flex items-center justify-center">
      <div className="text-gray-500">Loading editor...</div>
    </div>
  ),
});

// Import Quill CSS
import "react-quill-new/dist/quill.snow.css";

// Basic toolbar configuration
const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
  ],
};

const formats = ["bold", "italic", "underline", "list", "link"];

interface ReactQuillEditorProps {
  name: string;
  placeholder?: string;
  rows?: number;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

const ReactQuillEditor: React.FC<ReactQuillEditorProps> = ({
  name,
  placeholder = "Start writing...",
  rows = 6,
  className = "",
  value,
  onChange,
  onBlur,
}) => {
  return (
    <ReactQuill
      theme="snow"
      value={value || ""}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      modules={modules}
      formats={formats}
    />
  );
};

export default ReactQuillEditor;
