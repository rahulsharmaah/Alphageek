import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import SettingLogo from "../icons/SettingLogo";
import DribbleLogo from "../icons/DribbleLogo";
import LightningFill from "../icons/LightningFill";
import ChartFill from "../icons/ChartFIll";
import SupportFill from "../icons/SupportFill";
import { ListItemIcon } from "@mui/material";
import { NavLink } from "react-router-dom";
import ChannelEngagementLogo from "../icons/ChannelEngagementLogo";

const StyledDrawer = styled(Drawer)`
  && {
    .MuiDrawer-paper {
      width: 240px;
    }
  }
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const items = [
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
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleMenu}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <StyledDrawer anchor="left" open={isOpen} onClose={toggleMenu}>
        <List>
          {items.map((item) => (
            <ListItem key={item.id}>
              <NavLink
                to={item.link}
                onClick={toggleMenu}
                // className={({ isActive }) => (isActive ? activeClassName : "")}
                // onClick={(e) => e.stopPropagation()}
              >
                <ListItemIcon>{item.image}</ListItemIcon>
                <ListItemText
                  sx={{
                    display: "inline-block",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  primary={item.text}
                />
              </NavLink>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </>
  );
};

export default HamburgerMenu;
