"use client";
import OnLoadAnimation from "../components/shared/OnLoadAnimation";
import { SessionProvider, useSession } from "next-auth/react";
import * as React from "react";
import { RootState } from "../redux/store";

const SessionProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { status } = useSession();
  return <div>{status === "loading" ? <OnLoadAnimation /> : children}</div>;
};

export default function NextAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <SessionProviderWrapper>{children}</SessionProviderWrapper>
    </SessionProvider>
  );
}
