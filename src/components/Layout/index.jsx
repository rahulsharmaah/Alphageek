import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";

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
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <aside>
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
