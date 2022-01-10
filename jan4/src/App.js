import React from "react";
import DemoDevTools from "./components/DemoDevTools";
import ErrorComp from "./components/ErrorComp";
import ModalPortal from "./components/ModalPortal";
import OtherRootPortal from "./components/OtherRootPortal";
import ProfilerApi from "./components/ProfilerApi";

function App() {
  return (
    <div>
      <h2>DevTools Demo..</h2>
      <DemoDevTools />

      <h2>Profilers Api</h2>
      <ProfilerApi />

      <h2>Error Boundary Example...</h2>
      <ErrorComp />

      <h2>Portal Example...</h2>
      <OtherRootPortal />

      <h2>Modal Portal</h2>
      <ModalPortal />
    </div>
  );
}

export default App;
