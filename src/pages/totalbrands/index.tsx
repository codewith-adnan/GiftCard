import React, { useState } from 'react';
import {
  BrandWrapper,
  BrandHeading,
  BrandForm,
  BrandInput,
  BrandButton,
  BrandCard,
  BrandTable,
  BrandThead,
  BrandTbody,
  BrandTr,
  BrandTh,
  BrandTd,
  Badge,
  ColorBox,
  TabNav,
  TabButton,
} from './styles';

import {
  
  FaPen,
} from "react-icons/fa";

import AssignPopup from '../../models/assignCate';

import kfcImg from '../../assets/images/brands/KFC_logo.png';
import calvinkelvinImg from '../../assets/images/brands/CK_Calvin_Klein_logo.png';
import mcdonaldImg from '../../assets/images/brands/McDonald.png';
import amazonImg from '../../assets/images/brands/Amazon.png';
import zaraImg from '../../assets/images/brands/zara-brand-logo.png';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/Pagination';

const brandData = [
  {
    id: 1,
    name: 'KFC',
    image: kfcImg,
    color: '#A3080C',
    categories: ['Food'],
  },
  {
    id: 2,
    name: 'Calvin Kelvin',
    image: calvinkelvinImg,
    color: '#ffffff',
    categories: ['Cloth', 'Shoes'],
  },
  {
    id: 3,
    name: 'McDonald',
    image: mcdonaldImg,
    color: '#DB0007',
    categories: ['Food'],
  },
  {
    id: 4,
    name: 'Amazon',
    image: amazonImg,
    color: '#231F20',
    categories: ['Electronics', 'Cloth', 'Shoes', 'Food'],
  },
  {
    id: 5,
    name: 'Zara',
    image: zaraImg,
    color: '#074D88',
    categories: ['Bags'],
  },
];

const TotalBrands: React.FC = () => {

  const navigate =useNavigate();
  const [selectedBrand, setSelectedBrand] = useState<any | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchBrandName, setSearchBrandName] = useState('');

  const handleEditClick = (brand: any) => {
    setSelectedBrand(brand);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedBrand(null);
  };

  // Filter brands by name
  const filteredBrands = brandData.filter((brand) =>
    brand.name.toLowerCase().includes(searchBrandName.toLowerCase())
  );

  return (
    <BrandWrapper>
      <BrandHeading>Total Brands</BrandHeading>

      <BrandForm>
        <BrandInput
          placeholder="Search by Brand Name"
          value={searchBrandName}
          onChange={(e) => setSearchBrandName(e.target.value)}
        />
        <BrandButton type="submit">Search</BrandButton>
      </BrandForm>

      <BrandCard>
        <TabNav>
          <TabButton active>Categories</TabButton>
          <TabButton onClick={()=>navigate('/pages/uncategoryBrands')} >Uncategories</TabButton>
        </TabNav>

        <div style={{ overflowX: 'auto' }}>
          <BrandTable>
            <BrandThead>
              <BrandTr>
                <BrandTh>Sr. No</BrandTh>
                <BrandTh>Image</BrandTh>
                <BrandTh>Brands</BrandTh>
                <BrandTh>BackgroundColor</BrandTh>
                <BrandTh>Assigned Categories</BrandTh>
                <BrandTh center>Action</BrandTh>
              </BrandTr>
            </BrandThead>
            <BrandTbody>
              {filteredBrands.map((brand, index) => (
                <BrandTr key={brand.id}>
                  <BrandTd>{index + 1}</BrandTd>
                  <BrandTd>
                    <img src={brand.image} alt={brand.name} width={40} />
                  </BrandTd>
                  <BrandTd>{brand.name}</BrandTd>
                  <BrandTd>
                    <ColorBox style={{ backgroundColor: brand.color }} />
                    {brand.color}
                  </BrandTd>
                  <BrandTd>
                    {brand.categories.map((cat, idx) => (
                      <Badge key={idx}>{cat}</Badge>
                    ))}
                  </BrandTd>
                  <BrandTd center>
                    <button
                      aria-label={`Edit ${brand.name}`}
                      onClick={() => handleEditClick(brand)}
                      className="edit-btn"
                    >
                      <FaPen size={14} />
                    </button>
                  </BrandTd>
                </BrandTr>
              ))}
            </BrandTbody>
          </BrandTable>
        </div>
      </BrandCard>
      <Pagination/>

      <AssignPopup
        isOpen={showPopup}
        selectedBrand={selectedBrand}
        onClose={handleClosePopup}
      />
    </BrandWrapper>
  );
};

export default TotalBrands;
