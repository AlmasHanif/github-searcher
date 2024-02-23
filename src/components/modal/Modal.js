// src/components/Modal/Modal.js
import React from 'react';
import Modal from 'react-modal';
import './Modal.css';


const UserDetailsModal = ({ isOpen, onRequestClose, userDetails }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2>User Details</h2>
        <button onClick={onRequestClose}>Close</button>
      </div>
      <div className="modal-body">
        <img src={userDetails.avatar_url} alt={userDetails.login} />
        <p>Followers: {userDetails.followers}</p>
        <p>Following: {userDetails.following}</p>
        <p>Location: {userDetails.location}</p>
        <p>Full Name: {userDetails.name}</p>
      </div>
    </Modal>
  );
};

export default UserDetailsModal;
