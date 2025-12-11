// styles.ts
import styled from "styled-components";

export const breakpoints = {
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
  }

  @media (max-width: ${breakpoints.xs}) {
    overflow-y: auto;
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
  max-width: 155px;
  margin-bottom: 0rem;

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

export const ResetWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-left: 0;

  @media (min-width: ${breakpoints.md}) {
    margin-left: 2rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin-left: 5rem;
  }
`;

export const ResetHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  line-height: 125%;
  letter-spacing: 0.2px;
  margin-bottom: 0.5rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.375rem;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: 1.25rem;
  }
`;

export const ResetSubText = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #808D9E;
  width: 88%;
  margin-bottom: 1.5rem;

  @media (max-width: ${breakpoints.xs}) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const ResetForm = styled.form`
  width: 100%;
`;

export const ResetInputWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const ResetIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`;

export const ResetInput = styled.input`
  width: 100%;
  max-width: 350px;
  padding: 0.75rem 2.5rem;
  height: 48px;
  font-size: 1rem;
  color: #4b5563;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #7e0fc6;
    box-shadow: 0 0 0 2px rgba(126, 15, 198, 0.15);
  }

  &:hover {
    border-color: #9ca3af;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 0.625rem 2.25rem;
    font-size: 0.95rem;
    height: 44px;
    max-width: 300px;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 0.5rem 2rem;
    font-size: 0.875rem;
    height: 42px;
    max-width: 91%;
  }
`;


export const ResetSubmitButton = styled.button`
  width: 100%;
  max-width: 350px;
  height: 50px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, #af4fef 0%, #7e0fc6 100%);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(126, 15, 198, 0.1);

  &:hover {
    background: linear-gradient(135deg, #9333ea 0%, #6b05a0 100%);
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
    font-size: 0.95rem;
    padding: 0.625rem;
    max-width: 300px;
  }

  @media (max-width: ${breakpoints.xs}) {
    height: 44px;
    font-size: 0.875rem;
    padding: 0.5rem;
    max-width: 91%;
  }
`;


export const ResetBackLink = styled.a`
  display: block;
  margin-top: 2rem;
  text-align: center;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 700;
  color: #111827;
  text-decoration: none;
  line-height: 160%;

  &:hover {
    text-decoration: underline;
  }
`;