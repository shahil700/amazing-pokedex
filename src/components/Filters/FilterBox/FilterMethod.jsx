
import { useContext } from 'react'
import { PokemonsContext } from '../../../PokemonContexts/PokemonContext'

const FilterMethod = () =>{

    const genders = [
     {id: '1', name :'female'},
     {id: '2', name :'male'},
     {id: '3', name :'genderless'}

  ]

    const {allPokemons,setAllPokemons,setIsTypeSelected,setSelectedType, setLoadMore} = useContext(PokemonsContext)

    const handleChangeGender = async(event) => {
      setIsTypeSelected(true)
      setSelectedType(event.target.value)
      const gender = event.target.value;
      setLoadMore(`https://pokeapi.co/api/v2/gender/${gender === 'female' ? '1' : gender === 'male' ? '2' : '3'}`)
     
    }
    
    return (
      <>
        <div className="filter__items">
                        <div>
                            Type
                        </div>
                        <select value='gender' onChange={handleChangeGender}>
                           
                                <option
                                    key={'female'}
                                    value="female">Female
                                </option><option
                                    key={'male'}
                                    value="male">Male
                                </option><option
                                    key={'genderles'}
                                    value="genderless">Genderless
                                </option>
                          
                        </select>
        </div>
      </>
    )

}

export default FilterMethod;

