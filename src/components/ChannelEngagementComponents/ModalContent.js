import React from "react";
import { Box, IconButton } from "@mui/material";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const ModalContent = ({ handleClose, imageSrc, altText }) => {
  return (
    <StyledModalContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: " column",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          flexWrap: "nowrap",
        }}
      >
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
      </Box>
      <Box>
        <img src={imageSrc} alt={altText} />
      </Box>
    </StyledModalContent>
  );
};

const StyledModalContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: #fff;
  min-height: "100vh";
  width: "50%";

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #fff;
`;

export default ModalContent;
