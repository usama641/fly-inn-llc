import {
  FaParking,
  FaWifi,
  FaUtensils,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaTools,
  FaHome,
  FaFireExtinguisher,
  FaLaptop,
} from "react-icons/fa";
import {
  MdOutdoorGrill,
  MdDirectionsRun,
  MdLocalPharmacy,
  MdLocalHospital,
  MdKitchen,
  MdOutlineBedroomParent,
} from "react-icons/md";

export const iconMap = (heading: string) => {
  if (
    heading.toLowerCase().includes("wifi") ||
    heading.toLowerCase().includes("internet")
  )
    return <FaWifi className="text-gray-500 " />;
  if (heading.toLowerCase().includes("parking"))
    return <FaParking className="text-gray-500 " />;
  if (heading.toLowerCase().includes("kitchen"))
    return <MdKitchen className="text-gray-500 " />;
  if (heading.toLowerCase().includes("dining"))
    return <FaUtensils className="text-gray-500 " />;
  if (heading.toLowerCase().includes("safety"))
    return <FaShieldAlt className="text-gray-500 " />;
  if (heading.toLowerCase().includes("hospital"))
    return <MdLocalHospital className="text-gray-500 " />;
  if (heading.toLowerCase().includes("pharmacy"))
    return <MdLocalPharmacy className="text-gray-500 " />;
  if (heading.toLowerCase().includes("outdoor"))
    return <MdOutdoorGrill className="text-gray-500 " />;
  if (
    heading.toLowerCase().includes("runway") ||
    heading.toLowerCase().includes("landing")
  )
    return <MdDirectionsRun className="text-gray-500 " />;
  if (
    heading.toLowerCase().includes("office") ||
    heading.toLowerCase().includes("work")
  )
    return <FaLaptop className="text-gray-500 " />;
  if (heading.toLowerCase().includes("fire"))
    return <FaFireExtinguisher className="text-gray-500 " />;
  if (heading.toLowerCase().includes("tools"))
    return <FaTools className="text-gray-500 " />;
  if (heading.toLowerCase().includes("nearby"))
    return <FaMapMarkerAlt className="text-gray-500 " />;
  return <FaHome className="text-gray-500 " />;
};
