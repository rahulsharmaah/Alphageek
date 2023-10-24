import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HamburgerMenu from "../HamburgerMenu";
import { Grid, InputBase } from "@mui/material";
import { styled as muiStyled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const StyledNavbar = styled.nav`
  background-color: ${(props) => (props.isSticky ? "#333" : "transparent")};
  position: ${(props) => (props.isSticky ? "sticky" : "relative")};
  top: 0;
  left: 0;
  right: 0;
  transition: background-color 0.3s ease-in-out;
  z-index: 100;
`;

const NavbarContent = styled(Grid)`
  padding: 20px; /* Add top padding to create spacing above content */
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

const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledNavbar isSticky={isSticky}>
      <NavbarContent container px={2}>
        <Grid item xs={3}>
          <HamburgerMenu />
        </Grid>
        <Grid item xs={6}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid>
      </NavbarContent>
    </StyledNavbar>
  );
};

export default StickyNavbar;
