
import { useState, useEffect } from "react";
import flashcards from "../data/flashcards";
import FlashCard from "../components/FlashCard";

function Flashcards() {
  const categories = Object.keys(flashcards);

  const [selectedCategory, setSelectedCategory] = useState("Animals");
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = flashcards[selectedCategory];
  const currentCard = cards[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const previousCard = () => {
    setCurrentIndex((index) =>
      index === 0 ? cards.length - 1 : index - 1
    );
  };

  const nextCard = () => {
    setCurrentIndex((index) =>
      index === cards.length - 1 ? 0 : index + 1
    );
  };

  return (
    <div className="flashcards-page">
      <h1>🎴 Let's Learn with Flashcards!</h1>
      <p className="flashcards-subtitle">
        Tap a card, discover something new, and have fun!
      </p>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? "active-category" : ""
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flashcard-counter">
        Card {currentIndex + 1} of {cards.length}
      </div>

      <div className="flashcard-container">
        <FlashCard
          key={`${selectedCategory}-${currentIndex}`}
          card={currentCard}
        />
      </div>

      <div className="flashcard-navigation">
        <button onClick={previousCard}>← Previous</button>
        <button onClick={nextCard}>Next →</button>
      </div>
    </div>
  );
}

export default Flashcards;
