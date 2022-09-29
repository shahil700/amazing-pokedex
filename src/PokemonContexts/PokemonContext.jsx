import { createContext, useState, useEffect } from 'react';

export const PokemonsContext = createContext({
  allPokemons: {},
  pokeDex: {},
  modalOpen: {},
  setModalOpen: () => {},
  setPokeDex: () => {}
});

export const PokemonsProvider = ({ children }) => {
    const[allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
    const [pokeDex,setPokeDex]=useState()
    const [modalOpen, setModalOpen] = useState(false);


  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
    console.log(allPokemons)
  }



 useEffect(() => {
  getAllPokemons()
 }, [])


  const value = { allPokemons,pokeDex,setPokeDex,modalOpen,setModalOpen };
  return (
    <PokemonsContext.Provider value={value}>
      {children}
    </PokemonsContext.Provider>
  );
};