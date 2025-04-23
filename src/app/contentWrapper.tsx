"use client";

import React from "react";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import Navbar from "../(components)/Navbar";
import Sidebar from "../(components)/Sidebar";
import { store, RootState } from "../redux/store";
import { useSelector } from "react-redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const pathname = usePathname();
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return <>{children}</>;
  }

  return (
    <div className={`flex w-full min-h-screen`}>
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full bg-gray-100 px-8
        ${isOpen ? "md:pl-72" : "md:pl-24"}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <DashboardLayout>{children}</DashboardLayout>
    </Provider>
  );
};

export default ContentWrapper;
