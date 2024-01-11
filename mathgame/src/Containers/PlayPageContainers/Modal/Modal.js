import React, { useState } from 'react';
import './Modal.css'; // Create this CSS file for styling

const Modal = ({ isOpen, onClose, onConfirm }) => {
    const [inputText, setInputText] = useState('');
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
          <p>Scrie un nume pentru a salva scorul:</p>
          <input 
                type='text' 
                placeholder='nume...' 
                onChange={(e) => setInputText(e.target.value)}
          />
          <div className="modal-buttons">
            <button onClick={handleConfirm} id="Confirm" disabled={inputText==''}>Confirma</button>
            <button onClick={handleClose} id="Cancel">Anuleaza</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
