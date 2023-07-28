import React from 'react';
import "./Home.css";

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div className="counter-body">
      <span> Vous avez cliqué sur le compteur <span data-testid="count">{counter}</span> fois</span>
      <div className="buttons">
        <button onClick={onIncrement}>
          + Ajouter un clic
        </button>
        <button className={`${counter === 0 ? "disabled" : "red"}`} onClick={onDecrement}>
          - Retirer un clic
        </button>
      </div>
    </div>
  );
};

export default Home;
