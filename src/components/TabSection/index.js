import React, { useState } from "react";
import CreateTabs from "../Tabs"; // Import your CreateTabs component
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import { FormControl, InputLabel } from "@mui/material";

const StyledGrid = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const SelectionDropdown = styled(Select)`
  && {
    .MuiSelect-icon {
      color: var(--Blue, #0060fc); /* Change this to your desired blue color */
    }
  }
`;
export const TabSection = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ];
  const tabLabelsData = ["Insights", "Saved", "Shared"];
  return (
    <StyledGrid container spacing={2} mt={2}>
      <Grid item xs={12} sm={4}>
        <CreateTabs tabLabels={tabLabelsData} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Age</InputLabel>
          <SelectionDropdown
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={selectedCountry}
            onChange={(event) => setSelectedCountry(event.target.value)}
          >
            {countries.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.label}
              </MenuItem>
            ))}
          </SelectionDropdown>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <input type="date" />
      </Grid>
    </StyledGrid>
  );
};
