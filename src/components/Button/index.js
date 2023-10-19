import React from "react";
import styles from "./Button.module.css";

export const Button = (props) => {
  const {
    color = "danger",
    size = "medium",
    title = "Button",
    weight = "regular",
    disabled,
    children,
    fullWitdh,
    className,
  } = props;

  console.log(props);

  return (
    <button
      disabled={disabled}
      className={`${styles.btn} ${styles[color]} ${styles[size]} ${
        styles[weight]
      } ${fullWitdh ? styles.full : ""}  ${className}`}
    >
      {children ?? title}
    </button>
  );
};

const myObj = {
  age: 34,
  // fullname: "John Doe",
};

const { age, fullname = "Human name" } = myObj;

console.log(fullname);

// function A(par1 = 5) {
//   return par1 + 8;
// }

// A();
