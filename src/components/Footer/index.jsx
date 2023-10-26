import React from "react";
import styled from "styled-components";
import { Container } from "@mui/material";

const StyledFooter = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #333;
  height: auto;
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  color: var(--Darkest, #1c2753);
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: -0.48px;
  text-transform: uppercase;
  padding: 20px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ContentContainer>
        <Heading>Powered By</Heading>
        <img src={"/AlphaGeekFrame.png"} alt="AlphaGeek" />
      </ContentContainer>
    </StyledFooter>
  );
};

export default Footer;
