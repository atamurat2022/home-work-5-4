import React from "react";

export default function Block(props) {
  let color = props.data.block;

  function getColor(props) {
    if (Number(color)) {
      return "black";
    } else if (color === String("color")) {
      return "red";
    } else {
      return color;
    }
  }

  const divStyle = {
    width: "88px",
    height: "80px",
    backgroundColor: getColor(),
    backgroundSize: "cover",
  };

  return (
    <>
      <div style={divStyle}> {props.data.id} </div>
      <div> {props.data.block} </div>
    </>
  );
}
