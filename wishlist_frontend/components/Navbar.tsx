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
    path: "/",
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

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="home-container" style={{ display: "flex" }}>
      {sidebar ? (
        <div
          className="nav-bar"
          style={{
            width: "60%",
            height: "100vh",
            background: "rgb(255, 249, 249)",
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            color="black"
            onClick={showSidebar}
            style={{ fontSize: "1.5em" }}
          />
          <div
            className="nav-profile"
            style={{
              display: "flex",
              //   justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/profile">
              <div
                className="user-card-avatar"
                style={{
                  backgroundImage: `url("https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onClick={showSidebar}
              />
            </Link>
            <Link href="/profile">
              <p onClick={showSidebar}>User name </p>
            </Link>
          </div>
          {sideBarData.map((item, index) => {
            return (
              <li
                key={index}
                style={{ display: "flex", cursor: "pointer" }}
                onClick={showSidebar}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  color="black"
                  style={{ fontSize: "1em", alignSelf: "center" }}
                />
                <Link href={item.path}>
                  <p style={{ fontSize: "1em" }}>{item.title}</p>
                </Link>
              </li>
            );
          })}
        </div>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          color="black"
          onClick={showSidebar}
          style={{ fontSize: "1.5em" }}
        />
      )}
    </div>
  );
};

export default NavBar;
