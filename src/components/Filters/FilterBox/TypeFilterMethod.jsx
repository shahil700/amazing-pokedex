
import { useContext, useState } from "react";
import { PokemonsContext } from "../../../PokemonContexts/PokemonContext";
import "../../../App.css";

const TypeFilterMethod = () => {
    
  const { setLoadMore} = useContext(PokemonsContext);
  const [value, setValue] = useState([])

  const handleChangeTypes = async (event) => {
    const type = event.target.value;
    setValue(type);

    setLoadMore(
      `https://pokeapi.co/api/v2/type/${
        type === "normal" ? "1" : type === "fighting" ? "2" : "3"
      }`
    )
  }

  

  return (
    <>
      <div className="filter__items">
        <div>Types</div>
        <select
          className="filter-select"
          value={value}
          onChange={handleChangeTypes}
          
        >
          <option key={"normal"} value="normal">
            Normal
          </option>
          <option key={"fighting"} value="fighting">
            Fighting
          </option>
          <option key={"flying"} value="flying">
            Flying
          </option>
        </select>
      </div>
    </>
  );
  
};

export default TypeFilterMethod;
