import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import React from "react";
import StyledButton from "../Button";
import styled from "styled-components";

const ContactFormWithImage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {/* Left Side (Contact Form) */}
        <Grid item xs={12} md={6}>
          <Paper elevation={0} style={{ padding: "20px" }}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField label="Name" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Company" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  type="text-area"
                    minRows={3}
                    placeholder="Your Message"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input type="file" accept="image/*" />
                </Grid>
                <Grid item xs={12}>
                  <StyledButton title="Submit" width={"100"} />
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        {/* Right Side (Image) */}
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", alignItems: "center" }}
        >
          <ImageWrapper>
            <img src="Vector-(2).png" alt="{Your Image}" />
          </ImageWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export default ContactFormWithImage;
