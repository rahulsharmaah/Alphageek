import React, { useState } from "react";
import { Grid } from "@mui/material";
import Separator from "../../components/Separator";
import CreateTabs from "../../components/Tabs";

const Ecosystem = () => {
  const tabLabelsData = ["Visibility", "Fantype", "Location X Channel"];
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
          {/* {activeTab === 0 ? <EngagementCardsSection /> : <Insights />} */}
        </Grid>
      </Grid>
    </>
  );
};

export default Ecosystem;
