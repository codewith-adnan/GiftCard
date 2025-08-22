import styled from 'styled-components';

export const GiftWrapper = styled.div`
  min-height: 100vh;
  padding: 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
`;

export const GiftHeading = styled.h2`
  color: #1f2937;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 1rem;
`;

export const GiftForm = styled.form`
  background-color: #ffffff;
  height: auto;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
@media (max-width: 320px) {
      flex-direction: column;
      width: 100%;
      ;
    }
  .input-row {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media (max-width: 320px) {
      flex-direction: column;
      ;
    }
  }

  .button-row {
    display: flex;
    margin-top: 1rem;
    gap: 1rem;
      justify-content: flex-end;

  }
`;

export const GiftInput = styled.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: #9ca3af;
  border: 1px solid #d1d5db;
  outline: none;
  height: 28px;
    border-radius: 3px;
@media (max-width: 320px) {
  height: 50px;
}
`;

export const GiftSelect = styled.select`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: #374151;
  border: 1px solid #d1d5db;
  border-radius: 3px;
  outline: none;
  width:250px ;
  @media (max-width: 320px) {
      width: 223px;
    }

`;

export const GiftButton = styled.button`
background-color: #7E0FC6;
    color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 0.5rem 1.25rem;
    border-radius: 0.375rem;
    border: none;
    width: 185px;
    cursor: pointer;
    height: 44px;
    transition: background-color 0.3s;
    &:hover {
      background-color: #6b21a8;
    }
  &:hover {
    background-color: #581c87;
  }
`;

export const GiftResetButton = styled.button`
  color: #6b7280;
    font-size: 16px;
     width: 185px;
    font-weight: 600;
    padding: 0.5rem 1.25rem;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
     height: 44px;
    background-color: #F9F9F9;
    transition: background-color 0.3s;
    &:hover {
      background-color: #f3f4f6;
    }
  
`;

export const GiftTableWrapper = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  overflow-x: auto;
  @media (max-width: 320px) {
 width:112%;
    }
`;

export const GiftTable = styled.table`
  min-width: 100%;
  font-size: 0.875rem;
  color: #374151;
  text-align: left;

`;

export const GiftThead = styled.thead`
  border-bottom: 1px solid #e5e7eb;
`;

export const GiftTbody = styled.tbody``;

export const GiftTr = styled.tr`
   border-bottom: 1px solid #E2E8F0;
;
`;

export const GiftTh = styled.th`
  font-weight: 600;
  padding: 0.75rem 1rem;
     border-bottom: 1px solid #E2E8F0;

`;

export const GiftTd = styled.td`
  padding: 0.75rem 1rem;
  font-weight: 400;
     border-bottom: 1px solid #E2E8F0;
`;
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
      display: none;
    }
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
    margin-left: -2px;
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
