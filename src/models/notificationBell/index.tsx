import React from 'react';
import {
  NotificationWrapper,
  ProfileImage,
  NotificationContent,
  UserText,
  OrderAmount,
  StatusRow,
  StatusBadge,
  DateText,
  Line,
} from './styles';

import JakeImg from '../../assets/images/header/bellimage.png'; 

const Notification: React.FC = () => {
  return (
    <NotificationWrapper>
      <ProfileImage
        src={JakeImg}
        alt="Portrait of Jake AJ"
      />
      <NotificationContent>
        <UserText>
          Adnan , <OrderAmount> Placed $132.72 order!</OrderAmount>
        </UserText>
        <StatusRow>
          <StatusBadge>Delivered</StatusBadge>
          <DateText>Feb 26, 2024 12:02 PM</DateText>
        </StatusRow>
        <Line></Line>
      </NotificationContent>
    </NotificationWrapper>
  );
};

export default Notification;
