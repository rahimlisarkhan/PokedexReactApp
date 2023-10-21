import React from "react";
import styles from "./PokeHead.module.css";
import { Button } from "../Button";

export const PokeHead = (props) => {
  console.log(props);

  return (
    <div className={styles.content}>
      <p className={styles.title}>Pokedex</p>
      <Button
        title="Start Game"
        color="success"
        size="large"
        onClick={props.sayHello}
      />
    </div>
  );
};
