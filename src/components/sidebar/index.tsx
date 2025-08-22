import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SidebarWrapper,
  LogoSection,
  LogoImage,
  LogoTitle,
  NavLink,
  NavIcon,
  NavImage,
  NavLabel,
  NavList,
  Overlay,
  ToggleButton,
} from "./styles";

import {
  FaTh,
  FaList,
  FaUser,
  FaShoppingBag,
  FaGift,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import Logo from "../../assets/images/sidebar/Logo.png";
import BrandsIcon from "../../assets/icons/brand.svg";
import policies from "../../assets/icons/policy.svg";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [activeLink, setActiveLink] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 320);
  const navigate = useNavigate();

  const handleClick = (label: string, path: string) => {
    setActiveLink(label);
    navigate(path);
    if (isMobile) setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 320;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setIsSidebarOpen(true); // Sidebar should stay open on desktop
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial run
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSidebarOpen]);

  return (
    <>
      {isMobile && (
        <>
          <ToggleButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </ToggleButton>
          {isSidebarOpen && <Overlay onClick={() => setIsSidebarOpen(false)} />}
        </>
      )}

      <SidebarWrapper isOpen={isSidebarOpen || !isMobile}>
        <LogoSection>
          <LogoImage src={Logo} alt="Logo" />
          <LogoTitle>
            GIFT <strong>CARD</strong>
          </LogoTitle>
        </LogoSection>

        <NavList>
          <NavLink active={activeLink === "Dashboard"} onClick={() => handleClick("Dashboard", "/pages/dashboard")}>
            <NavIcon><FaTh /></NavIcon>
            <NavLabel>Dashboard</NavLabel>
          </NavLink>

          <NavLink active={activeLink === "Categories"} onClick={() => handleClick("Categories", "/pages/categories")}>
            <NavIcon><FaList /></NavIcon>
            <NavLabel>Categories</NavLabel>
          </NavLink>

          <NavLink active={activeLink === "Users"} onClick={() => handleClick("Users", "/pages/users")}>
            <NavIcon><FaUser /></NavIcon>
            <NavLabel>Users</NavLabel>
          </NavLink>

          <NavLink active={activeLink === "Orders"} onClick={() => handleClick("Orders", "/pages/orders")}>
            <NavIcon><FaShoppingBag /></NavIcon>
            <NavLabel>Orders</NavLabel>
          </NavLink>

          <NavLink active={activeLink === "Gift Cards"} onClick={() => handleClick("Gift Cards", "/pages/giftcards")}>
            <NavIcon><FaGift /></NavIcon>
            <NavLabel>Gift Cards</NavLabel>
          </NavLink>

          <NavLink active={activeLink === "Total Brands"} onClick={() => handleClick("Total Brands", "/pages/totalbrands")}>
            <NavImage src={BrandsIcon} alt="Total Brands" />
            <NavLabel>Total Brands</NavLabel>
          </NavLink>

          <NavLink active={activeLink === "Policies"} onClick={() => handleClick("Policies", "/pages/policies")}>
            <NavImage src={policies} alt="Policies" />
            <NavLabel>Policies</NavLabel>
          </NavLink>
        </NavList>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
