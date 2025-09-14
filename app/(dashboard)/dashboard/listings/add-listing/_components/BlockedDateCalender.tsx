import FlyInnCalender from "@/components/shared/calendar";
import { CalendarOutlined } from "@ant-design/icons";
import React from "react";

const BlockedDateCalender = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <CalendarOutlined className="text-xl text-primary mr-3" />
        Availability Calendar
      </h2>

      <div className="text-gray-600 mb-6">
        Block dates when your property is unavailable. Simply click and drag to
        select date ranges, or click individual dates to toggle them.
      </div>
      <FlyInnCalender context="calender" />
    </div>
  );
};

export default BlockedDateCalender;
