import * as yup from "yup";

export const mockListing = {
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
  cleaning_fee: "225.00",
  city_fee: null,
  tax_percentage: "7.00",

  check_in_after: "03:00 PM",
  check_out_before: "10:00 AM",

  id: 163,
  host_id: 371,
  listing_type: "short-term rental",
  address: "6 Quimby Ln, East Falmouth, MA 02536, USA",
  unit_no: null,
  country: "United States",
  state: "MA",
  city: "Falmouth",
  zipcode: "02536",
  area: "6 Quimby Lane",
  latitude: "41.584891",
  longitude: "-70.540919",

  is_featured: 0, // if this is a featured stay or not.

  no_of_pets: 0,

  // rule1
  rules:
    '<p>Report Any Damages: Please report any accidental damages immediately. Any unreported damages may result in fees.</p>\r\n<p class="mb-0">Respect the Neighborhood: Please be mindful of noise and parking, and respect the property and surrounding community.</p>\r\n<p class="mb-0">No Unregistered Guests: Only registered guests listed in the booking are allowed to stay at the property. No additional overnight guests.</p>\r\n<p class="mb-0">Cleaning: Please tidy up before checkout. Washing dishes and taking out the trash would be appreciated.</p>\r\n<p class="mb-0">Key/Entry Instructions: Guests are responsible for keeping the keys and access codes safe. A fee may apply for lost keys or access codes.</p>\r\n<p class="mb-0">Trash and Recycling: Guests are required to follow the trash and recycling procedures. Please dispose of garbage properly.</p>\r\n<p class="mb-0">Energy Conservation: Please turn off lights, AC/heating, and appliances when not in use.</p>\r\n<p class="mb-0">Parking: Parking is limited to [insert number] spaces. Guests are responsible for following the parking rules.</p>\r\n<p class="mb-0">Children: Children are welcome, but supervision is required, especially around [mention any safety concerns like pools or balconies].</p>\r\n<p class="mb-0">Security Cameras: For your safety and security, there are [exterior] cameras monitoring the property.</p>\r\n<p class="mb-0">House Access: Guests should only access the areas of the home specified in the listing. Certain parts of the property may be off-limits.</p>\r\n<p class="mb-0">Local Laws: Please adhere to all local laws and regulations during your stay.</p>',
  created_at: "2025-04-04T18:40:30.000000Z",

  // rule 2
  children_allowed: 1,
  infant_start_age: 12,
  infant_end_age: 17,
  child_start_age: 0,
  child_end_age: 10,
  children_rules: "we acceot infants or children older than 12 years",

  // rule3
  party_allowed: 0,
  party_rules: null,

  // rule4
  smoking_allowed: 0,
  smoking_rules: null,

  // rule5
  rules_pet_allowed: 0,
  pet_rules: null,
  pet_allowed: 0,
  price_per_pet: "1.00",

  // rule6
  min_day_booking: 1,
  max_day_booking: 27,

  updated_at: "2025-06-17T21:07:54.000000Z",
  cleaning_freq: "Per stay",
  city_fee_freq: null,

  helicopter_allowed: 0,

  is_disable: 0,
  status: 1,

  cancellation_policy_short: {
    id: 3,
    group_name: "Reasonable Short Term",
    type: "short",
    before_check_in:
      "Guests receive a full refund if they cancel 7 days or more before the scheduled check-in time. The Host doesn’t get paid for the booking. Guests receive a 50% refund if they cancel between 14 days and 72 hours before the listing's check-in time. No refunds within 72 hours of the listing's check-in time.",
    after_check_in:
      "If the Guest cancels after the check-in time, the Host will be paid for each night the Guest does stay, plus 1 additional night, plus 50% for all additional nights the Guest did not stay.",
  },
  cancellation_policy_long: {
    id: 7,
    group_name: "Strict Long Term",
    type: "long",
    before_check_in:
      "Guests receive a full refund if they cancel 28 days or more before the scheduled check-in time. The Host doesn’t get paid for the booking.",
    after_check_in:
      "If the Guest cancels after the 28-days-prior point, the Host will be paid 100% for each night the Guest does stay, plus 100% of 30 additional, unused nights. The Host is paid 100% for all of the remaining nights if fewer than 30 unused nights are left on the reservation when the Guest cancels.",
  },

  welcome_message:
    "<p>Thank you for choosing to stay with us! We hope you have a fantastic visit. Feel free to reach out with any questions or concerns.</p>",
  priority: 163,
  fake_latitude: "41.584490",
  fake_longitude: "-70.541144",
  timezone: "America/Denver",

  host: {
    id: 371,
    display_name: "Mike",
    image: "1745954856-68112828135f4.jpg",
    email: "Michael.jackson1968@icloud.com",
    country: "United States",
    languages: ["English", ""],
  },

  images: [
    {
      id: 2348,
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786206_IMG_3082.jpg",
      sort_order: 0,
      description: "",
    },
    {
      id: 2349,
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786206_IMG_3883.jpg",
      sort_order: 1,
      description: "",
    },
    {
      id: 2351,
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786206_IMG_3309.jpg",
      sort_order: 2,
      description: "",
    },
    {
      id: 2352,
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786207_IMG_3898.jpg",
      sort_order: 3,
      description: "",
    },
    {
      id: 2353,
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786207_IMG_4019.jpg",
      sort_order: 4,
      description: "",
    },
    {
      id: 2350,
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786206_IMG_3994.jpg",
      sort_order: 5,
      description: "",
    },
    {
      id: 2354,
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786207_IMG_2308.jpg",
      sort_order: 6,
      description: "",
    },
    {
      id: 2355,
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786652_IMG_3994.jpg",
      sort_order: 7,
      description: "",
    },
  ],
  bedrooms: [
    {
      id: 1352,
      name: "Master",
      no_of_guest: 2,
      no_of_bed: 1,
      bed_type: "King",
    },
    {
      id: 1353,
      name: "Bedroom 2",
      no_of_guest: 2,
      no_of_bed: 1,
      bed_type: "Queen",
    },
    {
      id: 1354,
      name: "Bedroom 3",
      no_of_guest: 2,
      no_of_bed: 1,
      bed_type: "Queen",
    },
  ],
  custom_periods: [],
  extra_services: [],
  blocked_dates: [
    {
      id: 1249,
      start_date: "2025-06-17",
      end_date: "2025-06-18",
      type: "blocked",
    },
    {
      id: 1250,
      start_date: "2025-07-02",
      end_date: "2025-07-18",
      type: "blocked",
    },
    {
      id: 1251,
      start_date: "2025-08-15",
      end_date: "2025-08-22",
      type: "blocked",
    },
  ],
  airports: [
    {
      id: 741,
      airport_identifier: "5B6",
      airport_name: "Falmouth",
      airport_use: "Public",
      ctaf_unicom: "123.075",
      dimension_feets: "2298X40",
      dimension_meters: "700X12",
      elevation_feets: "38.00",
      elevation_meters: "41.00",
      fuel: ["100LL", "other"],
      lighting: 1,
      operation_hours: "0800 - 1600",
      orientation: "07/25",
      runway_condition: "Good",
      parking: "Tie-downs",
      pattern: "right, left",
      surface: ["Asphalt", "Grass"],
      air_nav: "https://airnav.com/airport/5B6",
      ground_transportation: "We have a vehicle you can rent from us!",
      distance_from_runway: "0.00",
      additional_info: "2015 Chevy Silverado. Beach sticker. $50 a day.",
    },
  ],
  features: [
    {
      id: 2260,
      feature_id: 20,
      name: "Nearby",
      sub_features: [
        {
          id: 735,
          feature_id: 20,
          sub_heading: "Shopping Nearby",
        },
        {
          id: 736,
          feature_id: 20,
          sub_heading: "Grocery Store Nearby",
        },
        {
          id: 737,
          feature_id: 20,
          sub_heading: "Gas Station Nearby",
        },
        {
          id: 738,
          feature_id: 20,
          sub_heading: "Restaurants Nearby",
        },
        {
          id: 740,
          feature_id: 20,
          sub_heading: "Outdoor Recreation Nearby",
        },
        {
          id: 741,
          feature_id: 20,
          sub_heading: "Park Nearby",
        },
        {
          id: 742,
          feature_id: 20,
          sub_heading: "Playground Nearby",
        },
        {
          id: 744,
          feature_id: 20,
          sub_heading: "Dock Nearby",
        },
        {
          id: 748,
          feature_id: 20,
          sub_heading: "Pharmacy Nearby",
        },
        {
          id: 749,
          feature_id: 20,
          sub_heading: "Hospital Nearby",
        },
      ],
    },
    {
      id: 2261,
      feature_id: 19,
      name: "Parking",
      sub_features: [
        {
          id: 727,
          feature_id: 19,
          sub_heading: "Tie-Down - Paid",
        },
        {
          id: 733,
          feature_id: 19,
          sub_heading: "Car Parking - Free",
        },
      ],
    },
    {
      id: 2262,
      feature_id: 18,
      name: "Runways",
      sub_features: [
        {
          id: 716,
          feature_id: 18,
          sub_heading: "Landing Strip / Runway - Nearby",
        },
        {
          id: 718,
          feature_id: 18,
          sub_heading: "Helipad - Nearby",
        },
      ],
    },
    {
      id: 2263,
      feature_id: 17,
      name: "Outdoor",
      sub_features: [
        {
          id: 676,
          feature_id: 17,
          sub_heading: "Barbecue Area w/ Grill",
        },
        {
          id: 677,
          feature_id: 17,
          sub_heading: "Barbeque Tools",
        },
        {
          id: 682,
          feature_id: 17,
          sub_heading: "Outdoor Furniture",
        },
        {
          id: 689,
          feature_id: 17,
          sub_heading: "Back Yard – Unfenced",
        },
      ],
    },
    {
      id: 2264,
      feature_id: 15,
      name: "Toys Available",
      sub_features: [
        {
          id: 666,
          feature_id: 15,
          sub_heading: "Truck - 4X4",
        },
      ],
    },
    {
      id: 2265,
      feature_id: 8,
      name: "Kitchen and Dining",
      sub_features: [
        {
          id: 74,
          feature_id: 8,
          sub_heading: "Kitchen",
        },
        {
          id: 76,
          feature_id: 8,
          sub_heading: "Kitchen Tools and Utensils",
        },
        {
          id: 77,
          feature_id: 8,
          sub_heading: "Dishes and Eating Utensils",
        },
        {
          id: 78,
          feature_id: 8,
          sub_heading: "Baking Pans and Sheets",
        },
        {
          id: 79,
          feature_id: 8,
          sub_heading: "Paper Towels",
        },
        {
          id: 80,
          feature_id: 8,
          sub_heading: "Salt and Pepper",
        },
        {
          id: 81,
          feature_id: 8,
          sub_heading: "Oil for Cooking",
        },
        {
          id: 82,
          feature_id: 8,
          sub_heading: "Spices",
        },
        {
          id: 83,
          feature_id: 8,
          sub_heading: "Condiments",
        },
        {
          id: 84,
          feature_id: 8,
          sub_heading: "Refrigerator",
        },
        {
          id: 86,
          feature_id: 8,
          sub_heading: "Freezer",
        },
        {
          id: 87,
          feature_id: 8,
          sub_heading: "Stove",
        },
        {
          id: 89,
          feature_id: 8,
          sub_heading: "Oven",
        },
        {
          id: 90,
          feature_id: 8,
          sub_heading: "Microwave",
        },
        {
          id: 91,
          feature_id: 8,
          sub_heading: "Dishwasher",
        },
        {
          id: 93,
          feature_id: 8,
          sub_heading: "Coffee Maker",
        },
        {
          id: 100,
          feature_id: 8,
          sub_heading: "Toaster",
        },
        {
          id: 99,
          feature_id: 8,
          sub_heading: "Blender",
        },
        {
          id: 96,
          feature_id: 8,
          sub_heading: "Coffee",
        },
        {
          id: 97,
          feature_id: 8,
          sub_heading: "Tea",
        },
        {
          id: 103,
          feature_id: 8,
          sub_heading: "Breakfast Area",
        },
        {
          id: 106,
          feature_id: 8,
          sub_heading: "Wine Glasses",
        },
        {
          id: 105,
          feature_id: 8,
          sub_heading: "Dining Area",
        },
        {
          id: 109,
          feature_id: 8,
          sub_heading: "Cleaning Supplies - Kitchen",
        },
      ],
    },
    {
      id: 2266,
      feature_id: 7,
      name: "Internet & Office",
      sub_features: [
        {
          id: 73,
          feature_id: 7,
          sub_heading: "Wi-Fi / Ethernet",
        },
        {
          id: 72,
          feature_id: 7,
          sub_heading: "Work / Study Area",
        },
      ],
    },
    {
      id: 2267,
      feature_id: 6,
      name: "Safety & Wellbeing",
      sub_features: [
        {
          id: 60,
          feature_id: 6,
          sub_heading: "First Aid Kit",
        },
        {
          id: 61,
          feature_id: 6,
          sub_heading: "Carbon Monoxide Detector",
        },
        {
          id: 62,
          feature_id: 6,
          sub_heading: "Smoke Detectors",
        },
        {
          id: 63,
          feature_id: 6,
          sub_heading: "Fire Extinguisher",
        },
        {
          id: 67,
          feature_id: 6,
          sub_heading: "Keypad / Smartlock Entry",
        },
        {
          id: 66,
          feature_id: 6,
          sub_heading: "Security Cameras - Outdoor",
        },
        {
          id: 71,
          feature_id: 6,
          sub_heading: "Safe",
        },
      ],
    },
  ],
  similarStays: [
    {
      id: 1,
      name: "Charming Lakeside Cabin",
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786206_IMG_3883.jpg",
      price: 250,
      beds: 2,
      baths: 1,
    },
    {
      id: 2,
      name: "Modern City Apartment",
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786206_IMG_3309.jpg",
      price: 180,
      beds: 1,
      baths: 1,
    },
    {
      id: 3,
      name: "Cozy Beach House",
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786207_IMG_3898.jpg",
      price: 400,
      beds: 4,
      baths: 2,
    },
    {
      id: 4,
      name: "Mountain View Retreat",
      image:
        "https://s3.amazonaws.com/flyinn-app-bucket/listing/1743786207_IMG_4019.jpg",
      price: 320,
      beds: 3,
      baths: 2,
    },
  ],

  description:
    "<p><strong>Stunning, Nearly New Cape Cod Home with Private Runway Access!</strong></p>\r\n                  <p>This gorgeous Cape Cod home is a true aviation enthusiast's dream! Located directly on the runway, this property offers unparalleled convenience—park your plane just steps from your back door. Featuring high-end appliances, including SubZero and Wolf, this home combines luxury and practicality.</p>\r\n                  <p>Inside, you'll find soaring 10-foot ceilings, beautiful windows that fill the space with natural light, and a huge slider that leads to your backyard, where the views are absolutely breathtaking. As a bonus, a charming biplane weather vane adds a unique touch of character to the home.</p>\r\n                  <p>The beach is just a mile away by air and 2 miles by car, so you can enjoy the Cape Cod lifestyle with ease. Plus, with Nantucket and Martha's Vineyard only an 8-minute flight away, you'll have endless adventures at your fingertips.</p>\r\n                  <p>This home is truly a one-of-a-kind find, offering the best of Cape Cod living with a private aviation twist!</p>",
};

