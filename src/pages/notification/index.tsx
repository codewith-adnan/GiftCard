import React from "react";
import {
  ListContainer,
  NotificationCard,
  NotificationTitle,
  NotificationText,
  ViewButton,
} from "./styles";

const notifications = [
  {
    id: 1,
    title: "You have Create a new Category",
    text: "Alyan with Email(abcd@gamil.com) has sent request for id approval",
  },
  {
    id: 2,
    title: "Brands are Categorize",
    text: "Usman with Email has sent request for order cancel.",
  },
  {
    id: 3,
    title: "You Have blocked Ahmed Ali",
    text: "Service Provider has blocked by you.",
  },
];

const NotificationList: React.FC = () => {
  return (
    <ListContainer>
      {notifications.map((notification) => (
        <NotificationCard key={notification.id}>
          <div>
            <NotificationTitle>{notification.title}</NotificationTitle>
            <NotificationText>{notification.text}</NotificationText>
          </div>
          <ViewButton>View</ViewButton>
        </NotificationCard>
      ))}
    </ListContainer>
  );
};

export default NotificationList;
