import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(15);
  }
`;

export const NotificationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  max-width: 320px;
  width: 100%;
  font-family: 'Inter', sans-serif;
  border-bottom: 2px solid #D9D9D957;

  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;

  animation: ${fadeIn} 0.3s ease-in;

  @media (max-width: 320px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75rem;
    gap: 0.5rem;
    max-width: 75%;
    margin-left: 20px;
    margin-top: 3.75rem;
  }
`;

export const ProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 2.5rem;
    height: 2.5rem;
    justify-content: center;
  }
`;

export const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
   @media (max-width: 480px) {
    margin-left: 15px;
  }
`;

export const UserText = styled.p`
  color: #64748B;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Line = styled.div`
  border-bottom: 2px solid #D9D9D957;
  margin-top: 10px;
  width: 123%;
  justify-content: center;
  margin-left: -3rem;

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const OrderAmount = styled.span`
  font-weight: 600;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const StatusBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  background-color: #c8f5dd;
  color: #156A3D;
  text-align: center;
  width: 78px;
  border-radius: 9999px;
  padding: 0.35rem;
  user-select: none;

  @media (max-width: 480px) {
    width: auto;
    padding: 0.3rem 0.6rem;
  }
`;

export const DateText = styled.span`
  font-size: 0.75rem;
  color: #64748B;
  line-height: 160%;
  letter-spacing: 0.2px;
  user-select: none;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const CloseIcon = styled.span`
  margin-left: auto;
  font-size: 1.2rem;
  cursor: pointer;
  color: #94a3b8;

  @media (max-width: 480px) {
    position: absolute;
    top: 8px;
    right: 12px;
  }
`;