export const listingTypes = [
  {
    label: "Short-Term Rental",
    value: "short-term rental",
    key: 1,
  },
  {
    label: "Adventure",
    value: "adventure",
    key: 2,
    disabled: true,
  },
  {
    label: "Event",
    value: "event",
    key: 3,
    disabled: true,
  },
  {
    label: "Hotel",
    value: "hotel",
    key: 4,
    disabled: true,
  },
  {
    label: "Restaurant",
    value: "restaurant",
    key: 5,
    disabled: true,
  },
  {
    label: "Shop",
    value: "shop",
    key: 6,
    disabled: true,
  },
];

export const spaceTypes = [
  {
    label: "Entire Place",
    value: "Entire Place",
    key: 1,
  },
  {
    label: "Private Room",
    value: "Private Room",
    key: 2,
  },
  {
    label: "Shared Room",
    value: "Shared Room",
    key: 3,
  },
];

export const lodgingType = [
  {
    label: "Apt./Condo/Loft",
    value: "Apt. / Condo / Loft",
    key: 1,
  },
  {
    label: "Bed & Breakfast",
    value: "Bed & Breakfast",
    key: 2,
  },
  {
    label: "Cabin",
    value: "Cabin",
    key: 3,
  },
  {
    label: "Campsite",
    value: "Campsite",
    key: 4,
  },
  {
    label: "Farm",
    value: "Farm",
    key: 5,
  },
  {
    label: "Hangar",
    value: "Hangar",
    key: 6,
  },
  {
    label: "Hangar Home",
    value: "Hangar Home",
    key: 7,
  },
  {
    label: "House",
    value: "House",
    key: 8,
  },
  {
    label: "Mansion",
    value: "Mansion",
    key: 9,
  },
  {
    label: "Novelty",
    value: "Novelty",
    key: 10,
  },
  {
    label: "RV",
    value: "RV",
    key: 11,
  },
  {
    label: "RV Pad",
    value: "RV Pad",
    key: 12,
  },
  {
    label: "Tiny Home",
    value: "tiny home",
    key: 13,
  },
];

