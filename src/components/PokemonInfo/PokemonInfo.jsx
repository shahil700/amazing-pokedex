import { useEffect, useState } from "react";
import Modal from "react-modal";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { PokemonsContext } from "../../PokemonContexts/PokemonContext";
import { colorTypeGradients } from "../../utils/util.js";
import { ReactComponent as CloseButton } from "../../assets/CloseButton.svg";
import { ReactComponent as Cancel } from "../../assets/Cancel.svg";
import "./PokemonInfo.css";

const Pokeinfo = () => {
  const { pokeDex, Capitalize, setModalOpen, description } =
    useContext(PokemonsContext);

  const [smallModalOpen, setSmallModalOpen] = useState(false);
  const [about, setAbout] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [genders, setGenders] = useState([]);
  const [eggGroups, setEggGroups] = useState([]);
  const [types, setTypes] = useState([]);
  const [weakAgainst, setWeakAgainst] = useState([]);
  const [stats, setStats] = useState([]);

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
  useEffect(() => {
    setAbout(
      [
        ...new Set(
          description[pokeDex.id - 1].flavor_text_entries
            .filter((poke) => poke.language.name === "en")
            .map((poke) => poke["flavor_text"])
        ),
      ]
        .join(".")
        .replace(reg, " ")
    );
    setAbilities(
      pokeDex.abilities.map((poke) => {
        return poke.ability.name;
      })
    );
    setEggGroups(description[pokeDex.id - 1].egg_groups.map((egg) => egg.name));
    setTypes(
      pokeDex.types.map((poke) => {
        return poke.type.name;
      })
    );
    setHeight(
      `${`${Math.floor((pokeDex.height / 10) * 3.28)}'${Math.round(
        (((pokeDex.height / 10) * 3.28) % 1) * 12
      )}"`} `
    );
    setWeight(`${(pokeDex.weight / 10).toFixed(1)} kg`);
    setStats(
      pokeDex.stats.map((poke) => {
        return poke.base_stat;
      })
    );
  }, []);

  const renderArrayList = (arr) => {
    return arr.map((ele) => {
      return (
        <div
          className="number"
          style={{
            background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`,
          }}
        >
          {ele}
        </div>
      );
    });
  };
  return (
    <Modal
      isOpen={() => setModalOpen(true)}
      className="modal"
      onRequestClose={() => setModalOpen(false)}
      shouldCloseOnOverlayClick={true}
    >
      {
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
              <div className="description-info">
                <h1>{Capitalize(pokeDex.name)}</h1>
                <Divider orientation="vertical" variant="middle" flexItem />
                <h1>{String(pokeDex.id).padStart(3, "0")}</h1>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div className="description-cross">
                  <CloseButton onClick={() => setModalOpen(false)} />
                </div>
              </div>
              <div className="description">
                <span>{about}</span>
                <span
                  className="read-more-cta"
                  onClick={() => setSmallModalOpen(true)}
                >
                  read more
                </span>
              </div>
            </div>
          </div>
          <div className="lower-content">
            {smallModalOpen && (
              <div className="read-more-component">
                <div className="read-more-text">
                  <span>{about}</span>
                </div>
                <div className="read-more-cross">
                  <Cancel onClick={() => setSmallModalOpen(false)} />
                </div>
              </div>
            )}
            {!smallModalOpen && (
              <div className="basic-info">
                <div className="basic-info-text">
                  <p className="info-type">Height</p>
                  <p className="info-attributes">{height}</p>
                </div>
                <div className="basic-info-text">
                  <p className="info-type">Weight</p>
                  <p className="info-attributes">{weight}</p>
                </div>
                <div className="basic-info-text">
                  <p className="info-type">Egg Groups</p>
                  <p className="info-attributes">{eggGroups.join(" ")}</p>
                </div>
                <div className="basic-info-text">
                  <p className="info-type">Abilities</p>
                  <p className="info-attributes">{abilities.join(" ")}</p>
                </div>
                <div className="basic-info-text">
                  <p className="info-type">Types</p>
                  <div className="list-attributes">{renderArrayList(types)}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      }
    </Modal>
  );
};

export default Pokeinfo;
