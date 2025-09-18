"use client";

import { FaArrowLeft } from "react-icons/fa6";
import { AiFillPrinter } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";
import { FaSmoking } from "react-icons/fa";
import { BiParty } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { useApiGet } from "@/http-service";

interface Params {
  bookingId: string;
}

interface BookingListing {
  reservation_details: {
    status: {
      title: string;
      id: number | string;
      booking_status: string;
    };
    summary: {
      title: string;
      no_nights_: number;
      no_guest_adult: number;
      no_guest_child: number;
    };
    details: {
      title: string;
      guest_name: string;
      home_name: string;
    };
    reservation: {
      title: string;
      departure: string;
      arrival: string;
    };
  };
  payment_summary: {
    payment_summary: {
      price: string;
      platform_fee_: string;
      cleaning_fee: string;
    };
    additional_guests: {
      no_guest: number;
      charges: string;
    };
    summary: {
      total_before_tax: number;
      taxes: string;
      total: string;
    };
  };
  listing_summary: {
    title: string;
    listing_title: string;
    check_in_time: string;
    check_out_time: string;
    allowances: {
      smoking: string;
      party: string;
      children: string;
      pets: string;
    };
    house_rules: string;
    long_term_cancellation: string;
    short_term_cancellation: string;
  };
}

