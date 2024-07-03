import { ajax } from "../helpers/ajax.js";
import { Pokemones } from "../components/Pokemons.js";
import {Buscar} from "./Buscar.js";
import { AgregarPokemones } from "./AgregarPokemones.js";
import { Filtros } from "./Filtros.js";
import { PokemonesFiltro } from "../components/PokemonesFiltro.js";

let LinkPokemons = "https://pokeapi.co/api/v2/pokemon/"; 

const d = document,
botones = d.getElementsByClassName("boton-stats"),
pokeStats = d.getElementsByClassName("poke-stats"),
filtros_botones = d.getElementsByClassName("filtro-boton");

let Lista = [];

export async function Router(){
    const d = document;
    let {hash} = location;
    const $form = d.querySelector(".form");
    
    if(!hash || hash === "#/"){
        hash = "#/";
        await ajax({
            url: LinkPokemons,
            cbSuccess: (pokemons) =>{Pokemones(pokemons)}
        });
    }else if(hash === "#/buscar"){

        Buscar(Lista);

        $form.addEventListener("submit", async (event) => { //tenia que ser cambiado por el formulario y no por el documento
            event.preventDefault();
            const { value } = event.target.pokemon;
            await ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`,
                cbSuccess: (pokemon)=>{ 
                    Lista.unshift(AgregarPokemones(pokemon));
                    Buscar(Lista);
                }
            });
        });

        d.addEventListener("click", async (e) => {
            if(e.target.matches(".boton-stats")){
                Array.prototype.forEach.call(botones, el => {
                    if(e.target.id === el.id){
                        Array.prototype.forEach.call(pokeStats, ele => {
                            if(e.target.id === ele.id){
                                if(ele.classList.contains("none")){
                                    ele.classList.remove("none");
                                    setTimeout(() => {
                                        ele.classList.add("none");
                                    }, 10000);
                                }
                            }
                        });
                    }
                });
            }
        });

    }else if(hash === "#/filtrar"){

        await ajax({
            url: `https://pokeapi.co/api/v2/type`,
            cbSuccess: (filtros)=>{ 
                Filtros(filtros);
                d.addEventListener("click", e => {
                    Array.prototype.forEach.call(filtros_botones, async el => {
                        if(e.target.id === el.id){
                            for(let i=0; i< filtros.results.length; i++){
                                if(e.target.id === filtros.results[i].name){
                                    await ajax({
                                        url: filtros.results[i].url,
                                        cbSuccess: async (Pokemons)=>{ 
                                            PokemonesFiltro(Pokemons.pokemon);
                                        }
                                    });
                                }
                            }
                        }
                    });
                });
            }
        });
    }
}

d.addEventListener("click", e=>{
    if(e.target.matches(".links a")){
        LinkPokemons=e.target.getAttribute("href");
        e.preventDefault();
        Router(e.target.getAttribute("href"));
    }
});

d.addEventListener("submit",e=>{
    if(e.target.matches(".contact-form")){
        e.preventDefault(); //se comenta para que no evite enviar el firmulario
        alert("Formulario enviado");

        fetch("https://formsubmit.co/ajax/9914000f3001dd7a3a2b2182d20a30bd",{// aca va el correo para recibir 
        method:"POST",
        body:new FormData(e.target)
        })
        .then(res=>res.ok?res.json():Promise.reject(res))
        // .then(json=>{ $form.reset(); })
        .catch(err=>{
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        d.innerHTML=`Error ${err.status}: ${message}`;
        })
    }

});