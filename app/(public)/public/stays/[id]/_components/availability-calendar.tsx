import FlyInnCalender from "@/components/shared/calendar";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Select } from "antd"; // Import Button and Select from antd

const { Option } = Select; // Destructure Option from Select

const AvailabilityCalendar = () => {
  const [currentBaseMonth, setCurrentBaseMonth] = useState<Dayjs>(dayjs());

  const handlePrevMonth = () => {
    setCurrentBaseMonth((prev) => prev.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentBaseMonth((prev) => prev.add(1, "month"));
  };

  const handleReset = () => {
    setCurrentBaseMonth(dayjs());
  };

  const formatMonthYear = (date: Dayjs) => {
    return date.format("MMMM YYYY");
  };

  return (
    <div className="mt-12">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-primary mb-1">
          Availability Calendar
        </h2>
      </div>
      {/* Calendar Controls */}
      <div className="flex justify-between items-center mb-6 p-3 bg-white rounded-lg shadow-sm">
        <Button // Replaced native button with Ant Design Button
          onClick={handlePrevMonth}
          type="text" // Use text type for a subtle button
          icon={<LeftOutlined className="text-lg" />}
          aria-label="Previous month"
        />

        <div className="flex items-center gap-6">
          <Select // Replaced native select with Ant Design Select
            value={currentBaseMonth.month()}
            onChange={(value) =>
              setCurrentBaseMonth((prev) => prev.month(value))
            }
            className="min-w-[120px]" // Added a min-width for better appearance
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <Option key={i} value={i}>
                {dayjs().month(i).format("MMMM")}
              </Option>
            ))}
          </Select>

          <Button // Replaced native button with Ant Design Button
            onClick={handleReset}
            className="px-4 py-1 text-sm" // Tailwind classes can still be used for sizing/padding
          >
            Today
          </Button>

          <Select // Replaced native select with Ant Design Select
            value={currentBaseMonth.year()}
            onChange={(value) =>
              setCurrentBaseMonth((prev) => prev.year(value))
            }
            className="min-w-[100px]" // Added a min-width for better appearance
          >
            {Array.from({ length: 10 }).map((_, i) => {
              const year = dayjs().year() - 5 + i;
              return (
                <Option key={year} value={year}>
                  {year}
                </Option>
              );
            })}
          </Select>
        </div>

        <Button // Replaced native button with Ant Design Button
          onClick={handleNextMonth}
          type="text" // Use text type for a subtle button
          icon={<RightOutlined className="text-lg" />}
          aria-label="Next month"
        />
      </div>

      {/* Dual Calendar Display */}
      <div className="flex gap-8 justify-center">
        <div className="w-full bg-white p-4 rounded-lg shadow-sm">
          <p className="mb-2 text-sm">{formatMonthYear(currentBaseMonth)}</p>
          <FlyInnCalender context="datepicker" targetMonth={currentBaseMonth} />
        </div>

        <div className="w-full bg-white p-4 rounded-lg shadow-sm">
          <p className="mb-2 text-sm">
            {" "}
            {formatMonthYear(currentBaseMonth.add(1, "month"))}
          </p>

          <FlyInnCalender
            context="datepicker"
            targetMonth={currentBaseMonth.add(1, "month")}
          />
        </div>
      </div>

      {/* Month/Year Selector - (Original empty div, now placeholder for legend) */}
      <div className="flex justify-center gap-4"></div>

      {/* Legend Section */}
      <div className="mt-8 flex justify-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-green-200" />{" "}
          {/* Light Green */}
          Available
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-yellow-200" />{" "}
          {/* Light Yellow */}
          Pending
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-red-200" /> {/* Light Red */}
          Booked
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;
