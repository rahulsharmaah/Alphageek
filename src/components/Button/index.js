import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const SaveButton = ({ title, width }) => {
  return (
    <StyledButton variant="contained" color="primary" width={width}>
      {" "}
      {title}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: ${(props) =>
    `${props.width}%` || "auto"}; /* Set width based on the prop */
  height: 51px;
  background-color: #1c2753 !important;
  color: var(--White, #fff);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.44px;
`;

export default SaveButton;
