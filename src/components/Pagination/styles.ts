import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #111827;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const PaginationInfo = styled.p`
  padding-left: 0.25rem;
  @media (max-width: 320px) {
display:none;  }
`;

export const PaginationNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PageButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid #E2E8F0;
  color: #374151;
  background-color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 320px) {
    width: 30px;
    height: 30px;
  }

  &.active {
    background-color: #7E0FC6;
    color: white;
    border: none;
  }

  
`;

export const PageNavButton = styled(PageButton)`
  font-size: 0.75rem;
`;

export const Dots = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  font-weight: bold;
  color:#1C1C27;
  letter-spacing: 2px;
`;