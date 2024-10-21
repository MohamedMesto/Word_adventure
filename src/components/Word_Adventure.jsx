import React, { useState, useEffect } from "react";
import Row from "../components/Row";
import Keyboard from "../components/Keyboard";
import "../styles/Word_Adventure.scss";
import { potentialWords, LETTERS } from "../data/lettersAndWords";


const MAX_GUESSES = 6;

function Word_Adventure() {
    const [targetWord, setTargetWord] = useState("");
    const [guessedWords, setGuessedWords] = useState([]);
    const [currentGuess, setCurrentGuess] = useState("");
    const [absentLetters, setAbsentLetters] = useState([]);
    const [presentLetters, setPresentLetters] = useState([]);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [isWin, setIsWin] = useState(false);

    useEffect(() => {
        setTargetWord(
            potentialWords[Math.floor(Math.random() * potentialWords.length)]
        );
    }, []);

    const handleLetterInput = (letter) => {
        if (currentGuess.length < 5 && !gameOver) {
            setCurrentGuess(currentGuess + letter);
        }
    };

    const handleBackspace = () => {
        if (!gameOver) {
            setCurrentGuess(currentGuess.slice(0, -1));
        }
    };

    const handleEnter = () => {
        if (currentGuess.length !== 5 || gameOver) return;

        const updatedGuesses = [...guessedWords, currentGuess];
        setGuessedWords(updatedGuesses);
        evaluateGuess(currentGuess);

        if (currentGuess === targetWord) {
            setGameOver(true);
            setIsWin(true);
        } else if (updatedGuesses.length >= MAX_GUESSES) {
            setGameOver(true);
            setIsWin(false);
        }

        setCurrentGuess("");
    };

    const evaluateGuess = (guess) => {
        const updatedAbsent = [...absentLetters];
        const updatedPresent = [...presentLetters];
        const updatedCorrect = [...correctLetters];

        guess.split("").forEach((letter, idx) => {
            if (targetWord[idx] === letter) {
                if (!updatedCorrect.includes(letter)) updatedCorrect.push(letter);
            } else if (targetWord.includes(letter)) {
                if (!updatedPresent.includes(letter)) updatedPresent.push(letter);
            } else {
                if (!updatedAbsent.includes(letter)) updatedAbsent.push(letter);
            }
        });

        setAbsentLetters(updatedAbsent);
        setPresentLetters(updatedPresent);
        setCorrectLetters(updatedCorrect);
    };

    return (
        <div className="word_Adventure">
            <div className="board">
                {guessedWords.map((word, idx) => (
                    <Row key={idx} word={word} />
                ))}
                {!gameOver && <Row word={currentGuess} />}
            </div>
            <Keyboard
                absentLetters={absentLetters}
                presentLetters={presentLetters}
                correctLetters={correctLetters}
                typeLetter={handleLetterInput}
                hitEnter={handleEnter}
                hitBackspace={handleBackspace}
            />
            {gameOver && (
                <div className="game-over">
                    {isWin ? <h2>Congratulations! You guessed the word.</h2> : <h2>Sorry! The word was {targetWord}</h2>}
                    <button onClick={() => window.location.reload()}>Play Again</button>
                </div>
            )}
        </div>
    );
}

export default Word_Adventure;
