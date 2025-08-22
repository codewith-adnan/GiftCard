import React, { useState } from 'react';
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  Overlay,
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalForm,
  Label,
  Input,
  ColorSection,
  SubmitButton,
  SelectorWrapper,
  DropdownButton,
  Form,
  CategoryItem,
  Checkbox,
  IconWrapper,
  ItemLabel,
  CategoryBadge,
  BadgeCloseIcon,
  BadgeWrapper
} from './styles';

import { ReactComponent as TshirtIcon } from '../../assets/icons/Casual t shirt.svg';
import { ReactComponent as TvIcon } from '../../assets/icons/Tv.svg';
import { ReactComponent as BagIcon } from '../../assets/icons/Shopping bag.svg';
import { ReactComponent as SportsIcon } from '../../assets/icons/sports.svg';
import { ReactComponent as CouchIcon } from '../../assets/icons/furniture.svg';
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg';
import { ReactComponent as ShoeIcon } from '../../assets/icons/shoes.svg';
import { ReactComponent as FoodIcon } from '../../assets/icons/Restaurant.svg';

interface AssignPopupProps {
  isOpen: boolean;
  selectedBrand: {
    name: string;
    color: string;
    categories: string[];
  } | null;
  onClose: () => void;
}

const categoryOptions = [
  { label: 'Cloth', icon: <TshirtIcon />, color: '#FF0000' },
  { label: 'Entertainments', icon: <TvIcon />, color: '#F4BF00' },
  { label: 'Bags', icon: <BagIcon />, color: '#3563E9' },
  { label: 'Sports', icon: <SportsIcon />, color: '#8F00FF' },
  { label: 'Furniture', icon: <CouchIcon />, color: '#40B468' },
  { label: 'Crypto', icon: <LockIcon />, color: '#90D7FF' },
  { label: 'Shoes', icon: <ShoeIcon />, color: '#4CB1CC' },
  { label: 'Food', icon: <FoodIcon />, color: '#FF6B00' },
];

const AssignPopup: React.FC<AssignPopupProps> = ({ isOpen, selectedBrand, onClose }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(selectedBrand?.categories || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [color, setColor] = useState<string>(selectedBrand?.color || '#000000');

  if (!isOpen || !selectedBrand) return null;

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <Overlay>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>Assign Categories</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close">
            <FaTimes />
          </CloseButton>
        </ModalHeader>

        <ModalForm>
          <div>
            <Label>Brand Name</Label>
            <Input placeholder="Write your brand name" />
          </div>

          <div>
            <Label>Categories</Label>
            <SelectorWrapper>
              <DropdownButton type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>Select Category</span>
                {isDropdownOpen ? (
                  <FaChevronUp size={12} color="#8A9BA8" />
                ) : (
                  <FaChevronDown size={12} color="#8A9BA8" />
                )}
              </DropdownButton>

              {isDropdownOpen && (
                <Form>
                  {categoryOptions.map(({ label, icon, color }) => (
                    <CategoryItem key={label}>
                      <Checkbox
                        type="checkbox"
                        checked={selectedCategories.includes(label)}
                        onChange={() => handleCategoryChange(label)}
                      />
                      <IconWrapper style={{ backgroundColor: color }}>{icon}</IconWrapper>
                      <ItemLabel>{label}</ItemLabel>
                    </CategoryItem>
                  ))}
                </Form>
              )}
            </SelectorWrapper>

            {selectedCategories.length > 0 && (
              <BadgeWrapper>
                {selectedCategories.map((category) => (
                  <CategoryBadge key={category}>
                    {category}
                    <BadgeCloseIcon onClick={() => handleCategoryChange(category)} />
                  </CategoryBadge>
                ))}
              </BadgeWrapper>
            )}
          </div>

          <div>
            <Label htmlFor="cardcolor">Select Card Color</Label>
            <ColorSection>
              <Input
                id="cardcolor"
                placeholder="select brand color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
               < input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{ width:'30%', height: '30px', border: 'none', cursor: 'pointer' }}
            />
            </ColorSection>
           
          </div>

          <SubmitButton>Assign</SubmitButton>
        </ModalForm>
      </ModalWrapper>
    </Overlay>
  );
};

export default AssignPopup;
