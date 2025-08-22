import React from 'react'
import {
    PaginationWrapper,
  PaginationInfo,
  PaginationNav,
  PageButton,
  PageNavButton,
  Dots,
} from './styles'
import {  FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination:React.FC = () => {
  return (
    <div>
       <PaginationWrapper>
              <PaginationInfo>Showing 1–12 of </PaginationInfo>
              <PaginationNav>
                <PageNavButton>
                  <FaChevronLeft size={12} />
                </PageNavButton>
                <PageButton className="active">1</PageButton>
                <PageButton>2</PageButton>
                <PageButton>3</PageButton>
                <Dots>...</Dots>
                <PageButton>50</PageButton>
                <PageNavButton>
                  <FaChevronRight size={12} />
                </PageNavButton>
              </PaginationNav>
            </PaginationWrapper>
    </div>
  )
}

export default Pagination;
