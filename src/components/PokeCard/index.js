import React, { useState } from "react";
import styles from "./PokeCard.module.css";
import { Button } from "../Button";

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

export const PokeCard = (props) => {
  const [show, setShow] = useState();

  const handleShowInfo = () => {
    const newShow = !show;

    setShow(newShow);
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
      <Button onClick={handleShowInfo}>Read more</Button>

      {show && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      )}
    </div>
  );
};
