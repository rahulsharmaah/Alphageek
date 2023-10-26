import React from "react";
import FanTypeCard from "./FanTypeCard";
import dummyData from "./dummyData";
import { Grid } from "@mui/material";
import AgsInsightsSection from "./AgsInsightsSection";

const FanType = () => {
  return (
    <>
    <Grid container spacing={8} mt={1}>
      {dummyData.map((data, index) => (
        <Grid item xs={12} sm={12} md={4} key={index}>
          <FanTypeCard {...data} />
        </Grid>
      ))}
    </Grid>
 
    <Grid containermt={1}>
      <Grid item>
        <AgsInsightsSection/>
      </Grid>
    </Grid>
    </>
  );
};

export default FanType;
