import { CardContent, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const VideoCardContent = styled(CardContent)``;

const VideoFrame = styled.iframe`
  height: 573px;
  flex-shrink: 0;
  width: 100%;
  border: none;
`;

const VideoCard = ({ videoId, autoPlay }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${
    autoPlay ? 1 : 0
  }`;

  return (
    <Grid container justifyContent={"center"}>
      <Grid xs={12} md={11} item>
        <VideoCardContent>
          <VideoFrame
            // Adjust height as needed
            src={embedUrl}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoCardContent>
      </Grid>
    </Grid>
  );
};

export default VideoCard;
