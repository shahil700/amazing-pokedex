import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
            <LazyLoadImage
                    alt={name}
                    src={image}
                    visibleByDefault={false}
                    delayMethod={'debounce'}
                    effect="blur"
                />
            <div className="detail-wrapper">
                <h3>{Capitalize(name)}</h3>
            </div>
            <div className="number"><small>{String(id).padStart(3, '0')}</small></div>
        </div>
    )

    }


export default PokemonCard