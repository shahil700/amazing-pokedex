import { useContext } from "react"
import { PokemonsContext } from "../../PokemonContexts/PokemonContext"
import './PokemonInfo.css'


const Pokeinfo = () => {

    const {pokeDex,Capitalize,setModalOpen,description} = useContext(PokemonsContext)
    console.log(pokeDex)
    console.log(description[pokeDex.id])

    function removeDuplicates(arr) {
        var unique = arr.reduce(function (acc, curr) {
            if (!acc.includes(curr))
                acc.push(curr);
            return acc;
        }, []);
        return unique;
    }
   
    return (

            <div className="modal" onClick={() => setModalOpen(false)}>
                <div className='modal-content'onClick={ e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h1>{Capitalize(pokeDex.name)}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDex.id}.svg`} alt="" className="image"/>
                        <div className="description">
                            {
                              description[pokeDex.id].flavor_text_entries.map((poke) => {
                                    
                                        if (poke.language.name === 'en') {  
                                                                              
                                                return <>{poke.flavor_text}</>
                                            }
                                            return <></>;
                                            
                
                            })
                            }
                        </div>
                    </div>    
                    <div className="modal-body">
                        {
                            pokeDex.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="modal-footer">
                        {
                            pokeDex.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            )
        }


export default Pokeinfo