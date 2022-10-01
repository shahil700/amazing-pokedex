import { useContext } from 'react';
import { PokemonsContext } from './PokemonContexts/PokemonContext';
import Modal from './components/ModalDescription/ModalDescription';
import SearchBox from './components/SearchBox/SearchBox'
import FilterMethod from './components/Filters/FilterBox/FilterMethod.jsx';

import './App.css'



const App = () => {

  const {modalOpen} = useContext(PokemonsContext)

  return (
    <div className="app-container">
      <h1>Pokedex</h1>
          {modalOpen && <Modal/>}
          <FilterMethod/>
        <SearchBox/>
    </div>
  );
}

export default App;