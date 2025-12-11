import styled from "styled-components";

const breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px'
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    height: 100vh;
  }

  @media (max-width: ${breakpoints.xs}) {
    overflow-y: auto;
    min-height: 100vh;
  }
`;

export const ImageSection = styled.div`
  width: 100%;
  height: 40vh;

  @media (min-width: ${breakpoints.md}) {
    width: 50%;
    height: 100vh;
    flex-shrink: 0;
  }

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const LoginImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem;
  margin-left: 0;
  align-items: flex-start;
  text-align: left;

  @media (min-width: ${breakpoints.sm}) {
    padding: 2rem;
  }

  @media (min-width: ${breakpoints.md}) {
    margin-left: 3rem;
    padding: 2rem 2rem 2rem 0;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin-left: 5rem;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 1rem;
    align-items: flex-start;
    text-align: left;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  justify-content: flex-start;

  @media (max-width: ${breakpoints.xs}) {
    justify-content: flex-start;
    margin-bottom: 1.5rem;
  }
`;

export const LogoIcon = styled.img`
  width: 41px;
  height: 54px;

  @media (max-width: ${breakpoints.sm}) {
    width: 35px;
    height: 46px;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0;
  width: auto;
  max-width: 155px;
  text-align: left;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.1rem;
    max-width: none;
  }

  strong {
    font-weight: 800;
  }
`;

export const Underline = styled.div`
  border-bottom: 4px solid #7e0fc6;
  width: 100%;
  max-width: 525px;
  margin-bottom: 2.5rem;

  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 2rem;
    border-bottom-width: 3px;
  }

  @media (max-width: ${breakpoints.xs}) {
    margin-bottom: 1.5rem;
    width: 90%;
  }
`;

export const ConfirmWrapper = styled.div`
  max-width: 22rem;
  width: 100%;
  margin: 0 auto;
  margin-right: 8rem;
`;

export const ConfirmHeading = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const ConfirmSubText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  @media (max-width: ${breakpoints.xs}) {
    width: 92%;
  }
`;

export const ConfirmForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;



export const ConfirmIcon = styled.div`
  margin-right: 0.75rem;
  font-size: 1rem;
`;

export const ConfirmInputGroup = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #9ca3af;
  width: 100%;
  max-width: 350px;

  &:focus-within {
    border-color: #7E0FC6;
    color: #4b5563;
  }

  @media (max-width: ${breakpoints.sm}) {
    max-width: 285px;
    padding: 0.625rem 0.875rem;
  }

  @media (max-width: ${breakpoints.xs}) {
    max-width: 265px;
    padding: 0.625rem 0.75rem;
  }
`;

export const ConfirmInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #374151;
  font-size: 0.875rem;

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.85rem;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: 0.8rem;
  }
`;


export const ConfirmToggle = styled.button`
  margin-left: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  font-size: 1rem;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  max-width: 350px;
  background: linear-gradient(to right, #9333ea, #6b21a8);
  color: white;
  font-weight: 600;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  height: 50px;
  transition: all 0.3s ease;
  margin-top: 1.5rem;

  &:hover {
    background: linear-gradient(to right, #7e22ce, #581c87);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(126, 15, 198, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(126, 15, 198, 0.1);
  }

  &:focus {
    outline: 2px solid #7e0fc6;
    outline-offset: 2px;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: ${breakpoints.sm}) {
    height: 46px;
    font-size: 0.9rem;
    padding: 0.625rem;
    max-width: 300px;
  }

  @media (max-width: ${breakpoints.xs}) {
    height: 44px;
    font-size: 0.875rem;
    max-width: 290px;
  }
`;


export const MobileOnlyText = styled.span`
  display: none;

  @media (max-width: ${breakpoints.sm}) {
    display: inline;
  }
`;

export const DesktopOnlyText = styled.span`
  display: inline;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

export const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${breakpoints.sm}) {
    padding: 0 2rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 0 3rem;
  }
`;

