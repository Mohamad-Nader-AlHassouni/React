import React from "react";
import Hobbies from "./Hobbies";

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return(
  <div>
      <h1>EX1:Extreme hobbies</h1>
      {hobbies.map(hobby =>(
          <Hobbies key={hobby} name={hobby}/>
      ))}
  </div>
  )
};

export default HobbyList;
