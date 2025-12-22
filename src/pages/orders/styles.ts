import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f9fafb;
  color: #111827;
  min-height: 100vh;
  padding: 1rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;



export const Heading = styled.div`
  display: flex;
  @media (max-width: 640px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #252D31;
  line-height: 22px;
  vertical-align: middle;
  margin-bottom: 0rem;
`;

export const Order = styled.div`
color: #1C1C27;
font-size: 18px;
font-weight: 600;
line-height: 150%;
letter-spacing: 0.2px;
margin-top:1rem ;
margin-bottom :1rem ;
`;

export const FilterForm = styled.form`
  margin-top: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 320px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    @media screen {
    flex-direction: row;
  }
  }

  input{
    border: 1px solid #d1d5db;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    color: #94A3B8;
    height: 28px;
    border-radius: 4px;

  }
  span{
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    color: #252D31;
  }

  select {
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    color: #94A3B8;
    
    
  }

  button {
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
  }

  button[type="reset"] {
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

  }
`;




export const TableWrapper = styled.div`
  overflow-x: auto;
  background: white;
  padding: 1rem;
  border-radius: 5px;
`;

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0 0.5rem;
`;

export const TableHead = styled.thead`
  color: #1C1C27;
  font-size: 14px;
  font-weight: 600;
    border-bottom: 1px solid #E2E8F0;
tr{
          margin-top: 4rem;

}

`;

export const TableHeaderCell = styled.th`
  text-align: left;
  padding: 0.5rem 1rem;

`;

export const TableBody = styled.tbody`
  border-bottom: 1px solid #E2E8F0;

`;

export const TableRow = styled.tr`
  background-color: white;
  border-bottom: 1px solid #E2E8F0;
`;

export const TableData = styled.td`
  padding: 0.5rem 1rem;
  font-size: 14px;
  color: #1C1C27;
`;

export const TableAction = styled.td`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
`;

export const TableIconWrapper = styled.div`
  background-color: #209A42;
  color: white;
  padding: 0.25rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
  width: 14px;
  height: 14px;
`;

export const TableStatus = styled.span<{ status: string }>`
  background-color: ${({ status }) =>
    status === "Available" ? "#00D1FF1A" : "#209A421A"};
  color: ${({ status }) => (status === "Available" ? "#00D1FF" : "#209A42")};
  font-size: 12px;
  font-weight: 600;
  padding: 0.30rem;
  border-radius: 5px;
  cursor: pointer;
  line-height: 14px;

  
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


export const PageSide = styled.div`
font-size: 0.75rem;
color: #6b7280;
  @media (max-width: 320px) {
width: 50px;
  }
`;





export const SearchInput = styled.input`
  width: 300px;
  height: 44px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 14px;
  color: #1c1c27;
`;

export const BrandSelect = styled.select`
  width: 235px;
  height: 44px;
  border: 1px solid #d1d5db;
  border-radius: 0px;
  padding: 0.5rem 0.75rem;
  font-size: 14px;
  color: #1c1c27;
`;

export const PriceRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #252d31;
    width: 100%;
  }

  @media (min-width: 321px) {
    flex-wrap: nowrap;
    flex-direction: row;

    span {
      width: 110%;
    }
  }
`;


export const PriceInputRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 320px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
export const PriceInput = styled.input`
  width: 100px;
  height: 44px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 14px;
  color: #1c1c27;

  @media (max-width: 320px) {
    width: 76px;
  }
`;


export const DateWrapper = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 320px) {
    flex-direction: column;
  
  }
`;

export const DateInput = styled.input`
  width: 246px;
  height: 44px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 14px;
  color: #1c1c27;
  @media (max-width: 320px) {
width  :207px ;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  @media (max-width: 320px) {
    flex-direction: row;
    gap: 1rem;
    max-width:14.75rem;
  }
`;

export const ButtonPrimary = styled.button`
  width: 160px;
  height: 44px;
  background-color: #7e0fc6;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const ButtonReset = styled(ButtonPrimary)`
  background-color: #f9f9f9;
  color: #6b7280;

  &:hover {
    background-color: #f3f4f6;
  }
`;
