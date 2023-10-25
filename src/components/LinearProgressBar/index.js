import React from "react";
import styled from "styled-components";
import { LinearProgress, Typography } from "@mui/material";

const LinearProgressBar = ({ title, percentage, isLast }) => {
  return (
    <ProgressBarContainer>
      <Containerlabel>
        <ProgressTitle>{title}</ProgressTitle>
        <ProgressTitle>{percentage}%</ProgressTitle>
      </Containerlabel>
      <ProgressBarInfo>
        <ProgressBarStyled
          variant="determinate"
          isLast={isLast}
          value={percentage}
        />
        <InfoIcon>&#9432;</InfoIcon>
      </ProgressBarInfo>
    </ProgressBarContainer>
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

const ProgressBarStyled = styled(LinearProgress)`
  width: 100%;
  height: 18px !important;
  border-radius: 38px;
  margin: 8px 0;
  .css-5xe99f-MuiLinearProgress-bar1 {
    background: ${(props) =>
      props.isLast
        ? "var(--Orange, #E58828)"
        : "linear-gradient(90deg, #27b1fe 0.46%, #1dc560 118.27%)"} !important;
  }
`;

const ProgressTitle = styled(Typography)`
  color: #1c2753;
  text-align: center;
  font-weight: 600;
`;

const ProgressBarInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const InfoIcon = styled.span`
  margin-left: 5px;
`;

const Containerlabel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default LinearProgressBar;
