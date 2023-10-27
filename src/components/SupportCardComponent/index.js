import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DribbleLogo from "../icons/DribbleLogo";
import styled from "styled-components";

const dummyData = [
  {
    id: 1,
    icon: <DribbleLogo  fill={"#0060fc"} />,
    sentence: "How do i use the Dashboard",
  },
  {
    id: 2,
    icon: <DribbleLogo fill={"#0060fc"}/>,
    sentence: "What is the GSA System ?",
  },
  {
    id: 3,
    icon: <DribbleLogo fill={"#0060fc"} />,
    sentence: "Where can Fans Play GSA Games?",
  },
  {
    id: 4,
    icon: <DribbleLogo fill={"#0060fc"} />,
    sentence: "How are GSA channels managed ?",
  },
  {
    id: 5,
    icon: <DribbleLogo fill={"#0060fc"} />,
    sentence: "What is a ``Core`` Fan ?",
  },
  {
    id: 6,
    icon: <DribbleLogo fill={"#0060fc"} />,
    sentence: "How do GSA ensure data Security .",
  },
];

const CardComponent = ({ icon, sentence }) => {
  return (
    <Card sx={{ boxShadow: "31px -6px 22px 0px rgba(0,0,0,0.06)" }}>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SvgWrapper>{icon}</SvgWrapper>
          <Typography variant="h4" color="#0060FC" fontWeight="600">
            {sentence}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

const SupportCardComponent = () => {
  return (
    <Grid container spacing={3} py={4} px={2}>
      {dummyData.map((data) => (
        <Grid item xs={12} sm={6} md={4} key={data.id}>
          <CardComponent icon={data.icon} sentence={data.sentence} />
        </Grid>
      ))}
    </Grid>
  );
};

const SvgWrapper = styled.div`
  margin-right: 8px;
`;

export default SupportCardComponent;
