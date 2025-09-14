import React from "react";
import Link from "next/link";
import BrandColumn from "./_components/brand-column";
import NavigationColumn from "./_components/navigation-column";
import ContactColumn from "./_components/contact-us-column";
// Import the column components

const Footer = () => {
  return (
    <div className="font-sans">
      <footer className="py-12 bg-white text-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column (remains the same) */}
            <BrandColumn />

            {/* Column 1: About FLY-INN */}
            <NavigationColumn
              title="About FLY-INN"
              links={[
                { label: "About Us", href: "/public/about-us" },
                { label: "Philanthropy", href: "/public/philanthropy" },
                { label: "Squawks (Blog)", href: "/public/squawks" }, // Renamed from "squaks" to "Squawks (Blog)" for clarity
                { label: "Gallery", href: "/puiblic/gallery" },
              ]}
            />

            {/* Column 2: Resources & Legal */}
            <NavigationColumn
              title="Resources & Legal"
              links={[
                { label: "Terms of Service", href: "/public/terms-of-service" },
                { label: "Privacy Policy", href: "/public/privacy-policy" },
                { label: "FAQ", href: "/faq" },
                { label: "Testimonials", href: "/public/testimonials" },
              ]}
            />

            {/* Column 3: Contact & Support (If ContactColumn is still desired, otherwise merge into Resources or a new "Support" column) */}
            {/* For now, keeping ContactColumn separate as it includes specific contact details */}
            <ContactColumn />

            {/* If you have a separate social follow bar at the bottom of the footer, you can place it here too, or integrate into BrandColumn */}
            {/* Example: <SocialFollowBar /> if it's placed within the grid, otherwise it can be a separate row after the grid */}
          </div>
        </div>
      </footer>

      {/* Bottom Bar (remains the same) */}
      <div className="py-5 bg-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© All Rights Reserved by FLY-INN © 2023-2025</p>
            <div className="mt-2 md:mt-0 flex space-x-4">
              <Link
                href="/public/accessibility" // Use actual paths
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Accessibility
              </Link>
              <Link
                href="/public/sitemap" // Use actual paths
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Sitemap
              </Link>
              <Link
                href="/cookie-policy" // Use actual paths
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
