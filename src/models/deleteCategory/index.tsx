import React from 'react';
import {
  Overlay,
  ModalWrapper,
  ModalHeader,
  CloseButton,
  ModalBody,
  ButtonGroup,
  CancelButton,
  DeleteButton,
} from './styles';

import deleteImg from '../../assets/images/header/dell.png'; 

interface DeleteCategoryProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteCategory: React.FC<DeleteCategoryProps> = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalWrapper>
        <ModalHeader>
          <h2>Delete </h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <img src={deleteImg} alt="Delete illustration" />
          <p>Are you sure you want to delete this?</p>
            <p>Wellcom to feature branch</p>

          <ButtonGroup>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            <DeleteButton onClick={onDelete}>Delete</DeleteButton>
          </ButtonGroup>
        </ModalBody>
      </ModalWrapper>
    </Overlay>
  );
};

export default DeleteCategory;