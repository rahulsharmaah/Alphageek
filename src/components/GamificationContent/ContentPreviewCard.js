import React from "react";
import { CardContent, CardMedia, Typography } from "@mui/material";
import CardHeading from "./CardHeading";
import styled from "styled-components";

const ContentPreviewCard = ({
  title,
  logo,
  image,
  description,
  isRequire = true,
}) => {
  return (
    <>
      {isRequire && <CardHeading title={title} width={100} />}

      <CardContent
        sx={{
          borderRadius: "10px",
          border: "1px solid var(--stroke, #EBEBEB)",
          background: "var(--background-white, #FFF)",
          margin: "0px auto",
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <span>Powered By</span>{" "}
          <img src={"microsoft.png"} alt="Logo" width="100px" height="50px" />
        </div>

        {/* Image and Description Section */}
        <Wrapper>
          <CardMedia
            component="img"
            alt="Engagement Image"
            image={image}
            height={"300px"}
            width={"100%"}
            style={{
              borderRadius: "10px ",
              objectFit: "contain",
            }}
          />
          <Typography variant="h5" textAlign={"center"} gutterBottom={3} py={4}>
            {description}
            {"Life & Times"}
            <Typography
              variant="body1"
              textAlign={"center"}
              gutterBottom={3}
              py={0}
            >
              {description}
              {"by Phil Booth"}
            </Typography>
          </Typography>
        </Wrapper>
      </CardContent>
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        gutterBottom={3}
        py={1}
      >
        <b>Via Mobile, Newsletter, Web</b>
      </Typography>
    </>
  );
};
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 10px 10px;
  background: var(--Light-gray, #f8fafb);
`;
export default ContentPreviewCard;
