import React from "react";
import dummyData from "./dummyData";
import EngagementCard from "../EngagementCard";
import { Grid } from "@mui/material";
const EngagementCardsSection = () => {
  return (
    <>
      <Grid container spacing={4} mt={1}>
        {dummyData.map((data, index) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <EngagementCard {...data} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default EngagementCardsSection;