export const unitMeasure = [
  {
    label: "Sq ft",
    value: "ft",
    key: 1,
  },
  {
    label: "Sq m",
    value: "m",
    key: 2,
  },
  {
    label: "Acre",
    value: "acre",
    key: 2,
  },
];

export const airportUse = [
  {
    label: "Public",
    value: "Public",
    key: 1,
  },
  {
    label: "Private",
    value: "Private",
    key: 2,
  },
  {
    label: "Private - permission required to land",
    value: "Private - permission required to land",
    key: 3,
  },
];

export const lighting = [
  {
    label: "Yes",
    value: 1,
    key: 1,
  },
  {
    label: "No",
    value: 0,
    key: 2,
  },
];

export const fuelOptions = [
  { value: "no", label: "None" },
  { value: "100LL", label: "100LL" },
  { value: "Jet-A", label: "Jet-A" },
  { value: "Jet-A1", label: "Jet-A1" },
  { value: "Jet-A+", label: "Jet-A+" },
  { value: "Jet-B", label: "Jet-B" },
  { value: "MoGas", label: "MoGas" },
  { value: "UL94", label: "UL94" },
  { value: "other", label: "Other" },
];

export const hangarOptions = [
  {
    label: "Hangar",
    value: "Hangar",
    key: 1,
  },
  {
    label: "Hangar and Tie-downs",
    value: "Hangar and Tie-downs",
    key: 2,
  },
  {
    label: "Tie-downs",
    value: "Tie-downs",
    key: 3,
  },
  {
    label: "Bring your own tie-downs",
    value: "Bring your own tie-downs",
    key: 4,
  },
  {
    label: " Mooring at the house",
    value: " Mooring at the house",
    key: 5,
  },
];

