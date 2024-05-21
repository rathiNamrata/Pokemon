import dom from "../dom.js";
import getPokemonhandler from "../handlers/getPokemonHandler.js";

const enterEvent = () => {
    dom.input.addEventListener('keyup',(e) => {
        if (e.key == 'Enter') {
          getPokemonhandler();
        }
    });
};

export default enterEvent;