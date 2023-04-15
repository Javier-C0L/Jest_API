import React from "react";
import "./CharacterCard.css";





function CharacterCard(params) {
  const { id, name, image, desc } = params?.info;

  return (
    <>
      {id ? (
        <div className="charcard center">
          <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
          </div>
          <div>{image}</div>
          <div>{desc}</div>
        </div>
      ) : (
        <h1> No data </h1>
      )}
    </>
  );
}

export default CharacterCard;
