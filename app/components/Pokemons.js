import { ajax } from "../helpers/ajax.js";


export function Pokemones(pokemons){

    const d = document,
    $main = d.getElementById("main"),
    $links = d.querySelectorAll(".links");

    $main.innerHTML = `<img class="loader" src="/app/assets/loader.svg" alt="Cargando...">`;
    let $template ="",
    $prevLink,
    $nextLink;

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

    for(let i = 0; i<pokemons.results.length;i++){
        
        async function Obtener_pokemons(){

            await ajax({
                url:pokemons.results[i].url,
                cbSuccess: (pokemon)=>{
                    // console.log(pokemon)
                    const color1 = typeColors[pokemon.types[0].type.name],
                    color2 = typeColors[pokemon.types[1] ? pokemon.types[1].type.name : "default"];
                    $template+=`
                    <figure class="pokemon" >
                        <img 
                            style="
                                background: radial-gradient(${color1} 33%, ${color2} 33%) 0% 0% / 5px 5px;
                                border-radius:50%"
                            src="${pokemon.sprites.front_default}" 
                            alt="${pokemon.name}
                        ">
                        <figcaption>${pokemon.name}</figcaption>
                    </figure>
                    `;
                    $main.innerHTML = $template;
                    // console.log($template);
                }
            });
        }
        // console.log(pokemons.results[i]);
        Obtener_pokemons();
    }

    $prevLink = pokemons.previous ? `<a href="${pokemons.previous}"> <<< </a>`:"";
    $nextLink = pokemons.next ? `<a href="${pokemons.next}"> >>> </a>`:"";
    $links[0].innerHTML= $prevLink + " " + $nextLink;
    $links[1].innerHTML= $prevLink + " " + $nextLink;
    return $main, $links;
}