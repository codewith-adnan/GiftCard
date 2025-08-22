import React, { useState, useRef } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  CreditCard,
  DollarSign,
  RotateCcw,
  Zap,
  Gift,
  Earth,
  List,
  Tag,
  Grid2X2,
  TrendingUp,
} from "lucide-react";
import { FaRegCalendarAlt } from "react-icons/fa";

import {
  DashboardWrapper,
  CardsGrid,
  Card,
  FirstCard,
  CardLeft,
  IconBox,
  Info,
  Title,
  ApplyButton,
  Value,
  RightIcon,
  DashboardTitle,
  ChartWrapper,
  ChartHeader,
  ChartTitle,
  DateRangeWrapper,
  HiddenInput,
  CalendarIcon,
  ButtonGroup,
  ChartTabButton,
  DateDisplay,
} from "./styles";

const chartData = [
  { date: "Feb 8", value: 0 },
  { date: "Feb 9", value: 1500 },
  { date: "Feb 10", value: 2500 },
  { date: "Feb 11", value: 300 },
  { date: "Feb 12", value: 3500 },
  { date: "Feb 13", value: 100 },
  { date: "Feb 14", value: 4500 },
  { date: "Feb 15", value: 50 },
  { date: "Feb 16", value: 5500 },
  { date: "Feb 17", value: 6000 },
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Sales" | "Orders">("Sales");
  const [startDate, setStartDate] = useState("2024-02-08");
  const [endDate, setEndDate] = useState("2024-02-14");

  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);

  const data = {
    totalUsers: "2123k",
    totalCards: "12323k",
    totalRevenue: "$4876.98",
    returnedCards: "2123k",
    utilizedCards: "12323k",
    purchasedGiftCard: "$4876.98",
    totalCountries: 195,
    totalCategories: 8,
    totalBrands: 196,
    categorizedBrands: 194,
    uncategorizedBrands: 4,
  };

  return (
    <DashboardWrapper>
      <DashboardTitle>Dashboard</DashboardTitle>

      <CardsGrid>
        {/* Example for first card */}
        <FirstCard>
          <CardLeft>
            <IconBox>
              <Users size={20} color="#7E22CE" />
            </IconBox>
            <Info>
              <Title>Total Users</Title>
              <Value>{data.totalUsers}</Value>
            </Info>
          </CardLeft>
          <RightIcon>
            <TrendingUp />
          </RightIcon>
        </FirstCard>

        {/* Repeat Card for each data item */}
        <Card>
          <CardLeft>
            <IconBox>
              <CreditCard size={24} color="#7E22CE" />
            </IconBox>
            <Info>
              <Title>No of Cards</Title>
              <Value>{data.totalCards}</Value>
            </Info>
          </CardLeft>
          <RightIcon>
            <TrendingUp />
          </RightIcon>
        </Card>

        <Card>
          <CardLeft>
            <IconBox>
              <DollarSign size={20} color="#7E22CE" />
            </IconBox>
            <Info>
              <Title>Total Revenue</Title>
              <Value>{data.totalRevenue}</Value>
            </Info>
          </CardLeft>
          <RightIcon>
            <TrendingUp />
          </RightIcon>
        </Card>

       
 <Card>
          <CardLeft>
            <IconBox>
            <RotateCcw size={20} color="#7E22CE" />
            </IconBox>
            <Info>
              <Title>Returned Cards</Title>
              <Value>{data.returnedCards}</Value>
            </Info>
          </CardLeft>
          <RightIcon>
            <TrendingUp />
          </RightIcon>
        </Card>

         <Card>
          <CardLeft>
            <IconBox>
               <Zap size={20} color="#7E22CE" />

            </IconBox>
            <Info>
              <Title>Utilized Cards</Title>
              <Value>{data.utilizedCards}</Value>
            </Info>
          </CardLeft>
          <RightIcon>
            <TrendingUp />
          </RightIcon>
        </Card>


         <Card>
          <CardLeft>
            <IconBox>
                <Gift size={20} color="#7E22CE" />

            </IconBox>
            <Info>
              <Title>Purchased Gift Cards</Title>
              <Value>{data.purchasedGiftCard}</Value>
            </Info>
          </CardLeft>
          <RightIcon>
            <TrendingUp />
          </RightIcon>
        </Card>

         <Card>
          <CardLeft>
            <IconBox>
                   <Earth size={20} color="#7E22CE" />

            </IconBox>
            <Info>
              <Title>Total Countreis</Title>
              <Value>{data.totalCountries}</Value>
            </Info>
          </CardLeft>
          <RightIcon>
            <TrendingUp />
          </RightIcon>
        
        </Card>
         <Card>
          <CardLeft>
            <IconBox>
                   <List size={20} color="#7E22CE" />

            </IconBox>
            <Info>
              <Title>Total Categories</Title>
              <Value>{data.totalCategories}</Value>
            </Info>
          </CardLeft>
          <RightIcon>
            <TrendingUp />
          </RightIcon>
        </Card>
         <Card>
          <CardLeft>
            <IconBox>
    <Tag size={20} color="#7E22CE" />

            </IconBox>
            <Info>
              <Title>Total Brands</Title>
              <Value>{data.totalBrands}</Value>
            </Info>
          </CardLeft>
          <RightIcon>
            <TrendingUp />
          </RightIcon>
        </Card>
         <Card>
          <CardLeft>
            <IconBox>
               <Grid2X2 size={20} color="#7E22CE" />

            </IconBox>
            <Info>
              <Title>Categorized Brands</Title>
              <Value>{data.categorizedBrands}</Value>
            </Info>
          </CardLeft>
          <RightIcon>
            <TrendingUp />
          </RightIcon>
        </Card>
         <Card>
          <CardLeft>
            <IconBox>
                   <Grid2X2 size={20} color="#7E22CE" />

            </IconBox>
            <Info>
              <Title>UncategorizedBrands</Title>
              <Value>{data.uncategorizedBrands}</Value>
            </Info>
          </CardLeft>
          <RightIcon>
            <TrendingUp />
          </RightIcon>
        </Card>
      </CardsGrid>

      {/* Chart Section */}
      <ChartWrapper>
        <ChartHeader>
          <ChartTitle>Sales Statistics</ChartTitle>
          <DateRangeWrapper>
            <CalendarIcon onClick={() => startDateRef.current?.showPicker()}>
              <FaRegCalendarAlt />
            </CalendarIcon>

            <DateDisplay>
              <span onClick={() => startDateRef.current?.showPicker()}>
                {new Date(startDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span style={{ margin: "0 4px", color: "#6b7280" }}>to</span>
              <span onClick={() => endDateRef.current?.showPicker()}>
                {new Date(endDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </DateDisplay>

            <HiddenInput
              ref={startDateRef}
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <HiddenInput
              ref={endDateRef}
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </DateRangeWrapper>

          <ApplyButton>Apply</ApplyButton>
        </ChartHeader>

        <ButtonGroup>
          <ChartTabButton
            active={activeTab === "Sales"}
            onClick={() => setActiveTab("Sales")}
          >
            Sales
          </ChartTabButton>
          <ChartTabButton
            active={activeTab === "Orders"}
            onClick={() => setActiveTab("Orders")}
          >
            Orders
          </ChartTabButton>
        </ButtonGroup>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 8, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="7 7" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#7e22ce"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
