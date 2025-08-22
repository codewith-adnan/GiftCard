import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f9fafb;
  font-family: 'Inter', sans-serif;
  color: black;
  max-width: 100rem;
  margin: 1rem auto 0 auto;
  padding: 1rem;
  margin-left: 15px;
  @media (max-width: 320px) {
    width: 96%;
    margin-left: 3px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  letter-spacing: 1px;
`;

export const EditButton = styled.button`
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
  @media (max-width: 320px) {
    padding: 0.75rem;
    width: 100px;
    justify-content: flex-end;
margin-left    :10rem ;
  }
`;

export const Section = styled.section`
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

export const Nav = styled.nav`
  border-bottom: 3px solid #9333ea;
  margin-bottom: 1.5rem;
  width: 130px;
`;

export const TabList = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

export const TabTitle = styled.div`
  color: #7e0fc6;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 150%;
`;

export const ProfileForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 100%;

  @media (min-width: 640px) {
    grid-template-columns: 140px 1fr;
    column-gap: 2rem;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  line-height: 150%;
  letter-spacing: 1px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  @media (max-width: 320px) {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  span {
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.2px;
    color: #000000;
  }

  &.text-gray {
    color: #9ca3af;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px;
`;

export const ProfileImage = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: -7px;
  right: -7px;
  width: 1.25rem;
  height: 1.25rem;
  background: white;
  border: 1px solid #dc2626;
  border-radius: 9999px;
  color: #dc2626;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  
`;

export const Input = styled.input`
  font-size: 0.75rem;
  color: ${(props) => (props.disabled ? '#9ca3af' : 'black')};
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  height: 36px;
  padding: 0.5rem 0.75rem;
  width: 100%;
  cursor: pointer;
  @media (max-width: 320px) {
    width: 100%;
    margin-left: -0.75rem;
  }
`;

export const UpdateButton = styled.button`
  background-color: #7c3aed;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  width: 100%;
  max-width: 200px;
  height: 46px;
  padding: 1rem;
  border-radius: 0.375rem;
  margin: 2rem auto 0 auto;
  display: block;

  @media (max-width: 320px) {
    padding: 0.50rem;
    width: 8rem;
    margin: 1rem auto 0 auto;
    margin-right: -0.75rem;
  }

  cursor: pointer;
`;
