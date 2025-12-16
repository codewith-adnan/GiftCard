import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f9fafb;
  color: #111827;
  min-height: 100vh;
  padding: 0 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Breadcrumb = styled.nav`
  font-size: 0.875rem;
  color: #808D9E;
  margin-bottom: 1.5rem;
  user-select: none;
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
  @media (max-width: 320px) {
    margin-top: 1rem;
  }
 
  
  span {
    color: #252D31;
    font-size: 24px;
      line-height: 24px;
      vertical-align: middle;
      font-weight: 700;
  }
`;
export const Bread = styled.div`

      color: #808D9E;
      font-size: 24px;
      line-height: 24px;
      vertical-align: middle;
      font-weight: 700;
      &:hover{
        text-decoration: underline;
        cursor: pointer;
      }
      `;
export const UserCard = styled.section`
  background: #FFFFFF;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
  height: 80px;
  
  @media (max-width: 320px) {
    width:88%;
  }
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  object-fit: cover;
  @media (max-width: 320px) {
    width: 3rem;
    height: 3rem;
    margin-left: -8px;
  }
`;

export const UserInfo = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  @media (max-width: 320px) {
    font-size: 0.757rem;
  }
  h2 {
    color: #5b21b6;
    font-weight: 600;
    margin-bottom: 0.30rem;
  }
  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: Gray;
    font-weight: 400;
    font-size: 14px;
    line-height: 102%;
    letter-spacing: 2px;
    margin-top: 0.125rem;
    @media (max-width: 320px) {
    font-size: 10px;
    letter-spacing: none;
  }
  }
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

export const StatCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 35rem;

`;


export const CardStatsWrapper = styled.section`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-left: 25px;
  }
`;

export const CardWrapper = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #E2E8F0;
  min-width: 180px;
  
  
`;

export const CardIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  margin-left: -8px;
  align-items: center;
  justify-content: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.span`
  font-size: 16px;
  color: #1C1C27;
  margin-bottom: 4px;
`;

export const CardCount = styled.strong`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
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
    width: 99%;
    padding: 0.5rem;
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

export const SearchInput = styled.input`
  width: 300px;
  height: 44px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 14px;
  color: #1c1c27;
  @media screen and (max-width: 320px) {
    width: 210px;
  }
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


export const TableWrapper = styled.div`
  overflow-x: auto;
  background: white;
  padding: 1rem;
  border-radius: 5px;
  @media (max-width: 320px) {
    width: 89%;
  }
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
    
`;
export const DetailPriceRange = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
  }

  input {
    width: 97px;
    height: 28px;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #7e0fc6;
      box-shadow: 0 0 0 2px rgba(126, 15, 198, 0.2);
    }
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
    input {
      width: 63px;
      height: 40px;
      font-size: 0.75rem;
    }
  }
`;