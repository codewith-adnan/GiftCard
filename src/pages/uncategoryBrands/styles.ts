import styled from 'styled-components';

export const BrandWrapper = styled.div`
  background-color: #f9fafb;
  font-family: sans-serif;
  color: #111827;
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
`;

export const BrandHeading = styled.h2`
  font-weight: 700;
  color: #252D31;
  font-size: 24px;
  margin-bottom: 1rem;
`;

export const BrandForm = styled.form`
  display: flex;
  padding: 0.75rem;
  flex-direction: column;
  background-color: white;
  border-radius: 9px;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
  @media (max-width: 320px){
    width: 103%;
  }
`;

export const BrandInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  color: #9ca3af;
  outline: none;
  height: 28px;
`;

export const BrandButton = styled.button`
  background-color: #6b21a8;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  transition: 0.2s;
  border: none;
  width: 170px;
  height: 48px;
  @media (max-width: 320px){
    display: none;
  }
`;

export const BrandCard = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  .edit-btn {
    background-color: #FF8F50;
    color: white;
    width: 30px;
    height: 31px;
    padding: 0.25rem;
    border-radius: 0.375rem;
    transition: 0.2s;
    border: none;
    cursor: pointer;
  }
`;

export const TabNav = styled.nav`
  display: flex;
  background-color: #f9fafb;
  border: none;
  gap: 8px;
`;

export const TabButton = styled.button<{ active?: boolean }>`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: ${({ active }) => (active ? 600 : 600)};
  color: ${({ active }) => (active ? 'white' : '#374151')};
  background-color: ${({ active }) => (active ? '#110036' : 'white')};
  border-radius: 18px 18px 0 0;
  border: none;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 400px) {
    width: 100px;
    padding: 0.5rem;
    font-size: 0.75rem;
    letter-spacing: 0;
  }

  @media (max-width: 320px) {
    width: 110px;
    padding: 0.75rem;
    font-size: 0.75rem;
  }
`;

export const BrandTable = styled.table`
  width: 100%;
  overflow-x: auto;
  border-spacing: 0 0.10rem;
  font-size: 0.75rem;
  text-align: left;
  color: #374151;

  @media (max-width: 320px) {
    width: 110%;
    
  }
`;

export const BrandThead = styled.thead`
font-size: 14px;
color: #1C1C27;
font-weight: 700;
line-height: 150%;
letter-spacing: 0.2px;

`;
export const BrandTbody = styled.tbody`
font-size: 14px;
color: #1C1C27;
font-weight: 400;
line-height: 150%;
letter-spacing: 0.2px;
`;

export const BrandTr = styled.tr`
  background-color: #ffffff;
  border-radius: 0.375rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
`;

export const BrandTh = styled.th<{ center?: boolean }>`
  padding: 0.75rem 1rem;
  font-weight: 600;
  ${({ center }) => center && 'text-align: center;'}
`;

export const BrandTd = styled.td<{ center?: boolean }>`
  padding: 0.50rem 1rem;
  font-weight: 400;
  vertical-align: middle;
  ${({ center }) => center && 'text-align: center;'}

  
`;

export const Badge = styled.div`
  display: inline-block;
  height: 18px;
  background-color: #7E0FC61A;
  color: #7E0FC6;
  font-size: 12px;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  margin-right: 0.25rem;
  letter-spacing: 1px;
  user-select: none;
`;

export const ColorBox = styled.span`
  width: 1rem;
  height: 1rem;
  display: inline-block;
  border-radius: 0.125rem;
  border: 1px solid #d1d5db;
  margin-right: 0.5rem;
  border: none;
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

export const DetailUserInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: gray;
  font-weight: 400;
  font-size: 14px;
  line-height: 102%;
  letter-spacing: 2px;
  margin-top: 0.125rem;
`;

export const DetailStatText = styled.div`
  p {
    font-size: 0.75rem;
    font-weight: 500;
    color: #1C1C27;
    margin-bottom: 0.125rem;
  }
`;

export const DetailPriceRange = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
export const PageSide = styled.div`
font-size: 0.75rem;
    color: #6b7280;
    
`;