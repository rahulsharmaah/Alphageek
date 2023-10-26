import { Grid } from "@mui/material";
import React from "react";
import DoughnoutChart from "../DoughnoutChart";
import { chartData, chartData1, chartData2, chartData3 } from "./chartData";
import CardHeading from "./CardHeading";
import ContentPreviewCard from "./ContentPreviewCard";
import { dummyData2 } from "./dummyData";
const OtherPerformanceCard = () => {
  return (
    <>
      <CardHeading title={"Belgian Player Spotlight"} width={100} />
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={6}>
          {dummyData2 &&
            dummyData2.map((data, index) => (
              <ContentPreviewCard
                // title={data.title}
                image={data.image}
                key={index}
                progressBars={data.progressBars}
                isRequire={false}
              />
            ))}
        </Grid>
        <Grid item md={6} xs={12} px={4} py={4}>
          <Grid
            container
            spacing={1}
            sx={{ canvas: { height: "200px !important" } }}
            justifyContent={"center"}
          >
            <Grid item md={6} xs={12}>
              <DoughnoutChart data={chartData} />
            </Grid>
            <Grid item md={6} xs={12}>
              <DoughnoutChart data={chartData1} />
            </Grid>
            <Grid item md={6} xs={12}>
              <DoughnoutChart data={chartData2} />
            </Grid>
            <Grid item md={6} xs={12}>
              <DoughnoutChart data={chartData3} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default OtherPerformanceCard;
