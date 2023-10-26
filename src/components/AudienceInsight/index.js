import React from "react";
import Accordion from "../Accordion";
import TableComponent from "../TableComponent";
import styled from "styled-components";
import { Grid } from "@mui/material";
import BasketBall from "../icons/BasketBall.svg";
const tableData1 = [
  { label: "ER% (avg)", value: "Engagements (tot)" },
  { label: "67%", value: "  61,577" },
];

const tableData2 = [
  { label: "Social Shares (tot) ", value: "QxQ" },
  { label: " 35,000", value: "+ 60%" },
];

const tableData3 = [
  { label: "CTR%", value: "Active Links" },
  { label: "78%", value: "12" },
];

const tableData4 = [
  { label: "Participants(Tot)", value: "Invitations(Tot)" },
  { label: "12,200", value: "7,791" },
];

const tableData5 = [
  { label: "Total Views", value: "Social Shares" },
  { label: "9,700", value: "5,560" },
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
        <Grid container spacing={0.3}>
          <Grid item xs={12} md={2.36} sm={6}>
            <TableComponent heading="Content Activity " data={tableData1} />
          </Grid>
          <Grid item xs={12} md={2.36} sm={6}>
            <TableComponent heading="Network Growth " data={tableData2} />
          </Grid>
          <Grid item xs={12} md={2.36} sm={6}>
            <TableComponent heading="Backlink Performance" data={tableData3} />
          </Grid>
          <Grid item xs={12} md={2.4} sm={6}>
            <TableComponent heading="Game Interactions" data={tableData4} />
          </Grid>
          <Grid item xs={12} md={2.36} sm={6}>
            <TableComponent heading="Top Video" data={tableData5} />
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
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  background: var(--White, #fff);
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  align-items: center;
`;

const ContentContainer = styled.div`
  background: #f0f0f0;

  padding: 18px;
`;

export default AudienceInsight;
