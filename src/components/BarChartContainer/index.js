import React from "react";
// import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import BarChart from "../BarChart";

// const Container = styled.div`
//   width: 652px;
//   height: 100px;
//   flex-shrink: 0;
//   border-radius: 20px;
//   background: var(--White, #fff);
//   padding: 20px; /* Add padding for better spacing */
// `;

const BarChartContainer = () => {
  return (
    <>
      <Grid container spacing={3} padding={2}>
        <Grid item xs={12} md={6} height={"60px"}>
          <Card sx={{ padding: "20px" }}>
            <BarChart />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: "20px" }}>
            <BarChart />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default BarChartContainer;
