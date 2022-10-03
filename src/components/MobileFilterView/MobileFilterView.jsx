import Modal from "react-modal";
import TypeFilterMethod from "../Filters/TypeFilter/TypeFilterMethod";
import GenderFilterMethod from "../Filters/GenderFilterBox/GenderFilterMethod";
import { ReactComponent as Cancel } from "../../assets/Cancel.svg";
import { useState, useContext } from "react";
import { PokemonsContext } from "../../PokemonContexts/PokemonContext";

const MobileViewMethod = () => {

    const { mobileModalOpen, setMobileModalOpen} = useContext(PokemonsContext)

return(
  <Modal
    isOpen={() =>{setMobileModalOpen(true)}}
    className="modal"
    onRequestClose={() =>{setMobileModalOpen(false)}}
  >
    <div className="filters">
        <div className="mobile-heading">
            <h1>Filters</h1>
            <Cancel onClick={()=>{setMobileModalOpen(false)}}/>
        </div>
      <div className="type-filter">
        <TypeFilterMethod />
      </div>
      <div className="gender-filter">
        <GenderFilterMethod />
      </div>
    </div>
  </Modal>)
};

export default MobileViewMethod;
