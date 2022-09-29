import { useContext } from "react"
import { PokemonsContext } from "../../PokemonContexts/PokemonContext"


const Pokeinfo = () => {

    const {pokeDex} = useContext(PokemonsContext)
   
    return (
        <>
        {
            (!pokeDex) ? "" : (
                <>
                    <h1>{pokeDex.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDex.id}.svg`} alt="" />
                    <div className="abilities">
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
                    <div className="base-stat">
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
                </>
            )
        }

        </>
    )
}
export default Pokeinfo