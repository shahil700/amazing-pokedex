import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = ({ pokemons }) => {
  console.log(pokemons)
  return (
    <div className="all-container">
      {pokemons.map((pokemonStats, index) => (
        <PokemonCard
          key={index}
          id={pokemonStats.id}
          image={pokemonStats.sprites.other.dream_world.front_default}
          name={pokemonStats.name}
          typess={pokemonStats.types}
          pokemon={pokemonStats}
        />
      ))}
    </div>
  );
};
export default PokemonList;
