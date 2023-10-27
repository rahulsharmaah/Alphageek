import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  border-radius: 38px;
  background: linear-gradient(90deg, #27b1fe 0.46%, #1dc560 118.27%);
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
`;

const ProgressFiller = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #fff 0.46%, #fff 118.27%);
  border-top-right-radius: 38px;
  border-bottom-right-radius: 38px;
  position: relative;

  &::before {
    content: "";
    width: ${(props) => `${props.percentage}%`};
    height: 100%;
    background: linear-gradient(90deg, #27b1fe 0.46%, #1dc560 118.27%);
    position: absolute;
    border-top-left-radius: 38px;
    border-bottom-left-radius: 38px;
  }
`;

const ProgressLabel = styled.span`
  color: #1c2753;
  font-weight: bold;
`;

const ProgressBar = ({ percentage }) => {
  return (
    <ProgressBarContainer>
      <ProgressFiller percentage={percentage} />
      <ProgressLabel>{percentage}%</ProgressLabel>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
