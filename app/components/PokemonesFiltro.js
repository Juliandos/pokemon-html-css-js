import { ajax } from "../helpers/ajax.js";

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    dark: '#1E2737',
    fairy: '#E471A3',
    unknown: '#D8D0D4',
    shadow: '#676465',
    default: '#2A1A1F',
};

export function PokemonesFiltro(pokemons){

    const d = document,
    $main = d.getElementById("main");

    $main.innerHTML = `<img class="loader" src="/app/assets/loader.svg" alt="Cargando...">`;
    let $template = "";

    for(let i = 0; i<pokemons.length;i++){
        
        async function Obtener_pokemons(){

            await ajax({
                url:pokemons[i].pokemon.url,
                cbSuccess: (pokemon)=>{
                    const color1 = typeColors[pokemon.types[0].type.name],
                    color2 = typeColors[pokemon.types[1] ? pokemon.types[1].type.name : "default"];
                    $template+=`
                    <figure class="pokemon">
                    <img 
                        style="background: radial-gradient(${color1} 33%, ${color2} 33%) 0% 0% / 5px 5px;
                        border-radius:50%"
                        src="${pokemon.sprites.front_default}" 
                        alt="${pokemon.name}
                    ">
                    <figcaption>${pokemon.name}</figcaption>
                    </figure>
                    `;
                    $main.innerHTML = $template;
                }
            });
        }
        Obtener_pokemons();
    }

    return $main;
}