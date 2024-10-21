import React from "react";

function Key({ letter, onClick }) {
  return (
    <button className="key" onClick={() => onClick(letter)}>
      {letter}
    </button>
  );
}

export default Key;
