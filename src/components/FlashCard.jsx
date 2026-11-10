
import { useState } from "react";

function FlashCard({ card }) {
  const [flipped, setFlipped] = useState(false);

  const speak = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(card.name);
      speech.lang = "en-US";
      speech.rate = 0.8;

      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setFlipped(!flipped);
        }
      }}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <span className="flashcard-emoji">{card.emoji}</span>
          <p>Tap to reveal</p>
        </div>

        <div className="flashcard-back">
          <span className="flashcard-emoji">{card.emoji}</span>
          <h2>{card.name}</h2>

          <button
            className="speak-button"
            onClick={(event) => {
              event.stopPropagation();
              speak();
            }}
            aria-label={`Listen to ${card.name}`}
          >
            🔊 Listen
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
