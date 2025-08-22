import React from 'react';
import {
  Wrapper,
  Header,
  Title,
  EditButton,
  Section,
  Nav,
  TabList,
  TabTitle,
  ProfileForm,
  Label,
  ImageWrapper,
  ProfileImage,
  RemoveImageButton,
  Input,
  UpdateButton,

} from './styles';
import { FaTimes } from 'react-icons/fa';
import profileImg from '../../assets/images/header/myprofile.png'; 

const MyProfile: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Title>My Profile</Title>
        <EditButton>Edit Profile</EditButton>
      </Header>
      <Section>
        <Nav>
          <TabList>
            <TabTitle>Profile</TabTitle>
          </TabList>
        </Nav>
        <ProfileForm>
          <Label htmlFor="profile-picture">
            <span>Profile Picture</span>
            <ImageWrapper>
              <ProfileImage src={profileImg} alt="Profile" id="profile-picture" />
              <RemoveImageButton aria-label="Remove profile picture">
                <FaTimes size={12} />
              </RemoveImageButton>
            </ImageWrapper>
          </Label>
          <div />
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" defaultValue="Jennifer Taylor" />
          <Label htmlFor="email" className="">Email</Label>
          <Input id="email" name="email" type="email" defaultValue="main.builtinsoft@gmail.com"  />
          <Label htmlFor="contact-number">Contact Number</Label>
          <Input id="contact-number" name="contact-number" type="text" defaultValue="317 4103743" />
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            type="text"
            defaultValue="RailWay Line, NoreyWali , Pakistan"
          />
                    <UpdateButton>Update Profile</UpdateButton>
        </ProfileForm>
      </Section>
    </Wrapper>
  );
};

export default MyProfile;
