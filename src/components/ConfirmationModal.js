import React from "react";

import "./ErrorModal.css";

const ConfirmationModal = (props) => {
  const confirmRemoval = () => {
    props.onConfirm();
    props.confirmRemoval();
  };

  const declineRemoval = () => {
    props.onConfirm();    
  };

  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button className="bottone" onClick={confirmRemoval}>yes</button>
          <button className= "bottone" onClick={declineRemoval}>no</button>
        </footer>
      </div>
    </div>
  );
};

export default ConfirmationModal;
