
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Colors from "./pages/Colors";
import Animals from "./pages/Animals";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import Birds from "./pages/Birds";
import FlashCards from "./pages/FlashCards";
import "./App.css";

function NotFound() {
  return (
    <div className="learning">
      <h2>Oops! Page not found 🥺</h2>
      <p>Please go back to the home page.</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/flashcards" element={<FlashCards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
