import React, { useState } from "react";

import {
  Container,
  ImageSection,
  LoginImage,
  FormSection,
  LogoWrapper,
  LogoIcon,
  Title,
  Underline,
  ConfirmWrapper,
  ConfirmHeading,
  ConfirmSubText,
  ConfirmForm,
  ConfirmInputGroup,
  ConfirmInput,
  ConfirmIcon,
  ConfirmToggle,
  ConfirmButton,
  
} from "./styles";
import { FaLock, FaEyeSlash, FaEye } from "react-icons/fa";


import Image from "../../assets/images/formimages/Image.jpg";
import Logo from "../../assets/images/formimages/Logo.png";
import { useNavigate } from "react-router-dom";

const NewPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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
<ConfirmWrapper>
      <ConfirmHeading>Reset your Password</ConfirmHeading>
      <ConfirmSubText>
        Please enter your new password and confirm password
      </ConfirmSubText>

      <ConfirmForm>
        <ConfirmInputGroup>
          <ConfirmIcon>
            <FaLock />
          </ConfirmIcon>
          <ConfirmInput
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <ConfirmToggle onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </ConfirmToggle>
        </ConfirmInputGroup>

        <ConfirmInputGroup>
          <ConfirmIcon>
            <FaLock />
          </ConfirmIcon>
          <ConfirmInput
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
          />
          <ConfirmToggle onClick={() => setShowConfirm((prev) => !prev)}>
            {showConfirm ? <FaEye /> : <FaEyeSlash />}
          </ConfirmToggle>
        </ConfirmInputGroup>

        <ConfirmButton type="submit" onClick={()=>navigate('/pages/dashboard')}>Confirm</ConfirmButton>
      </ConfirmForm>
    </ConfirmWrapper>
       
      </FormSection>
    </Container>
  );
};

export default NewPassword;
