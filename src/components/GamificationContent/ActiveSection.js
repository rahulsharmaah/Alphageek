import { Grid } from "@mui/material";
import React from "react";
import Accordion from "../Accordion";
import CardSection from "./CardSection";
import {dummyData} from "./dummyData";
import ContentPreviewCard from "./ContentPreviewCard";

const ActiveSection = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Accordion title={"Featured Content - October "}>
            <Grid container spacing={12} wrap="wrap">
              {dummyData.map((data, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <CardSection
                    title={data.title}
                    image={data.image}
                    progressBars={data.progressBars}
                  />
                </Grid>
              ))}
            </Grid>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <Accordion title={"Content Preview - November "}>
            <Grid container spacing={12} wrap="wrap">
              {dummyData.map((data, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <ContentPreviewCard
                    title={data.title}
                    image={data.image}
                    progressBars={data.progressBars}
                  />
                </Grid>
              ))}
            </Grid>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
};

export default ActiveSection;
