import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
// import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import React from "react";
import StyledButton from "../Button";

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
                  <TextareaAutosize
                    minRows={4}
                    placeholder="Your Message"
                    style={{ width: "100%", padding: "10px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input type="file" accept="image/*" />
                </Grid>
                <Grid item xs={12}>
                  <StyledButton title="Submit" width={"100"}/>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        {/* Right Side (Image) */}
        <Grid item xs={12} md={6}>
          <img
            src="{your-image-url.jpg}"
            alt="{Your Image}"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactFormWithImage;
