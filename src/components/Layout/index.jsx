import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
// import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
// import { Hidden, useMediaQuery, useTheme } from "@mui/material";
// import StickyNavbar from "../StickyNavbar";
// import HamburgerMenu from "../HamburgerMenu";
import NewstickyNav from "../StickyNavbar/NewstickyNav";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
`;

const SidebarContent = styled.div`
  flex: 0 0 190px;
`;

function Layout() {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <LayoutContainer>
      <NewstickyNav />
      <MainContent>
        <aside sx={{ display: { xs: "none" } }}>
          <SidebarContent>
            <Sidebar />
          </SidebarContent>
        </aside>
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
