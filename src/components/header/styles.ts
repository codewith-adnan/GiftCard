import styled from "styled-components";
import { FaBell, FaChevronDown } from "react-icons/fa";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 220px;
  right: 0;
  height: 70px;
  background-color: #fff;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    left: 200px;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    left: 0;
    padding: 0 0.5rem;
    justify-content: center;
  }

  @media (max-width: 320px) {
    left: 0;
    height: 70px;
    gap: 1rem;
  }
`;

export const NotificationButton = styled.button`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #E2E8F0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;

  @media (max-width: 320px) {
    width: 2.75rem;
    height: 2.75rem;
  }
`;

export const BellIcon = styled(FaBell)`
  color: #4b5563;
  font-size: 1.25rem;
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -3px;
  right: 0;
  width: 1rem;
  height: 1rem;
  background: #7E0FC6;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 180px;
  padding: 0.4rem 0.7rem;
  border: 1px solid #E2E8F0;
  border-radius: 0.5rem;
  background: transparent;

  @media (max-width: 480px) {
    width: auto;
  }
  @media (max-width: 320px) {
    width: 10.75rem;
    height: 2.75rem;
    margin-right: -4.50rem;
  }

  @media (max-width: 320px) {
    padding: 0.3rem 0.5rem;
    
  }
`;

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  object-fit: cover;

  @media (max-width: 320px) {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

export const Username = styled.span`
  color: #1f2937;
  font-size: 0.875rem;
  font-weight: 600;

  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`;

export const ChevronIcon = styled(FaChevronDown)`
  font-size: 0.75rem;
  margin-left: auto;
  cursor: pointer;
  color: #4b5563;
`;

export const PopupWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 350px;
  height: 109px;
  padding: 1rem;
  z-index: 1000;

  @media (max-width: 320px) {
    width: 90vw;
  }
`;

export const ProfileDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 6px;
  z-index: 100;
  min-width: 160px;
  padding: 8px 0;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
