import {
  FaUserFriends,
  FaBed,
  FaBath,
  FaDoorOpen,
  FaRulerCombined,
  FaCalendarCheck,
  FaCalendarTimes,
  FaDog,
  FaBroom,
  FaDollarSign,
  FaBuilding,
  FaHome,
} from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import { GiBunkBeds } from "react-icons/gi";
import { BsCalendar2Check, BsCalendar2X } from "react-icons/bs";

const DetailCard = ({ icon: Icon, title, value }: any) => (
  <div className="flex flex-col items-center border-gray-200 justify-center border rounded-2xl p-4 min-w-[130px] shadow-sm hover:shadow-md hover:bg-gray-100 transition">
    <Icon className="text-2xl text-gray-800 mb-1" />
    <p className="text-sm font-medium text-gray-500 text-center">{title}</p>
    <p className="text-sm font-semibold text-afPrimary mt-1 text-center">
      {value}
    </p>
  </div>
);

const StayInfo = () => {
  const data = {
    type_of_space: "Entire Place",
    lodging_type: "Hangar Home",
    title: "(5B6) Falmouth Airpark - Cape Cod Home On The Runway",
    no_of_guest: 6,
    no_of_bedrooms: 3,
    no_of_beds: 3,
    no_of_bathrooms: "2.50",
    no_of_rooms: 7,
    size: 3200,
    unit_of_measure: "ft",
    instant_booking: 0,
    nightly_price: "395.00",
    apply_weekend_price: "None",
    weekend_nightly_price: null,
    nightly_price_seven_plus: "395.00",
    nightly_price_thirty_plus: "395.00",
    additional_guest: 0,
    no_of_additional_guest: null,
    additional_guest_price: null,
    pet_allowed: 0,
    cleaning_fee: "225.00",
    city_fee: null,
    tax_percentage: "7.00",
    min_day_booking: 1,
    max_day_booking: 27,
    check_in_after: "03:00 PM",
    check_out_before: "10:00 AM",
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold text-primary mt-6 mb-4">
          Property Details
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          <DetailCard
            icon={FaUserFriends}
            title="Guests"
            value={data.no_of_guest}
          />
          <DetailCard
            icon={MdBedroomParent}
            title="Bedrooms"
            value={data.no_of_bedrooms}
          />
          <DetailCard icon={GiBunkBeds} title="Beds" value={data.no_of_beds} />
          <DetailCard
            icon={FaBath}
            title="Bathrooms"
            value={data.no_of_bathrooms}
          />
          <DetailCard
            icon={FaDoorOpen}
            title="Rooms"
            value={data.no_of_rooms}
          />
          <DetailCard
            icon={FaCalendarCheck}
            title="Check-in Time"
            value={data.check_in_after}
          />
          <DetailCard
            icon={FaCalendarTimes}
            title="Check-out Time"
            value={data.check_out_before}
          />
          <DetailCard
            icon={FaHome}
            title="Dwelling Type"
            value={data.lodging_type}
          />
          <DetailCard
            icon={FaRulerCombined}
            title="Size"
            value={`${data.size} ${data.unit_of_measure}`}
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-primary mt-6 mb-4">
          Price Details
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          <DetailCard
            icon={FaDollarSign}
            title="Per Night"
            value={`$${data.nightly_price}`}
          />
          <DetailCard
            icon={FaUserFriends}
            title="Extra Guests"
            value={data.additional_guest ? "Yes" : "No"}
          />
          <DetailCard
            icon={FaBroom}
            title="Cleaning Fee"
            value={`$${data.cleaning_fee}`}
          />
          <DetailCard
            icon={BsCalendar2Check}
            title="Minimum Stay"
            value={`${data.min_day_booking} Days`}
          />
          <DetailCard
            icon={BsCalendar2X}
            title="Maximum Stay"
            value={`${data.max_day_booking} Days`}
          />
          <DetailCard
            icon={FaDog}
            title="Pet Allowed"
            value={data.pet_allowed ? "Yes" : "No"}
          />
        </div>
      </section>
    </div>
  );
};

export default StayInfo;
