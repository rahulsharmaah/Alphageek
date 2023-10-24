import React, { useState } from "react";
import {
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { NavLink } from "react-router-dom";
import ChartFill from "../icons/ChartFIll";
import DribbleLogo from "../icons/DribbleLogo";
import SupportFill from "../icons/SupportFill";
import LightningFill from "../icons/LightningFill";
import SettingLogo from "../icons/SettingLogo";
import styled from "styled-components";
import HamburgerMenu from "../HamburgerMenu";
import ChannelEngagementLogo from "../icons/ChannelEngagementLogo";

const activeClassName = "activeListItem";

const SidebarList = styled(List)`
  position: relative !important;
  z-index: 9999 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  max-width: ${(props) => (props.isTextVisible ? "40vw" : "4vw")};
  height: 100vh;
  opacity: 5;
  /* Style the active SVG image */
  .active svg {
    fill: ${(props) =>
      props.activeClassName
        ? "grey"
        : "red"}; /* Change the fill color of the SVG image to red for active items */
  }

  /* Style the inactive SVG image */
  svg {
    fill: ${(props) => (props.activeClassName ? "grey" : "red")};
  }
`;

const TopToggle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Sidebar = () => {
  // const location = useLocation(); // Get the current location
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => setIsTextVisible(!isTextVisible);
  // const [isDrawerOpen, setDrawerOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setDrawerOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setDrawerOpen(false);
  // };
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
      <Hidden mdDown>
        <SidebarList isTextVisible={isTextVisible}>
          <TopToggle>
            <ToggleButton onClick={handleClick}>&#9776;</ToggleButton>
          </TopToggle>
          {items.map((item) => (
            <ListItem key={item.id} onClick={handleClick}>
              <NavLink
                to={item.link}
                className={({ isActive }) => (isActive ? activeClassName : "")}
                onClick={(e) => e.stopPropagation()}
              >
                <ListItemIcon className={activeClassName}>
                  {item.image}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    display: isTextVisible ? "inline-block" : "none",
                  }}
                />
              </NavLink>
            </ListItem>
          ))}
        </SidebarList>
      </Hidden>
      <Hidden mdUp>
        <HamburgerMenu />
      </Hidden>
    </>
  );
};

export default Sidebar;
