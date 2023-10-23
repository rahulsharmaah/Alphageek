import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DribbleLogo from "../icons/DribbleLogo";
import styled from "styled-components";

// Dummy data for the cards
const dummyData = [
  {
    id: 1,
    icon: <DribbleLogo />,
    sentence: "This is the first card.",
  },
  {
    id: 2,
    icon: <DribbleLogo />,
    sentence: "This is the second card.",
  },
  {
    id: 3,
    icon: <DribbleLogo />,
    sentence: "This is the third card.",
  },
  {
    id: 4,
    icon: <DribbleLogo />,
    sentence: "This is the fourth card.",
  },
  {
    id: 5,
    icon: <DribbleLogo />,
    sentence: "This is the fifth card.",
  },
  {
    id: 6,
    icon: <DribbleLogo />,
    sentence: "This is the sixth card.",
  },
];

const CardContainer = styled(Grid)`
  justify-content: center;
`;

const CardComponent = ({ icon, sentence }) => {
  return (
    <Card sx={{ maxWidth: "150" }}>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SvgWrapper>{icon}</SvgWrapper>
          <Typography variant="body2" color="textPrimary">
            {sentence}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

const SupportCardComponent = () => {
  return (
    <CardContainer container spacing={5} py={3}>
      {dummyData.map((data) => (
        <Grid item key={data.id} xs={12} sm={6} md={4}>
          <CardComponent icon={data.icon} sentence={data.sentence} />
        </Grid>
      ))}
    </CardContainer>
  );
};

const SvgWrapper = styled.div`
  margin-right: 8px;
  svg {
    fill: #0060fc;
  }
`;

export default SupportCardComponent;
