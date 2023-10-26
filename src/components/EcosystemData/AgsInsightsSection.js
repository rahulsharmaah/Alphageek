import { Grid } from "@mui/material";
import React from "react";
import Accordion from "../Accordion";
import styled from "styled-components";
import ClockIcon from "./icons/ClockIcon";
import LessonIcon from "./icons/LessonIcon";
import LevelIcon from "./icons/LevelIcon";
const AgsInsightsSection = () => {
  const dummyData = {
    bulletPoints: [
      "Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at",
      "Nalagpasan nito hindi lang limang siglo",
      "Salungat sa kaalaman ng marami, ang Lorem Ipsum ay hindi puro walang kwentang",
    ],
    dataWithIcon: [
      { icon: <ClockIcon />, text: "+2.5 min time spent (avg)" },
      { icon: <LessonIcon />, text: "+3.0 min time spent (avg)" },
      { icon: <LevelIcon />, text: "+2.0 min time spent (avg)" },
    ],
  };

  return (
    <Accordion title={"AGS Insights"}>
      <Grid container>
        <Grid item md={8} xs={12}>
          <StyledBulletList>
            {dummyData.bulletPoints.map((point, index) => (
              <StyledBulletPoint key={index}>{point}</StyledBulletPoint>
            ))}
          </StyledBulletList>
        </Grid>
        <Grid item md={4} xs={12}>
          <h2>Insights</h2>
          {dummyData.dataWithIcon.map((item, index) => (
            <StyledIconText key={index}>
              {item.icon}
              <StyledText> {item.text}</StyledText>
            </StyledIconText>
          ))}
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
const StyledIconText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledText = styled.span`
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  padding-left: 10px;
`;
export default AgsInsightsSection;
