// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/input/Input';
import List from '../../components/list/List';
import UserDetailsModal from '../../components/modal/Modal';
import { fetchUsers, fetchUserDetails } from '../../redux/actions';
import './HomeScreen.css';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const userDetails = useSelector((state) => state.userDetails);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (searchText) => {
    dispatch(fetchUsers(searchText));
  };

  const handleUserClick = (username) => {
    setSelectedUser(username);
    dispatch(fetchUserDetails(username));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-screen">
      <Input onSearch={handleSearch} />
      <List users={users} onItemClick={handleUserClick} />
      {selectedUser && (
        <UserDetailsModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          userDetails={userDetails}
        />
      )}
    </div>
  );
};

export default HomeScreen;
