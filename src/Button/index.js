import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const SaveButton = ({ children, width }) => {
  return (
    <StyledButton variant="contained" color="primary" width={width}>
      {" "}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: ${(props) => props.width || "auto"}; /* Set width based on the prop */
  height: 51px;
  color: #fff !important;
  font-size: 24px;
  background-color: #1c2753 !important;
`;

export default SaveButton;
