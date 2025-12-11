import styled from "styled-components";

interface SidebarWrapperProps {
  isOpen: boolean;
}

export const SidebarWrapper = styled.aside<SidebarWrapperProps>`
  position: fixed;
  top: 0;
  width: 200px;
  height: 100vh;
  background-color: #0b0033;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  z-index: 1100;
  transition: left 0.3s ease;

  @media (min-width: 701px) {
    left: 0;
  }

  @media (max-width: 700px) {
    padding-top: 2rem;
    width: 170px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-170px")};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;


export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const LogoImage = styled.img`
  width: 31px;
  height: 38px;
`;

export const LogoTitle = styled.h1`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 300;

  strong {
    font-weight: 800;
  }
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

interface NavLinkProps {
  active?: boolean;
}

export const NavLink = styled.a<NavLinkProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 180px;
  height: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? "#7E0FC6" : "transparent")};
  color: ${({ active }) => (active ? "#ffffff" : "#FFFFFF")};
  text-decoration: none;
  cursor: pointer;
  transition: background-color 300ms ease-out, transform 200ms ease, filter 300ms;

  &:hover {
    background-color: ${({ active }) => (active ? "#7E0FC6" : "#1f1f3b")};
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  div {
    filter: ${({ active }) => (active ? "brightness(1.6)" : "none")};
    transition: filter 300ms ease-out;
  }

  span {
    transition: color 300ms ease-out;
  }

  @media (max-width: 768px) {
    width: 135px;
  }
`;

export const NavIcon = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
`;

export const NavImage = styled.img`
  width: 18px;
  height: 18px;
`;

export const NavLabel = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`;
