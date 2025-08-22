import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f9fafb;
  padding: 1.5rem;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  @media (max-width:320px) {
    justify-content: center;
    align-items: center;
    width: auto;
  }
`;


export const Title = styled.h2`
 font-size: 24px;
  line-height: 150%;
  letter-spacing: 1px;
  font-weight: 700;
  color: #1C1C27;
  margin-bottom: 1rem;
  @media (max-width:320px) {
  font-size: 20px;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 0.375rem;
  padding: 2rem;
  position: relative;
  border: 1px solid transparent;
  @media (max-width:320px) {
    width: 85%;
  }
`;

export const CardTitle = styled.div`
  position: absolute;
  top: 1rem;
  color: #7E0FC6;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 150%;
  margin-left: 30px;
  letter-spacing: 1px;
  
`;

export const BorderLine =styled.div`
  width: 150px;
  border-bottom: 3px solid #7E0FC6;
  margin-top: 1rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  gap: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputGroup = styled.div`

`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
  

`;

export const SubLabel = styled.p`
  font-size: 14px;
  color: #9ca3af;
  margin-bottom: 0.25rem;
  user-select: none;
  line-height: 150%;
  letter-spacing: 0.5%;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: 3rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  background-color: white;
  color: #111827;
  max-width: 28rem;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);

  &:focus {
    outline: none;
  }
  @media (max-width:320px) {
    width: 65%;
  }
`;

export const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #6b7280;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ToggleWrapper = styled.div``;

export const ToggleText = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
  user-select: none;
`;

export const ToggleLabel = styled.label`
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  display: inline-block;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const ToggleSwitch = styled.span<{ isChecked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: -3px;
  bottom: 0;
  background-color: ${({ isChecked }) => (isChecked ? '#fbbf24' : '#d1d5db')};
  border-radius: 9999px;
  transition: 0.3s;

  &::before {
    content: '';
    position: absolute;
    height: 1rem;
    width: 1rem;
    left: 0.25rem;
    top: 0.25rem;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
    transform: ${({ isChecked }) => (isChecked ? 'translateX(1.25rem)' : 'translateX(0)')};
  }
`;

export const UpdateButton = styled.button`
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  background-color: #7c3aed;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  width: 180px;
  height: 46px;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  justify-content: flex-end;

  &:hover {
    background-color: #6b21a8;
  }
`;
