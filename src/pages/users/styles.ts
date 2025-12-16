import styled from "styled-components";

export const UsersWrapper = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0;
  font-family: sans-serif;
  color: #000;
`;

export const Header = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 2rem;
  color: #252D31;
  font-style: bold;
  text-align: center;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  background-color: white;
  padding: 0.65rem;
  border-radius: 9px;
  @media (max-width: 320px) {
    width: 105%;
    
  }


`;

export const SearchInput = styled.input`
  flex-grow: 1;
  font-size: 14px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #E2E8F0;
  border-radius: 0.375rem;
  height: 22px;
  ::placeholder {
    color: #94A3B8;
@media (max-width: 320px) {
        font-size: 8px;
  }
  }
  @media (max-width: 320px) {
    max-width: 100%;
    
  }
  
`;

export const SearchButton = styled.button`
  background-color: #7E0FC6;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  border: none ;
  width: 140px;
  cursor: pointer;
  @media (max-width: 320px) {
    display: none;
    
  }
`;

export const TableWrapper = styled.section`
  overflow-x: auto;
  @media (max-width: 320px) {
    display: flex;
    margin-left: 0px;
    width: 114%;
    
  }
  
`;

export const StyledTable = styled.table`
  width: 100%;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  border: 1px solid #f3f4f6;
  border-radius: 0.375rem;
  border-collapse: collapse;
  background-color: white;
  color: #252D31;
  border-radius: 9px;
  border: none;
  height: 400px;

  thead {
    border-bottom: 1px solid #f3f4f6;
    th {
      padding: 0.5rem 0.75rem;
      font-weight: 600;
    }
  }

  tbody tr {
    border-bottom: 1px solid #f3f4f6;

    td {
      padding: 0.5rem 0.75rem;
    }

    td:last-child {
      text-align: center;
      display: flex;
      justify-content: center;
      gap: 0.50rem;
    }
  }
`;

export const ActionButton = styled.button`
  width: 1.65rem;
  height: 1.65rem;
  border-radius: 0.375rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 5px;

  &.edit {
    background-color: #209A42;
    
  }

  &.delete {
    background-color: #FF0000;
    
  }
`;




