import React from 'react';
import {
  PopupOverlay,
  PopupWrapper,
  PopupHeader,
  PopupTitle,
  CloseButton,
  CardSection,
  CardImage,
  ReceiverSection,
  ReceiverTitle,
  ReceiverContent,
  ReceiverImage,
  ReceiverDetails,
  ReceiverName,
  InfoRow,
  IconBox,
  InfoText,
} from './styles';

import McDonaldsImg from '../../assets/images/users/recieverdetail.png';
import ReceiverImg from '../../assets/images/users/userId.png';

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ReciverDetail: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <PopupOverlay onClick={onClose}>
      <PopupWrapper onClick={(e) => e.stopPropagation()}>
        <PopupHeader>
          <PopupTitle>Gift Card Receiver Detail</PopupTitle>
          <CloseButton onClick={onClose} aria-label="Close">×</CloseButton>
        </PopupHeader>

        <CardSection>
          <CardImage src={McDonaldsImg} alt="McDonald's Gift" />
        </CardSection>
          <ReceiverTitle>Receiver ID</ReceiverTitle>

        <ReceiverSection>
          <ReceiverContent>
            <ReceiverImage src={ReceiverImg} alt="Receiver" />
            <ReceiverDetails>
              <ReceiverName>Mr.Adnan</ReceiverName>
              <InfoRow>
                <IconBox><FaEnvelope size={10} /></IconBox>
                <InfoText>sendtomadnan@gmail.com</InfoText>
              </InfoRow>
              <InfoRow>
                <IconBox><FaPhoneAlt size={10} /></IconBox>
                <InfoText>+92 3174103743</InfoText>
              </InfoRow>
              <InfoRow>
                <IconBox><FaMapMarkerAlt size={10} /></IconBox>
                <InfoText>Rahim Yar Khan, PAkistan</InfoText>
              </InfoRow>
            </ReceiverDetails>
          </ReceiverContent>
        </ReceiverSection>
      </PopupWrapper>
    </PopupOverlay>
  );
};

export default ReciverDetail;
