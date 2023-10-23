import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

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

  const menuItems = ["Home", "About", "Services", "Contact"];

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
      <StyledDrawer
        anchor="left"
        open={isOpen}
        onClose={toggleMenu}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={toggleMenu}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </>
  );
};

export default HamburgerMenu;