export const colorOptions = [
  { value: "Asphalt", label: "Asphalt" },
  { value: "Concrete", label: "Concrete" },
  { value: "Grass", label: "Grass" },
  { value: "Gravel", label: "Gravel" },
  { value: "Ice", label: "Ice" },
  { value: "Sand", label: "Sand" },
  { value: "Snow", label: "Snow" },
  { value: "Water", label: "Water" },
  { value: "Turf", label: "Turf" },
  { value: "Other", label: "Other" },
];

export const patternOptions = [
  {
    label: "Left, Left",
    value: "left, left",
    key: 1,
  },
  {
    label: "Left, Right",
    value: "left, right",
    key: 2,
  },
  {
    label: "Right, Left",
    value: "right, left",
    key: 3,
  },
  {
    label: "Right, Right",
    value: "right, right",
    key: 4,
  },
];

export const distanceOptions = [
  {
    label: "0 Miles",
    value: "0",
    key: 1,
  },
  {
    label: "0 to 1 Miles",
    value: "1",
    key: 2,
  },
  {
    label: "1.1 to 3 Miles",
    value: "3",
    key: 3,
  },
  {
    label: "3.1 to 7 Miles",
    value: "7",
    key: 4,
  },
  {
    label: "7+ Miles",
    value: "8",
    key: 5,
  },
];

export const groundTransportationOptions = [
  {
    label: "We have a courtesy vehicle waiting for you!",
    value: "We have a courtesy vehicle waiting for you!",
    key: 1,
  },
  {
    label: "We have a vehicle you can rent from us!",
    value: "We have a vehicle you can rent from us!",
    key: 2,
  },
  {
    label: "Rent a vehicle right in the airport! Their phone number is:",
    value: "Rent a vehicle right in the airport! Their phone number is:",
    key: 3,
  },
  {
    label: "We will give you a ride to the nearest rental vehicle agency!",
    value: "We will give you a ride to the nearest rental vehicle agency!",
    key: 4,
  },
  {
    label:
      "We have a deal with the FBO so you can keep the vehicle your whole stay!",
    value:
      "We have a deal with the FBO so you can keep the vehicle your whole stay!",
    key: 5,
  },
  {
    label: "You don't need a vehicle here!",
    value: "You don't need a vehicle here!",
    key: 6,
  },
];

export const timesOptions = [
  "06:00 AM",
  "06:30 AM",
  "07:00 AM",
  "07:30 AM",
  "08:00 AM",
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
];

