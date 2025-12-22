import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f9fafb;
  color: #111827;
  padding: 1.5rem;
  max-width: 1200px;
  margin: auto;
  width: 100%;
  width: 100%;
  font-family: 'Inter', sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-bottom: 0.25rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #252D31;
  line-height: 22px;
  vertical-align: middle;
`;

export const AddButton = styled.button`
  background-color: #7E0FC6;
  color: #ffffff;
  font-size: 0.875rem;
  height: 40px;
  cursor: pointer;
  height: 40px;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
border: none;
  &:hover {
    background-color: #5a1a8a;
  }
  @media (max-width: 320px) {
    justify-content: flex-end;
    margin-left: 7rem;
    max-width: 75%;
    font-size: 0.75rem;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  max-width: 1068px;
  /* flex-wrap: wrap; */
  background-color: white;
  padding: 0.65rem;
  border-radius: 5px;

  @media (max-width: 320px) {
    /* flex-direction: column; */
    padding: 0.50rem;
    width: 100%;
        margin-top: 10px;

  }
`;


export const SearchInput = styled.input`
  flex-grow: 1;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: #374151;
  height: 38px;
  min-width: 200px;
  width: 100%;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px #6b21a8;
  }

  @media (max-width: 320px) {
    max-width: 100%;
    padding: 0.50rem;
    height: 19px;
  }
`;


export const SearchBtn = styled.button`
  background-color: #7E0FC6;
  color: #ffffff;
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  width: 140px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a1a8a;
  }

  @media (max-width: 320px) {
    display: none;
  }
`;


export const TableWrapper = styled.div`
  border-radius: 0.375rem;
  border: none;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  font-size: 0.875rem;
  background-color:white;
  color: #111827;
  
`;

export const TableHead = styled.th`
  text-align: left;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid #E2E8F0;
  font-weight: 500;
  font-size:16px;
  width: auto;
    margin-top: 4rem;
  color: #000000;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #E2E8F0;
  
  margin-top: 15px;
`;

export const TableCell = styled.td`
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid #E2E8F0;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.2px;
  vertical-align: middle;
  color: #252D31;
`;

export const IconCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: #ffffff;
`;

export const ActionButton = styled.button<{ bg: string }>`
  background-color: ${(props) => props.bg};
  color: #ffffff;
  padding: 0.25rem;
  border-radius: 0.375rem;
  width: 26px;
  height: 28px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
`;
