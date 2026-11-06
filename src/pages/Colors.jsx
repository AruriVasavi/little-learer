
import { colors } from "../data/colors";

function speak(text) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.8;

    window.speechSynthesis.speak(speech);
  }
}

function Colors() {
  return (
    <section className="learning">
      <h2>Learn Colors 🎨</h2>
      <p>Tap any card to hear its name!</p>

      <div className="card-list">
        {colors.map((item) => (
          <button
            key={item.name}
            className="learning-card"
            style={{
              backgroundColor: item.value,
              color: "#FFFFFF"
            }}
            onClick={() => speak(item.name)}
          >
            <span className="card-emoji">{item.emoji}</span>
            <span className="card-name">{item.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Colors;
