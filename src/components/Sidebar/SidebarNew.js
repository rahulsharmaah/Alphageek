import React from "react";
import styled from "styled-components";
import {
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 20dvh;
  background-color: #f5f5f5;
  transition: width 0.3s ease-in-out;
`;

// const DashboardWrapper = styled.div`
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 50px;
//   background-color: #fff;
//   padding: 20px;
//   display: ${(props) => (props.open ? "block" : "none")};
// `;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#ccc" : "transparent")};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ccc;
  }
`;

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleHover = () => {
    setOpen(true);
  };

  const handleLeave = () => {
    setOpen(false);
  };

  return (
    <div>
      <SidebarWrapper onMouseOver={handleHover} onMouseLeave={handleLeave}>
        <List open={open}>
          <ListItem>
            <Link to="/dashboard">
              <Icon selected={window.location.pathname === "/dashboard"}>
                <MailIcon />
              </Icon>
            </Link>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem>
            <Link to="/settings">
              <Icon selected={window.location.pathname === "/settings"}>
                <MailIcon />
              </Icon>
            </Link>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem>
            <Link to="/profile">
              <Icon selected={window.location.pathname === "/profile"}>
                <MailIcon />
              </Icon>
            </Link>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </SidebarWrapper>
    </div>
  );
};

export default Sidebar;
