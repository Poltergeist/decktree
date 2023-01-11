import React from "react";
import "./App.css";
import Deck from "./Deck";
import data from "./data/data.json";
import logo from "./logo.png";
import { type MoxfieldDeck } from "./deck-types";

function App() {
  const decks = data.decks;
  return (
    <div className="App">
      <header>
        <img src={logo} alt="decktree" />
      </header>
      <section className="deck-grid">
        {decks.map((deck: MoxfieldDeck) => (
          <Deck key={`deck-${deck.id}`} deck={deck} />
        ))}
      </section>
    </div>
  );
}

export default App;