export const rules = [
  {
    value:
      "<p class='mb-0'>Quiet Hours: Quiet hours are from [specific time] to [specific time]. Please respect the neighbors.</p>",
    label:
      "Quiet Hours: Quiet hours are from [specific time] to [specific time]. Please respect the neighbors.",
    id: 1,
  },
  {
    value:
      "<p class='mb-0'>Respect the Neighborhood: Please be mindful of noise and parking, and respect the property and surrounding community.</p>",
    label:
      "Respect the Neighborhood: Please be mindful of noise and parking, and respect the property and surrounding community.",
    id: 2,
  },
  {
    value:
      "<p class='mb-0'>Report Any Damages: Please report any accidental damages immediately. Any unreported damages may result in fees.</p>",
    label:
      "Report Any Damages: Please report any accidental damages immediately. Any unreported damages may result in fees.",
    id: 3,
  },
  {
    value:
      "<p class='mb-0'>No Unregistered Guests: Only registered guests listed in the booking are allowed to stay at the property. No additional overnight guests.</p>",
    label:
      "No Unregistered Guests: Only registered guests listed in the booking are allowed to stay at the property. No additional overnight guests.",
    id: 4,
  },
  {
    value:
      "<p class='mb-0'>Use of Amenities: Please use all amenities (pool, hot tub, etc.) responsibly. Follow safety rules, and use at your own risk.</p>",
    label:
      "Use of Amenities: Please use all amenities (pool, hot tub, etc.) responsibly. Follow safety rules, and use at your own risk.",
    id: 5,
  },
  {
    value:
      "<p class='mb-0'>Cleaning: Please tidy up before checkout. Washing dishes and taking out the trash would be appreciated.</p>",
    label:
      "Cleaning: Please tidy up before checkout. Washing dishes and taking out the trash would be appreciated.",
    id: 6,
  },
  {
    value:
      "<p class='mb-0'>Key/Entry Instructions: Guests are responsible for keeping the keys and access codes safe. A fee may apply for lost keys or access codes.</p>",
    label:
      "Key/Entry Instructions: Guests are responsible for keeping the keys and access codes safe. A fee may apply for lost keys or access codes.",
    id: 7,
  },
  {
    value:
      "<p class='mb-0'>Trash and Recycling: Guests are required to follow the trash and recycling procedures. Please dispose of garbage properly.</p>",
    label:
      "Trash and Recycling: Guests are required to follow the trash and recycling procedures. Please dispose of garbage properly.",
    id: 8,
  },
  {
    value:
      "<p class='mb-0'>Energy Conservation: Please turn off lights, AC/heating, and appliances when not in use.</p>",
    label:
      "Energy Conservation: Please turn off lights, AC/heating, and appliances when not in use.",
    id: 9,
  },
  {
    value:
      "<p class='mb-0'>Parking: Parking is limited to [insert number] spaces. Guests are responsible for following the parking rules.</p>",
    label:
      "Parking: Parking is limited to [insert number] spaces. Guests are responsible for following the parking rules.",
    id: 10,
  },
  {
    value:
      "<p class='mb-0'>Children: Children are welcome, but supervision is required, especially around [mention any safety concerns like pools or balconies].</p>",
    label:
      "Children: Children are welcome, but supervision is required, especially around [mention any safety concerns like pools or balconies].",
    id: 11,
  },
  {
    value:
      "<p class='mb-0'>Security Cameras: For your safety and security, there are [exterior] cameras monitoring the property.</p>",
    label:
      "Security Cameras: For your safety and security, there are [exterior] cameras monitoring the property.",
    id: 12,
  },
  {
    value:
      "<p class='mb-0'>House Access: Guests should only access the areas of the home specified in the listing. Certain parts of the property may be off-limits.</p>",
    label:
      "House Access: Guests should only access the areas of the home specified in the listing. Certain parts of the property may be off-limits.",
    id: 13,
  },
  {
    value:
      "<p class='mb-0'>Local Laws: Please adhere to all local laws and regulations during your stay.</p>",
    label:
      "Local Laws: Please adhere to all local laws and regulations during your stay.",
    id: 14,
  },
];

export const welcomeMessageList = [
  {
    key: "1",
    value:
      "<p class='mb-0'>We’re delighted to have you stay with us! To make your arrival seamless, here’s everything you need to know:</p>",
    label:
      "We’re delighted to have you stay with us! To make your arrival seamless, here’s everything you need to know:",
  },
  {
    key: "2",
    value: "<p class='mb-0'>1. Check-in Instructions:</p>",
    label: "1. Check-in Instructions:",
  },
  {
    key: "3",
    value:
      "<p class='mb-0'>Address: [Insert full address with any special notes, like landmarks].</p>",
    label:
      "Address: [Insert full address with any special notes, like landmarks].",
  },
  {
    key: "4",
    value:
      "<p class='mb-0'>Entry Code: Use [insert code] at the front door keypad to unlock. Ensure you press [insert instructions] after entering the code.</p>",
    label:
      "Entry Code: Use [insert code] at the front door keypad to unlock. Ensure you press [insert instructions] after entering the code.",
  },
  {
    key: "5",
    value: "<p class='mb-0'>Check-in Time: [Insert time, e.g., 3:00 PM].</p>",
    label: "Check-in Time: [Insert time, e.g., 3:00 PM].",
  },
  {
    key: "6",
    value:
      "<p class='mb-0'>Parking: [Provide parking details, such as designated spots or street parking tips].</p>",
    label:
      "Parking: [Provide parking details, such as designated spots or street parking tips].",
  },
  {
    key: "7",
    value: "<p class='mb-0'>2. Wi-Fi Information:</p>",
    label: "2. Wi-Fi Information:",
  },
  {
    key: "8",
    value: "<p class='mb-0'>Network Name: [Insert Wi-Fi name].</p>",
    label: "Network Name: [Insert Wi-Fi name].",
  },
  {
    key: "9",
    value: "<p class='mb-0'>Password: [Insert password].</p>",
    label: "Password: [Insert password].",
  },
  {
    key: "10",
    value: "<p class='mb-0'>3. Appliance Use:</p>",
    label: "3. Appliance Use:",
  },
  {
    key: "11",
    value:
      "<p class='mb-0'>Thermostat: [Explain how to use it and preferred temperature settings].</p>",
    label:
      "Thermostat: [Explain how to use it and preferred temperature settings].",
  },
  {
    key: "12",
    value:
      "<p class='mb-0'>Kitchen Appliances: Feel free to use all appliances. Please ensure the oven and stovetop are turned off after use.</p>",
    label:
      "Kitchen Appliances: Feel free to use all appliances. Please ensure the oven and stovetop are turned off after use.",
  },
  {
    key: "13",
    value:
      "<p class='mb-0'>Washer/Dryer: [Insert operating instructions if available for use].</p>",
    label:
      "Washer/Dryer: [Insert operating instructions if available for use].",
  },
  {
    key: "14",
    value: "<p class='mb-0'>4. Emergency Contacts:</p>",
    label: "4. Emergency Contacts:",
  },
  {
    key: "15",
    value:
      "<p class='mb-0'>Host Contact: [Insert phone number or message option].</p>",
    label: "Host Contact: [Insert phone number or message option].",
  },
  {
    key: "16",
    value:
      "<p class='mb-0'>Local Emergency Services: Dial [insert number, e.g., 911].</p>",
    label: "Local Emergency Services: Dial [insert number, e.g., 911].",
  },
  {
    key: "17",
    value:
      "<p class='mb-0'>Nearest Hospital/Clinic: [Insert address and contact].</p>",
    label: "Nearest Hospital/Clinic: [Insert address and contact].",
  },
  {
    key: "18",
    value: "<p class='mb-0'>5. Check-Out Instructions:</p>",
    label: "5. Check-Out Instructions:",
  },
  {
    key: "19",
    value: "<p class='mb-0'>Check-Out Time: [Insert time, e.g., 11:00 AM].</p>",
    label: "Check-Out Time: [Insert time, e.g., 11:00 AM].",
  },
  {
    key: "20",
    value:
      "<p class='mb-0'>Cleaning Up: Please leave used towels in the bathroom and ensure all dishes are washed or placed in the dishwasher.</p>",
    label:
      "Cleaning Up: Please leave used towels in the bathroom and ensure all dishes are washed or placed in the dishwasher.",
  },
  {
    key: "21",
    value:
      "<p class='mb-0'>Trash: [Insert instructions for trash disposal, e.g., place bags in the outdoor bin].</p>",
    label:
      "Trash: [Insert instructions for trash disposal, e.g., place bags in the outdoor bin].",
  },
  {
    key: "22",
    value:
      "<p class='mb-0'>Keys: [Insert details if a key is used, e.g., leave it in the lockbox or on the counter].</p>",
    label:
      "Keys: [Insert details if a key is used, e.g., leave it in the lockbox or on the counter].",
  },
  {
    key: "23",
    value: "<p class='mb-0'>6. Local Recommendations:</p>",
    label: "6. Local Recommendations:",
  },
  {
    key: "24",
    value:
      "<p class='mb-0'>Grocery Stores: [Insert name and distance of the nearest store].</p>",
    label: "Grocery Stores: [Insert name and distance of the nearest store].",
  },
  {
    key: "25",
    value:
      "<p class='mb-0'>Restaurants: Check out [insert 2-3 restaurant suggestions].</p>",
    label: "Restaurants: Check out [insert 2-3 restaurant suggestions].",
  },
  {
    key: "26",
    value:
      "<p class='mb-0'>Activities: We recommend [insert local attractions].</p>",
    label: "Activities: We recommend [insert local attractions].",
  },
  {
    key: "27",
    value: "<p class='mb-0'>7. Additional Notes:</p>",
    label: "7. Additional Notes:",
  },
  {
    key: "28",
    value:
      "<p class='mb-0'>Welcome Basket: Enjoy a small welcome basket with [insert items, e.g., snacks, water bottles].</p>",
    label:
      "Welcome Basket: Enjoy a small welcome basket with [insert items, e.g., snacks, water bottles].",
  },
  {
    key: "29",
    value:
      "<p class='mb-0'>Guidebook: There’s a digital or physical guidebook provided with more detailed instructions and recommendations.</p>",
    label:
      "Guidebook: There’s a digital or physical guidebook provided with more detailed instructions and recommendations.",
  },
  {
    key: "30",
    value:
      "<p class='mb-0'>Respect Our Neighbors: Please be considerate of our community.</p>",
    label: "Respect Our Neighbors: Please be considerate of our community.",
  },
  {
    key: "31",
    value:
      "<p class='mb-0'>Thank you for choosing to stay with us! We hope you have a fantastic visit. Feel free to reach out with any questions or concerns.</p>",
    label:
      "Thank you for choosing to stay with us! We hope you have a fantastic visit. Feel free to reach out with any questions or concerns.",
  },
];

