import React from "react";
import { Card, List, ListItem, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// import BubbleChartNew from "../BubbleChartNew";
import styled from "styled-components";
import CustomBubbleChart from "../CustomBubbleChart";
import { chartData, chartOptions, usePlugins } from "./ChartDetails";
// import WordCloudComponent from "../WordCloud";

const Insights = () => {
  const bulletPoints = [
    "Lörem ipsum mibel dekalig nyn, liksom nybenade. Pseudokyn reande, i stenokäl utom finansfobi. Sore autoda, eurosk autoser.",
    "Polyk hevis. Karen. Köföpreskap gogt klimatflykting mutaska. Trikemi käre. Devis traligt för att.",
    "Fal nyfaning stenock. Sungen trar i konat. Vir rer. Ber mussa. Videosamtal somyng gösam.",
    "Kroning makronade. Syncism råkäligen myra. Doling prer. Oliga hofar las, för mön.",
  ];
  return (
    <>
      {/* First Column */}
      <Grid2 container spacing={3} justifyContent={"center"}>
        <Grid2 item xs={12} md={7}>
          <Grid2 item md={4}>
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
          <Grid2 item xs={12} md={4}>
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
          <Grid2 item xs={12} md={4}>
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
        </Grid2>

        {/* Second Column */}
        {/* <Grid2 container item xs={12} md={5}> */}
        <Grid2 item xs={12} md={4} sx={{ height: " 581px" }}>
          <CardContainer
            sx={{
              fill: "var(--White, #FFF)",
              strokeWidth: "1px",
              stroke: "#EBEBEB",
              display: "flex",
              alignItems: "space-between",
              alignContent: "center",
            }}
          >
            <CardData>
              <Typography variant="h5" gutterBottom>
                AGS Insights
              </Typography>
              <List>
                {bulletPoints.map((point, index) => (
                  <ListItem bulletPoints={false} key={index}>
                    {point}
                  </ListItem>
                ))}
              </List>
            </CardData>
            <Dots>...</Dots>
          </CardContainer>
        </Grid2>
        <Grid2 item xs={12}>
          {/* <WordCloudComponent/> */}
          
        </Grid2>
      </Grid2>
    </>
  );
};
const CardContainer = styled(Card)`
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin: 16px;
`;
const CardData = styled.div`
  color: var(--Dark, #575757);
  font-family: Poppins;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: justify;
  padding: 18px 18px;
`;
const Dots = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: #d5dee3;
`;
export default Insights;
