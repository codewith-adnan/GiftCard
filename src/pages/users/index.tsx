import React, { useState } from "react";
import {
  UsersWrapper,
  Header,
  SearchForm,
  SearchInput,
  SearchButton,
  TableWrapper,
  StyledTable,
  ActionButton,
  
} from "./styles";

import { FaEye, FaTrashAlt} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DeleteCategory from "../../models/deleteCategory";
import Pagination from "../../components/Pagination";

const usersData = [
  { id: 1, name: "Saif", email: "sendtomadnan@gmail.com", phone: "+92 3174103743" },
  { id: 2, name: "Alyan", email: "bycodebreach@gmail.com", phone: "+92 3174103743" },
  { id: 3, name: "Adil Saeed", email: "builtinsoft@gmail.com", phone: "+92 3174103743" },
  { id: 4, name: "Noman", email: "bycodebreach@gmail.com", phone: "+92 3174103743" },
  { id: 5, name: "Usama", email: "bycodebreach@gmail.com", phone: "+92 3174103743" },
  { id: 6, name: "Usman", email: "devcastle@gmail.com", phone: "+92 3204103743" },
  { id: 7, name: "Saad", email: "bycodebreach@gmail.com", phone: "+92 3174103743" },
  { id: 8, name: "Adnan", email: "bycodebreach@gmail.com", phone: "+92 3184103743" },
];

const Users: React.FC = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState<{ id: number; name: string } | null>(null);

  const handleDeleteClick = (userId: number, name: string) => {
    setSelectedUser({ id: userId, name });
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    if (selectedUser) {
      setUsers((prev) => prev.filter((user) => user.id !== selectedUser.id));
      setShowDeletePopup(false);
      setSelectedUser(null);
    }
  };

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.phone}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <UsersWrapper>
      <Header onClick={() => navigate("/usersDetail")}>Users</Header>

      <SearchForm>
        <SearchInput
          type="text"
          placeholder="Search by Name/ Email/ Phone no"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>

      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone no</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <ActionButton onClick={() => navigate("/pages/usersDetail")} className="edit">
                    <FaEye size={16} />
                  </ActionButton>
                  <ActionButton
                    className="delete"
                    onClick={() => handleDeleteClick(user.id, user.name)}
                  >
                    <FaTrashAlt size={16} />
                  </ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>

      <Pagination/>

      <DeleteCategory
        isOpen={showDeletePopup}
        onClose={() => setShowDeletePopup(false)}
        onDelete={handleConfirmDelete}
      />
    </UsersWrapper>
  );
};

export default Users;
