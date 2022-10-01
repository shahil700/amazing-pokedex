
import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonList = ({pokemons}) => {

        return (<div className='pokemon-container'>
                    <div className='all-container'>{pokemons.map( (pokemonStats, index) => 
                                <PokemonCard
                                key={index}
                                id={pokemonStats.id}
                                image={pokemonStats.sprites.other.dream_world.front_default}
                                name={pokemonStats.name}
                                typess={pokemonStats.types}                            
                                pokemon={pokemonStats}
                                />)}</div></div>);
        
    }


export default PokemonList;