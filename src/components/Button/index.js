import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";

const SaveButton = ({ title, width }) => {
  return (
    <StyledButton variant="contained" color="primary" width={width}>
      {" "}
      <Typography variant="h5">{title}</Typography>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: ${(props) =>
    `${props.width}%` || "auto"}; /* Set width based on the prop */
  height: 51px;
  background-color: #1c2753 !important;
  color: var(--White, #fff);
`;

export default SaveButton;
