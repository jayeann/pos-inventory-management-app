"use client";
import React from "react";
import {
  Calculator,
  Folders,
  HandCoins,
  Layout,
  SquareArrowUpRight,
  LucideIcon,
  Menu,
  Package,
  Settings,
  SquareArrowDown,
  Users,
} from "lucide-react";
// import { useAppDispatch, useAppSelector } from "@/app/redux";
// import { setIsSidebarCollapsed } from "@/state";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  // isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
}: // isCollapsed,
SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname.includes(href) || (pathname === "/" && href === "/dashboard ");
  return (
    <Link href={href}>
      {/* ${
            isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
          } */}
      <div
        className={`cursor-pointer flex items-center justify-start px-8 py-4"
         hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors 
          ${isActive && "bg-blue-200 text-white"}`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        {/* ${
            isCollapsed ? "hidden" : "block"
          } */}
        <span className={`block font-medium text-gray-700`}>{label}</span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  // const dispatch = useAppDispatch();
  // const isSidebarCollapsed = useAppSelector(
  //   (state) => state.global.isSidebarCollapsed
  // );

  // const toggleSidebar = () => {
  //   dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  // };

  // ${isSidebarCollapsed ? "w-0 md:w-16" : "w:72 md:w-64"}
  const sidebarClassName = `fixed flex flex-col bg-white transition-all duration-300 overflow-hidden h-screen shadow-md z-40`;
  {
    /* <div class="flex h-screen">
        <!-- Sidebar -->
        <div class="w-64 bg-gray-800 text-white p-4">
            <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>
            <ul class="space-y-4">
                <li><a href="#" class="block hover:bg-gray-700 px-4 py-2 rounded">Home</a></li>
                <li><a href="#" class="block hover:bg-gray-700 px-4 py-2 rounded">Profile</a></li>
                <li><a href="#" class="block hover:bg-gray-700 px-4 py-2 rounded">Messages</a></li>
                <li><a href="#" class="block hover:bg-gray-700 px-4 py-2 rounded">Settings</a></li>
                <li><a href="#" class="block hover:bg-gray-700 px-4 py-2 rounded">Logout</a></li>
            </ul>
        </div> */
  }
  return (
    <div className={sidebarClassName}>
      <div
        className={`flex justify-between md:justify-normal items-center pt-8 
         `}
        //  ${isSidebarCollapsed ? "px-5" : "px-8"}
      >
        <img
          src={"/images/icon-logo.png"}
          alt="logo"
          className="w-10 h-10 object-cover rounded-md"
        />
        {/* ${isSidebarCollapsed ? "hidden" : "block"} */}
        <h1
          className={`
          font-extrabold text-2xl`}
        >
          Klippbox
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          // onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4"></Menu>
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          // isCollapsed={isSidebarCollapsed}
        />
        {/* <SidebarLink
          href="/point-of-sale"
          icon={Calculator}
          label="Point of Sale"
          // isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/orders"
          icon={SquareArrowUpRight}
          label="Outbound Orders"
          // isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/restock"
          icon={SquareArrowDown}
          label="Inventory Restock"
          // isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Package}
          label="Products"
          // isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/category"
          icon={Folders}
          label="Category"
          // isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/balance"
          icon={Layout}
          label="Outstanding Balance" // Balance Overview, Financial Balances, Account Balance Monitor
          // isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={HandCoins}
          label="Expenses"
          // isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={Users}
          label="Users"
          // isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={Settings}
          label="Settings"
          // isCollapsed={isSidebarCollapsed}
        /> */}
      </div>
      {/* FOOTER */}
      <div className="flex items-center justify-center h-20">
        {/* {!isSidebarCollapsed && ( */}
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 Klippbox
        </p>
        {/* )} */}
      </div>
    </div>
  );
};

export default Sidebar;
