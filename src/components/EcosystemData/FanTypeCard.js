import React from "react";
import styled from "styled-components";
import { Card, CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Line } from "react-chartjs-2";
import { data, options } from "./lineChartData";
import LinearProgressBar from "../LinearProgressBar";
// import { styled as muiStyled } from "@mui/material";
const FanTypeCard = ({ title, tagline, progressBars,partner }) => {
  return (
    <CardContainer
      sx={{
        borderRadius: "10px",
        border: "1px solid var(--stroke, #EBEBEB)",
        background: " var(--background-white, #FDFDFF)",
      }}
    >
      <CardContent>
        {/* <------------------Heading section ----------------------------> */}
        <Grid2 container alignItems="space-between">
          <Grid2 item md={6}>
            <Typography variant="h3" textAlign={"start"}>
              {title}{" "}
            </Typography>
          </Grid2>
          <Grid2 item md={6}>
            <Typography variant="h2" textAlign={"end"}>
              {partner}
            </Typography>
          </Grid2>
        </Grid2>
        {/* <--------------------------card media-----------------------------------------------> */}
        <CardMedia>
          <Line data={data} options={options} />
        </CardMedia>
        <Typography
          variant="subtitle2"
          color="textPrimary"
          style={{
            textAlign: "start",
            fontWeight: "600",
            padding: "2px 4px",
          }}
        >
          {tagline}
        </Typography>

        {/* <----------------------------Progress bar container-------------------------------------> */}
        <ProgressBarContainer>
          {progressBars.map((progress, index) => (
            <>
              <LinearProgressBar
                title={progress.title}
                percentage={progress.percentage}
                isLast={index === progressBars.length - 1}
                progressBars={progress}
                key={index}
              />
            </>
          ))}
        </ProgressBarContainer>
        {/* <------------------Button-----------------> */}
        <ImageSection>
          <img src={"exp-24.png"} alt="icon" style={{ marginRight: "10px" }} />
        </ImageSection>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled(Card)`
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin: 16px;
`;
const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin: 10px 0;
`;
const CardMedia = styled.div`
  canvas {
    height: 300px !important;
    width: auto;
    background: "#F4F7FA";
  }
`;
const ImageSection = styled.div`
  height: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export default FanTypeCard;
