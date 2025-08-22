import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f9fafb;
  padding: 1rem;
  max-width: 64rem;
  margin: 0 auto;
  @media (max-width: 320px) {
  width:96%;
  margin-left: 5px;
  
 }
`;




export const Title = styled.p`
  color: #1f2937; 
  font-weight: 600;
  font-size: 1.50rem;
  letter-spacing: 1px;
  @media (max-width: 320px) {
  font-size: 1.25rem;
  
 }
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  @media (max-width: 320px) {
  margin-top: -0.60rem;
  
 }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0.75rem; */
  border-radius: 0.375rem;
  color: white;
  font-size: 0.75rem;
  cursor: pointer;
  border: none;
  width: 32px;
  height: 33px;
  margin-top: 1.50rem;

  &.edit {
    background-color: #f97316; 
  }
  

  &.delete {
    background-color: #dc2626; 
  }

  &.icon{
    font-size: 24px;
  }
  
`;






export const Card = styled.div`
  background-color: #ffffff;
padding: 1.5rem;
 border-radius: 0.5rem;
 
`;

export const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #808D9E;
  letter-spacing: 1px;
  line-height: 150%;
  margin-bottom: 0.75rem;
`;

export const PolicyName = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.50px;
  color: #111827;
`;

export const List = styled.ol`
  list-style-type: decimal;
  padding-left: 1rem;
  margin-top: 0.5rem;
  color: #374151;
  font-size: 0.875rem;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const ItemTitle = styled.span`
  font-weight: 700;
  color: #1C1C27;
  font-size: 14px;
  letter-spacing: 0.50px;
`;