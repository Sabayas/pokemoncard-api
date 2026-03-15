import React from "react";
import Fetchdata from "../hook/Fetchdata";

const Card = () => {
  return (
    <div>
      <div>
        <h1>Pokemon Card</h1>
        <p>Description of the pokemon card.</p>
        <Fetchdata />
      </div>
    </div>
  );
};

export default Card;
