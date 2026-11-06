
function LearningCards({ title, items, type }) {
  function speak(text) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US";
      speech.rate = 0.8;

      window.speechSynthesis.speak(speech);
    }
  }

  return (
    <section className="learning">
      <h2>{title}</h2>
      <p>Tap any card to hear its name!</p>

      <div className="card-list">
        {items.map((item) => (
          <button
            key={item.name}
            className="learning-card"
            style={{
              backgroundColor:
                type === "colors" ? item.value : item.bg,
              color: type === "colors" ? "#FFFFFF" : "#444444"
            }}
            onClick={() => speak(item.name)}
          >
            <span className="card-emoji">
              {item.emoji}
            </span>

            <span className="card-name">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default LearningCards;
