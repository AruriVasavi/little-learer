
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <h2>What shall we learn today?</h2>

      <div className="category-list">

        <Link to="/colors"
          className="category-button color-category">
          🎨
          <span>Colors</span>
        </Link>

        <Link to="/animals"
          className="category-button animal-category">
          🦁
          <span>Animals</span>
        </Link>

        <Link to="/fruits"
          className="category-button fruit-category">
          🍎
          <span>Fruits</span>
        </Link>

        <Link to="/vegetables"
          className="category-button vegetable-category">
          🥕
          <span>Vegetables</span>
        </Link>

        <Link to="/birds"
          className="category-button bird-category">
          🐦
          <span>Birds</span>
        </Link>

      </div>
    </section>
  );
}

export default Home;
