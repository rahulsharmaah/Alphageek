import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ProfileForm from "./ProfileForm";

const ProfileDetails = () => {
  return (
    <Grid container>
      <Grid item xs={12} mb={8}>
        <BackgroundImage>
          <Avatar
            alt="Remy Sharp"
            src="image 330.png"
            sx={{
              width: 159,
              height: 159,
              position: "absolute",
              top: "70%",
              bottom: "0",
            }}
          />
        </BackgroundImage>
      </Grid>
      <Grid item xs={12} mt={{ md: 6, sm: 3 }} mb={{ md: 8, sm: 6,xs:4 }}>
        <ProfileForm />
      </Grid>
    </Grid>
  );
};

const BackgroundImage = styled.div`
  background-color: lightgray;
  background-image: url("big-bg-microsoft.png");
  background-size: cover;
  background-position: center center;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export default ProfileDetails;