export const listingFilterTypes = [
  { id: 1, label: "All", value: "all" },
  { id: 3, label: "Published", value: "published" },
  { id: 5, label: "Pending", value: "pending" },
  { id: 6, label: "Deactivated", value: "disable" },
];

export const bookingsFilterType = [
  { id: 1, label: "All", value: "all" },
  {
    id: 2,
    label: "Mine",
    value: "mine",
  },
  {
    id: 3,
    label: "Others",
    value: "others",
  },
];

export const addListingValidationSchema = yup.object().shape({
  is_draft: yup.boolean().required("Draft status is required."),
  host_id: yup.number().required("Host ID is required."),
  listing_type: yup.string().required("Listing type is required."),

  // Location fields
  address: yup.string().required("Address is required."),
  unit_no: yup.string().notRequired().nullable(),
  city: yup.string().required("City is required."),
  state: yup.string().required("State is required."),
  zipcode: yup.string().required("ZIP / Postal Code is required."),
  area: yup.string().notRequired().nullable(),
  country: yup.string().required("Country is required."),
  longitude: yup.string().required("Longitude is required."),
  latitude: yup.string().required("Latitude is required."),
  lng: yup.number().required("Longitude is required."),
  lat: yup.number().required("Latitude is required."),

  // Media Section
  images: yup
    .array()
    .of(yup.mixed().required("Image is required."))
    .min(1, "At least one image is required."),

  // Information section
  type_of_space: yup.string().required("Type of space is required."),
  lodging_type: yup.string().required("Lodging type is required."),
  title: yup.string().required("Title is required."),
  no_of_guest: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required("Number of guest is required.")
    .test("less-than-27", "Value cannot be greater than 26", function (value) {
      return +value < 27;
    }),
  no_of_bedrooms: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required("Number of bedroom is required."),
  no_of_beds: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required("Number of bed is required."),
  no_of_bathrooms: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required("Number of bathrooms is required.")
    .test(
      "decimal-format",
      "Number of bathrooms must be a whole number or end with .5 or .75 (e.g., 1.5, 2.75)",
      (value) => {
        if (value === undefined || value === null) return false;
        const decimalPart = String(value).split(".")[1];
        return (
          Number.isInteger(value) || // Whole numbers
          decimalPart === "5" || // Ends with .5
          decimalPart === "75" // Ends with .75
        );
      }
    )
    .test(
      "range",
      "Number of bathrooms must be between 0 and 99.",
      (value) => value >= 0 && value <= 99
    ),
  no_of_rooms: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required("Number of room is required."),
  unit_of_measure: yup.string().required("Unit of measure is required."),
  size: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required("Size is required."),
  description: yup.string().required("Description is required."),

  // Bedrooms section
  bedrooms: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Bedroom name is required."),
      no_of_guest: yup
        .number()
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : value
        )
        .required("Number of guest bedroom is required."),
      no_of_bed: yup
        .number()
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : value
        )
        .required("Number of beds is required."),
      bed_type: yup.string().required("Bed type is required."),
    })
  ),

  // Airports section
  airports: yup.array().of(
    yup.object().shape({
      airport_identifier: yup.string().required("Identifier is required."),
      airport_name: yup.string().required("Airport name is required."),
      airport_use: yup.string().required("Airport use is required."),
      operation_hours: yup.string().required("Operation hour is required."),
      lighting: yup
        .number()
        .oneOf([0, 1], "Invalid value for lighting")
        .required("This field is required."),
      ctaf_unicom: yup.string().required("CTAF/UNICOM is required."),
      fuel: yup
        .array()
        .of(yup.string().required("Fuel must be a string."))
        .min(1, "At least one option is required."),
      surface: yup
        .array()
        .of(yup.string().required("Surface must be a string."))
        .min(1, "At least one option is required."),
      parking: yup.string().required("Parking is required."),
      orientation: yup
        .string()
        .matches(/^\d{2}\/\d{2}$/, "Orientation must be in the format XX/XX")
        .notRequired()
        .nullable(),
      runway_condition: yup.string().notRequired().nullable(),
      pattern: yup.string().required("Pattern is required."),
      distance_from_runway: yup
        .string()
        .required("Distance from runway is required.")
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : value
        ),
      air_nav: yup.string().notRequired().nullable(),
      ground_transportation: yup
        .string()
        .required("Ground transportation is required."),

      additional_info: yup.string().notRequired().nullable(),

      helicopter_allowed: yup
        .number()
        .oneOf([0, 1], "Invalid value for helicopter allowed")
        .required("This field is required."),

      dimension_feetX: yup
        .number()
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : value
        )
        .required("This field is required."),
      dimension_feetY: yup
        .number()
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : value
        )
        .required("This field is required."),
      dimension_metersX: yup
        .number()
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : value
        )
        .required("This field is required."),
      dimension_metersY: yup
        .number()
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : value
        )
        .required("This field is required."),

      elevation_feets: yup
        .number()
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : value
        )
        .required("Airport Elevation is required."),

      elevation_meters: yup
        .number()
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : value
        )
        .required("Airport Elevation is required."),
    })
  ),
  instant_booking: yup
    .boolean()
    .oneOf([true, false], "Invalid value...")
    .required(),
  nightly_price: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required("Nightly price is required."),
  apply_weekend_price: yup
    .string()
    .nullable()
    .test(
      "apply-weekend-price-required",
      "Apply weekend price is required if weekend nightly price is set",
      function (value) {
        const { weekend_nightly_price } = this.parent;
        if (weekend_nightly_price && !value) {
          return false;
        }
        return true;
      }
    ),

  weekend_nightly_price: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .nullable()
    .notRequired(),

  nightly_price_seven_plus: yup.number().notRequired().nullable(),
  nightly_price_thirty_plus: yup.number().notRequired().nullable(),

  additional_guest: yup
    .number()
    .oneOf([0, 1], "Invalid value for additional guest")
    .required("This field is required."),

  no_of_additional_guest: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .when("additional_guest", (additional_guest: any, schema) => {
      return additional_guest === 1
        ? schema.required(
            'Number of additional guests is required when "Additional Guest" is selected.'
          )
        : schema.nullable().notRequired();
    }),
  additional_guest_price: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .when("additional_guest", (additional_guest: any, schema) => {
      return additional_guest === 1
        ? schema.required(
            'Additional guest price is required when "Additional Guest" is selected.'
          )
        : schema.nullable().notRequired();
    }),
  pet_allowed: yup
    .number()
    .oneOf([0, 1], "Invalid value for pets allowed")
    .required("This field is required."),

  no_of_pets: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .when("pet_allowed", (pet_allowed: any, schema) => {
      return pet_allowed === 1
        ? schema.required("Number of pets is required when pets are allowed.")
        : schema.nullable().notRequired();
    }),
  price_per_pet: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .when("pet_allowed", (pet_allowed: any, schema) => {
      return pet_allowed === 1
        ? schema.required("Price per pet is required when pets are allowed.")
        : schema.nullable().notRequired();
    }),
  cleaning_fee: yup.number().notRequired().nullable(),
  cleaning_freq: yup.string().notRequired().nullable(),

  city_fee: yup.number().notRequired().nullable(),
  city_fee_freq: yup.string().notRequired().nullable(),
  tax_percentage: yup.number().required("Tax is required."),

  custom_period_pricing: yup
    .number()
    .oneOf([0, 1], "Invalid value for custom period pricing")
    .required("This field is required."),

  custom_periods: yup.array().when("custom_period_pricing", {
    is: 1,
    then: () =>
      yup
        .array()
        .of(
          yup.object().shape({
            start_date: yup
              .date()
              .nullable()
              .required("Start date is required."),
            end_date: yup.date().nullable().required("End date is required."),
            nightly_price: yup
              .number()
              .transform((value, originalValue) =>
                originalValue === "" ? undefined : value
              )
              .required("Custom price is required."),
            weekend_price: yup
              .number()
              .transform((value, originalValue) =>
                originalValue === "" ? undefined : value
              )
              .required("Custom weekly price is required."),
            price_add_guest: yup
              .number()
              .transform((value, originalValue) =>
                originalValue === "" ? undefined : value
              )
              .required("Price per additional guest is required."),
          })
        )
        .min(1, "At least one custom period is required."),
    otherwise: () => yup.array().notRequired(),
  }),

  extra_services: yup
    .number()
    .oneOf([0, 1], "Invalid value for extra services")
    .required("This field is required."),
  extra_service: yup.array().when("extra_services", {
    is: 1,
    then: () =>
      yup
        .array()
        .of(
          yup.object().shape({
            name: yup.string().required("Service name is required."),
            price: yup
              .number()
              .transform((value, originalValue) =>
                originalValue === "" ? undefined : value
              )
              .required("Service price is required."),
            type: yup.string().required("Service type is required."),
            quantity: yup
              .number()
              .transform((value, originalValue) =>
                originalValue === "" ? undefined : value
              )
              .required("Quantity is required."),
          })
        )
        .min(1, "At least one extra service is required."),
    otherwise: () => yup.array().notRequired(),
  }),

  features: yup.array().of(
    yup.object().shape({
      id: yup.string().required("Feature is required."),
      sub_features: yup.array().when("id", {
        is: (id: any) => !!id,
        then: () =>
          yup
            .array()
            .of(yup.string().required("Sub-feature is required"))
            .min(1, "At least one sub-feature is required"),
        otherwise: () => yup.array().notRequired(),
      }),
    })
  ),

  cancellation_policy_short: yup
    .string()
    .required("Short cancellation policy is required."),

  cancellation_policy_long: yup.string().when("max_day_booking", {
    is: (max_day_booking: any) => max_day_booking >= 28,
    then: () => yup.string().required("Long cancellation policy is required."),
    otherwise: () => yup.string().notRequired(),
  }),

  min_day_booking: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required("minimum days of booking policy is required."),
  max_day_booking: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required("maximum days of booking policy is required."),
  check_in_after: yup.string().required("Time is required."),
  check_out_before: yup.string().required("Time is required."),
  smoking_rules: yup.string().when("smoking_allowed", {
    is: (val: any) => val === 1,
    then: () => yup.string().required("Smoking rules are required."),
    otherwise: () => yup.string().notRequired(),
  }),

  pet_rules: yup.string().when("rules_pet_allowed", {
    is: (val: any) => val === 1,
    then: () => yup.string().required("Pet rules are required."),
    otherwise: () => yup.string().notRequired(),
  }),

  party_rules: yup.string().when("party_allowed", {
    is: (val: any) => val === 1,
    then: () => yup.string().required("Party rules are required."),
    otherwise: () => yup.string().notRequired(),
  }),

  children_rules: yup.string().when("children_allowed", {
    is: (val: any) => val === 1,
    then: () => yup.string().required("Children rules are required."),
    otherwise: () => yup.string().notRequired(),
  }),

  children_ages: yup
    .array()
    .of(yup.number().required())
    .min(2)
    .max(2)
    .required("Children ages are required."),
  infant_ages: yup
    .array()
    .of(yup.number().required())
    .min(2)
    .max(2)
    .required("Infant ages are required."),

  rules_instructions: yup.string().notRequired().nullable(),
  rules: yup.string().required("Rules is required."),
  welcome_message_instructions: yup.string().notRequired().nullable(),
  welcome_message: yup.string().required("Welcome message is required."),

  blocked_dates: yup.array().notRequired(),
  deleted_images: yup.array().notRequired(),
});

