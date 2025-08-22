import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const Overlay = styled.div`
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
    margin-left:18px;
  
    
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 20rem;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 480px) {
    max-width: 80%;
  }
`;

export const ModalHeader = styled.div`
  background: #1b0b3b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  
`;

export const ModalTitle = styled.h2`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 60px;
  letter-spacing: 1px;
  font-size: 0.75rem;
`;

export const CloseButton = styled.button`
  background: transparent;
  color: white;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  border: none;
  margin-right: 2px;
`;

export const ModalForm = styled.form`
  background: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
  color: black;
  margin-bottom: 0.35rem;
`;

export const Input = styled.input`
  width: 93%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  background-color: #f9f9f9;
  border-radius: 1px;
  color: #808d9e;
  outline: none;
  border: none;
`;

export const ColorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ColorBox = styled.div`
  width: 6rem;
  border: none;
  height: 2rem;
  border-radius: 4px;
`;
export const ColorPicker=styled.div`

`;
export const SubmitButton = styled.button`
  width: 100%;
  background-color: #7b1fa2;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: 0.2s;
  border: none;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const SelectorWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #f9f9f9;
`;

export const DropdownButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #808d9e;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.6rem;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Form = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 0;
  right: 0;
  z-index: 100;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 12rem;
  overflow-y: auto;
`;

export const CategoryItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  color: #7e0fc6;
`;

export const IconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const ItemLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: #000;
`;

export const CategoryBadge = styled.div`
  background-color: #7E0FC61A;
  color: purple;
  padding:0.35rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 0.80rem;
`;

export const BadgeCloseIcon = styled(FaTimes)`
  margin-left: 0.5rem;
  cursor: pointer;
  font-size: 0.80rem;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;
