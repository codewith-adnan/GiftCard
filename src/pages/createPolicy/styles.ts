import styled from "styled-components";

export const Container = styled.div`
  background-color: #F9F9F9;
  padding: 1rem;
  max-width: 64rem;
  margin: 0 auto;
  margin-top: 0.75rem;
  height: 100vh;
`;

export const Heading = styled.h1`
  font-size: 1.50rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const Form = styled.form`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 768px) {
    flex-direction: column; 
  }
`;
export const InputGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
  }
`;



export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  line-height: 150%;
  letter-spacing: 1px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 15rem;
    margin-bottom: 0;
  }
`;

export const Input = styled.input`
  flex: 1;
  background-color: #F9F9F9;
  border: 1px solid #f3f4f6;
  color: #808D9E;
  font-size: 16px;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  outline: none;
  height: 28px;
  max-width: 30rem;
`;

export const Textarea = styled.textarea`
  width: 98%;
  border: 1px solid #f3f4f6;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  padding: 0.5rem 0.75rem;
  resize: none;
  color: #111827;
  background-color: white;
  outline: none;
`;

export const Button = styled.button`
  margin-top: 0rem;
  justify-content: flex-end;
  background-color: #7E0FC6;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  white-space: nowrap;
  cursor: pointer;
width: 180px;
height: 46px;
   @media (max-width: 320px) {
    max-width: 8rem;
    
  }
`;
export const QuillWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  .ql-editor {
    min-height: 200px;
    font-size: 1rem;
    border-radius: 5px;
  }
`;
