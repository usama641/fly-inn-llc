export const GOOGLE_MAP_LIBRARIES = ["places"] as const;

export const MAP_THEME = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36,
      },
      {
        color: "#333333",
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#ffffff",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#edebe4",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#dedede",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#d1ecc7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#f2f2f2",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#bddddd",
      },
      {
        lightness: 17,
      },
    ],
  },
];

export const stays = [
  {
    id: "stay-001",
    lat: 34.0522, // Latitude for Los Angeles, CA
    googleMapsApiKeylng: -118.2437, // Longitude for Los Angeles, CA
    name: "Spacious Downtown Loft",
    pricePerNight: 180,
    rating: 4.7,
    numberOfReviews: 120,
    imageUrl:
      "https://via.placeholder.com/400x300/FF5733/FFFFFF?text=Downtown+Loft",
  },
  {
    id: "stay-002",
    lat: 34.0195, // Latitude for Santa Monica, CA (near LA)
    lng: -118.4912, // Longitude for Santa Monica, CA
    name: "Beachfront Bungalow",
    pricePerNight: 250,
    rating: 4.9,
    numberOfReviews: 85,
    imageUrl:
      "https://via.placeholder.com/400x300/3366FF/FFFFFF?text=Beach+Bungalow",
  },
  {
    id: "stay-003",
    lat: 33.7489, // Latitude for Atlanta, GA
    lng: -84.388, // Longitude for Atlanta, GA
    name: "Cozy Atlanta Studio",
    pricePerNight: 95,
    rating: 4.2,
    numberOfReviews: 210,
    imageUrl:
      "https://via.placeholder.com/400x300/33CCFF/FFFFFF?text=Atlanta+Studio",
  },
  {
    id: "stay-004",
    lat: 40.7128, // Latitude for New York, NY
    lng: -74.006, // Longitude for New York, NY
    name: "NYC Midtown Apartment",
    pricePerNight: 300,
    rating: 4.6,
    numberOfReviews: 300,
    imageUrl:
      "https://via.placeholder.com/400x300/FF33CC/FFFFFF?text=NYC+Midtown",
  },
  {
    id: "stay-005",
    lat: 40.7306, // Latitude for Greenwich Village, NY (near NYC)
    lng: -73.9975, // Longitude for Greenwich Village, NY
    name: "Charming Village Brownstone",
    pricePerNight: 280,
    rating: 4.8,
    numberOfReviews: 150,
    imageUrl:
      "https://via.placeholder.com/400x300/CC33FF/FFFFFF?text=Brownstone",
  },
  {
    id: "stay-006",
    lat: 51.5074, // Latitude for London, UK
    lng: -0.1278, // Longitude for London, UK
    name: "London City Centre Flat",
    pricePerNight: 220,
    rating: 4.5,
    numberOfReviews: 180,
    imageUrl:
      "https://via.placeholder.com/400x300/33FF57/FFFFFF?text=London+Flat",
  },
  {
    id: "stay-007",
    lat: 48.8566, // Latitude for Paris, France
    lng: 2.3522, // Longitude for Paris, France
    name: "Parisian Studio near Eiffel",
    pricePerNight: 190,
    rating: 4.9,
    numberOfReviews: 90,
    imageUrl:
      "https://via.placeholder.com/400x300/FFCC33/FFFFFF?text=Paris+Studio",
  },
  {
    id: "stay-008",
    lat: 35.6895, // Latitude for Tokyo, Japan
    lng: 139.6917, // Longitude for Tokyo, Japan
    name: "Shinjuku Modern Apartment",
    pricePerNight: 160,
    rating: 4.6,
    numberOfReviews: 250,
    imageUrl:
      "https://via.placeholder.com/400x300/33FFFF/FFFFFF?text=Tokyo+Apt",
  },
  {
    id: "stay-009",
    lat: -33.8688, // Latitude for Sydney, Australia
    lng: 151.2093, // Longitude for Sydney, Australia
    name: "Sydney Harbour View Unit",
    pricePerNight: 270,
    rating: 4.7,
    numberOfReviews: 110,
    imageUrl:
      "https://via.placeholder.com/400x300/8A2BE2/FFFFFF?text=Sydney+View",
  },
  {
    id: "stay-010",
    lat: 30.0444, // Latitude for Cairo, Egypt
    lng: 31.2357, // Longitude for Cairo, Egypt
    name: "Nile River View Condo",
    pricePerNight: 80,
    rating: 4.1,
    numberOfReviews: 60,
    imageUrl:
      "https://via.placeholder.com/400x300/FFD700/FFFFFF?text=Cairo+Condo",
  },
];
