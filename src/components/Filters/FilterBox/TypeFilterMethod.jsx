
import { useContext } from 'react'
import { PokemonsContext } from '../../../PokemonContexts/PokemonContext'



const TypeFilterMethod = () =>{


    const { setLoadMore} = useContext(PokemonsContext)

    const handleChangeTypes = async(event) => {
      const type = event.target.value;
      setLoadMore(`https://pokeapi.co/api/v2/type/${type === 'normal' ? '1' : type === 'fighting' ? '2' : '3'}`)
    }

    return (
      <>
        <div className="filter__items">
                        <div>
                            Types
                        </div>
                        <select value='type' onChange={handleChangeTypes}>
                           
                                <option
                                    key={'normal'}
                                    value="normal">Normal
                                </option><option
                                    key={'fighting'}
                                    value="fighting">Fighting
                                </option><option
                                    key={'flying'}
                                    value="flying">Flying
                                </option>
                          
                        </select>
        </div>
      </>
    )

}

export default TypeFilterMethod;

