import React, { useState } from "react";
import ReciverDetail from "../../models/reciverDetail";
import {
  Wrapper,
  Breadcrumb,
  UserCard,
  Avatar,
  UserInfo,
  FilterForm,
  Order,
  DetailUserInfoRow,
  TableWrapper,
  TableStyled,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableData,
  TableAction,
  TableIconWrapper,
  TableStatus,
  CardStatsWrapper,
  CardWrapper,
  CardIconWrapper,
  CardContent,
  CardTitle,
  Bread,
  CardCount,
   SearchInput,
  ButtonRow,
  ButtonReset,
  ButtonPrimary,
  DateInput,
  DateWrapper,
  PriceInputRow,
  PriceRangeWrapper,
  PriceInput,
  BrandSelect,
  
} from "./styles";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEye,
 


} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import userImg from "../../assets/images/users/userId.png";
import { ReactComponent as TotalIcon } from '../../assets/icons/totalcard.svg';
import { ReactComponent as MyIcon } from '../../assets/icons/mycard.svg';
import { ReactComponent as GiftedIcon } from '../../assets/icons/giftcard.svg';
import Pagination from "../../components/Pagination";

const giftCardData = [
  {
    id: 1,
    cardId: "325256",
    date: "Mar 4, 2024 6:37 AM",
    brand: "J.",
    amount: "$10",
    recipient: "Myself",
    status: "Available",
  },
  {
    id: 2,
    cardId: "234234",
    date: "Mar 4, 2024 6:37 AM",
    brand: "KFC",
    amount: "$100",
    recipient: "Wassi",
    status: "Used",
  },
  {
    id: 3,
    cardId: "345345",
    date: "Mar 4, 2024 6:37 AM",
    brand: "McDonald",
    amount: "$35",
    recipient: "Myself",
    status: "Used",
  },
  {
    id: 4,
    cardId: "546434",
    date: "Mar 4, 2024 6:37 AM",
    brand: "LV",
    amount: "$70",
    recipient: "My Friend",
    status: "Used",
  },
  {
    id: 5,
    cardId: "788665",
    date: "Mar 4, 2024 6:37 AM",
    brand: "Gucci",
    amount: "$23",
    recipient: "Myself",
    status: "Used",
  },
];

const cardData = [
  {
    id: 1,
    title: 'Total Cards',
    count: 99,
    Icon: TotalIcon,
    bgColor: '#004E971A',
  },
  {
    id: 2,
    title: 'My Cards',
    count: 19,
    Icon: MyIcon,
    bgColor: '#FF10101A',
  },
  {
    id: 3,
    title: 'Gifted Cards',
    count: 29,
    Icon: GiftedIcon,
    bgColor: '#00AA301A',
  },
];

const UsersDetail: React.FC = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [searchCardId, setSearchCardId] = useState("");

  const handleEyeClick = () => {
    setShowPopup(true);
  };

  const filteredCards = giftCardData.filter((card) =>
    card.cardId.toLowerCase().includes(searchCardId.toLowerCase())
  );
// const filteredCards = giftCardData.filter((card) => {
//   const search = searchCardId.toLowerCase();
//   return (
//     card.cardId.toLowerCase().includes(search) ||
//     card.brand.toLowerCase().includes(search) ||
//     card.amount.toLowerCase().includes(search) ||
//     card.recipient.toLowerCase().includes(search) ||
//     card.status.toLowerCase().includes(search) ||
//     card.date.toLowerCase().includes(search)
//   );
// });

  return (
    <Wrapper>
      <Breadcrumb>
        <Bread onClick={() => navigate('/pages/users')}>Users ›</Bread> <span>User Details</span>
      </Breadcrumb>

      <UserCard>
        <Avatar src={userImg} alt="User Profile" />
        <UserInfo>
          <h2>Mr.Adnan</h2>
          <DetailUserInfoRow>
            <FaEnvelope color="#7E0FC6" /> sendtomadnan@gmail.com
          </DetailUserInfoRow>
          <DetailUserInfoRow>
            <FaPhoneAlt color="#7E0FC6" /> +92 3174103743
          </DetailUserInfoRow>
          <DetailUserInfoRow>
            <FaMapMarkerAlt color="#7E0FC6" /> Basti Kahoor, Rahim Yar Khan, Pakistan
          </DetailUserInfoRow>
        </UserInfo>
      </UserCard>

      <Order>Order Details</Order>

      <CardStatsWrapper>
        {cardData.map(({ id, title, count, Icon, bgColor }) => (
          <CardWrapper key={id}>
            <CardIconWrapper style={{ backgroundColor: bgColor }}>
              <Icon width={24} height={24} />
            </CardIconWrapper>
            <CardContent>
              <CardTitle>{title}</CardTitle>
              <CardCount>{count}</CardCount>
            </CardContent>
          </CardWrapper>
        ))}
      </CardStatsWrapper>

      <FilterForm>
              <SearchInput
                value={searchCardId}
                onChange={(e) => setSearchCardId(e.target.value)}
                placeholder="Search by Card Name"
              />
              <BrandSelect>
                <option>Brands</option>
                <option>KFC</option>
                <option>Gucci</option>
                <option>LV</option>
                <option>McDonald</option>
                <option>J.</option>
                <option>Zara</option>
                <option>Amazon</option>
              </BrandSelect>
      
              <PriceRangeWrapper>
        <span>Price Range</span>
        <PriceInputRow>
          <PriceInput placeholder="Min" />
          <span>to</span>
          <PriceInput placeholder="Max" />
        </PriceInputRow>
      </PriceRangeWrapper>
      
              <DateWrapper>
                <DateInput type="date" placeholder="Start Date" />
                <DateInput type="date" placeholder="End Date" />
              </DateWrapper>
       <ButtonRow>
              <ButtonPrimary>Filter</ButtonPrimary>
              <ButtonReset type="reset">Reset</ButtonReset>
              </ButtonRow>
            </FilterForm>

      <h3>Order History</h3>
      <TableWrapper>
        <TableStyled>
          <TableHead>
            <tr>
              <TableHeaderCell>Sr. No</TableHeaderCell>
              <TableHeaderCell>Card ID</TableHeaderCell>
              <TableHeaderCell>Purchased Date</TableHeaderCell>
              <TableHeaderCell>Brand</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Gift For</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </tr>
          </TableHead>
          <TableBody>
            {filteredCards.map((card) => (
              <TableRow key={card.id}>
                <TableData>{card.id}</TableData>
                <TableData>{card.cardId}</TableData>
                <TableData>{card.date}</TableData>
                <TableData>{card.brand}</TableData>
                <TableData>{card.amount}</TableData>
                <TableData>{card.recipient}</TableData>
                <TableAction>
                  <TableIconWrapper onClick={handleEyeClick} style={{ cursor: "pointer" }}>
                    <FaEye size={14} />
                  </TableIconWrapper>
                  <TableStatus status={card.status}>{card.status}</TableStatus>
                </TableAction>
              </TableRow>
            ))}
          </TableBody>
        </TableStyled>
      </TableWrapper>

      <Pagination/>

      <ReciverDetail isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </Wrapper>
  );
};

export default UsersDetail;
