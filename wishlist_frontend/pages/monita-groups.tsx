import { SIGQUIT } from "constants";
import { url } from "inspector";
import type { NextPage } from "next";
import React, { useState } from "react";
import GroupUserCard from "../components/group-user-card";
import image from "./profile.jpeg";

const DATA = [
  {
    name: "Maral",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnELq88FqJJ3fRj93adsIGYvhO-TiVlgimVQ&usqp=CAU",
    active: true,
  },
  {
    name: "Ugtakhbayar",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
    active: false,
  },
  {
    name: "Subedei",
    imageUrl:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    active: false,
  },
  {
    name: "Gereltuya",
    imageUrl:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    active: true,
  },
];

const monitaGroup = () => {
  return (
    <div className="container">
      <div
        className="groupName"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p
          style={{
            fontSize: "1.5em",
            fontWeight: 600,
            lineHeight: "36px",
            fontFamily: "Sk-Modernist",
            color: "#ff073a",
            marginTop: "10px",
          }}
        >
          Monita 2021 Nest
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "30px",
        }}
      >
        <p
          style={{
            fontSize: "1.3em",
            fontWeight: 400,
            lineHeight: "24px",
            fontFamily: "Sk-Modernist",
          }}
        >
          Ugtakhbayar created this group
        </p>
      </div>

      {/* group user lists */}
      <div
        className="group-user-list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {/* user card */}
        {DATA.map((user, index) => {
          return <GroupUserCard props={user} key={index} />;
        })}
        {/* user card end */}
      </div>

      {/* group user lists end */}
    </div>
  );
};

export default monitaGroup;
