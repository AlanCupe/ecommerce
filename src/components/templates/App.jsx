import React from "react";
import MainHeader from "../organims/MainHeader";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default App;
