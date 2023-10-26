import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

// const AccordionContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: ${(props) => (props.isExpanded ? "100%" : "0")};
//   width: 100%;
//   height: auto;
//   border: 0px solid #ccc;
//   border-radius: 4px;
// `;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  cursor: pointer;
`;

const ArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  padding: 2px 4px;
  font-size: 14px;
`;

const Separator = styled.div`
  flex: 1;
  height: 1px;
  background: #ccc;
  margin: 0 10px;
`;

const AccordionContent = styled.div`
  height: ${(props) => (props.isExpanded ? "100%" : "0")};
  background-color: "#f0f0f0";
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  padding: ${(props) => (props.isExpanded ? "10px" : "0")};
`;

const Accordion = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Grid container mt={1}>
      <Grid item xs={12} padding={"10px 20px"}>
        <>
          <AccordionHeader onClick={toggleAccordion}>
            <div>
              <Typography variant="subtitle2" fontWeight={500}>{title}</Typography>
            </div>
            <Separator />
            <ArrowIcon>{isExpanded ? "▲" : "▼"}</ArrowIcon>
          </AccordionHeader>
          <AccordionContent isExpanded={isExpanded}>
            {children}
          </AccordionContent>
        </>
      </Grid>
    </Grid>
  );
};
// const Title = styled(Typography)`
//   color: var(--Darkest, #1c2753);
//   font-family: "Poppins";
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
// `;

export default Accordion;
