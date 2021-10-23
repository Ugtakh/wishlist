import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGift,
  faTimes,
  faBars,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import monitaGroup from "./monita-groups";
import { Navigation } from "react-minimal-side-navigation";
import type { NextPage } from "next";
import Link from "next/link";

const sideBarData = [
  {
    title: "Home",
    path: "/home",
    icon: faHome,
  },
  {
    title: "Create  group",
    path: "/create-monita",
    icon: faPlus,
  },
  {
    title: "Monita Group1",
    path: "/monita-groups",
    icon: faGift,
  },
];

const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="home-container" style={{ display: "flex" }}>
      <div style={{ width: "100%" }} onClick={showSidebar}>
        <p>home page</p>
      </div>
    </div>
  );
};

export default Home;
