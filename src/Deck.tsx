import React from "react";
import "./Deck.css";
import { type MoxfieldDeck } from "./deck-types";

function Deck({ deck }: { deck: MoxfieldDeck }) {
  const commanders = deck.commanders;
  const companions = deck.companions;

  return (
    <div className="deck">
      <header className="deck-header">
        <section
          className={`deck-logo commander${commanders.length}-companion${companions.length}`}
        >
          {commanders.map((commander) => (
            <section>
              <div
                className="image"
                style={{ backgroundImage: `url(${commander.art_crop})` }}
              ></div>
              <p className="artist-attribution">{commander.artist}</p>
            </section>
          ))}
          {companions.map((companion) => (
            <section>
              <div
                className="image"
                style={{ backgroundImage: `url(${companion.art_crop})` }}
              ></div>
              <p className="artist-attribution">{companion.artist}</p>
            </section>
          ))}
        </section>
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
      </header>
    </div>
  );
}

export default Deck;
