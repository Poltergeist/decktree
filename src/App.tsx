import React from "react";
import "./App.css";
import Deck from "./Deck";
import data from "./data/data.json";
import {type MoxfieldDeck} from "./deck-types";

function App() {
  const decks  = data.decks;
  console.log(decks);
  return (
    <div className="App">
      <section className="deck-grid">
        {decks.map((deck:MoxfieldDeck) => <Deck key={`deck-${deck.id}`} deck={deck}/>)}
      </section>
    </div>
  );
}

export default App;
