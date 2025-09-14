"use client";
import { setDates } from "../../../../../redux/slices/filter-slice";
import { RootState } from "../../../../../redux/store";
import { Dropdown } from "antd";
import { DatePicker } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const { RangePicker } = DatePicker;

const TravelDatesDropdown = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { start, end } = useSelector((state: RootState) => state.filters.dates);

  const handleChange: RangePickerProps["onChange"] = (values) => {
    if (values && values[0] && values[1]) {
      dispatch(
        setDates({
          start: values[0].toISOString(),
          end: values[1].toISOString(),
        })
      );
    } else {
      dispatch(setDates({ start: null, end: null }));
    }
    setOpen(false);
  };

  const dropdownContent = (
    <div className="bg-white p-4 rounded-xl shadow-md w-[300px]">
      <h3 className="text-base font-medium mb-3">Select your travel dates</h3>
      <RangePicker
        value={[start ? dayjs(start) : null, end ? dayjs(end) : null]}
        onChange={handleChange}
        defaultOpen
        format="DD MMM YYYY"
        className="w-full"
        allowClear
        autoFocus
        disabledDate={(current) => current && current < dayjs().startOf("day")}
      />
    </div>
  );

  const displayLabel =
    start && end
      ? `${dayjs(start).format("DD MMM")} - ${dayjs(end).format("DD MMM")}`
      : "Travel Dates";

  return (
    <Dropdown
      popupRender={() => dropdownContent}
      trigger={["click"]}
      open={open}
      onOpenChange={setOpen}
    >
      <div
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className="text-sm px-4 py-4 hover:bg-gray-200 hover:rounded-full cursor-pointer"
      >
        {displayLabel}
      </div>
    </Dropdown>
  );
};

export default TravelDatesDropdown;
