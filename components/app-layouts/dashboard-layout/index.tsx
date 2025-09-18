"use client";
import React, { useState, useEffect } from "react";
import {
  UserOutlined,
  HomeOutlined,
  CalendarOutlined,
  RocketOutlined,
  StarOutlined,
  ShopOutlined,
  MailOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  ApartmentOutlined,
  LockOutlined,
  UsergroupAddOutlined,
  HeartFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Layout, Menu, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Correct hook for Next.js 13+
import { signOut, useSession } from "next-auth/react";
import {
  MdCancel,
  MdOutlineFeaturedPlayList,
  MdOutlinePayment,
} from "react-icons/md";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["dashboard"]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const pathname = usePathname();
  const { data: session } = useSession();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const userRole = session?.user?.role;

  console.log("userRole", userRole);

  useEffect(() => {
    const path = pathname;
    const pathSegments = path.split("/").filter((segment) => segment);

    // Determine the selected key based on the last segment of the path
    const lastSegment = pathSegments[pathSegments.length - 1];
    const newSelectedKeys = [lastSegment || "dashboard"];
    setSelectedKeys(newSelectedKeys);

    // Automatically open the parent menu based on the path
    if (pathSegments.length > 1) {
      const parentKey = pathSegments[1];
      setOpenKeys([parentKey]);
    } else {
      setOpenKeys([]);
    }
  }, [pathname]); // Depend on pathname from usePathname

  // Function to create a MenuItem with a Next.js Link
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  href?: string
): MenuItem {
  // Use Ant Design's built-in label rendering for simplicity and accessibility
  return {
    key,
    icon,
    children,
    label: href ? <Link href={href}>{label}</Link> : label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Dashboard",
    "dashboard",
    <DashboardOutlined className="text-lg" />,
    undefined,
    "/dashboard"
  ),
  getItem(
    "Profile",
    "profile",
    <UserOutlined className="text-lg" />,
    undefined,
    "/dashboard/profile"
  ),
  getItem(
    "Listings",
    "listings",
    <HomeOutlined className="text-lg" />,
    [
      getItem(
        "Stays",
        "stays",
        <HomeOutlined className="text-base" />,
        undefined,
        "/dashboard/listings/stays"
      ),
  getItem(
    "Business",
    "business",
    <ShopOutlined className="text-lg" />,
    undefined,
    "/dashboard/listings/business"
  ),
    ],
    "/dashboard/listings"
  ), 
  getItem(
    "Bookings",
    "bookings",
    <CalendarOutlined className="text-lg" />,
    undefined,
    "/dashboard/bookings"
  ),
  getItem(
    "Trips",
    "trips",
    <RocketOutlined className="text-lg" />,
    undefined,
    "/dashboard/trips"
  ),
  getItem(
    "Reviews",
    "reviews",
    <StarOutlined className="text-lg" />,
    undefined,
    "/dashboard/reviews"
  ),
  getItem(
    "Airmail",
    "airmail",
    <MailOutlined className="text-lg" />,
    undefined,
    "/dashboard/favourites"
  ),
    getItem(
    "My Favourites",
    "favourites",
    <HeartFilled className="text-lg" />,
    undefined,
    "/dashboard/favourites"
  ),
  
  ...(userRole?.includes("admin")
      ? [
          getItem("Features", "features", <MdOutlineFeaturedPlayList />, undefined, "/dashboard/features"),
          getItem("Cancellation Policy", "cancelation_policy", <MdCancel />, undefined, "/dashboard/cancellation-policy"),
          getItem("Users", "user", <UsergroupAddOutlined className="text-lg" />, undefined, "/dashboard/user"),
          
        ]
      : []),
  {
    type: "divider",
    className: "my-3",
  },

  getItem("Settings", "settings", <SettingOutlined className="text-lg" />, [
    getItem(
      "Change Password",
      "change_password",
      <LockOutlined className="text-base" />,
      undefined,
      "/dashboard/settings/change-password"
    ),
  ]),
  getItem(
    "Payment Method",
    "payment_method",
    <MdOutlinePayment className="text-lg" />,
    undefined,
    "/dashboard/payment"
  ),
  getItem(
    "Logout",
    "logout",
    <LogoutOutlined className="text-lg" />,
    undefined,
    "/dashboard/logout"
  ),
];


  // Function to find the title from the menu items
  const getTitleFromPath = (path: string) => {
    const pathSegments = path.split("/").filter((segment) => segment);
    const lastSegment = pathSegments[pathSegments.length - 1];

    if (!lastSegment || lastSegment === "dashboard") {
      return "Dashboard";
    }

    // Find the item by key in the menu
    const findItem = (
      itemsArray: MenuItem[] | undefined
    ): string | undefined => {
      if (!itemsArray) return undefined;
      for (const item of itemsArray) {
        const antMenuItem = item as {
          key?: string;
          label?: React.ReactNode;
          children?: MenuItem[];
        };
        if (antMenuItem.key === lastSegment) {
          // Safely extract the label, handling strings and JSX elements
          if (typeof antMenuItem.label === "string") {
            return antMenuItem.label;
          }
          if (React.isValidElement(antMenuItem.label)) {
            // This is the fixed part: Safely access props.children
            const child = (antMenuItem.label as any).props.children;
            return typeof child === "string" ? child : undefined;
          }
          return undefined;
        }
        if (antMenuItem.children) {
          const childTitle = findItem(antMenuItem.children);
          if (childTitle) return childTitle;
        }
      }
      return undefined;
    };

    // First try to find the title from the menu items directly
    let title = findItem(items);
    if (title) return title;

    // If not found in menu, format the segment as a title
    return (
      lastSegment.charAt(0).toUpperCase() +
      lastSegment.slice(1).replace(/-/g, " ")
    );
  };

  const handleLogout = async () => {
    // Implement logout logic
    console.log("Logging out...");

    await signOut({ callbackUrl: "/auth/login" });
  };

  const dropdownItems: MenuProps["items"] = [
    {
      key: "profile",
      label: (
        <div className="flex items-center px-3 py-2">
          <UserOutlined className="mr-3 text-gray-600" />
          <span className="text-gray-700">Profile</span>
        </div>
      ),
    },
    {
      key: "settings",
      label: (
        <div className="flex items-center px-3 py-2">
          <SettingOutlined className="mr-3 text-gray-600" />
          <span className="text-gray-700">Settings</span>
        </div>
      ),
    },
    { type: "divider" },
    {
      key: "logout",
      label: (
        <div className="flex items-center px-3 py-2 text-red-500">
          <LogoutOutlined className="mr-3" />
          <span>Logout</span>
        </div>
      ),
      onClick: handleLogout,
    },
  ];

  return (
    <Layout hasSider className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sider
        width={256}
        className="border-r border-gray-200 bg-white h-screen sticky top-0 overflow-auto"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="flex items-center bg-[#f9f9f9] justify-center px-4 h-16 border-b border-gray-200">
          <Link href="/" className="flex items-center justify-center space-x-2">
            <Image
              src="/assets/logo/fly-inn-logo.png"
              alt="Logo"
              width={collapsed ? 32 : 80}
              height={32}
              className="object-contain transition-all duration-300"
            />
          </Link>
        </div>

        <Menu
          theme="light"
          mode="inline"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={(keys) => setOpenKeys(keys as string[])}
          items={items}
          className="px-2 py-4"
        />
      </Sider>

      {/* Main Content */}
      <Layout className="bg-gray-50">
        {/* Modern Header */}
        <Header className="sticky top-0 z-10 w-full flex items-center justify-between bg-white px-4 h-16">
          <div className="flex items-center">
            <Button
              type="text"
              icon={
                collapsed ? (
                  <MenuUnfoldOutlined className="text-gray-600" />
                ) : (
                  <MenuFoldOutlined className="text-gray-600" />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
            />
            {/* <h1 className="ml-4 text-xl font-semibold text-gray-800 hidden md:block">
              {getTitleFromPath(pathname)}
            </h1> */}
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 rounded-full hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <Dropdown
              menu={{ items: dropdownItems }}
              trigger={["click"]}
              placement="bottomRight"
              overlayClassName="w-48"
              arrow={{ pointAtCenter: true }}
            >
              <div className="flex items-center cursor-pointer  p-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#AF2322] to-[#8A1C1C] flex items-center justify-center text-white font-semibold">
                  U
                </div>
                <span className="ml-2 text-gray-700 hidden md:block">
                  {session?.user?.display_name || "User"}
                </span>
              </div>
            </Dropdown>
          </div>
        </Header>

        {/* Content Area */}
        <Content className="m-4">
          <div className="min-h-[calc(100vh-8rem)] rounded-xl  ">
            {children}
          </div>
        </Content>

        {/* Footer */}
        <Footer className="text-center py-4 bg-white border-t border-gray-200 text-gray-500">
          © {new Date().getFullYear()} Fly Inn. All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
