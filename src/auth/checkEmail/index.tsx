import {
  Container,
  ImageSection,
  LoginImage,
  FormSection,
  LogoWrapper,
  LogoIcon,
  Title,
  Underline,
    EmailWrapper,
  EmailImage,
  EmailHeading,
  EmailSubText,
  EmailFooterText,
  ResendLink,
ConfirmButton,
  
} from "./styles";


import Image from "../../assets/images/formimages/Image.jpg";
import Logo from "../../assets/images/formimages/Logo.png";
import LetterImage from "../../assets/images/formimages/LetterImage.png";
import { useNavigate } from "react-router-dom";


const EmailCheck: React.FC = () => {
  const navigate =useNavigate()

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
<EmailWrapper>
      <EmailImage src={LetterImage} alt="Illustration of a person holding a purple letter in an envelope" />
      <EmailHeading>Check your Email</EmailHeading>
      <EmailSubText>
        Thank you, check your email for instructions to reset your password
      </EmailSubText>
      <EmailFooterText>
        Don’t receive an email? <ResendLink href="#">Resend</ResendLink>
      </EmailFooterText>
    </EmailWrapper>
       <ConfirmButton onClick={()=>navigate('/auth/newPassword')}> Yes i am </ConfirmButton>
      </FormSection>
    </Container>
  );
};

export default EmailCheck;
