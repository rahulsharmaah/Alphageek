import React, { useState } from "react";
import { Grid } from "@mui/material";
import Separator from "../../components/Separator";
import CreateTabs from "../../components/Tabs";
import VideoSection from "../../components/GamificationContent/VideoSection";
import ActiveSection from "../../components/GamificationContent/ActiveSection";

const Gamification = () => {
  const tabLabelsData = ["Active", "Performance", "Video"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <CreateTabs
            tabLabels={tabLabelsData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Separator />
        </Grid>
        <Grid item xs={12} md={12}>
          {activeTab === 0 && <ActiveSection />}
          {activeTab === 2 && <VideoSection />}
        </Grid>
      </Grid>
    </>
  );
};

export default Gamification;
