import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";
import { Grid } from "@mui/material";

const StyledTabs = styled(Tabs)`
  padding-left: 1rem;
  border-radius: 20px;

  .MuiTab-root {
    color: var(--Gray, #7d909b);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.44px;
    background-color: white;
  }

  .css-1aquho2-MuiTabs-indicator {
    top: 0 !important;
    border-radius: 40px !important;
  }
  .MuiTab-textColorInherit.Mui-selected {
    color: var(--Blue, #0060fc);
    text-align: center;
    font-family: Poppins;
    font-size: 49px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.44px;
    border-radius: 40px !important;
    height: 100px;
    border: 10px solid var(--Blue, #0060fc) !important;
  }
`;

const CreateTabs = ({ tabLabels, activeTab, setActiveTab }) => {
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
    <Grid container ml={4}>
    <Grid item md={8}>
      <StyledTabs
        value={activeTab}
        onChange={handleChange}
        variant="standard"
        scrollButtons={false}
        orientation="horizontal"
        aria-label="scrollable prevent tabs example"
      >
        {tabLabels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </StyledTabs>
    </Grid>
    </Grid>
    </>
  );
};
export default CreateTabs;
