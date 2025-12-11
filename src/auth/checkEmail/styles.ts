import styled from "styled-components";

export const breakpoints = {
  xs: "320px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.md}) {
    width: 50%;
    height: 100vh;
    flex-shrink: 0;
  }

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const GiftCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${breakpoints.sm}) {
    align-items: center;
    text-align: center;
  }
`;

export const LoginImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FormSection = styled.div`
  width: 100%;
  margin-left: 5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.xs}) {
    margin-left: 0;
    padding: 1rem;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.xs}) {
  }
`;

export const LogoIcon = styled.img`
  width: 41px;
  height: 54px;
  justify-content: flex-start;

  @media (max-width: ${breakpoints.sm}) {
    width: 35px;
    height: 46px;
    justify-content: flex-start;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0rem;
  width: 155px;

  strong {
    font-weight: 800;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.1rem;
  }
`;

export const Underline = styled.div`
  border-bottom: 4px solid #7e0fc6;
  width: 100%;
  max-width: 525px;
  margin-top: 0.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: ${breakpoints.sm}) {
    width: 90%;
    border-bottom-width: 3px;
    margin-bottom: 1.5rem;
  }
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  margin-right: 2rem;

  @media (max-width: ${breakpoints.sm}) {
    margin: 2rem auto 1rem auto;
    padding: 0 1rem;
  }
`;

export const EmailImage = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
  @media (max-width: ${breakpoints.sm}) {
    width: 90px;
    height: 90px;
    margin-top: -0.75rem;
  }
`;

export const EmailHeading = styled.h2`
  color: #252d31;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 125%;
  letter-spacing: 0.2px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

export const EmailSubText = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  padding: 0 1.5rem;

  @media (min-width: ${breakpoints.md}) {
    padding: 0 5rem;
  }

  line-height: 1.6;

  @media (max-width: ${breakpoints.xs}) {
    padding: 0 1rem;
    font-size: 0.8rem;
  }
`;

export const EmailFooterText = styled.p`
  font-size: 0.75rem;
  color: #252d31;
`;

export const ResendLink = styled.a`
  color: #7e0fc6;
  text-decoration: none;
  margin-left: 0.25rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  max-width: 150px;
  padding: 0.75rem;
  background: linear-gradient(to right, #af4fef, #7e0fc6);
  color: white;
  font-weight: bold;
  height: 40px;
  border-radius: 0.5rem;
  transition: background 0.3s;
  border: none;
  cursor: pointer;
  align-self: center;

  &:hover {
    background: linear-gradient(to right, #7e22ce, #7c3aed);
  }

  @media (max-width: ${breakpoints.sm}) {
    height: 38px;
    font-size: 0.9rem;
  }
`;
