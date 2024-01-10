import React, { useState } from 'react';
import './Modal.css'; // Create this CSS file for styling

const Modal = ({ isOpen, onClose, onConfirm }) => {
    const [inputText, setInputText] = useState('');
    
    const disabledStyle={

    }
  const handleClose = () => {
    setInputText('');
    onClose(false);
  };

  const handleConfirm = () => {
    setInputText('');
    onConfirm(inputText);
    onClose(false);
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <p>Insert a name to save your score:</p>
          <input 
                type='text' 
                placeholder='name...' 
                onChange={(e) => setInputText(e.target.value)}
          />
          <div className="modal-buttons">
            <button onClick={handleConfirm} id="Confirm" disabled={inputText==''}>Confirm</button>
            <button onClick={handleClose} id="Cancel">Cancel</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
