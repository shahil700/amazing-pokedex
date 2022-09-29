import { useState } from 'react';
import './SearchBox.css';
import PokemonList from '../PokemonList/PokemonList';
import { useContext } from 'react'
import { PokemonsContext } from '../../PokemonContexts/PokemonContext'

const SearchBox = () =>{

    const {allPokemons} = useContext(PokemonsContext)

    const [ searchField,setSearchField ] = useState(''); 
    const onSearchChange = (e) => {
            const searchFieldString = e.target.value.toLocaleLowerCase();
            setSearchField(searchFieldString);
      }
      const filteredPokemons = allPokemons.filter((pokemon) => {
        return pokemon.name.toLocaleLowerCase().includes(searchField)})
        
        return (
        <div>
            <input className='search-box' type='search' placeholder='Name or Number' onChange={onSearchChange}/>
            <PokemonList pokemons= {filteredPokemons}/>
        </div>
        );

    

}

export default SearchBox;