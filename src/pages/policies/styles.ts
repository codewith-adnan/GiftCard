import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 480rem;
  margin-left: 1rem;
  padding: 1rem;
  height: 100vh;
  overflow: hidden;
    background-color: #f9fafb;
  

`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 150%;
  letter-spacing: 1px;
  font-weight: 700;
  color: #1C1C27;
  margin-bottom: 1rem;
`;

export const PolicyCard = styled.div`
  border-radius: 0.5rem;
  background: #fff;
  padding: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
    @media (max-width: 320px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const PolicyText = styled.p`
  font-size: 0.85rem;
  color: #808D9E;
  font-weight: 600;
  letter-spacing: 1px;
  
`;

export const PolicyName = styled.p`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #1C1C27;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;

`;

export const ActionButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: white;
    width: 30px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
 border: none;
  &.view {
    background-color:#209A42;
    
  }

  &.edit {
    background-color:#FF8F50;

  }
`;
