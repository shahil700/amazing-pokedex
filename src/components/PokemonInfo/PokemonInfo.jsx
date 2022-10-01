import Divider from '@mui/material/Divider';
import { useContext } from "react"
import { PokemonsContext } from "../../PokemonContexts/PokemonContext"
import { colorTypeGradients } from '../../utils/util.js'
import './PokemonInfo.css'


const Pokeinfo = () => {

    const {pokeDex,Capitalize,setModalOpen,description} = useContext(PokemonsContext)
    console.log(pokeDex)
    console.log(description[pokeDex.id])

    let finalColor;

    if (pokeDex.types.length === 2) {
        finalColor = colorTypeGradients(pokeDex.types[0].type.name, pokeDex.types[1].type.name, pokeDex.types.length);
    } else {
        finalColor = colorTypeGradients(pokeDex.types[0].type.name, pokeDex.types[0].type.name, pokeDex.types.length);
    }
   
    return (

            <div className="modal" onClick={() => setModalOpen(false)}>
                <div className='modal-content'onClick={ e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h1>{Capitalize(pokeDex.name)}</h1>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <h1>0{pokeDex.id}</h1>
                    </div>   
                    <div className="description"> 
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDex.id}.svg`} alt="" className="image" style={{ background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})` }}/>
                            <p className="truncated-text">
                            {
                              [...new Set(description[pokeDex.id].flavor_text_entries.filter(poke => poke.language.name === 'en').map(poke => poke['flavor_text']))].map((poke) => {
                                    
                                return <>       {poke}</>
                            })
                            }
                            </p>
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