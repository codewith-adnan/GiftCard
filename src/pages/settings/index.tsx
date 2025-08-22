import React, { useState } from 'react';
import {
  Container,
  Title,
  Card,
  CardTitle,
  FormWrapper,
  LeftColumn,
  InputGroup,
  Label,
  SubLabel,
  Input,
  EyeButton,
  RightColumn,
  ToggleWrapper,
  ToggleLabel,
  ToggleText,
  ToggleSwitch,
  BorderLine,
  UpdateButton,
} from './styles';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Settings: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <Container>
      <Title>Settings</Title>
      <Card>
        <CardTitle>Settings</CardTitle>
        <BorderLine></BorderLine>
        <FormWrapper>
          <LeftColumn>
            <InputGroup>
              <Label>Profile Picture</Label>
            </InputGroup>

            <InputGroup>
              <Label style={{fontSize:'14px'}}>Current Password</Label>
              <div style={{ position: 'relative' }}>
                <Input type={showCurrent ? 'text' : 'password'} placeholder="******"  />
                <EyeButton type="button" onClick={() => setShowCurrent(!showCurrent)}>
                  {showCurrent ? <FaEye /> : <FaEyeSlash />}
                </EyeButton>
              </div>
            </InputGroup>

            <InputGroup>
              <SubLabel >Create new<br />password</SubLabel>
              <Label style={{fontSize:'14px'}}>New Password</Label>
              <div style={{ position: 'relative' }}>
                <Input type={showNew ? 'text' : 'password'} placeholder="********" />
                <EyeButton type="button" onClick={() => setShowNew(!showNew)}>
                  {showNew ? <FaEye /> : <FaEyeSlash />}
                </EyeButton>
              </div>
            </InputGroup>

            <InputGroup>
              <Label style={{fontSize:'14px'}}>Confirm Password</Label>
              <div style={{ position: 'relative' }}>
                <Input type={showConfirm ? 'text' : 'password'} placeholder="********"  />
                <EyeButton type="button" onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <FaEye /> : <FaEyeSlash />}
                </EyeButton>
              </div>
            </InputGroup>
          </LeftColumn>

          <RightColumn>
            <ToggleWrapper>
              <Label>Notifications</Label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
                <ToggleText>Enabled</ToggleText>
                <ToggleLabel>
                  <input
                    type="checkbox"
                    checked={notificationsEnabled}
                    onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                  />
                  <ToggleSwitch isChecked={notificationsEnabled} />
                </ToggleLabel>
              </div>
            </ToggleWrapper>
            <UpdateButton>Update</UpdateButton>
          </RightColumn>
        </FormWrapper>
      </Card>
    </Container>
  );
};

export default Settings;
