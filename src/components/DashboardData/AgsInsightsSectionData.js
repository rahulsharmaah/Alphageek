import { Grid } from "@mui/material";
import React from "react";
import Accordion from "../Accordion";
import styled from "styled-components";
const AgsInsightsSectionData = () => {
  const dummyData = {
    heading:
      "In September, interaction in Munich was driven by...while engagement in Berlin was sustained by...",
    bulletPoints: [
      "Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at",
      "Nalagpasan nito hindi lang limang siglo",
      "Salungat sa kaalaman ng marami, ang Lorem Ipsum ay hindi puro walang kwentang",
    ],
  };

  return (
    <Accordion title={"AGS Insights"}>
      <Grid container>
        <Grid item md={12} xs={12}>
          <h2>{dummyData.heading}</h2>
          <StyledBulletList>
            {dummyData.bulletPoints.map((point, index) => (
              <StyledBulletPoint key={index}>{point}</StyledBulletPoint>
            ))}
          </StyledBulletList>
        </Grid>
      </Grid>
    </Accordion>
  );
};

const StyledBulletList = styled.ul`
  color: #000;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  list-style-type: disc; /* Set the list style to bullet points */
`;

const StyledBulletPoint = styled.li`
  color: #000;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  padding: 10px 20px;
`;
export default AgsInsightsSectionData;
