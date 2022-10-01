import { useState} from 'react'
import Modal from "react-modal";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { PokemonsContext } from "../../PokemonContexts/PokemonContext";
import { colorTypeGradients } from "../../utils/util.js";
import "./PokemonInfo.css";

const Pokeinfo = () => {
  const { pokeDex, Capitalize, setModalOpen, description, modalOpen } =
    useContext(PokemonsContext);

    const [smallModalOpen, setSmallModalOpen] = useState(false)

  const reg = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~\f]/g;

  let finalColor;

  if (pokeDex.types.length === 2) {
    finalColor = colorTypeGradients(
      pokeDex.types[0].type.name,
      pokeDex.types[1].type.name,
      pokeDex.types.length
    );
  } else {
    finalColor = colorTypeGradients(
      pokeDex.types[0].type.name,
      pokeDex.types[0].type.name,
      pokeDex.types.length
    );
  }

  return (
    <Modal
      isOpen={modalOpen}
      className="modal"
      shouldCloseOnOverlayClick={true}
      onClick={() => setModalOpen(false)}
    >
      <div className="modal-content">
        <div className="upper-content">
          <div className="image-container">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDex.id}.svg`}
              alt=""
              className="image"
              style={{
                background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`,
              }}
            />
          </div>
          <div className="details-container">
            <div className="basic-info">
              <h1>{Capitalize(pokeDex.name)}</h1>
              <Divider orientation="vertical" variant="middle" flexItem />
              <h1>{String(pokeDex.id).padStart(3, "0")}</h1>
              <Divider orientation="vertical" variant="middle" flexItem />
              <div>SVG Icons</div>
            </div>
            <div className="description">
              <div>{[
                ...new Set(
                  description[pokeDex.id - 1].flavor_text_entries
                    .filter((poke) => poke.language.name === "en")
                    .map((poke) => poke["flavor_text"])
                ),
              ]
                .join(".")
                .replace(reg, " ")}</div>
                <a href="#">read more</a>
            </div>
          </div>
        </div>
        {/* <div className="modal-header">
          <h1>{Capitalize(pokeDex.name)}</h1>
          <Divider orientation="vertical" variant="middle" flexItem />
          <h1>{String(pokeDex.id).padStart(3, "0")}</h1>
        </div>
        <div className="description">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDex.id}.svg`}
            alt=""
            className="image"
            style={{
              background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`,
            }}
          />
          <p className="truncated-text">
            {[
              ...new Set(
                description[pokeDex.id - 1].flavor_text_entries
                  .filter((poke) => poke.language.name === "en")
                  .map((poke) => poke["flavor_text"])
              ),
            ].map((poke) => {
              return <>{poke.replace(reg, " ")}</>;
            })}
          </p>
        </div>
        <div className="modal-body">
          {pokeDex.abilities.map((poke) => {
            return (
              <>
                <div className="group">
                  <h2>{poke.ability.name}</h2>
                </div>
              </>
            );
          })}
        </div>
        <div className="modal-footer">
          {pokeDex.stats.map((poke) => {
            return (
              <>
                <h3>
                  {poke.stat.name}:{poke.base_stat}
                </h3>
              </>
            );
          })}
        </div> */}
      </div>
    </Modal>
  );
};

export default Pokeinfo;
