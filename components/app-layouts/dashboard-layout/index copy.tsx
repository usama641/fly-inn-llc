"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserOutlined,
  HeartFilled,
  BookOutlined,
  ApartmentOutlined,
  SendOutlined,
  StarOutlined,
  ShopOutlined,
  MailOutlined,
  SettingOutlined,
  LogoutOutlined,
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Drawer } from "antd";

const navItems = [
  { icon: <UserOutlined />, label: "User Profile", href: "/dashboard" },
  {
    icon: <HeartFilled />,
    label: "My Favourites",
    href: "/dashboard/favourites",
  },
  { icon: <BookOutlined />, label: "My Bookings", href: "/dashboard/bookings" },
  {
    icon: <ApartmentOutlined />,
    label: "My Listings",
    href: "/dashboard/listings",
  },
  { icon: <SendOutlined />, label: "My Trips", href: "/dashboard/trips" },
  { icon: <StarOutlined />, label: "My Reviews", href: "/dashboard/reviews" },
  { icon: <ShopOutlined />, label: "My Business", href: "/dashboard/business" },
  { icon: <MailOutlined />, label: "AirMail", href: "/dashboard/airmail" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileDrawerVisible, setMobileDrawerVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle window resize with debounce
  const checkMobile = useCallback(() => {
    const isMobileView = window.innerWidth < 1024;
    setIsMobile(isMobileView);
    if (isMobileView) {
      setCollapsed(true);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    checkMobile();

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [checkMobile]);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileDrawerVisible(!mobileDrawerVisible);
    } else {
      setCollapsed(!collapsed);
    }
  };

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  const NavContent = () => (
    <>
      <div className="flex items-center justify-center h-16 lg:h-24 border-b px-4 lg:px-6">
        <img
          src="/assets/logo/fly-inn-logo.png"
          alt="Fly-Inn Logo"
          className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300"
        />
      </div>
      <nav className="flex-1 px-2 py-4 lg:py-6 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => isMobile && setMobileDrawerVisible(false)}
              className={`flex items-center gap-3 px-3 lg:px-5 py-2 lg:py-3 rounded-lg mb-1 font-medium transition-colors
                ${
                  isActive
                    ? "bg-[#E53935] text-white shadow"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#E53935]"
                }`}
            >
              <span
                className={`text-lg ${
                  isActive ? "text-white" : "text-gray-600"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`flex-1 ${
                  collapsed && !isMobile ? "hidden" : "block"
                } ${isActive ? "text-white" : "text-gray-600"}`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
        {/* Settings with dropdown arrow */}
        {!collapsed && (
          <div className="flex items-center gap-3 px-3 lg:px-5 py-2 lg:py-3 rounded-lg mb-1 text-gray-600 hover:bg-gray-100 hover:text-[#E53935] cursor-pointer transition-colors">
            <SettingOutlined className="text-lg" />
            <span className="flex-1">Settings</span>
            <DownOutlined />
          </div>
        )}
      </nav>
      {!collapsed && (
        <div className="mt-auto mb-6 px-5">
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#E53935] w-full py-2 transition-colors">
            <LogoutOutlined />
            <span>Logout</span>
          </button>
        </div>
      )}
    </>
  );

  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:block bg-white border-r flex flex-col sticky top-0 h-screen z-30 transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}`}
      >
        <NavContent />
      </aside>

      {/* Mobile Drawer */}
      <Drawer
        placement="left"
        onClose={() => setMobileDrawerVisible(false)}
        open={mobileDrawerVisible}
        width={256}
        className="lg:hidden"
        closeIcon={<CloseOutlined className="text-gray-500" />}
        styles={{
          body: {
            padding: 0,
            backgroundColor: "white",
          },
          header: {
            padding: "16px",
            borderBottom: "1px solid #f0f0f0",
            backgroundColor: "white",
          },
          content: {
            backgroundColor: "white",
          },
          mask: {
            backgroundColor: "rgba(0, 0, 0, 0.45)",
          },
        }}
        rootClassName="dashboard-drawer"
      >
        <div className="h-full flex flex-col bg-white">
          <NavContent />
        </div>
      </Drawer>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="flex items-center justify-between h-16 lg:h-24 px-4 lg:px-10 border-b bg-white sticky top-0 z-20">
          <Button
            type="text"
            icon={<MenuUnfoldOutlined />}
            onClick={toggleSidebar}
            className="lg:hidden text-gray-500 hover:text-[#E53935]"
          />
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden md:flex gap-4 text-gray-400 text-xl lg:text-2xl">
              <i className="ri-youtube-line" />
              <i className="ri-facebook-circle-line" />
              <i className="ri-instagram-line" />
              <i className="ri-twitter-line" />
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="font-semibold text-base lg:text-lg hidden sm:inline">
                Carollyne
              </span>
              <Avatar
                src="/assets/images/testimonials/user1.jpg"
                size={32}
                className="lg:w-10 lg:h-10"
              />
            </div>
          </div>
        </header>
        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-10 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
