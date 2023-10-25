import React from "react";
import VideoCard from "../VideoCard";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { LinearProgress, Typography } from "@mui/material";

const VideoSection = () => {
  const dummyData = {
    progressBars: [
      { title: "View Count", label: "Progress 1", percentage: 50 },
      { title: "View Count", label: "Progress 2", percentage: 75 },
      { title: "View Count", label: "Progress 3", percentage: 30 },
      { title: "View Count", label: "Progress 4", percentage: 90 },
      { title: "View Count", label: "Progress 5", percentage: 80 },
    ],
  };

  return (
    <>
      <VideoCard videoId={"mhypGqE4E1c"} autoPlay={true} />
      {dummyData.progressBars.map((progress, index) => (
        <Grid container justifyContent="center" key={index}>
          <Grid item md={8} xs={12}>
            <ProgressBarContainer>
              <Containerlabel>
                <ProgressTitle>{progress.title}</ProgressTitle>
                <ProgressTitle>
                  {progress.percentage}
                  {"%"}
                </ProgressTitle>
              </Containerlabel>
              <ProgressBarInfo>
                <ProgressBar
                  variant="determinate"
                  key={index}
                  isLast={index === dummyData.progressBars.length - 1}
                  value={progress.percentage}
                />
                <InfoIcon>&#9432;</InfoIcon>
              </ProgressBarInfo>
            </ProgressBarContainer>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px 0;
  justify-content: space-between;
`;

const Containerlabel = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 80%;
`;
const ProgressTitle = styled(Typography)`
  color: #1c2753;
  text-align: start !important;
  font-weight: 600;
`;

const ProgressBarInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProgressBar = styled(LinearProgress)`
  width: 80%;
  height: 18px !important;
  border-radius: 38px;
  margin: 8px 0;
  .css-5xe99f-MuiLinearProgress-bar1 {
    background: ${(props) =>
      props.isLast ? "var(--Orange, #E58828)" : ""} !important;
  }
`;

const InfoIcon = styled.span`
  margin: 0 auto;
`;

export default VideoSection;
