import React from 'react';
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";
import { v4 as uuidv4 } from 'uuid';

const Cards = ({ pokemonsToDisplay }) => {
  return (
    <div className={style.container}>
      {pokemonsToDisplay.map(pokemon => (
        <Card
          id={pokemon.id}
          key={uuidv4()}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default Cards;

