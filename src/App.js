// import { Button } from "./components/Button";
import { useState } from "react";
import { PokeHead } from "./components/PokeHead";
import { PokedexContent } from "./components/PokedexContent";
import pokemonData from "./data/pokemon.json";

// import styles from "./Card.module.css";

function App() {
  const [firstTeam, setFirstTeam] = useState([]);
  const [secondTeam, setSecondTeam] = useState([]);

  const handleStart = () => {
    let newFirstTeam = [...pokemonData];
    let newSecondTeam = [];

    while (newSecondTeam.length < newFirstTeam.length) {
      const randomIndex = Math.floor(Math.random() * newFirstTeam.length);

      const rmvPokemon = newFirstTeam.splice(randomIndex, 1); // [{}]

      newSecondTeam.push(rmvPokemon[0]);
    }

    console.log("newFirstTeam", newFirstTeam);
    console.log("newSecondTeam", newSecondTeam);

    setFirstTeam(newFirstTeam);
    setSecondTeam(newSecondTeam);
  };

  const team1Power = firstTeam?.reduce(
    (sum, item) => sum + item?.base_experience,
    0
  );
  const team2Power = secondTeam?.reduce(
    (sum, item) => sum + item?.base_experience,
    0
  );

  return (
    <>
      <PokeHead sayHello={handleStart} />

      {!!secondTeam.length && (
        <>
          <PokedexContent
            isWinner={team1Power > team2Power}
            power={team1Power}
            pokemons={firstTeam}
          />
          <h2 style={{ textAlign: "center", fontSize: 60 }}>VS</h2>
          <PokedexContent
            isWinner={team2Power > team1Power}
            power={team2Power}
            pokemons={secondTeam}
          />
        </>
      )}
    </>
  );
}

export default App;
