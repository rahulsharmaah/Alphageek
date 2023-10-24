import React, { useState } from "react";
import { Grid } from "@mui/material";
import CreateTabs from "../../components/Tabs";
import DashboardData from "../../components/DashboardData";
import Separator from "../../components/Separator";

const Dashboard = () => {
  const tabLabelsData = ["Insights", "Saved", "Shared"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CreateTabs
            tabLabels={tabLabelsData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        <Separator />
        </Grid>
        <Grid item xs={12}>
          {activeTab === 0 && <DashboardData />}
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
