import React from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import StyledButton from "../Button";
// import { styled as muiStyled } from "@mui/material";
const EngagementCard = ({
  title,
  logo,
  image,
  tagline,
  likes,
  shares,
  progressBars,
  progressBarsHeading,
  buttonText,
}) => {
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
        <Grid2 container alignItems="center">
          <Grid2 item md={3} textAlign={"start"} px={1}>
            <Typography variant="h3">{title} </Typography>
          </Grid2>
          <Grid2 item md={5} margin={"2px auto"}>
            <Typography variant="body" color="#1C2753" textAlign={"start"}>
              in partnership with{" "}
            </Typography>
          </Grid2>
          <Grid2 item md={3}>
            {" "}
            <LogoImage src={logo} alt="Partner Logo" />{" "}
          </Grid2>
        </Grid2>
        {/* <--------------------------card media-----------------------------------------------> */}
        <CardMedia
          component="img"
          alt="Engagement Image"
          image={image}
          style={{
            borderRadius: "10px",
            margin: "0px 0",
            alignItems: "center",
          }}
        />
        <Typography
          variant="body2"
          color="textPrimary"
          style={{
            textAlign: "start",
            fontWeight: "600",
            padding: "2px 4px",
          }}
        >
          {tagline}
        </Typography>
        {/* <---------------------------Like Share Container -------------------------------> */}
        <LikesAndSharesContainer>
          <LikesAndShares>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                textAlign: "start",
                color: "var(--Darkest, #1C2753)",
              }}
            >
              <LikeIcon>&#10084;</LikeIcon> {likes} likes
            </Typography>
          </LikesAndShares>
          <LikesAndShares>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                textAlign: "start",
                color: "var(--Darkest, #1C2753)",
                fontWeight: "500",
              }}
            >
              Share {shares} <ArchivesIcon>&#128190;</ArchivesIcon>
            </Typography>
          </LikesAndShares>
        </LikesAndSharesContainer>
        {/* <----------------------------Progress bar container-------------------------------------> */}
        <ProgressBarContainer>
          {progressBars.map((progress, index) => (
            <div key={index}>
              <Grid container>
                <Grid
                  item
                  md={9}
                  xs={9}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography
                    variant="h4"
                    color="#1C2753"
                    sx={{ display: "contents" }}
                  >
                    <>{progressBarsHeading}</>
                    <>
                      <Typography variant={"body2"} fontWeight={500}>
                        {progress.progressBarsItalicText}
                      </Typography>
                    </>
                  </Typography>
                </Grid>
                <Grid item md={3} xs={3}>
                  <Typography variant="h4" color="#1C2753">
                    {progress.percentage}%
                  </Typography>
                </Grid>
              </Grid>
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
            </div>
          ))}
        </ProgressBarContainer>
        {/* <------------------Button-----------------> */}
        <StyledButton title={buttonText} width={100} />
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

const LogoImage = styled.img`
  width: auto;
  height: 30px;
  border-radius: 3%;
  margin: 10px 0;
`;
const LikesAndSharesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 2px 0;
`;
const LikesAndShares = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 34px;
  padding: 4px 8px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #eef4f6;
  background: var(--Light-gray, #f8fafb);
`;

const LikeIcon = styled.span`
  color: #ff0097;
`;

const ArchivesIcon = styled.span`
  color: #1dc560;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin: 10px 0;
`;

const ProgressBar = styled(LinearProgress)`
  width: 100%; /* Adjust the width as needed */
  height: 18px !important; /* Adjust the height as needed */
  border-radius: 38px;
  margin: 8px 0;
  .css-5xe99f-MuiLinearProgress-bar1 {
    background: ${(props) =>
      props.isLast
        ? "var(--Orange, #E58828) "
        : "linear-gradient(90deg, #27b1fe 0.46%, #1dc560 118.27%)"} !important;
  }
  .MuiLinearProgress-determinate{
    background: ${(props) =>
      props.isLast
        ? "var(--Orange, #E58828) "
        : "linear-gradient(90deg, #27b1fe 0.46%, #1dc560 118.27%)"} !important;
  }
  /* transform: scaleX(-1); */
`;

const InfoIcon = styled.span`
  /* color: grey; */
  /* background: lightgrey; */
`;

export default EngagementCard;
