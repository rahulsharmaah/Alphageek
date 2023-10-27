import { Grid } from "@mui/material";
import React from "react";
import Accordion from "../Accordion";
import EcosystemTables from "./EcosystemTables";

const EcosystemData = () => {
  const dummyData = [
    {
      title: "Avg Time Spent",
      subtitle: "2:30",
    },
    {
      title: "Unique Content",
      subtitle: "500",
    },
    {
      title: "Total Engagements",
      subtitle: "40,000",
    },
    {
      title: "Highest ER",
      subtitle: "65%",
    },
  ];

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={0} wrap="wrap" justifyContent={"center"}>
            <Grid item xs={12} md={4}>
              <Accordion title={"Engagement Activity"}>
                <EcosystemTables tableData={dummyData} />
              </Accordion>
              <Accordion title={"Backlink CTR"}>
                <EcosystemTables tableData={dummyData} />
              </Accordion>
            </Grid>
            <Grid item xs={12} md={8}>
              <Accordion title={"Primary Audience"}>
                <div>
                  <img
                    src={"image11.svg"}
                    alt="img"
                    height={"100%"}
                    width={"auto"}
                  />
                </div>
              </Accordion>
            </Grid>
          </Grid>
          <Grid container spacing={0} wrap="wrap">
            <Grid item xs={12} md={4}>
              <Accordion title={"Games & Activations"}>
                <EcosystemTables tableData={dummyData} />
              </Accordion>
              <Accordion title={"Network Growth via"}>
                <EcosystemTables tableData={dummyData} />
                {/* <TableComponent data={tableData2} needHeading={false} /> */}
              </Accordion>
            </Grid>
            <Grid item xs={12} md={8}>
              <Accordion title={"Content Shares"}>
                <div>
                  <img
                    src={"image11.svg"}
                    alt="img"
                    height={"100%"}
                    width={"auto"}
                  />
                </div>{" "}
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default EcosystemData;
