import React from "react";
import Key from "./Key";
import { LETTERS } from "../data/lettersAndWords";
import "../styles/Keyboard.scss";


function Keyboard({ onKeyPress }) {
  return (
    <div className="keyboard">
      {LETTERS.map((letter) => (
        <Key key={letter} letter={letter} onClick={onKeyPress} />
      ))}
    </div>
  );
}

export default Keyboard;
