import { Divider } from "@mui/material";
import { useContext } from "react";
import "./App.css";
import Modal from "./components/ModalDescription/ModalDescription";
import SearchBox from "./components/SearchBox/SearchBox";
import { PokemonsContext } from "./PokemonContexts/PokemonContext";
import WindowFilterWidth from './utils/WindowFilterWidth'

const App = () => {
  const { modalOpen } = useContext(PokemonsContext);
  const { width } = WindowFilterWidth()

  return (
    <div className="app-container">
      <div className="pokedex-heading">
        <h1>Pokédex</h1>
        <Divider orientation="vertical" variant="middle" flexItem />
        {width < 700 && <Divider orientation="horizontal" variant="middle" flexItem />}
        <span className="subheading">
          Search for any Pokémon that exists on the planet
        </span>
      </div>

      {modalOpen && <Modal />}
      <SearchBox />
    </div>
  );
};

export default App;
