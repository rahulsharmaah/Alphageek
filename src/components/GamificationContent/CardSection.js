import React from "react";
import styled from "styled-components";
import { CardContent, CardMedia } from "@mui/material";
import CardHeading from "./CardHeading";
import LinearProgressBar from "../LinearProgressBar";
// import { styled as muiStyled } from "@mui/material";
const CardSection = ({ title, image, progressBars }) => {
  return (
    <>
      <CardHeading title={title} width={100} />
      <CardContent
        sx={{
          borderRadius: "10px",
          border: "1px solid var(--stroke, #EBEBEB)",
          background: " var(--background-white, #FDFDFF)",
          margin: "0px auto",
        }}
      >
        {/* <------------------Heading section ----------------------------> */}

        {/* <--------------------------card media-----------------------------------------------> */}
        <CardMedia
          component="img"
          alt="Engagement Image"
          image={image}
          height={"300px"}
          width={"300px"}
          objectFit={"cover"}
          style={{
            borderRadius: "10px",
            margin: "20px 0px",
            alignItems: "center",
          }}
        />
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
          {/* <div key={index}>
              <Grid2 container alignItems={"center"} py={2}>
                <Grid2 item md={11} xs={10}>
                  {" "}
                  <ProgressBar
                    variant="determinate"
                    key={index}
                    isLast={index === progressBars.length - 1}
                    value={progress.percentage}
                  />
                </Grid2>
                <Grid2 item md={1} xs={2}>
                  <InfoIcon>&#9432;</InfoIcon>
                </Grid2>
              </Grid2>
            </div> */}
        </ProgressBarContainer>
        {/* <------------------Button-----------------> */}
      </CardContent>
    </>
  );
};
const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin: 10px 0;
`;

export default CardSection;
