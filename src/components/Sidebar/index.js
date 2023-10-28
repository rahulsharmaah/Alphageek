import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  // ListItemIcon,
  // ListItemText,
  Typography,
  // useMediaQuery,
  // useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ChartFill from "../icons/ChartFIll";
import DribbleLogo from "../icons/DribbleLogo";
import SupportFill from "../icons/SupportFill";
import LightningFill from "../icons/LightningFill";
import SettingLogo from "../icons/SettingLogo";
import styled from "styled-components";
// import HamburgerMenu from "../HamburgerMenu";
import ChannelEngagementLogo from "../icons/ChannelEngagementLogo";
// import { event÷ } from "d3";

// const activeClassName = "activeListItem";

const Sidebar = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => setIsTextVisible(!isTextVisible);

  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
      <SidebarList
        isTextVisible={isTextVisible}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <TopToggle
          sx={
            isTextVisible
              ? { justifyContent: "center" }
              : { justifyContent: "start" }
          }
        >
          <ToggleButton onClick={handleClick}>&#9776;</ToggleButton>
        </TopToggle>
        {items.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#fff" : "var(--Gray, #7D909B)",
                backgroundColor: isActive ? "var(--Blue, #0060FC)" : "#fff",
                svg: { fill: isActive ? "#fff" : "red" },
              };
            }}
          >
            <ListItem>
              <>
                {isTextVisible ? (
                  <>
                    <ListItemIcon>{item.image}</ListItemIcon>
                    <ListItemText>
                      <Typography variant="h4" textAlign={"start"}>
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </>
                ) : (
                  <IconWrapper>{item.image}</IconWrapper>
                )}
              </>
            </ListItem>
          </NavLink>
        ))}
      </SidebarList>
    </>
  );
};

const SidebarList = styled(List)`
  position: sticky !important;
  z-index: 9 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: "auto";
  height: 100vh;
  width: auto;
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  background-color: #fff;
  .css-h3u67z-MuiList-root {
    display: flex;
    flex-direction: column;
    align-content: flex-start !important;
    align-items: flex-start !important;
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

// const Wrapper = styled.div`
//   display: flex;
//   align-items: space-around;
//   width: 100%;
//   margin: 0 auto;
// `;
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const TextWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;

export default Sidebar;
