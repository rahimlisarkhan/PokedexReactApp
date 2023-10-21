import React from "react";
import { PokeCard } from "../PokeCard";

import styles from "./Pokedex.module.css";

export const PokedexContent = (props) => {
  return (
    <div className={styles.container}>
      <p
        className={styles.title_winner}
        style={{ color: props.isWinner ? "green" : "red" }}
      >
        {" "}
        {props.isWinner ? "Winner" : "Lose"}
      </p>
      <p className={styles.title_power}> {props.power}</p>
      <div className={styles.list}>
        {props.pokemons?.map((pokemon) => (
          <PokeCard
            key={"pokecard" + pokemon.id}
            {...pokemon}
            // type={pokemon.type}
            // name={pokemon.name}
          />
        ))}
      </div>
    </div>
  );
};
