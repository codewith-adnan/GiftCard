import styled from "styled-components";

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  @media (max-width: 480px) {
    padding-top: 2rem;
    justify-content: center;
    width: 100%;
    margin-left: 18px;
  }
`;

export const PopupWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  background: white;
  border-radius: 1rem;
  height: 400px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-family: "Inter", sans-serif;
  @media (max-width: 480px) {
    max-width: 80%;
    border-radius: 1rem;
  }
`;

export const PopupHeader = styled.header`
  background-color: #1b1240;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 1rem;
`;

export const PopupTitle = styled.h1`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  right: 2px;
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  color: white;
  font-size: 1.75rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-right: -2.5rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const CardSection = styled.div`
  border-radius: 1rem;
  margin: 1rem;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  width: 290px;
  height: 150px;
  border-radius: 0.5rem;
  @media (max-width: 480px) {
    width: 225px;
    height: 120px;
  }
`;

export const ReceiverSection = styled.section`
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 1rem;
  margin: 0 1rem 1rem;
`;

export const ReceiverTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #252d31;
  margin-left: 20px;
  margin-bottom: 0.75rem;
  margin-top: 0rem;
`;

export const ReceiverContent = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-top: -0.5rem;
`;

export const ReceiverImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  object-fit: cover;
  margin-top: -1rem;
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    margin-left: -10px;
  }
`;

export const ReceiverDetails = styled.div`
  font-size: 0.75rem;
  color: #1b1240;
`;

export const ReceiverName = styled.p`
  font-weight: 600;
  line-height: 125%;
  margin-bottom: 0rem;
  @media (max-width: 480px) {
    line-height: 100%;
  }

`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #252d31;
  margin-top: 0.25rem;
`;

export const IconBox = styled.span`
  display: flex;
  align-items: center;
`;

export const InfoText = styled.span``;
