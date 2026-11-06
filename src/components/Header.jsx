
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <h1>🌈 Little Learner</h1>
      </Link>

      <p>Let's learn and play together!</p>

      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/colors">Colors</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/fruits">Fruits</Link>
        <Link to="/vegetables">Vegetables</Link>
        <Link to="/birds">Birds</Link>
      </nav>
    </header>
  );
}

export default Header;
