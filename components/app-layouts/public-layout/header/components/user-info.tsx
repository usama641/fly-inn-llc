"use client";
import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { MdMenu, MdPerson } from "react-icons/md";
import Link from "next/link";
import { signOut } from "next-auth/react";

const handleLogout = async () => {
  // Implement logout logic
  console.log("Logging out...");

  await signOut({ callbackUrl: "/auth/login" });
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link
        className="w-[200px] block pb-2"
        rel="noopener noreferrer"
        href="/auth/login"
      >
        Login
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        className="w-[200px] block pb-2"
        rel="noopener noreferrer"
        href="/auth/signup"
      >
        Sign up
      </Link>
    ),
    // icon: <SmileOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "3",
    label: (
      <Link
        className="w-[200px] block pb-2"
        rel="noopener noreferrer"
        href="/public/become-a-host/list-space"
      >
        Become a host
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link
        className="w-[200px] block pb-2"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Help
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <span
        className="w-[200px] block pb-2"
        onClick={() => {
          handleLogout();
        }}
      >
        Sign out
      </span>
    ),
  },
];

const UserInfo: React.FC = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()}>
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-4 space-x-2 cursor-pointer shadow-md">
        <MdMenu size={18} />
        <MdPerson size={18} />
      </div>
    </a>
  </Dropdown>
);

export default UserInfo;
