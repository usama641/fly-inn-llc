import { useLoadScript } from "@react-google-maps/api";
import React, { useDebugValue, useRef } from "react";

const libraries: any = ["places"];

/**
 * Custom hook to load and manage a Google Map instance.
 *
 * @param {string} apiKey - The Google Maps API key.
 * @param {Object} defaultCenter - The default center of the map with `lat` and `lng` properties.
 * @param {number} defaultZoom - The default zoom level of the map.
 *
 * @returns {Object} - An object containing the map instance, loading state, and event handlers.
 */
const useGoogleMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDXJS_VZMhnp0szh92aZGg8RHszz6RMQN8",
    libraries,
  });

  const mapRef: any = useRef<any>(null);

  const onLoad = React.useCallback((map: any) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    map.setZoom(10);

    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(() => {
    mapRef.current = null;
  }, []);

  return {
    mapRef,
    onUnmount,
    isLoaded,
    onLoad,
  };
};

export default useGoogleMap;
