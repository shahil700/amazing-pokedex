import { useContext, useState } from "react";
import { PokemonsContext } from "../../../PokemonContexts/PokemonContext";
import "../../../App.css";
const GenderFilterMethod = () => {
  const { setLoadMore } = useContext(PokemonsContext);
  const [value, setValue] = useState({ value: "female" });
  const handleChangeGender = async (event) => {
    const gender = event.target.value;
    setValue(gender);
    setLoadMore(
      `https://pokeapi.co/api/v2/gender/${
        gender === "female" ? "1" : gender === "male" ? "2" : "3"
      }`
    );
  };

  /* const handleChangeGender = async(event) => {

      let filterArr = []

        for (let i = 0; i < allPokemons.length; i++) {
            for (let j = 0; j < allPokemons[i].types.length; j++) {
                if (event.target.value === allPokemons[i].types[j].type.name) {
                    filterArr.push(allPokemons[i])
                }
            }
        }
        setAllPokemons(filterArr)
    }
    */

  return (
    <>
      <div className="filter__items">
        <div>Gender</div>
        <select
          className="filter-select"
          value={value}
          onChange={handleChangeGender}
          
        >
          <option key={"female"} value="female">
            Female
          </option>
          <option key={"male"} value="male">
            Male
          </option>
          <option key={"genderless"} value="genderless">
            Genderless
          </option>
        </select>
      </div>
    </>
  );
};

export default GenderFilterMethod;
