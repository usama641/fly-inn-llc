"use client";

import { ConfigProvider } from "antd";
import React from "react";
import { StyleProvider } from "@ant-design/cssinjs";
const AntdThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Custom theme configuration
  const antdTheme = {
    hashed: true,
    token: {
      colorPrimary: "#CE2029",
      colorLink: "#c8102e",
      colorBgContainer: "#fff", // Set input background to white
      colorBgBase: "#fff", // Ensure all base backgrounds are white
      colorBorder: "#d9d9d9",
      colorText: "#666666",
      colorTextSecondary: "#999999",
      transitionDuration: "0.3s",
    },
  };

  return (
    <StyleProvider layer>
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </StyleProvider>
  );
};

export default AntdThemeProvider;
