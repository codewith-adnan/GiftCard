import React from "react";
import {
  Overlay,
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalForm,
  FormRow,
  IconSection,
  IconLabel,
  IconButton,
  IconImage,
  AddIcon,
  InputSection,
  InputLabel,
  InputField,
  SubmitButton,
} from "./styles";

import { FaTimes, FaPlus } from "react-icons/fa";
import iconImage from "../../assets/images/header/add.png";

interface AddCategoryProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCategory: React.FC<AddCategoryProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>Add Category</ModalTitle>
          <CloseButton aria-label="Close" onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>

        <ModalForm>
          <FormRow>
            <IconSection>
              <IconLabel htmlFor="category-icon">Category Icon</IconLabel>
              <div style={{ position: "relative" }}>
                <IconButton type="button">
                  <IconImage src={iconImage}  />
                </IconButton>
                <AddIcon>
                  <FaPlus />
                </AddIcon>
              </div>
            </IconSection>

            <InputSection>
              <InputLabel htmlFor="category-name">Category Name</InputLabel>
              <InputField id="category-name" type="text" placeholder="" />
            </InputSection>
          </FormRow>

          <SubmitButton>Add</SubmitButton>
        </ModalForm>
      </ModalWrapper>
    </Overlay>
  );
};

export default AddCategory;
