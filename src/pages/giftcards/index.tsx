import React, { useState } from 'react';
import {
  GiftWrapper,
  GiftHeading,
  GiftForm,
  GiftInput,
  GiftSelect,
  GiftButton,
  GiftResetButton,
  GiftTableWrapper,
  GiftTable,
  GiftThead,
  GiftTbody,
  GiftTh,
  GiftTd,
  GiftTr,
 
} from './styles';
import Pagination from '../../components/Pagination';

const giftcarddata = [
  { id: 1, cardId: '325256', name: 'Alkaram', brand: 'KFC', amount: '$1', country: 'Pakistan' },
  { id: 2, cardId: '234234', name: 'Outfitters', brand: 'KFC', amount: '$10', country: 'India' },
  { id: 3, cardId: '345345', name: 'KFC', brand: 'KFC', amount: '$20', country: 'Pakistan' },
  { id: 4, cardId: '546434', name: 'McDonald', brand: 'McDonald', amount: '$40', country: 'United Stated' },
  { id: 5, cardId: '788665', name: 'J.', brand: 'J.', amount: '$60', country: 'United Kingdom' },
];

const GiftCard: React.FC = () => {
  const [searchCardName, setSearchCardName] = useState('');

  // const filteredCards = giftcarddata.filter(card =>
  //   card.name.toLowerCase().includes(searchCardName.toLowerCase())
  // );

  const filteredCards=giftcarddata.filter(card =>
    card.name.toLowerCase().includes(searchCardName.toLowerCase())
  );

  return (
    <GiftWrapper>
      <GiftHeading>Gift Cards</GiftHeading>

      <GiftForm>
        <div className="input-row">
          <GiftInput
            type="text"
            placeholder="Search by card name"
            value={searchCardName}
            onChange={(e) => setSearchCardName(e.target.value)}
          />
          <GiftSelect>
            <option>Brands</option>
            <option>KFC</option>
            <option>McDonald</option>
            <option>J.</option>
          </GiftSelect>
          <GiftSelect>
            <option>Country</option>
            <option>Pakistan</option>
            <option>India</option>
            <option>United Stated</option>
            <option>United Kingdom</option>
          </GiftSelect>
        </div>

        <div className="button-row">
          <GiftButton>Filter</GiftButton>
          <GiftResetButton type="reset" onClick={() => setSearchCardName('')}>
            Reset
          </GiftResetButton>
        </div>
      </GiftForm>

      <GiftTableWrapper>
        <GiftTable>
          <GiftThead>
            <GiftTr>
              <GiftTh>Sr. No</GiftTh>
              <GiftTh>Card ID</GiftTh>
              <GiftTh>Card Name</GiftTh>
              <GiftTh>Brand Name</GiftTh>
              <GiftTh>$ Amount</GiftTh>
              <GiftTh>Country Name</GiftTh>
            </GiftTr>
          </GiftThead>
          <GiftTbody>
            {filteredCards.map((card) => (
              <GiftTr key={card.id}>
                <GiftTd>{card.id}</GiftTd>
                <GiftTd>{card.cardId}</GiftTd>
                <GiftTd>{card.name}</GiftTd>
                <GiftTd>{card.brand}</GiftTd>
                <GiftTd>{card.amount}</GiftTd>
                <GiftTd>{card.country}</GiftTd>
              </GiftTr>
            ))}
          </GiftTbody>
        </GiftTable>
      </GiftTableWrapper>

    <Pagination/>
    </GiftWrapper>
  );
};

export default GiftCard;
