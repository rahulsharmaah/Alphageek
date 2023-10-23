import React from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";

const EngagementCard = ({
  title,
  partner,
  logo,
  image,
  tagline,
  likes,
  shares,
  progressBars,
}) => {
  return (
    <CardContainer>
      <LogoImage src={logo} alt="Partner Logo" />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{ textAlign: "center" }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          style={{ textAlign: "center" }}
        >
          in partnership with {partner}
        </Typography>
        <CardMedia
          component="img"
          alt="Engagement Image"
          image={image}
          style={{ borderRadius: "10px", margin: "10px 0" }}
        />
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ textAlign: "center" }}
        >
          {tagline}
        </Typography>
        <LikesAndShares>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ textAlign: "center" }}
          >
            <LikeIcon>&#10084;</LikeIcon> {likes} likes
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ textAlign: "center" }}
          >
            Share {shares} <ArchivesIcon>&#128190;</ArchivesIcon>
          </Typography>
        </LikesAndShares>
        <ProgressBarContainer>
          <Typography variant="body2" color="textSecondary">
            Stickiness Ratio (specific to quarter)
          </Typography>
          {progressBars.map((progress, index) => (
            <div key={index}>
              <Typography variant="body2" color="textSecondary">
                {progress.label}
              </Typography>
              <ProgressBar variant="determinate" value={progress.percentage} />
              <Typography variant="body2" color="textSecondary">
                {progress.percentage}%
              </Typography>
              <InfoIcon>&#9432;</InfoIcon>
            </div>
          ))}
        </ProgressBarContainer>
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px 0;
`;

const LikesAndShares = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
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
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

const ProgressBar = styled(LinearProgress)`
  width: 100%; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
  border-radius: 38px;
  background: linear-gradient(90deg, #27b1fe 0.46%, #1dc560 118.27%);
  margin: 8px 0;
  transform: scaleX(-1);
`;

const InfoIcon = styled.span`
  color: grey;
  background: lightgrey;
  padding: 4px;
  border-radius: 50%;
`;

export default EngagementCard;
