"use client";

import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";
import SocialLinks from "./social-links";
import FilterLinks from "./filter-links";
import { usePathname } from "next/navigation";

const LayoutPublic = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const isCreateListing = pathname === "/become-a-host/create-listing";

  return (
    <Fragment>
      <Header />

      {/* Conditionally render these components only on homepage */}
      {isHomepage && (
        <>
          <SocialLinks />
          <FilterLinks />
        </>
      )}

      {children}
      {!isCreateListing && <Footer />}
    </Fragment>
  );
};

export default LayoutPublic;
