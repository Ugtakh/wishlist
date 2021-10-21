import React from "react";

interface IUserCard {
  props: any;
}

export const GroupUserCard = ({ props }: IUserCard) => {
  const { imageUrl, name, active } = props;
  return (
    <div>
      <div
        className="user-card"
        style={{
          width: "150px",
          height: "200px",
          border: active ? "2px solid #39ff14" : "2px solid #ff073a",
          borderRadius: "15px",
          margin: "10px",
          backgroundImage: `url("${imageUrl}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2em",
            fontWeight: 600,
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default GroupUserCard;
