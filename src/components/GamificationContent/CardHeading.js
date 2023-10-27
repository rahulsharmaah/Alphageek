import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CardHeading = ({ title, width }) => {
  return (
    <StyledButton width={width}>
      {" "}
      <Typography variant="h2" color="#fff" textAlign={"center"}>
        {title}
      </Typography>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  width: ${(props) =>
    `${props.width}%` || "auto"}; /* Set width based on the prop */
  height: 51px;
  align-items: center;
  background-color: #1c2753 !important;
  color: var(--White, #fff);
  font-family: Poppins;
  border-radius: 5px 5px 0px 0px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.44px;
`;

export default CardHeading;
