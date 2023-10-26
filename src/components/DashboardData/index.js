import { Grid } from "@mui/material";
import React from "react";
import AudienceInsight from "../AudienceInsight";
import Accordion from "../Accordion";
import ChartContainer from "../ChartContainer";
import BarChartContainer from "../BarChartContainer";
import AgsInsightsSectionData from "./AgsInsightsSectionData";

const DashboardData = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <AudienceInsight />
      </Grid>
      <Grid item xs={12}>
        <Accordion title={"Channel insights"}>
          <ChartContainer />
        </Accordion>
      </Grid>
      <Grid item xs={12}>
        <Accordion title={"Content insights"}>
          <BarChartContainer />
        </Accordion>
      </Grid>
      <Grid item xs={12}>
       <AgsInsightsSectionData/>
      </Grid>
    </Grid>
  );
};

export default DashboardData;
