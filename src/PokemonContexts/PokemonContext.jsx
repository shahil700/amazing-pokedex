import { createContext, useState, useEffect } from "react";

export const PokemonsContext = createContext({
  allPokemons: {},
  pokeDex: {},
  modalOpen: {},
  description: {},
  loadMore: {},
  setAllPokemons: () => {},
  setModalOpen: () => {},
  setPokeDex: () => {},
  Capitalize: () => {},
  setDescription: () => {},
  setLoadMore: () => {},
});

export const PokemonsProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=30"
  );
  const [pokeDex, setPokeDex] = useState();
  const [description, setDescription] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    //setLoadMore(data.next)

    async function createPokemonObject(results) {
      const pokemons = await Promise.allSettled(
        results.map(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const data = await res.json();
          return data;
        })
      );
      console.log('object pokemons', pokemons)
      setAllPokemons(
        pokemons.map(p => p.value).sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
      );
    }

    async function createPokemonDescription(results) {
      const allDescription = await Promise.allSettled(
        results.map(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
          );
          const data = await res.json();
          return data;
        })
      );
      setDescription(
        allDescription.map(p => p.value).sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
      );
    }

    if (loadMore.includes("gender")) {
      console.log('loading more gender pokemons')
      const pokemons = data.pokemon_species_details.map((poke) => poke.pokemon_species)
      console.log('loaded pokemons', pokemons)
      createPokemonObject(
        pokemons
      );
      createPokemonDescription(
        pokemons
      );
    } else if(loadMore.includes("type")){
      createPokemonObject(data.pokemon.map((poke) => poke.pokemon));
      createPokemonDescription(data.pokemon.map((poke) => poke.pokemon));
    } else {
      createPokemonObject(data.results);
      createPokemonDescription(data.results);
    }
  };

  useEffect(() => {
    console.log(`New url: ${loadMore}`)
    getAllPokemons();
  }, [loadMore]);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const value = {
    setLoadMore,
    allPokemons,
    pokeDex,
    setPokeDex,
    modalOpen,
    setModalOpen,
    Capitalize,
    description,
    setDescription,
  };
  return (
    <PokemonsContext.Provider value={value}>
      {children}
    </PokemonsContext.Provider>
  );
};
