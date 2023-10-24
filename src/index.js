import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Setting from "./pages/Setting";
import Support from "./pages/Support";
import ChannelEngagement from "./pages/Channel Engagement";
import Gamification from "./pages/Gamification";
import Dashboard from "./pages/Dashboard";
import Ecosystem from "./pages/Ecosystem";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="/channel-engagement" element={<ChannelEngagement />} />
      <Route path="/ecosystem" element={<Ecosystem />} />
      <Route path="/gamification" element={<Gamification />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/support" element={<Support />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
