/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Row, Col, Input } from "antd";
import React, { useRef, useEffect } from "react";

export default function GoogleSearch({ onChange, value, isLoaded, ...rest }) {
  const ref = useRef(null);

  const handleScriptLoad = (ref) => {
    const inputElement = ref.current?.input;
    if (!inputElement) return;

    const autoComplete = new window.google.maps.places.Autocomplete(
      inputElement
    );
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(autoComplete)
    );
  };

  const handlePlaceSelect = (autoComplete) => {
    const addressObject = autoComplete.getPlace();
    const addressComponents = addressObject?.address_components || [];

    const getComponent = (type) =>
      addressComponents.find((component) => component.types.includes(type))
        ?.long_name || "";

    const addressDetails = {
      address: addressObject?.formatted_address || "",
      city: getComponent("locality"),
      state: getComponent("administrative_area_level_1"),
      country: getComponent("country"),
      zipcode: getComponent("postal_code"),
      latitude: addressObject?.geometry?.location?.lat(),
      longitude: addressObject?.geometry?.location?.lng(),
    };

    onChange(addressDetails);
  };

  useEffect(() => {
    if (isLoaded) {
      handleScriptLoad(ref);
      setTimeout(() => {
        if (ref.current && ref.current.input) {
          ref.current.input.setAttribute("autocomplete", "new-password");
        }
      }, 1000);
    }
  }, [isLoaded]);

  return (
    <Row>
      <Col span={24}>
        <Input
          id={"address"}
          placeholder="Search address"
          ref={ref}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          size="large"
          className="w-full text-left"
          autoComplete="new-password"
          {...rest}
        />
      </Col>
    </Row>
  );
}
