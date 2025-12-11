import React, { useState, useRef, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderWrapper,
  NotificationButton,
  Badge,
  ProfileButton,
  Avatar,
  Username,
  ChevronIcon,
  PopupWrapper,
  ProfileDropdown,
  DropdownItem,
  BurgerButton,
  BurgerLine,
  RightSection,
} from "./styles";

import Notification from "../../models/notificationBell";
import userimg from "../../assets/images/header/userimage.png";
import { FaRegBell, FaUser, FaRegBell as BellIcon, FaCog } from "react-icons/fa";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const bellRef = useRef<HTMLButtonElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        bellRef.current &&
        !bellRef.current.contains(e.target as Node)
      ) {
        setShowPopup(false);
      }
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <HeaderWrapper>
      <BurgerButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label="Toggle Sidebar">
        <BurgerLine size="small" />
        <BurgerLine size="medium" />
        <BurgerLine size="large" />
      </BurgerButton>

      <RightSection>
        <div style={{ position: "relative" }}>
          <NotificationButton
            aria-label="Notifications"
            onClick={() => setShowPopup((p) => !p)}
            ref={bellRef}
          >
            <FaRegBell style={{ color: "#808D9E", width: 20, height: 20 }} />
            <Badge>1</Badge>
          </NotificationButton>

          {showPopup && (
            <PopupWrapper ref={popupRef}>
              <Notification />
            </PopupWrapper>
          )}
        </div>

        <div style={{ position: "relative" }}>
          <ProfileButton onClick={() => setShowDropdown((p) => !p)}>
            <Avatar src={userimg} alt="User avatar" />
            <Username>Admin</Username>
            <ChevronIcon />
          </ProfileButton>

          {showDropdown && (
            <ProfileDropdown ref={dropdownRef}>
              <DropdownItem onClick={() => navigate('/pages/myProfile')}>
                <FaUser /> My Profile
              </DropdownItem>
              <DropdownItem onClick={() => navigate('/pages/notification')}>
                <BellIcon /> Notification
              </DropdownItem>
              <DropdownItem onClick={() => navigate('/pages/settings')}>
                <FaCog /> Settings
              </DropdownItem>
            </ProfileDropdown>
          )}
        </div>
      </RightSection>
    </HeaderWrapper>
  );
};

export default Header;
