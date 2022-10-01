
import { useContext } from 'react'
import { PokemonsContext } from '../../../PokemonContexts/PokemonContext'

const GenderFilterMethod = () =>{


    const { setLoadMore} = useContext(PokemonsContext)

    const handleChangeGender = async(event) => {
      const gender = event.target.value;
      setLoadMore(`https://pokeapi.co/api/v2/gender/${gender === 'female' ? '1' : gender === 'male' ? '2' : '3'}`)
    }
  
    
    return (
      <>
        <div className="filter__items">
                        <div>
                            Gender
                        </div>
                        <select value='gender' onChange={handleChangeGender}>
                           
                                <option
                                    key={'female'}
                                    value="female">Female 
                                </option><option
                                    key={'male'}
                                    value="male">Male
                                </option><option
                                    key={'genderless'}
                                    value="genderless">Genderless
                                </option>
                          
                        </select>
        </div>
      </>
    )

}

export default GenderFilterMethod;

