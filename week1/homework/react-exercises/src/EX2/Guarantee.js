import React from "react";

const Guarantee = (props) => {
  return (
    <div>
        <img src={props.img} alt={props.title}></img>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  );
};

export default Guarantee;
