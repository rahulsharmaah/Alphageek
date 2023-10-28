import React, { useState } from "react";
import ProfileDetails from "../../components/ProfileDetails";
import { Grid } from "@mui/material";
import CreateTabs from "../../components/Tabs";
import MemberTable from "../../components/MembersData";
import Separator from "../../components/Separator";

const Setting = () => {
  const tabLabelsData = ["Profile", "Members"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} py={2}>
        <CreateTabs
          tabLabels={tabLabelsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
          <Separator />
      </Grid>
      <Grid item xs={12}>
        {activeTab === 0 ? <ProfileDetails /> : <MemberTable />}
      </Grid>
    </Grid>
  );
};

export default Setting;
