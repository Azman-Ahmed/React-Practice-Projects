import React from 'react';
import style from './DeleteConfirm.module.css'

const DeleteConfirm = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; // Do not render the modal if it's not open

  return (
    <div className={style.modal-overlay}>
      <div className={style.modal-content}>
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this template?</p>
        <div className={style.modal-actions}>
          <button onClick={onConfirm}>Yes, Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
