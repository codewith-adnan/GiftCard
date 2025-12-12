import styled from "styled-components";

interface ContentAreaProps {
  isSidebarOpen: boolean;
}

export const LayoutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

export const ContentArea = styled.div<ContentAreaProps>`
  margin-top: 35px;
  margin-left: 0;
  padding: 2rem;
  height: calc(110vh - 35px);
  background-color: #f9f9f9;
  transition: margin-left 0.3s ease;
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #7e22ce;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #6b21a8;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #7e22ce #f1f1f1;

  @media (min-width: 701px) {
    margin-left: 220px;
    padding: 2rem;
    width: calc(100% - 220px);
  }

  @media (max-width: 700px) {
    margin-left: 0;
    padding: 2rem 0;
    width: 100%;
  }

  @media (max-width: 320px) {
    height: auto;
    padding: 1.5rem 0;
    width: 100%;
  }
`;
