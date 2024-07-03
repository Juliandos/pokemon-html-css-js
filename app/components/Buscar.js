
export function Buscar(Lista){// con async me entragaba un prototype 

    const d = document;
    const $template = d.querySelector("[template-pokemons]").content;
    const pokeCard = $template.querySelector('[data-poke-card]');
    const pokeName = $template.querySelector('[data-poke-name]');
    const pokeImg = $template.querySelector('[data-poke-img]');
    const pokeImgContainer = $template.querySelector('[data-poke-img-container]');
    const pokeId = $template.querySelector('[data-poke-id]');
    const pokeTypes = $template.querySelector('[data-poke-types]');
    const pokeStats = $template.querySelector('[data-poke-stats]');
    const pokeButton = $template.querySelector(".boton-stats");
    const $fragment = d.createDocumentFragment();
    const $main = d.querySelector(".grid-fluid-busqueda");
    const $form = d.querySelector(".input");
    
    $main.innerHTML = "";
    $template.innerHTML = "";
    $form.value = "";
    

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
    
    Lista.forEach( e => {

        const setCardColor = (color1, color2) => {
            const colorOne = typeColors[color1];
            const colorTwo = typeColors[color2];
            pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
            pokeImg.style.backgroundSize = '5px 5px';
        }
        
        const renderPokemonTypes = (color1, color2) => {
            pokeTypes.innerHTML = '';
            
            const typeTextElement1 = d.createElement("div");
            const typeTextElement2 = d.createElement("div");
            typeTextElement1.style.color = typeColors[color1];
            typeTextElement1.textContent = color1;
            typeTextElement2.style.color = typeColors[color2];
            typeTextElement2.textContent = color2;
            pokeTypes.appendChild(typeTextElement1);
            pokeTypes.appendChild(typeTextElement2);
            
            pokeButton.setAttribute("id", `pokemon-${nombre}`);
            
        }
        
        const renderPokemonStats = estadisticas => {
            pokeStats.innerHTML = '';
            estadisticas.forEach(stat => {
                const statElement = d.createElement("div");
                const statElementName = d.createElement("div");
                const statElementAmount = d.createElement("div");
                statElementName.textContent = stat.stat.name;
                statElementAmount.textContent = stat.base_stat;
                statElement.appendChild(statElementName);
                statElement.appendChild(statElementAmount);
                pokeStats.setAttribute("id", `pokemon-${nombre}`);
                pokeStats.appendChild(statElement);
                pokeStats.classList.add("none");
            });
        }
        
        const { color1, color2, img, nombre, estadisticas, id } = e;
        pokeId.textContent = `Nº ${id}:`;
        
        pokeName.textContent = nombre;
        pokeImg.setAttribute('src', img);
        setCardColor(color1, color2);
        renderPokemonTypes(color1, color2);
        renderPokemonStats(estadisticas);
        pokeCard.classList.remove("none");   
        
        let $clone = d.importNode($template,true);
        $fragment.appendChild($clone);
    });
    
    $main.appendChild($fragment);
    const $boton = d.querySelectorAll(".boton-stats");
    return $boton;
}
