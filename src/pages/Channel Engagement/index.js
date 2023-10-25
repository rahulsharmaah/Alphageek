import React, { useState } from "react";
import CreateTabs from "../../components/Tabs";
import Separator from "../../components/Separator";
import EngagementCardsSection from "../../components/ChannelEngagementComponents/EngagementCardsSection";
import Insights from "../../components/ChannelEngagementComponents/Insights";
import { Grid } from "@mui/material";

const ChannelEngagement = () => {
  const tabLabelsData = ["Engagement", "Insight"];
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
          {activeTab === 0 && <EngagementCardsSection />}
          {activeTab === 1 && <Insights />}
        </Grid>
      </Grid>
    </>
  );
};

export default ChannelEngagement;
