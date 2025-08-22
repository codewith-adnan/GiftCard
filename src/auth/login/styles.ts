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
  
  @media (max-width: ${breakpoints.sm}) {
    height: 30vh;
  }
  
  @media (max-width: ${breakpoints.xs}) {
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

export const Form = styled.form`
  width: 100%;
  max-width: 22rem;
  margin-left: 0;
  
  @media (min-width: ${breakpoints.md}) {
    margin-left: 2rem;
  }
  
  @media (min-width: ${breakpoints.lg}) {
    margin-left: 7rem;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    max-width: 100%;
  }
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  letter-spacing: 0.2px;
  line-height: 1.25;
  color: #252d31;
  text-align: left;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.375rem;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    font-size: 1.25rem;
    text-align: left;
  }
`;

export const SubText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.4;
  text-align: left;
  
  @media (max-width: ${breakpoints.xs}) {
    text-align: left;
    margin-bottom: 1rem;
  }
`;

export const InputWrapper = styled.label`
  position: relative;
  display: block;
  margin-bottom: 1rem;
  width: 100%;
  
  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 0.875rem;
  }
`;

export const StyledIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  z-index: 1;
  
  @media (max-width: ${breakpoints.sm}) {
    left: 0.625rem;
  }
`;

export const StyledInput = styled.input`
  padding: 0.75rem 2.5rem;
  width: 100%;
  max-width: 350px;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  color: #4b5563;
  height: 48px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: all 0.2s ease;
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 0.625rem 2.25rem;
    height: 44px;
    font-size: 0.9rem;
    max-width: 300px;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    padding: 0.625rem 2rem;
    height: 42px;
    max-width: 290px;
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  &:focus {
    outline: none;
    border-color: #7e0fc6;
    box-shadow: 0 0 0 2px rgba(126, 15, 198, 0.1);
  }
  
  &:hover {
    border-color: #9ca3af;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  
  @media (max-width: ${breakpoints.sm}) {
    right: 2.9rem;
    padding: 0.375rem;
  }
  
  &:hover {
    color: #374151;
  }
  
  &:focus {
    outline: 2px solid #7e0fc6;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const CheckboxRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  max-width: 350px;
  
  @media (max-width: ${breakpoints.sm}) {
    /* flex-direction: column; */
    align-items: flex-start;
    gap: 5rem;
    margin-bottom: 1.5rem;
    max-width: 300px;
    flex-direction: row;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    align-items: flex-start;
    text-align: left;
    gap: 6rem;
    max-width: 150px;
    flex-direction: row;
  }
`;

export const RememberMe = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #252d31;
  cursor: pointer;
  
  input[type="checkbox"] {
    margin: 0;
    width: 1rem;
    height: 1rem;
    accent-color: #7e0fc6;
  }
  span{
    max-width: 100rem;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    font-size: 0.75rem;
    max-width: 50rem;
  }
`;

export const ForgotPassword = styled.a`
  font-size: 0.875rem;
  color: #7e0fc6;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  @media (max-width: ${breakpoints.xs}) {
    font-size: 0.75rem;
  }
  
  &:hover {
    text-decoration: underline;
    color: #6b05a0;
  }
  
  &:focus {
    outline: 2px solid #7e0fc6;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 350px;
  padding: 0.75rem;
  background: linear-gradient(135deg, #af4fef 0%, #7e0fc6 100%);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  height: 50px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(126, 15, 198, 0.1);
  
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