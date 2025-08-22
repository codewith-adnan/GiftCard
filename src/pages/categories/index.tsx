import React, { useState } from 'react';
import {
  Container,
  Header,
  Title,
  AddButton,
  SearchForm,
  SearchInput,
  SearchBtn,
  TableWrapper,
  StyledTable,
  TableHead,
  TableRow,
  TableCell,
  IconCircle,
  ActionButton,
} from './styles';

import {
  FaTshirt, FaTv, FaShoppingBag, FaBasketballBall,
  FaCouch, FaLock, FaShoePrints, FaUtensils,
  FaEdit, FaTrashAlt,
} from 'react-icons/fa';

import AddCategory from '../../models/addCategory';
import DeleteCategory from '../../models/deleteCategory';

// Static categories array
const categories = [
  { id: 1, name: 'Cloth', icon: <FaTshirt />, color: '#FF0000' },
  { id: 2, name: 'Entertainments', icon: <FaTv />, color: '#F4BF00' },
  { id: 3, name: 'Bags', icon: <FaShoppingBag />, color: '#2563eb' },
  { id: 4, name: 'Sports', icon: <FaBasketballBall />, color: '#8F00FF' },
  { id: 5, name: 'Furniture', icon: <FaCouch />, color: '#40B468' },
  { id: 6, name: 'Crypto', icon: <FaLock />, color: '#7dd3fc' },
  { id: 7, name: 'Shoes', icon: <FaShoePrints />, color: '#0ea5e9' },
  { id: 8, name: 'Food', icon: <FaUtensils />, color: '#FF6B00' },
];

const Categories: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  //  State to store the search input value
  const [searchTerm, setSearchTerm] = useState(''); // user input for search

  //  Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // update searchTerm as user types
  };

  //  Filter categories based on name includes searchTerm (case-insensitive)
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) // checks if category name includes the search text
  );

  const handleDeleteClick = (id: number) => {
    setSelectedCategoryId(id);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting category id:", selectedCategoryId);
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Container>
        <Header>
          <Title>Categories</Title>
          <AddButton onClick={() => setIsAddModalOpen(true)}>Add New Category</AddButton>
        </Header>

        <SearchForm
          // optional if you don't want form to refresh
          onSubmit={e => e.preventDefault()} //  prevent form from submitting the page
        >
          {/*  Search input binds to searchTerm and updates with onChange */}
          <SearchInput
            type="text"
            placeholder="Search by Name"
            value={searchTerm} //  controlled input
            onChange={handleSearchChange} // update value
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </SearchForm>

        <TableWrapper>
          <StyledTable>
            <thead>
              <TableRow style={{ borderBottom: '1px solid #808D9E' }}>
                <TableHead>Sr. No</TableHead>
                <TableHead>Category Image</TableHead>
                <TableHead>Category Name</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </thead>
            <tbody>
              {/*  Use filteredCategories instead of full categories list */}
              {filteredCategories.map((category, index) => (
                <TableRow style={{ borderBottom: '1px solid #808D9E' }} key={category.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <IconCircle style={{ backgroundColor: category.color }}>
                      {category.icon}
                    </IconCircle>
                  </TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <ActionButton
                        bg="#FF8F50"
                        aria-label={`Edit ${category.name}`}
                        onClick={() => setIsAddModalOpen(true)}
                      >
                        <FaEdit />
                      </ActionButton>
                      <ActionButton
                        bg="#FF0000"
                        aria-label={`Delete ${category.name}`}
                        onClick={() => handleDeleteClick(category.id)}
                      >
                        <FaTrashAlt />
                      </ActionButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </TableWrapper>
      </Container>

      {/* Modal for adding a category */}
      <AddCategory isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />

      {/* Modal for deleting a category */}
      <DeleteCategory
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleConfirmDelete}
      />
    </>
  );
};

export default Categories;
