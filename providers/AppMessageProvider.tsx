"use client";

import { createContext, useContext } from "react";
import { App, message } from "antd";

const AppContext = createContext<{
  message: ReturnType<typeof message.useMessage>[0];
  modal: ReturnType<typeof App.useApp>["modal"];
} | null>(null);

export const AppMessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageApi, messageContextHolder] = message.useMessage();
  const { modal } = App.useApp();

  return (
    <AppContext.Provider value={{ message: messageApi, modal }}>
      {messageContextHolder}
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppMessageProvider");
  }
  return context;
};
