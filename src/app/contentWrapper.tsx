"use client";

import React from "react";
import { usePathname } from "next/navigation";
// import Navbar from "../(components)/Navbar";
import Sidebar from "../(components)/Sidebar";
// import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return <>{children}</>;
  }

  return (
    <div className={`flex bg-gray-100 text-gray-900 w-full min-h-screen`}>
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full bg-gray-100`}
        //   ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}
      >
        {/* <Navbar /> */}
        {children}
      </main>
    </div>
  );
};

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    // <StoreProvider>
    <DashboardLayout>{children}</DashboardLayout>
    // </StoreProvider>
  );
};

export default ContentWrapper;
