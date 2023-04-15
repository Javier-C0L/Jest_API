import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import RandomCharactersButtons from "../RandomCharacterButton/RandomCharacterButtons.jsx";
import { useState } from "react";
import "./CharactersMainFrame.css";

const rightBox = {
  id: 123,
  name: "mortymatheo",
  image: "dasdasdasdasdasdasdadsasd",
  desc: "yo soy una description algun problema maricon ?1",
};
const leftBox = {
  id: 13123,
  name: "pokematheo",
  image: "dasdasdasdasdasdasdadsasd",
  desc: "yo soy una description algun problema maricon ?2",
};

function CharactersMainFrame(params) {
  const [poke, setPoke] = useState(false);
  const [morty, setMorty] = useState(false);

  const [infoPoke, setInfoPoke] = useState(leftBox);
  const [infoMorty, setInfoMorty] = useState(rightBox);

  return (
    <div className="mainframe">
      <CharacterCard info={infoMorty} />
      <RandomCharactersButtons
        poke={poke}
        setpoke={setPoke}
        morty={morty}
        setmorty={setMorty}

        infopoke={infoPoke}
        setinfopoke={setInfoPoke}
        infomorty={infoMorty}
        infosetmorty={setInfoMorty}
      />
      <CharacterCard info={infoPoke} />
    </div>
  );
}

export default CharactersMainFrame;
