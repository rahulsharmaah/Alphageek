import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
// import { Hidden, Typography } from "@mui/material";
import { styled as muiStyled, alpha } from "@mui/material/styles";
import ChartFill from "../icons/ChartFIll";
import ChannelEngagementLogo from "../icons/ChannelEngagementLogo";
import DribbleLogo from "../icons/DribbleLogo";
import SettingLogo from "../icons/SettingLogo";
import LightningFill from "../icons/LightningFill";
import SupportFill from "../icons/SupportFill";
import { Grid, ListItemIcon, Typography } from "@mui/material";
import styled from "styled-components";
import { NotificationIcon } from "../icons/NotificationIcon";
import InputBase from "@mui/material/InputBase";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    text: "Dashboard",
    image: <ChartFill />,
    link: "/",
  },
  {
    id: 2,
    text: "Channel",
    image: <ChannelEngagementLogo />,
    link: "/channel-engagement",
  },
  {
    id: 3,
    text: "Ecosystem",
    image: <LightningFill />,
    link: "/ecosystem",
  },
  {
    id: 4,
    text: "Gamification",
    image: <DribbleLogo />,
    link: "/gamification",
  },
  {
    id: 5,
    text: "Settings",
    image: <SettingLogo />,
    link: "/setting",
  },
  {
    id: 6,
    text: "Help Center",
    image: <SupportFill />,
    link: "/support",
  },
];
function NewstickyNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography> */}
      <img src="alphageek-frame.png" alt="logo" />
      <Divider />
      <List sx={{ ".active": { backgroundColor: "red" } }}>
        {navItems.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "var(--black)",
                backgroundColor: isActive ? "var(--Blue, #0060FC)" : "#fff",
              };
            }}
          >
            <ListItem key={item}>
              <ListItemIcon>{item.image}</ListItemIcon>
              <ListItemText>
                <Typography variant="h4" textAlign={"start"}>
                  {item.text}
                </Typography>
              </ListItemText>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "40px",
        marginBottom: { sm: "90px", xs: "90px" },
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#ffff", height: "110px", padding: "20px 0px" }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none", sm: "flex" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container>
            <Grid
              item
              md={3}
              xs={6}
              sx={{
                display: { xs: "none", md: "flex" },
                height: "50%",
                alignContent: "center",
                padding: "20px 20px",
              }}
            >
              <img src="alphageek-frame.png" alt="logo" />
            </Grid>
            <Grid item md={5} xs={6}>
              <Box>
                <Grid container>
                  <Grid item md={8} xs={10}>
                    <Box
                      sx={{
                        display: "flex",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                      }}
                    >
                      <Search>
                        <SearchIconWrapper>
                          <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="Search…"
                          inputProps={{ "aria-label": "search" }}
                        />
                      </Search>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={2}
                    xs={2}
                    sx={{ ml: "40px", display: { xs: "none", md: "flex" } }}
                  >
                    <NotificationIconWrapper>
                      <NotificationIcon />
                    </NotificationIconWrapper>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              md={4}
              xs={6}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Grid item md={4} display="flex" alignItems={"center"}>
                <Grid item xs={12}>
                  {" "}
                  <ImageWrapper>
                    <img src="/xbox.jpg" alt="xbox.jpg" />
                  </ImageWrapper>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                display="flex"
                alignItems={"center"}
                alignContent={"center"}
              >
                <Typography variant="h1"  fontSize="24px" color={"black"}>
                  C. Muson
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="persistent"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: false,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

const NotificationIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
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
  border: "2px solid var(--stroke, #EBEBEB)",
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
  color: "black",
}));
const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(8)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "black",
    [theme.breakpoints.up("sm")]: {
      width: "38ch",
      "&:focus": {
        width: "42ch",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "48ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

const ImageWrapper = styled.div`
  justify-content: flex-start;
  align-items: center;
`;
export default NewstickyNav;
