import styled from "styled-components";

interface ContentAreaProps {
  isSidebarOpen: boolean;
}

export const LayoutWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export const ContentArea = styled.div<ContentAreaProps>`
  margin-top: 35px;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "220px" : "0px")};
  padding: 20px;
  height: calc(110vh - 35px);
  background-color: #f9f9f9;
  transition: margin-left 0.3s ease;

  @media (max-width: 320px) {
    margin-left: 10px;
    height: auto;
  }
`;
