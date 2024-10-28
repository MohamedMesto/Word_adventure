import { useState, useRef, useEffect } from "react";
import "../styles/Word_adventure.scss";
import Row from "./Row";
import Keyboard from "./Keyboard";
import { LETTERS, potentialWords } from "../data/lettersAndWords";

const SOLUTION =
  potentialWords[Math.floor(Math.random() * potentialWords.length)];

console.log(SOLUTION);

export default function Word_adventure() {
  const [guesses, setGuesses] = useState(["     ", "     ", "     ", "     ", "     ", "     ",]);
  const [solutionFound, setSolutionFound] = useState(false);
  const [activeLetterIndex, setActiveLetterIndex] = useState(0);
  const [notification, setNotification] = useState("");
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [failedGuesses, setFailedGuesses] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [presentLetters, setPresentLetters] = useState([]);
  const [absentLetters, setAbsentLetters] = useState([]);

  const Word_adventureRef = useRef();

  useEffect(() => {
    Word_adventureRef.current.focus();
  }, []);

  const typeLetter = (letter) => {
    if (activeLetterIndex < 5) {
      setNotification("");

      let newGuesses = [...guesses];
      newGuesses[activeRowIndex] = replaceCharacter(
        newGuesses[activeRowIndex],
        activeLetterIndex,
        letter
      );

      setGuesses(newGuesses);
      setActiveLetterIndex((index) => index + 1);
    }
  };

  const replaceCharacter = (string, index, replacement) => {
    return (
      string.slice(0, index) +
      replacement +
      string.slice(index + replacement.length)
    );
  };

  const hitEnter = () => {
    if (activeLetterIndex === 5) {
      const currentGuess = guesses[activeRowIndex];

      if (!potentialWords.includes(currentGuess)) {
        setNotification("NOT IN THE WORD LIST");
      } else if (failedGuesses.includes(currentGuess)) {
        setNotification("WORD TRIED ALREADY");
      } else if (currentGuess === SOLUTION) {
        setSolutionFound(true);
        setNotification("WELL DONE");
        setCorrectLetters([...SOLUTION]);
      } else {
        let correctLetters = [];

        [...currentGuess].forEach((letter, index) => {
          if (SOLUTION[index] === letter) correctLetters.push(letter);
        });

        setCorrectLetters([...new Set(correctLetters)]);

        setPresentLetters([
          ...new Set([
            ...presentLetters,
            ...[...currentGuess].filter((letter) => SOLUTION.includes(letter)),
          ]),
        ]);

        setAbsentLetters([
          ...new Set([
            ...absentLetters,
            ...[...currentGuess].filter((letter) => !SOLUTION.includes(letter)),
          ]),
        ]);

        setFailedGuesses([...failedGuesses, currentGuess]);
        setActiveRowIndex((index) => index + 1);
        setActiveLetterIndex(0);
      }
    } else {
      setNotification("FIVE LETTER WORDS ONLY");
    }
  };

  const hitBackspace = () => {
    setNotification("");

    if (guesses[activeRowIndex][0] !== " ") {
      const newGuesses = [...guesses];

      newGuesses[activeRowIndex] = replaceCharacter(
        newGuesses[activeRowIndex],
        activeLetterIndex - 1,
        " "
      );

      setGuesses(newGuesses);
      setActiveLetterIndex((index) => index - 1);
    }
  };

/*   const hitReset = () => {
    window.location.reload(); // Refreshes the page
  }; */

 


/*   const hitReset = () => {
    const baseUrl = window.location.host.includes('localhost')
      ? './WordsAdventure' // or your local dev URL
      : 'https://un2050.com/WordsAdventure';
  
    window.location.replace(baseUrl);
  };
 */

  const hitReset = () => {
    // Reset all game state variables to their initial values
    setGuesses(["     ", "     ", "     ", "     ", "     ", "     "]);
    setSolutionFound(false);
    setActiveLetterIndex(0);
    setNotification("");
    setActiveRowIndex(0);
    setFailedGuesses([]);
    setCorrectLetters([]);
    setPresentLetters([]);
    setAbsentLetters([]);
  
    // Reset the solution to a new random word
    SOLUTION =
      potentialWords[Math.floor(Math.random() * potentialWords.length)];
    console.log(SOLUTION); // Optionally log the new solution
  };







  const handleKeyDown = (event) => {
    if (solutionFound) return;

    if (LETTERS.includes(event.key)) {
      typeLetter(event.key);
      return;
    }

    if (event.key === "Enter") {
      hitEnter();
      return;
    }

    if (event.key === "Backspace") {
      hitBackspace();
    }
  };

  return (
    <div
      className="Word_adventure"
      ref={Word_adventureRef}
      tabIndex="0"
      onBlur={(e) => {
        e.target.focus();
      }}
      onKeyDown={handleKeyDown}
    >
      <h1 className="title"><a href="https://github.com/MohamedMesto/Word_adventure">Word Adventure UN2050</a> </h1>
      <p class="status-text">
        A <span class="green">green</span> letter means it's in the right spot, while an <span class="orange">orange</span> letter means it's in the word but in a different position.
      </p>
      <div className={`notification ${solutionFound && "notification--green"}`}>
        {notification}
      </div>
      {guesses.map((guess, index) => {
        return (
          <Row
            key={index}
            word={guess}
            applyRotation={
              activeRowIndex > index ||
              (solutionFound && activeRowIndex === index)
            }
            solution={SOLUTION}
            bounceOnError={
              notification !== "WELL DONE" &&
              notification !== "" &&
              activeRowIndex === index
            }
          />
        );
      })}
      <Keyboard
        presentLetters={presentLetters}
        correctLetters={correctLetters}
        absentLetters={absentLetters}
        typeLetter={typeLetter}
        hitEnter={hitEnter}
        hitBackspace={hitBackspace}
        hitReset={hitReset}
      />
    </div>
  );
}
