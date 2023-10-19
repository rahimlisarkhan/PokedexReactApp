import { Button } from "./components/Button";
import { PokeHead } from "./components/PokeHead";
import { PokedexContent } from "./components/PokedexContent";
import pokemonData from "./data/pokemon.json";

// import styles from "./Card.module.css";

function App() {
  return (
    <>
      <PokeHead />
      <Button
        color="warning"
        size="large"
        weight="bold"
        // className={styles.btnFont} //
        // disabled
      />
      <PokedexContent isWinner={true} power={200} pokemon={[{}, {}]} />
      <PokedexContent isWinner={false} power={150} pokemon={[{}, {}]} />
    </>
  );
}

export default App;
