import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useMediaQuery, useTheme } from "@mui/material";

import CustomBubbleChart from "../CustomBubbleChart";
import LineChart from "../LineChart";
import { chartData, chartOptions, usePlugins } from "./Chartdetails";
import styled from "styled-components";

const ChartContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <StyledCard>
          <CustomBubbleChart
            data={chartData}
            options={chartOptions}
            usePlugins={usePlugins}
            style={{ height: isMobile ? "600px" : "auto" }}
          />
        </StyledCard>
      </Grid>
      <Grid xs={12} md={6}>
        <Card sx={{padding:"20px"}}>
          <LineChart style={{ height: isMobile ? "100%" : "auto" }} />
        </Card>
      </Grid>
    </Grid>
  );
};
const StyledCard = styled.div`
  canvas {
    height: 400px !important;
    width: auto;
    background: "#F4F7FA";
  }
`;
export default ChartContainer;
