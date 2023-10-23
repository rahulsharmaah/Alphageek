import React from "react";
import Accordion from "../../components/Accordion";
import SupportCardComponent from "../../components/SupportCardComponent";
import Grid from "@mui/material/Grid";
import ContactFormWithImage from "../../components/ContactFormWithImage";

const Support = () => {
  return (
    <Grid container  justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Accordion title={"Onboarding Tutorials"}>
        <SupportCardComponent />
        </Accordion>
      </Grid>
      <Grid item xs={12}>
        <Accordion title={"Onboarding Tutorials"}>
        <ContactFormWithImage />
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Support;
