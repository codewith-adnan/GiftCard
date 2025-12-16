import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  padding: 0 0.5rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 45px;
  max-width: 1200px;
  height: auto;

  @media (min-width: 640px) {
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 420px) {
    padding: 0 0.5rem;
    margin-left: 0;
    margin-bottom: 2rem;
    height: auto;
    max-width: 700px;
  }
`;

// DASHBOARD TITLE
export const DashboardTitle = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
  text-align: left;
  color: #252D31;
  margin-bottom: 2rem;
  /* Removed absolute positioning */

  @media (max-width: 420px) {
    margin-bottom: 2rem;
  }
`;

// CARD GRID
export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 420px) {
    margin-top: 15px;
    gap: 0.50rem;
      max-width: 18.75rem;

  }
`;

// CARD COMPONENT
export const Card = styled.div`
  background: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
`;

export const FirstCard = styled(Card)`
  @media (min-width: 1024px) {
    grid-column: span 2;
  }
`;

// CARD CONTENT
export const CardLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconBox = styled.div`
  background: #f9f3fc;
  padding: 0.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 7rem;
`;

export const Info = styled.div`
  margin-left: -3rem;
  margin-top: 100%;
`;

export const Title = styled.p`
  font-size: 0.65rem;
  font-weight: 600;
  margin-bottom: 0.50rem;
  color: #808D9E;
  line-height: 22px;
`;

export const Value = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: #252D31;
`;

export const RightIcon = styled.div`
  width: 38px;
  height: 25px;
  margin-top: 7rem;
  color: #7E0FC6;
`;

// CHART SECTION
export const ChartWrapper = styled.div`
  background: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin-top: 2rem;
`;

export const ChartHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    align-items: flex-start;
  }
`;

export const ChartTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #252D31;
  margin-left: -4px;
  line-height: 150%;
`;
export const DateRangeWrapper = styled.label`
  display: flex;
  /* justify-content:flex-end; */
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
        margin-right: -30rem;

  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: pointer;
  width: fit-content;
  @media (max-width: 320px) {
    justify-content: flex-start;
    float: left;
    margin-left: 0rem;
  }
  
  
  
`;
export const CalendarIcon = styled.div`
  background-color: #7e22ce;
  color: white;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DateDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  font-size: 14px;
  font-weight: 600;
  color: #111827;

  span {
    cursor: pointer;
  }
  @media (max-width: 320px) {
    font-size: 10.50px;
    
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
`;





// BUTTONS
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 320px) {
    flex-direction: row;
  }
`;



export const ChartTabButton = styled.button<{ active: boolean }>`
  background: ${({ active }) => (active ? '#7E0FC6' : '#F9F9F9')};
  color: ${({ active }) => (active ? '#ffffff' : '#808D9E')};
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  width: 160px;
  height: 45px;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 320px) {
    width: 48%;
    font-size: 0.85rem;
    height: 42px;
    flex-direction: row;
  }
`;


export const ApplyButton = styled.button`
  background: #7e22ce;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  border: none;
  width: 105px;
  height: 39px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6b21a8;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.75rem;
    height: 42px;
  }
`;


// DATE INPUT
export const DateInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  color: #111827;
  cursor: pointer;
  padding: 0 0.5rem;
  justify-content: space-between;
  width: 100%;
  max-width: 250px;

  &:hover {
    box-shadow: 0 0 0 2px #7e22ce;
  }

  input {
    display: none;
  }
`;



// RESPONSIVE CONTAINER
export const ResponsiveContainer = styled.div`
  margin-left: -4px;
  max-width: 930px;
`;

// TABLE WRAPPER FOR SCROLLABLE TABLE
export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 0.5rem;

  table {
    width: 100%;
    min-width: 700px;
    border-collapse: collapse;
  }

  th, td {
    padding: 0.75rem 1rem;
    text-align: left;
    white-space: nowrap;
  }
`;
