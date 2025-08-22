import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { LayoutWrapper, ContentArea } from "./styles";

const MainLayouts: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 320);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 320) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <LayoutWrapper>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Header />
      <ContentArea isSidebarOpen={isSidebarOpen}>
        <Outlet />
      </ContentArea>
    </LayoutWrapper>
  );
};

export default MainLayouts;
