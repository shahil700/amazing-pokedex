import { createContext, useState, useEffect } from 'react';

export const PokemonsContext = createContext({
  allPokemons: {},
  pokeDex: {},
  modalOpen: {},
  description: {},
  setModalOpen: () => {},
  setPokeDex: () => {},
  Capitalize: () => {},
  setDescription: () => {},
});

export const PokemonsProvider = ({ children }) => {
    const[allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=25')
    const [pokeDex,setPokeDex]=useState()
    const [description, setDescription] = useState([])
    const [modalOpen, setModalOpen] = useState(false)


  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
      })
    }

    function createPokemonDescription(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
        const data =  await res.json()
        setDescription( currentList => [...currentList, data])
        await description.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
      })
    }
    createPokemonObject(data.results)
    createPokemonDescription(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

 const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
  }


  const value = { allPokemons,pokeDex,setPokeDex,modalOpen,setModalOpen,Capitalize,description,setDescription};
  return (
    <PokemonsContext.Provider value={value}>
      {children}
    </PokemonsContext.Provider>
  );
};