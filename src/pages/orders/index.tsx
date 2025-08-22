import React, { useState } from "react";
import {
  Wrapper,
  Heading,
  Title,
  FilterForm,
  SearchInput,
  BrandSelect,
  PriceRangeWrapper,
  PriceInput,
  DateWrapper,
  DateInput,
  ButtonPrimary,
  ButtonReset,
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
  PriceInputRow,
  ButtonRow,
} from "./styles";
import { FaEye } from "react-icons/fa";
import ReciverDetail from "../../models/reciverDetail";
import Pagination from "../../components/Pagination";

const giftCardData = [
  { id: 1, cardId: "325256", date: "Mar 19, 2025 6:37 AM", users: "Shayan", brand: "J.", amount: "$10", recipient: "Myself", status: "Available" },
  { id: 2, cardId: "234234", date: "July 4, 2025 6:59 PM", users: "Adnan", brand: "KFC", amount: "$100", recipient: "Adnan", status: "Available" },
  { id: 3, cardId: "345345", date: "Mar 4, 2024 6:37 AM", users: "Usman", brand: "McDonald", amount: "$35", recipient: "Myself", status: "Available" },
  { id: 4, cardId: "546434", date: "Aug 4, 2025 6:59 PM", users: "Alyan", brand: "LV", amount: "$70", recipient: "My Friend", status: "Available" },
  { id: 5, cardId: "788665", date: "June 4, 2025 2:59 PM", users: "Jeorg", brand: "Gucci", amount: "$23", recipient: "Myself", status: "Available" },
];

const Orders: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchCardId, setSearchCardId] = useState("");

  const handleEyeClick = () => {
    setShowPopup(true);
  };

  const filteredCards = giftCardData.filter((card) =>
    card.cardId.toLowerCase().includes(searchCardId.toLowerCase())
  );

  return (
    <Wrapper>
      <Heading>
        <Title>Orders</Title>
      </Heading>

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
              <TableHeaderCell>User's</TableHeaderCell>
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
                <TableData>{card.users}</TableData>
                <TableData>{card.brand}</TableData>
                <TableData>{card.amount}</TableData>
                <TableData>{card.recipient}</TableData>
                <TableAction>
                  <TableIconWrapper onClick={handleEyeClick}>
                    <FaEye size={12} />
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

export default Orders;
