import styled from "styled-components";

export const ListContainer = styled.div`
  background-color: #f9fafb;
  padding: 1rem;
  max-width: 66rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-left: 20px;
  margin-top: 1rem;
  @media (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const NotificationCard = styled.div`
  background-color: white;
  border-radius: 0.375rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const NotificationTitle = styled.h3`
  color: #7E0FC6;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 1px;
  @media (max-width: 320px) {
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin-left: 6px;
  }
`;

export const NotificationText = styled.p`
  color: #808D9E;
  font-size: 14px;
  margin-top: 0rem;
  letter-spacing: 1px;
  @media (max-width: 320px) {
    
    font-size: 12px;
    margin-left: 6px;

  }
  
`;

export const ViewButton = styled.button`
  color: #808D9E;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 2.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
