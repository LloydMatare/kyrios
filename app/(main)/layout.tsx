import Header from "@/components/header";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="">{children}</main>
    </div>
  );
}

export default MainLayout;
