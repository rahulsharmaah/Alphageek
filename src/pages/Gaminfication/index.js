import React from "react";
import AudienceInsight from "../../components/AudienceInsight";
import { Grid } from "@mui/material";
import EngagementCard from "../../components/EngagementCard";

const Gamification = () => {
  const dummyData = [
    {
      title: "Mobile in partnership with",
      partner: "Microsoft",
      logo: "path_to_logo.png",
      image: `${process.env.PUBLIC_URL}/alphageek-frame.png`,
      tagline: "Your tagline goes here.",
      likes: 120,
      shares: 30,
      progressBars: [
        { label: "Progress 1", percentage: 50 },
        { label: "Progress 2", percentage: 75 },
        { label: "Progress 3", percentage: 30 },
        { label: "Progress 4", percentage: 90 },
        { label: "Progress 5", percentage: 40 },
      ],
    },
  ];
  

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AudienceInsight />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <>
          {dummyData.map((data, index) => (
            <EngagementCard {...data} key={index} />
          ))}
        </>
      </Grid>
    </Grid>
  );
};

export default Gamification;
