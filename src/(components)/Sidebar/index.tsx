"use client";
import React from "react";
import {
  Calculator,
  Folders,
  HandCoins,
  Layout,
  ListChecks,
  LucideIcon,
  Menu,
  Package,
  Settings,
  Users,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "@/app/redux/sidebar";
import { RootState, AppDispatch } from "@/app/redux/store";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname.includes(href) || (pathname === "/" && href === "/dashboard ");
  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center 
          ${
            isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
          } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors 
          ${isActive && "bg-blue-200 text-white"}`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  // const isSidebarCollapsed = useAppSelector(
  //   (state) => state.global.isSidebarCollapsed
  // );

  // const toggleSidebar = () => {
  //   dispatch(toggleSidebar());
  // };

  const sidebarClassName = `fixed flex flex-col 
  bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40 p-5
   ${isOpen ? "w-0 md:w-16" : "w:72 md:w-64"}
  `;

  return (
    <div className={sidebarClassName}>
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 
        ${isOpen ? "px-5" : "px-8"}`}
      >
        <div>logo</div>

        <h1
          className={` ${isOpen ? "hidden" : "block"}
          font-extrabold text-2xl`}
        >
          PosInvent
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => dispatch(toggleSidebar())}
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
          isCollapsed={isOpen}
        />
        <SidebarLink
          href="/point-of-sale"
          icon={Calculator}
          label="Point of Sale"
          isCollapsed={isOpen}
        />
        <SidebarLink
          href="/orders"
          icon={Folders}
          label="Orders"
          isCollapsed={isOpen}
        />
        <SidebarLink
          href="/products"
          icon={Package}
          label="Products"
          isCollapsed={isOpen}
        />
        <SidebarLink
          href="/category"
          icon={ListChecks}
          label="Category"
          isCollapsed={isOpen}
        />
        <SidebarLink
          href="/balance"
          icon={Layout}
          label="Outstanding Balance" // Balance Overview, Financial Balances, Account Balance Monitor
          isCollapsed={isOpen}
        />
        <SidebarLink
          href="/expenses"
          icon={HandCoins}
          label="Expenses"
          isCollapsed={isOpen}
        />
        <SidebarLink
          href="/users"
          icon={Users}
          label="Users"
          isCollapsed={isOpen}
        />
        <SidebarLink
          href="/settings"
          icon={Settings}
          label="Settings"
          isCollapsed={isOpen}
        />
      </div>
      {/* FOOTER */}
      <div className="flex items-center justify-center h-20">
        {/* {!isSidebarCollapsed && ( */}
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 PosInvent
        </p>
        {/* )} */}
      </div>
    </div>
  );
};

export default Sidebar;
