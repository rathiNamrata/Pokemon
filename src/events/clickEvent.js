import dom from '../dom.js';
import getPokemonhandler from '../handlers/getPokemonHandler.js';

const clickEvent = () => {
    dom.btn.addEventListener('click', getPokemonhandler);
    };

export default clickEvent;