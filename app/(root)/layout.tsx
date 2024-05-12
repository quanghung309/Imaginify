import React from "react";
import SideBar from "@/components/shared/Sidebar";
import MobileNav from "@/components/shared/MobileNav";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
      <SideBar />
      <MobileNav />
      <div className="mt-16 flex-1 overflow-auto py-8 lg:mt-0 lg:max-h-screen lg:py-10">
        <div className="max-w-5xl mx-auto px-5 md:px-10 w-full text-dark-400 p-16-regular">
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
