import "../styles/Row.scss";

export default function Row({ word, applyRotation, solution, bounceOnError }) {
  return (
    <div className={`row ${bounceOnError && "row--bounce"}`}>
      {word.split("").map((letter, index) => {
        const bgClass =
          solution[index] === letter
            ? "correct"
            : solution.includes(letter)
            ? "present"
            : "absent";

        return (
          <div
            className={`letter ${bgClass} ${
              applyRotation && `rotate--${index + 1}00`
            } ${letter !== " " && "letter--active"}`}
            key={index}
          >
            {letter}
            <div className="back">{letter}</div>
          </div>
        );
      })}
    </div>
  );
}
