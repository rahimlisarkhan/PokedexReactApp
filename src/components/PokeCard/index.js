import React from "react";
import styles from "./PokeCard.module.css";

export const PokeCard = (props) => {
  const pokemonIMG = (id) => {
    const newID = id.toString();
    let resultID = id;

    //   const resultID =
    //     newID.length == 1 ? "00" + newID : newID.length == 2 ? "0" + newID : id;
    // };

    if (newID.length == 1) {
      resultID = "00" + id;
    }

    if (newID.length == 2) {
      resultID = "0" + id;
    }

    return resultID;
  };

  return (
    <div className={styles.card}>
      <p className={styles.card_title}> {props.name}</p>
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIMG(
          props.id
        )}.png`}
      />
      <p className={styles.card_info}>Type: {props.type}</p>
      <p className={styles.card_info}>EXP {props.base_experience}</p>
    </div>
  );
};