export const servicesDefaultValues = {
  name: "",
  price: "",
  type: "",
  quantity: "",
};
export const airportDefaultValues = {
  airport_identifier: "",
  airport_name: "",
  airport_use: "",
  operation_hours: "",
  lighting: 0, // Changed to number
  ctaf_unicom: "",
  fuel: [],
  surface: [],
  parking: "",
  orientation: "",
  runway_condition: "",
  pattern: "",
  elevation_feets: "",
  elevation_meters: "",
  distance_from_runway: "",
  air_nav: "",
  ground_transportation: "",
  additional_info: "",
  dimension_feetX: "",
  dimension_feetY: "",
  dimension_metersX: "",
  dimension_metersY: "",
};

export const customPeriodDefaultValues = {
  start_date: "",
  end_date: "",
  nightly_price: "",
  weekend_price: "",
  price_add_guest: "",
};

export const addListingDefaultValues = {
  is_draft: false,
  listing_type: "",
  address: "",
  unit_no: "",
  city: "",
  state: "",
  zipcode: "",
  area: "",
  country: "",
  lng: "",
  lat: "",
  images: [],
  type_of_space: "",
  lodging_type: "",
  title: "",
  no_of_guest: "",
  no_of_bedrooms: "",
  no_of_beds: "",
  no_of_bathrooms: "",
  no_of_rooms: "",
  unit_of_measure: "",
  size: "",
  description: "",
  bedrooms: [],
  helicopter_allowed: 0, // Changed to number to match schema
  airports: [airportDefaultValues],
  instant_booking: false,
  nightly_price: "",
  apply_weekend_price: "",
  weekend_nightly_price: "",
  nightly_price_seven_plus: "",
  nightly_price_thirty_plus: "",

  additional_guest: 0, // Changed to number
  no_of_additional_guest: "",
  additional_guest_price: "",

  pet_allowed: 0, // Changed to number
  no_of_pets: "",
  price_per_pet: "",

  cleaning_fee: "",
  city_fee: "",
  cleaning_freq: null,
  city_fee_freq: null,
  tax_percentage: "",

  custom_period_pricing: 0, // Changed to number
  custom_periods: [customPeriodDefaultValues],
  extra_services: 0, // Changed to number
  extra_service: [servicesDefaultValues],
  features: [
    {
      id: "",
      sub_features: [],
    },
  ],

  cancellation_policy_short: "",
  cancellation_policy_long: "",
  min_day_booking: "",
  max_day_booking: "",
  check_in_after: "",
  check_out_before: "",
  smoking_allowed: 0, // Changed to number
  smoking_rules: "",

  rules_pet_allowed: 0, // Changed to number
  pet_rules: "",

  party_allowed: 0, // Changed to number
  party_rules: "",

  children_allowed: 0, // Changed to number
  children_rules: "",
  children_ages: [5, 15],
  infant_ages: [5, 15],

  rules_instructions: "",
  rules: "",
  welcome_message_instructions: "",
  welcome_message: "",
  blocked_dates: [],
  deleted_images: [],

  longitude: "",
  latitude: "",
};

// Type for form values inferred from the schema
export type FormValues = yup.InferType<typeof addListingValidationSchema>;
