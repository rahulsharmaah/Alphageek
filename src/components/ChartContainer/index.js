import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import CustomBubbleChart from "../CustomBubbleChart";
import LineChart from "../LineChart";
import { chartData, chartOptions, usePlugins } from "./Chartdetails";
import styled from "styled-components";

const ChartContainer = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} px={1}>
        <StyledCard>
          <Typography variant="h3" gutterBottom>
            {chartOptions.plugins.title.text}
            <span variant="string">(Total Engagement)</span>
          </Typography>
          <CustomBubbleChart
            data={chartData}
            options={chartOptions}
            usePlugins={usePlugins}
          />
          {console.log(chartOptions, "ch")}
          <h1>{JSON.stringify(chartData.datasets[0].lablel, 2)}</h1>
        </StyledCard>
      </Grid>
      <Grid xs={12} md={6} px={1} py={1}>
        <StyledCard>
          <LineChart />
        </StyledCard>
      </Grid>
    </Grid>
  );
};
const StyledCard = styled.div`
  border-radius: 20px;
  border: 1px solid #ebebeb;
  background: var(--White, #fff);
  margin-top: 20px;
  padding: 2rem;
  canvas {
    height: 800px;
    width: 100% !important;
    background: "#F4F7FA";
    height: ${(props) => (props.isMobile ? "100%" : "400px")};
  }
`;
export default ChartContainer;
