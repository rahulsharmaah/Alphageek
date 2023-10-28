import React, { useState } from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  z-index:99;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

function Modal({ children, shown, close }) {
  return shown ? (
    <ModalBackdrop onClick={close}>
      <ModalContent>
        <CloseButton onClick={close}>Close</CloseButton>
        {children}
      </ModalContent>
    </ModalBackdrop>
  ) : null;
}

function CustomModal({ imageSrc, altText, modalContent }) {
  const [modalShown, toggleModal] = useState(false);

  const handleImageClick = () => {
    toggleModal(true);
  };

  return (
    <div>
      <img
        src={imageSrc}
        alt={altText}
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      />
      <Modal shown={modalShown} close={() => toggleModal(false)}>
        {modalContent}
      </Modal>
    </div>
  );
}

export default CustomModal;
