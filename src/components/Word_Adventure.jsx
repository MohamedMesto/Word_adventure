import React, { useState } from "react";
import Row from "./Row";
import Keyboard from "./Keyboard";
import { potentialWords } from "../data/lettersAndWords";
import "./Word_Adventure.scss";

function Word_Adventure() {
  const [guessedWords, setGuessedWords] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const handleKeyPress = (letter) => {
    if (letter === "Enter" && currentGuess.length === 5) {
      setGuessedWords([...guessedWords, currentGuess]);
      setCurrentGuess("");
    } else if (letter === "Backspace") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < 5) {
      setCurrentGuess(currentGuess + letter);
    }
  };

  return (
    <div className="wordle">
      {guessedWords.map((word, idx) => (
        <Row key={idx} word={word} />
      ))}
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
}

export default Word_Adventure;
