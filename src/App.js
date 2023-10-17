import { PokeHead } from "./components/PokeHead";
import { PokedexContent } from "./components/PokedexContent";
import pokemonData from "./data/pokemon.json";

function App() {
  console.log("pokemonData", pokemonData);

  return (
    <>
      <PokeHead />

      <PokedexContent isWinner={true} power={200} pokemon={[{}, {}]} />
      <PokedexContent isWinner={false} power={150} pokemon={[{}, {}]} />
    </>
  );
}

export default App;
