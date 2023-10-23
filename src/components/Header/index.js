import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { AlphaGeekLogo } from "../icons/AlphaGeekLogo";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { styled as muiStyled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { NotificationIcon } from "../icons/NotificationIcon";
const Header = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        pt: 4,
        pb: 2,
        width: "100%",
        alignItems: "center",
        ml: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid xs={6} md={2} item>
          <div>
            <AlphaGeekLogo />
          </div>
        </Grid>
        <Grid
          container
          md={6}
          alignItems={"flex-end"}
          alignContent={"flex-end"}
        >
          <SearchGridItem md={10}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </SearchGridItem>
          <NotificationGridItem xs={2}>
            <NotificationIconWrapper>
              <NotificationIcon />
            </NotificationIconWrapper>
          </NotificationGridItem>
        </Grid>
        <Grid
          xs={6}
          md={3}
          container
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item md={6}>
            <img src={"/xbox.jpg"} alt="xbox.jpg" />
          </Grid>
          <Grid item md={6} justifyContent={"center"} alignItems={"center"}>
            <Heading>C. Munson</Heading>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;

const NotificationIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const SearchGridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;

const NotificationGridItem = muiStyled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px; /* Adjust the padding as needed */
`;

const Search = muiStyled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 2,
  width: "100%",
  border: "1px solid",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = muiStyled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "38ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

const Heading = styled.h1`
  font-family: Poppins;
  font-size: 25px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.5px;
  text-align: left;
`;
