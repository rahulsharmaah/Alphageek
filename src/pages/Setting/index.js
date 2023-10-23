import React, { useState } from "react";
import ProfileDetails from "../../components/ProfileDetails";
import { Grid } from "@mui/material";
import CreateTabs from "../../components/Tabs";
import MemberTable from "../../components/MembersData";

const Setting = () => {
  const tabLabelsData = ["Profile", "Members"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CreateTabs
          tabLabels={tabLabelsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Grid>
      <Grid item xs={12}>
        {activeTab === 0 ? <ProfileDetails /> : <MemberTable />}
      </Grid>
    </Grid>
  );
};

export default Setting;
