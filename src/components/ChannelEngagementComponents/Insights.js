import React from "react";
import { Card } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// import BubbleChartNew from "../BubbleChartNew";
import styled from "styled-components";
import CustomBubbleChart from "../CustomBubbleChart";
import { chartData, chartOptions, usePlugins } from "./ChartDataset";

const Insights = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* First Column */}
      <Grid2 container item xs={12} md={6}>
        <Grid2 item xs={12}>
          1
          <CardContainer>
            <Card>
              <CustomBubbleChart
                data={chartData}
                options={chartOptions}
                usePlugins={usePlugins}
              />
            </Card>
          </CardContainer>
        </Grid2>
        <Grid2 item xs={12}>
          2
          <CustomBubbleChart />
        </Grid2>
        <Grid2 item xs={12}>
          3
          <CustomBubbleChart />
        </Grid2>
      </Grid2>

      {/* Second Column */}
      <Grid2 container item xs={12} md={6}>
        <Grid2 item xs={12}>
          1
          <Card />
        </Grid2>
        <Grid2 item xs={12}>
          2
          <Card />
        </Grid2>
      </Grid2>
    </div>
  );
};
const CardContainer = styled(Card)`
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin: 16px;
`;
export default Insights;
