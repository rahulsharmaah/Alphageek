import { Grid } from "@mui/material";
import React from "react";
import Accordion from "../Accordion";
import PerfromanceDummydata from "./PerfromanceDummydata";
import PerformanceCards from "./PerformanceCards";
import OtherPerformanceCard from "./OtherPerformanceCard";

const PerformanceSection = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Accordion title={"Featured Content - October "}>
            <Grid container spacing={12} wrap="wrap">
              {PerfromanceDummydata.map((data, index) => (
                <Grid item xs={12} md={12} key={index}>
                  <PerformanceCards
                    title={data.title}
                    image={data.CardImages}
                  />
                </Grid>
              ))}
            </Grid>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <Accordion title={"Featured Content - October "}>
            <Grid container spacing={12} wrap="wrap">
              <Grid item xs={12} md={12}>
                <OtherPerformanceCard />
              </Grid>
            </Grid>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
};

export default PerformanceSection;
