import React, { useState } from "react";
import {
  List,
  ListItem,
  // ListItemIcon,
  // ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ChartFill from "../icons/ChartFIll";
import DribbleLogo from "../icons/DribbleLogo";
import SupportFill from "../icons/SupportFill";
import LightningFill from "../icons/LightningFill";
import SettingLogo from "../icons/SettingLogo";
import styled from "styled-components";
import HamburgerMenu from "../HamburgerMenu";
import ChannelEngagementLogo from "../icons/ChannelEngagementLogo";
// import { event÷ } from "d3";

// const activeClassName = "activeListItem";

const Sidebar = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => setIsTextVisible(!isTextVisible);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
      {isMobile ? (
        <HamburgerMenu />
      ) : (
        <SidebarList isTextVisible={isTextVisible}>
          <TopToggle>
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
                <Wrapper active={item.link === window.location.pathname}>
                  {isTextVisible ? (
                    <>
                      <IconWrapper
                        sx={{
                          width: "50%",
                          justifyContent: "start",
                          marginRight: "32px !Important",
                        }}
                      >
                        {item.image}
                      </IconWrapper>
                      <TextWrapper>
                        <Typography variant="h4" display="flex">
                          {item.text}
                        </Typography>
                      </TextWrapper>
                    </>
                  ) : (
                    <IconWrapper>{item.image}</IconWrapper>
                  )}
                </Wrapper>
              </ListItem>
            </NavLink>
          ))}
        </SidebarList>
      )}
    </>
  );
};

const SidebarList = styled(List)`
  position: relative !important;
  z-index: 9 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: ${(props) => (props.isTextVisible ? "14vw" : "4.2vw")};
  height: 100vh;
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
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

const Wrapper = styled.div`
  display: flex;
  align-items: space-around;
  width: 100%;
  margin: 0 auto;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default Sidebar;
