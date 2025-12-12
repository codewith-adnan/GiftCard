import styled from "styled-components";

interface ContentAreaProps {
  isSidebarOpen: boolean;
}

export const LayoutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
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

  @media (min-width: 701px) {
    margin-left: 200px;
    padding: 2rem 2rem 2rem 2rem;
    width: calc(100% - 200px);
  }

  @media (max-width: 700px) {
    margin-left: 0;
    padding: 2rem 2rem;
    width: 100%;
  }

  @media (max-width: 320px) {
    height: auto;
    padding: 1.5rem 1.5rem;
    width: 100%;
  }
`;
