import React from "react";
import "../styles/Row.scss";


 

function Row({ word }) {
  return (
    <div className="row">
      {word.split("").map((letter, idx) => (
        <div key={idx} className="letter">
          {letter}
        </div>
      ))}
    </div>
  );
}

export default Row;