export default function BookingDetails({ params }: { params: Params }) {
    const { bookingId } = React.use(params);
  const router = useRouter();

  console.log("bookingIdsss", bookingId);

  // const { data: bookingDetails, isLoading } = useApiGet({
  //   endpoint: `/stay/booking?populate=["stay"]&user=${id}`,
  //   queryKey: ["stay"],
  //   config: {
  //     select: (res) => res?.data?.doc || [],
  //   },
  // });

  const { data: bookingDetails, isLoading } = useApiGet({
  endpoint: `/stay/booking/${bookingId}`,
  queryKey: ["stay", bookingId],
  config: {
    select: (res) => res?.data?.doc || null,
  },
});

  console.log("bookingDetails", bookingDetails);

  const [selectedStatus, setSelectedStatus] = useState<string>(
    "reservation_details"
  );

  const options = [
    { value: "reservation_details", label: "Reservation Details" },
    { value: "listing_summary", label: "Listing Summary" },
    { value: "payment_summary", label: "Payment Summary" },
  ];

  const PolicyCat = [
    { value: "extra_expenses", label: "Extra Expenses", color: "#FAB813" },
    {
      value: "post_expense_charges",
      label: "Post Expense Charges",
      color: "#4B85FA",
    },
    { value: "partial_refund", label: "Partial Refund", color: "#915323" },
    { value: "confirm_booking", label: "Confirm Booking", color: "#319F43" },
    { value: "decline", label: "Decline", color: "#CE2029" },
  ];

  const bookingData: BookingListing | null = useMemo(() => {
    const booking =
      bookingDetails || null;

    const stay = booking?.stay || {};

    console.log("booking", booking, stay);

    return {
      reservation_details: {
        status: {
          title: "Booking Status",
          id: booking?.id,
          booking_status: booking?.status === 0 ? "Pending" : "Completed",
        },
        summary: {
          title: "Summary",
          no_nights_: 1,
          no_guest_adult: booking?.no_of_guests || 0,
          no_guest_child: booking?.no_of_infants || 0,
        },
        details: {
          title: "Details",
          guest_name: booking?.user || "Guest",
          home_name: stay?.stay_title || "Unknown Stay",
        },
        reservation: {
          title: "Reservation Dates",
          departure: new Date(booking?.departure_date).toLocaleDateString(),
          arrival: new Date(booking?.arrival_date).toLocaleDateString(),
        },
      },
      payment_summary: {
        payment_summary: {
          price: `$ ${booking?.amount || 0}`,
          platform_fee_: `$ ${booking?.taxes || 0}`,
          cleaning_fee: `$ ${stay?.pricing?.cleaning_fee || 0}`,
        },
        additional_guests: {
          no_guest: booking?.no_of_guests || 0,
          charges: `$ ${stay?.pricing?.price_additional_guest || 0}`,
        },
        summary: {
          total_before_tax: booking?.amount || 0,
          taxes: `$ ${booking?.taxes || 0}`,
          total: `$ ${(booking?.amount || 0) + (booking?.taxes || 0)}`,
        },
      },
      listing_summary: {
        title: "Summary",
        listing_title: stay?.stay_title || "N/A",
        check_in_time: stay?.rules?.check_in_after || "03:00 PM",
        check_out_time: stay?.rules?.check_out_before || "11:00 AM",
        allowances: {
          smoking: stay?.rules?.smoking_allowed ? "Allowed" : "Not Allowed",
          party: stay?.rules?.party_allowed ? "Allowed" : "Not Allowed",
          children: stay?.rules?.children_allowed ? "Allowed" : "Not Allowed",
          pets: stay?.rules?.pets_allowed ? "Allowed" : "Not Allowed",
        },
        house_rules: (stay?.rules?.rules || []).join(", ") || "N/A",
        long_term_cancellation: stay?.rules?.cancellation_policy_long || "N/A",
        short_term_cancellation:
          stay?.rules?.cancellation_policy_short || "N/A",
      },
    };
  }, [bookingDetails, bookingId]);

  if (isLoading) {
    return <p className="p-6">Loading booking details...</p>;
  }

  if (!bookingData) {
    return <p className="p-6">No booking details found</p>;
  }

  const renderSection = (title: string, data: Record<string, any>) => (
    <div className="mb-6">
      <h2 className="font-semibold text-lg text-black border-b border-[#CE2029] pb-2 mb-3">
        {title}
      </h2>
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between py-1">
            <span className="capitalize font-medium text-base text-black">
              {key.replace(/_/g, " ")}
            </span>
            {value === "Completed" ? (
              <button className="bg-[#D8FFDF] border border-[#319F43] rounded-lg px-4 py-1">
                <span className="capitalize font-medium text-lg text-[#319F43]">
                  {value}
                </span>
              </button>
            ) : (
              <span className="text-[#CE2029] font-medium text-lg">
                {value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderListingSummary = (data: BookingListing["listing_summary"]) => (
    <div className="mb-6 flex flex-col gap-3">
      <h2 className="font-semibold text-lg text-black border-b border-[#CE2029] pb-2 mb-3">
        {data.title}
      </h2>

      {/* Basic Info */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="font-medium text-base text-black">
            Listing Title:
          </span>
          <span className="text-[#CE2029] font-medium text-base">
            {data.listing_title}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-base text-black">
            Check-in Time:
          </span>
          <span className="text-[#CE2029] font-medium text-base">
            {data.check_in_time}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-base text-black">
            Check-out Time:
          </span>
          <span className="text-[#CE2029] font-medium text-base">
            {data.check_out_time}
          </span>
        </div>
      </div>

      {/* Allowances */}
      <h3 className="font-semibold text-black border-b border-[#CE2029] pb-1 mb-2">
        Allowances
      </h3>
      <div className="space-y-2 mb-4">
        {Object.entries(data.allowances).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center">
            <div className="flex items-center">
              {allowanceIcons[key.toLowerCase()]}
              <span className="capitalize font-medium text-base text-black">
                {key}:
              </span>
            </div>
            <span className="text-[#CE2029] font-medium text-base ">
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* House Rules */}
      <h3 className="font-semibold text-black border-b border-[#CE2029] pb-1 mb-2">
        House Rules
      </h3>
      <p className="mb-4 whitespace-pre-line font-medium text-base text-black">
        {data.house_rules}
      </p>

      {/* Cancellation Policies */}
      <h3 className="font-semibold text-black border-b border-[#CE2029] pb-1 mb-2">
        Long Term Cancellation Policy
      </h3>
      <p className="mb-4 font-medium text-base text-black">
        {data.long_term_cancellation}
      </p>
      <h3 className="font-semibold text-black border-b border-[#CE2029] pb-1 mb-2">
        Short Term Cancellation Policy
      </h3>
      <p className="font-medium text-base text-black">
        {data.short_term_cancellation}
      </p>
    </div>
  );

  const allowanceIcons: Record<string, JSX.Element> = {
    smoking: <FaSmoking className="text-gray-600 mr-2" />,
    party: <BiParty className="text-gray-600 mr-2" />,
    children: <FaChildren className="text-gray-600 mr-2" />,
    pets: <MdPets className="text-gray-600 mr-2" />,
  };

  return (
    <div className="flex flex-col gap-8 w-full p-6 ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => router.back()}>
            <FaArrowLeft />
          </button>
          <h1 className="text-xl font-bold text-black">
            Booking details / ID = {bookingId}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button type="button" className="bg-white rounded-lg">
            <AiFillPrinter className="h-6 w-6 m-1 mx-2" color="#2D2929" />
          </button>
          <button type="button" className="bg-white rounded-lg">
            <MdOutlineEmail className="h-6 w-6 m-1 mx-2" color="#2D2929" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-3 ">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelectedStatus(option.value)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
              selectedStatus === option.value
                ? "bg-[#CE2029] text-white border-[#CE2029]"
                : "bg-white text-[#CE2029] border-[#CE2029]"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white p-6 shadow-2xl rounded-2xl">
        {selectedStatus === "reservation_details" && (
          <>
            {renderSection(
              bookingData.reservation_details.status.title,
              bookingData.reservation_details.status
            )}
            {renderSection(
              bookingData.reservation_details.summary.title,
              bookingData.reservation_details.summary
            )}
            {renderSection(
              bookingData.reservation_details.details.title,
              bookingData.reservation_details.details
            )}
            {renderSection(
              bookingData.reservation_details.reservation.title,
              bookingData.reservation_details.reservation
            )}
          </>
        )}

        {selectedStatus === "payment_summary" && (
          <>
            {renderSection(
              "Payment Summary",
              bookingData.payment_summary.payment_summary
            )}
            {renderSection(
              "Additional Guests",
              bookingData.payment_summary.additional_guests
            )}
            {renderSection(
              "Total Summary",
              bookingData.payment_summary.summary
            )}
          </>
        )}

        {selectedStatus === "listing_summary" &&
          renderListingSummary(bookingData.listing_summary)}
      </div>

      {/* Policy Buttons */}
      <div className="flex space-x-3">
        {PolicyCat.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelectedStatus(option.value)}
            style={{ backgroundColor: option.color, border: option.color }}
            className="px-4 py-3 rounded-xl text-sm font-semibold text-white transition w-full"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
