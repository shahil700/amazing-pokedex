
import { useContext } from "react";
import { PokemonsContext } from "../../PokemonContexts/PokemonContext";


const PokemonCard = ({id, image, name, typess,color,pokemon }) => {

    const {setPokeDex,setModalOpen,Capitalize} =useContext(PokemonsContext)


    const style = color + " thumb-container"; 

    return (
        <div className={style} onClick={()=>{
            setPokeDex(pokemon);
            setModalOpen(true); 
        }}>
            <div className="number"><small>0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{Capitalize(name)}</h3>
                {typess.map((types) =>{
                    return(
                        <small>{types.type.name}</small>
                )})}
            </div>
        </div>
    )

    }


export default PokemonCard