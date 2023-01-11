import React from "react";
import "./App.css";
import Deck from "./Deck";
import data from "./data/data.json";
import logo from "./logo.png";
import twitterLogo from "./twitter-square-color-icon.svg";
import linkedinLogo from "./linkedin-square-color-icon.svg";
import discordLogo from "./discord-icon.svg";
import { type MoxfieldDeck } from "./deck-types";

function App() {
  const decks = data.decks;
  return (
    <div className="App">
      <header>
        <img src={logo} alt="decktree" />
      </header>
        <h2> Deck lists</h2>
      <section className="deck-grid">
        {decks.map((deck: MoxfieldDeck) => (
          <Deck key={`deck-${deck.id}`} deck={deck} />
        ))}
      </section>
      <section className="social-links">
        <h2>Social links</h2>
        <ul>
          <li>
            <a href="https://twitter.com/Sp3c1/">
              <img src={twitterLogo} alt="twitter Logo" className="icon" />
              Find me on Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/philipp-hinrichsen-47068b14/">
              <img src={linkedinLogo} alt="twitter Logo" className="icon" />
              Find me on Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.moxfield.com/users/sp3c1">
              Find me on Moxfield
            </a>
          </li>
          <li>
            <img src={discordLogo} alt="twitter Logo" className="icon" />
            Find me on Discord as <pre>sp3c1#9062</pre>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
