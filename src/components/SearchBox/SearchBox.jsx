import { useContext, useState } from "react";
import { PokemonsContext } from "../../PokemonContexts/PokemonContext";
import TypeFilterMethod from "../Filters/TypeFilter/TypeFilterMethod";
import GenderFilterMethod from "../Filters/GenderFilterBox/GenderFilterMethod";
import PokemonList from "../PokemonList/PokemonList";
import { ReactComponent as FilterIcon } from "../../assets/FilterIcon.svg";
import WindowFilterWidth from "../../utils/WindowFilterWidth";
import "./SearchBox.css";

const SearchBox = () => {
  const { width } = WindowFilterWidth();

  const { allPokemons, setMobileModalOpen } = useContext(PokemonsContext);

  const [searchField, setSearchField] = useState("");

  const onSearchChange = (e) => {
    const searchFieldString = e.target?.value?.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredPokemons = allPokemons
    .filter((x) => x)
    .filter((pokemon) => {
      return pokemon.name?.toLocaleLowerCase().includes(searchField);
    });

  return (
  
    
        <div>
          <div className="filter-and-search">
            <div className="search-text">
              <div>Search by</div>
              <input
                className="search-box"
                type="search"
                placeholder="Name or Number"
                onChange={onSearchChange}
              />
            </div>
            {width > 900 && (
              <>
                <GenderFilterMethod />
                <TypeFilterMethod />
              </>
            )}
            {width < 900 && (
              <>
                <FilterIcon onClick={setMobileModalOpen(true)} />
              </>
            )}
          </div>
          <PokemonList pokemons={filteredPokemons} />
        </div>
      )
}
   
 

export default SearchBox;
