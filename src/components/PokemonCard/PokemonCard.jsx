
import { useContext } from "react";
import { PokemonsContext } from "../../PokemonContexts/PokemonContext";
import { colorTypeGradients } from '../../utils/util.js'


const PokemonCard = ({id, image, name, typess,pokemon }) => {

    const {setPokeDex,setModalOpen,Capitalize} =useContext(PokemonsContext)

    let finalColor;

    if (typess.length === 2) {
        finalColor = colorTypeGradients(typess[0].type.name, typess[1].type.name, typess.length);
    } else {
        finalColor = colorTypeGradients(typess[0].type.name, typess[0].type.name, typess.length);
    }

    return (
    <div className=" thumb-container" style={{ background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})` }}
            onClick={()=>{
            setPokeDex(pokemon);
            setModalOpen(true); 
        }}>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{Capitalize(name)}</h3>
            </div>
            <div className="number"><small>0{id}</small></div>
        </div>
    )

    }


export default PokemonCard