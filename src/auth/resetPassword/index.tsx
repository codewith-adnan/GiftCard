import React from "react";
import {  useNavigate } from "react-router-dom";

import {
  Container,
  ImageSection,
  LoginImage,
  FormSection,
  LogoWrapper,
  LogoIcon,
  Title,
  Underline,
  ResetWrapper,
  ResetHeading,
  ResetSubText,
  ResetForm,
  ResetInputWrapper,
  ResetIcon,
  ResetInput,
  ResetSubmitButton,
  ResetBackLink,
} from "./styles";

import { FaRegEnvelope } from "react-icons/fa"; 

import Image from "../../assets/images/formimages/Image.jpg";
import Logo from "../../assets/images/formimages/Logo.png";

const ResetPassword: React.FC = () => {
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
{/* //commit */}
        <ResetWrapper>
          <ResetHeading>Reset your password</ResetHeading>

          <ResetSubText>
            Enter the email address associated with your account and we will
            send you a link to reset your password.
          </ResetSubText>

          <ResetForm>
            <ResetInputWrapper>
              <ResetIcon>
                <FaRegEnvelope />
              </ResetIcon>
              <ResetInput
                type="email"
                placeholder="Angela.lau"
              />
            </ResetInputWrapper>

            <ResetSubmitButton type="submit" onClick={()=>navigate("/auth/checkEmail")} >Continue</ResetSubmitButton>
          </ResetForm>

          <ResetBackLink onClick={()=>navigate("/auth/login")} >Back to Sign In</ResetBackLink>
        </ResetWrapper>
      </FormSection>
    </Container>
  );
};

export default ResetPassword;
