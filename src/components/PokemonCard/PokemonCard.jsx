
import { useContext } from "react";
import Modal from '../ModalDescription/ModalDescription'
import { PokemonsContext } from "../../PokemonContexts/PokemonContext";


const PokemonCard = ({id, image, name, type,pokemon }) => {

    const {setPokeDex,setModalOpen} =useContext(PokemonsContext)

    
    
    const style = type + " thumb-container";
    return (
        <div className={style} onClick={()=>{
            setPokeDex(pokemon);
            setModalOpen(true); 
        }}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )

    }


export default PokemonCard