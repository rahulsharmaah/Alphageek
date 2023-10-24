import React from "react";
import Accordion from "../Accordion";
import TableComponent from "../TableComponent";
import styled from "styled-components";
import { Grid } from "@mui/material";
import BasketBall from "../icons/BasketBall.svg" 
const tableData1 = [
  { label: "Heading1", value: "Value1" },
  { label: "Heading2", value: "Value2" },
];

const tableData2 = [
  { label: "Heading1", value: "Value1" },
  { label: "Heading2", value: "Value2" },
];

const tableData3 = [
  { label: "Heading1", value: "Value1" },
  { label: "Heading2", value: "Value2" },
];

const tableData4 = [
  { label: "Heading1", value: "Value1" },
  { label: "Heading2", value: "Value2" },
];

const tableData5 = [
  { label: "Heading1", value: "Value1" },
  { label: "Heading2", value: "Value2" },
];

const AudienceInsight = () => {
  return (
    <Accordion title="Audience Insights">
      <ContentContainer>
        <Container>
          <LeftImage
            src={BasketBall} // Provide your image URL
            alt="User"
          />
          <DotsButton>...</DotsButton>
        </Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2.4} sm={6}>
            <TableComponent heading="Table 1" data={tableData1} />
          </Grid>
          <Grid item xs={12} md={2.4} sm={6}>
            <TableComponent heading="Table 2" data={tableData2} />
          </Grid>
          <Grid item xs={12} md={2.4} sm={6}>
            <TableComponent heading="Table 3" data={tableData3} />
          </Grid>
          <Grid item xs={12} md={2.4} sm={6}>
            <TableComponent heading="Table 4" data={tableData4} />
          </Grid>
          <Grid item xs={12} md={2.4} sm={6}>
            <TableComponent heading="Table 5" data={tableData5} />
          </Grid>
        </Grid>
      </ContentContainer>
    </Accordion>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #f0f0f0;
`;

const LeftImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 16px;
`;

const DotsButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  background: #f0f0f0;

  padding: 18px ;
`;

export default AudienceInsight;
