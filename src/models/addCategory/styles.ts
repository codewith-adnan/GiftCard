import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;

  @media (max-width: 480px) {
    align-items: flex-start;
    padding-top: 3.75rem;
    width: 100%;
    margin-left: 0rem;
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 27rem;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    max-width: 75%;
    border-radius: 1rem;
  }
`;

export const ModalHeader = styled.div`
  background-color: #110036;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  @media (max-width: 480px) {
    padding: 0.15rem;
  }
`;

export const ModalTitle = styled.h2`
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin-left: 40%;

  @media (max-width: 480px) {
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
`;

export const ModalForm = styled.form`
  background: white;
  padding: 1rem;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
`;

export const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const IconLabel = styled.label`
  font-size: 0.75rem;
  color: #1b0e3b;
`;

export const IconButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  background-color: #f5f5f5;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: relative;
  margin-left: -10px;

  @media (max-width: 480px) {
    margin-left: 0;
  }
`;

export const IconImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const AddIcon = styled.div`
  position: absolute;
  bottom: -0.25rem;
  right: -0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #6b21a8;
  border-radius: 9999px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: white;
  cursor: pointer;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
  margin-bottom: 0;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const InputLabel = styled.label`
  font-size: 0.75rem;
  color: #1b0e3b;
  margin-bottom: 8px;
`;

export const InputField = styled.input`
  background-color: #f5f5f5;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: #1b0e3b;
  font-size: 1rem;
  border: none;

  &::placeholder {
    color: rgba(27, 14, 59, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 90%;
  background-color: #7E0FC6;
  color: white;
  font-size: 1rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-left: 2rem;
  border: none;
  margin-top: -1rem;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #AF4FEF;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;
