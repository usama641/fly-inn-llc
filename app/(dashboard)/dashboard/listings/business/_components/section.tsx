import React from "react";

interface SectionFieldProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  required?: boolean;
}

const SectionField: React.FC<SectionFieldProps> = ({
  title,
  desc,
  icon,
  required = true,
}) => {
  return (
    <div>
      <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
        {icon}
        {title}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <p className="text-sm text-gray-500 !mb-3">{desc}</p>
    </div>
  );
};

export default SectionField;
