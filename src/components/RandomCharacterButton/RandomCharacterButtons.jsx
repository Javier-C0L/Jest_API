import React from "react";
import "./RandomCharacterButtons.css";

//import getMortysData from "../../services/mortyapi.serice.js";

function RandomCharactersButtons(params) {
    return (
        <div className="button-frame">
            <button className="btn btn-pokes" onClick=""/*{getMortysdata}*/> Random Pokes </button>
            <button className="btn btn-mortys"> Random Mortys </button>
        </div>
    );
}

export default RandomCharactersButtons; 