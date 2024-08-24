
import React, { useState } from "react";

function CoinFlip() {
  const [numFlips, setNumFlips] = useState(0);
  const [numHeads, setNumHeads] = useState(0);
  const [numTails, setNumTails] = useState(0);
  const [currentSide, setCurrentSide] = useState(null);

  const flipCoin = () => {
    const newSide = Math.random() < 0.5 ? "heads" : "tails";
    setCurrentSide(newSide);
    setNumFlips(numFlips + 1);
    newSide === "heads" ? setNumHeads(numHeads + 1) : setNumTails(numTails + 1);
  };

  return (
    <div>
      <h2>Let's flip a coin!</h2>
      {currentSide && <img src={`${currentSide}.png`} alt={currentSide} />}
      <button onClick={flipCoin}>Flip the Coin</button>
      <p>
        Out of {numFlips} flips, there have been {numHeads} heads and {numTails} tails.
      </p>
    </div>
  );
}

export default CoinFlip;
