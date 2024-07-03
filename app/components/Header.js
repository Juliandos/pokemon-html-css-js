import { MenuBoton } from "./MenuBoton.js";

export function Header(){
    const $header = document.createElement("div");

    $header.classList.add("header");
    $header.innerHTML=`
    <section class="container">
        <div class="logo">
            <a href="#/ ">
                <img src="./app/assets/pokemon.png">
            </a>
        </div>
        <button class="menu-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
            </svg>
            <svg class="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
            </svg>
        </button>
        <nav class="menu">
        <a href="#/">Pokemons</a>
        <a href="#/buscar">Buscar</a>
        <a href="#/filtrar">filtrar</a>
        </nav>
    </section>
    `;

    MenuBoton($header);

    return $header;
}