import { createContext, useState, useEffect } from 'react';

export const PokemonsContext = createContext({
  allPokemons: {},
  pokeDex: {},
  modalOpen: {},
  description: {},
  expanded: {},
  truncated: {},
  isTypeSelected: {},
  selectedType: {},
  filterArr: {},
  filterPokemons: {},
  setFilterPokemons: () => {},
  setFilterArr: () => {},
  setSelectedType: () => {},
  setIsTypeSelected: () => {},
  setExpanded: () => {},
  setTruncaded: () => {},
  setModalOpen: () => {},
  setPokeDex: () => {},
  Capitalize: () => {},
  setDescription: () => {},
  setLoadMore: () => {}
});

export const PokemonsProvider = ({ children }) => {
    const[allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=25')
    const [pokeDex,setPokeDex]=useState()
    const [description, setDescription] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const [truncated, setTruncated] = useState(false)
    const [isTypeSelected, setIsTypeSelected] = useState(false)
    const [selectedType, setSelectedType] = useState('')
    const [filterArr,setFilterArr] = useState([])
    const [ filterPokemons, setFilterPokemons] = useState([])


  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    //setLoadMore(data.next)

    async function createPokemonObject(results)  {
    const pokemons = await Promise.all( results.map( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        return data
      }))
      setAllPokemons(pokemons.sort((a, b) => (a.id > b.id) ? 1 : (b.id > a.id) ? -1 : 0))
    }

    function createPokemonDescription(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
        const data =  await res.json()
        setDescription( currentList => [...currentList, data])
        await description.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
      })
    }
    if(loadMore.includes('gender')){
    createPokemonObject(data.pokemon_species_details.map(pokemon => pokemon.pokemon_species))
    createPokemonDescription(data.pokemon_species_details.map(pokemon => pokemon.pokemon_species))
    }else{
      createPokemonObject(data.results)
      createPokemonDescription(data.results)
    }
  }

 useEffect(() => {
  getAllPokemons()
 }, [loadMore])

 const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
  }


  const value = { setLoadMore, filterPokemons,setFilterPokemons,filterArr,setFilterArr,isTypeSelected,selectedType,setIsTypeSelected,setSelectedType,allPokemons,pokeDex,setPokeDex,modalOpen,setModalOpen,Capitalize,description,setDescription,setExpanded,expanded,truncated,setTruncated};
  return (
    <PokemonsContext.Provider value={value}>
      {children}
    </PokemonsContext.Provider>
  );
};