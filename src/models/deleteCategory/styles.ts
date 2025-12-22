import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  @media (max-width: 480px) {
    align-items: flex-start;
    padding-top: 3.75rem;
    width: 100%;
    margin-left: 1.2rem;
  }
`;


export const ModalWrapper = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  height: 220px;
  width: 100%;
  max-width: 27rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 480px) {
    max-width: 80%;
    border-radius: 1rem;
  }
`;

export const ModalHeader = styled.div`
  background: #110036;
  padding: 0.75rem;
  text-align: center;
  color: white;
  position: relative;
  height: 25px;
  
  @media (max-width: 480px) {
height: 18px;
  }

  h2{
    margin-bottom: 0rem;
    font-size: 1.50rem;
    margin-top: 0rem ;
     
  @media (max-width: 480px) {
  font-size: 1rem;
  }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 0.50rem;
  background: none;
  border: none;
  font-weight: 700;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  @media (max-width: 480px) {
  font-size: 1.50rem;
  }
`;

export const ModalBody = styled.div`
  padding: 1rem;
  text-align: center;


  img {
    width: 100px;
    margin: 0 auto 1.5rem;
    margin-bottom: 0rem;
    @media (max-width: 480px) {
  width: 75px;
  }
  }

  p {
    margin-bottom: 1rem;
    font-size: 0.75;
    margin-top: 0rem;
    color: #000000;
    font-weight: 500;
    
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background: #E2E8F0;
  color: #1C1C27;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 480px) {
  padding: 0.50rem;
  }
`;

export const DeleteButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background: #7E0FC6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 480px) {
  padding: 0.50rem;
  }
`;
