import { useContext } from 'react';
import { PokemonsContext } from './PokemonContexts/PokemonContext';
import Modal from './components/ModalDescription/ModalDescription';
import SearchBox from './components/SearchBox/SearchBox'
import GenderFilterMethod from './components/Filters/FilterBox/GenderFilterMethod.jsx';
import TypeFilterMethod from './components/Filters/FilterBox/TypeFilterMethod';
import './App.css'


const App = () => {

  const {modalOpen} = useContext(PokemonsContext)

  return (
    <div className="app-container">
      <h1>Pokedex</h1>
          {modalOpen && <Modal/>}
          <GenderFilterMethod/>
          <TypeFilterMethod/>
        <SearchBox/>
    </div>
  );
}

export default App;