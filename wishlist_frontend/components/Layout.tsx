import React, { Children } from "react";
import NavBar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="content">
      <NavBar />
      {children}
    </div>
  );
};
