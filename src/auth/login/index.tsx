import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ImageSection,
  LoginImage,
  FormSection,
  LogoWrapper,
  LogoIcon,
  Title,
  Underline,
  Form,
  Heading,
  SubText,
  InputWrapper,
  StyledInput,
  StyledIcon,
  ToggleButton,
  CheckboxRow,
  RememberMe,
  ForgotPassword,
  SubmitButton,
} from "./styles";

import { FaRegEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "../../assets/images/formimages/Image.jpg";
import Logo from "../../assets/images/formimages/Logo.png";

const GiftLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  return (
    <Container>
      <ImageSection>
        <LoginImage src={Image} alt="Gift Card Visual" />
      </ImageSection>

      <FormSection>
        <LogoWrapper>
          <LogoIcon src={Logo} alt="Gift Card Logo" />
          <Title>
            GIFT <strong>CARD</strong>
          </Title>
        </LogoWrapper>

        <Underline />

        <Form>
          <Heading>Login to your Account</Heading>
          <SubText>Welcome back! please enter your detail</SubText>

          <InputWrapper>
            <StyledIcon>
              <FaRegEnvelope />
            </StyledIcon>
            <StyledInput type="email" placeholder="Email" />
          </InputWrapper>

          <InputWrapper>
            <StyledIcon>
              <FaLock />
            </StyledIcon>
            <StyledInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <ToggleButton
              type="button"
              aria-label="Toggle password visibility"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaEye size={16} color="#9ca3af" />
              ) : (
                <FaEyeSlash size={16} color="#9ca3af" />
              )}
            </ToggleButton>
          </InputWrapper>

          <CheckboxRow>
            <RememberMe>
              <input type="checkbox" style={{width: "18px",height: "18px",accentColor: "#7E0FC6",  borderRadius: "10px",}}/>
              <span>Remember me</span>
            </RememberMe>
            <ForgotPassword onClick={() => navigate("/auth/resetPassword")}>
              Forgot Password?
            </ForgotPassword>
          </CheckboxRow>

          <SubmitButton type="submit" onClick={()=>navigate('/pages/dashboard')} >Login</SubmitButton>
        </Form>
      </FormSection>
    </Container>
  );
};

export default GiftLogin;
