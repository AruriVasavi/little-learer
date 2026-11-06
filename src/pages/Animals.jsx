
import { animals } from "../data/animals";

function speak(text) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.8;

    window.speechSynthesis.speak(speech);
  }
}

function Animals() {
  return (
    <section className="learning">
      <h2>Learn Animals 🐾</h2>
      <p>Tap any card to hear its name!</p>

      <div className="card-list">
        {animals.map((item) => (
          <button
            key={item.name}
            className="learning-card"
            style={{
              backgroundColor: item.bg,
              color: "#444444"
            }}
            onClick={() => speak(`${item.name}. ${item.sound}`)}
          >
            <span className="card-emoji">{item.emoji}</span>
            <span className="card-name">{item.name}</span>
            <span className="animal-sound">{item.sound}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Animals;
