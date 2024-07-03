const d = document;
// import facebook from "../assets/facebook.png"

// const facebook = facebook;

export function Main(){
    const $main = d.createElement("section");

    $main.classList.add("main");
    $main.id = "principal";
    if(location.hash === "#/" || location.hash === "") {
        location.hash.replace("#/");
        $main.innerHTML = `
            <nav class="links"></nav>
            <main id="main" class="grid-fluid-todos"></main>
            <nav class="links"></nav>
            <footer id="pie-de-pagina" class="footer">
                <div class="footer-h1">
                    <div class="footer-h1-text1">
                        <h3>información 1</h3>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                    </div>
                    <div class="footer-h1-text2">
                        <h3>información 2</h3>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                    </div>
                    <div class="footer-h1-text3">
                        <h3>información 3</h3>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                    </div>
                    <div class="footer-h1-form">
                        <form class="contact-form">
                            <h3>Envíanos tus comentarios</h3>
                            <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto"
                            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>
                            <input type="text" name="subject" placeholder="Asunto a tratar" title="El Asunto es requerido" required>
                            <input type="submit" value="">
                        </form>
                    </div>
                </div>
                <hr>
                <div class="footer-h2">
                    <a href=""><img src="/Pokemon/app/assets/facebook.png" alt="facebook" /></a>
                    <a href=""><img src="/Pokemon/app/assets/youtube.png" alt="youtube" /></a>
                    <a href=""><img src="/Pokemon/app/assets/instagram.png" alt="instagram" /></a>
                    <a href=""><img src="/Pokemon/app/assets/signo-de-github.png" alt="github" /></a>
                    <a href=""><img src="/Pokemon/app/assets/linkedin.png" alt="linkedin" /></a>
                    <a href=""><img src="/Pokemon/app/assets/gorjeo.png" alt="twitter" /></a>
                </div>
                <hr>
                <div class="footer-h3">
                    <h6>Terms & conditions</h6>
                    <h6>Privacity Policy</h6>
                    <h6>@2023 copyright Nowrap Inc.</h6>
                </div>
            </footer>
        `;
    }else if(location.hash === "#/buscar"){
        $main.innerHTML = `
        <form class="form" name="buscar" action="">
            <input class="input" type="text" name="pokemon" autocomplete="off" autofocus placeholder="Pokemon">
        </form>
        <main id="main" class="grid-fluid-busqueda"></main>
        <template template-pokemons>
            <div data-poke-card class="poke-card">
                <div data-poke-name></div>
                <div data-poke-img-container class="img-container">
                    <img data-poke-img class="poke-img" src="../assets/poke-shadow.png"/>
                </div>
                <div data-container>
                    <div data-poke-id class="poke-types"></div>
                    <div data-poke-types class="poke-types"></div>
                    <button class="boton-stats"></button>
                </div>
                <div data-poke-stats class="poke-stats"></div>
            </div>
        </template>
        <footer id="pie-de-pagina" class="footer">
                <div class="footer-h1">
                    <div class="footer-h1-text1">
                        <h3>información 1</h3>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                    </div>
                    <div class="footer-h1-text2">
                        <h3>información 2</h3>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                    </div>
                    <div class="footer-h1-text3">
                        <h3>información 3</h3>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                    </div>
                    <div class="footer-h1-form">
                        <form class="contact-form">

                            <h3>Envíanos tus comentarios</h3>
                            <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto"
                            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>
                            <input type="text" name="subject" placeholder="Asunto a tratar" title="El Asunto es requerido" required>
                            <input type="submit" value="">
                        </form>
                    </div>
                </div>
                <hr>
                <div class="footer-h2">
                    <a href=""><img src="/Pokemon/app/assets/facebook.png" alt="facebook" /></a>
                    <a href=""><img src="/Pokemon/app/assets/youtube.png" alt="youtube" /></a>
                    <a href=""><img src="/Pokemon/app/assets/instagram.png" alt="instagram" /></a>
                    <a href=""><img src="/Pokemon/app/assets/signo-de-github.png" alt="github" /></a>
                    <a href=""><img src="/Pokemon/app/assets/linkedin.png" alt="linkedin" /></a>
                    <a href=""><img src="/Pokemon/app/assets/gorjeo.png" alt="twitter" /></a>
                </div>
                <hr>
                <div class="footer-h3">
                    <h6>Terms & conditions</h6>
                    <h6>Privacity Policy</h6>
                    <h6>@2023 copyright Nowrap Inc.</h6>
                </div>
            </footer>
        `;
    }else if(location.hash === "#/filtrar") {
        location.hash.replace("#/");
        $main.innerHTML = `
            <div class="filtros">
                <button class="filtro-boton" id="all" style="background-color: black; color: white">All</button>
            </div>
            <main id="main" class="grid-fluid-todos"></main>
            <footer id="pie-de-pagina" class="footer">
                <div class="footer-h1">
                    <div class="footer-h1-text1">
                        <h3>información 1</h3>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                    </div>
                    <div class="footer-h1-text2">
                        <h3>información 2</h3>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                    </div>
                    <div class="footer-h1-text3">
                        <h3>información 3</h3>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                    </div>
                    <div class="footer-h1-form">
                        <form class="contact-form">
                            <h3>Envíanos tus comentarios</h3>
                            
                            <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto"
                            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>

                            <input type="text" name="subject" placeholder="Asunto a tratar" title="El Asunto es requerido" required>
                            
                            <input type="submit" value="">
                        </form>
                    </div>
                </div>
                <hr>
                <div class="footer-h2">
                    <a href=""><img src="/Pokemon/app/assets/facebook.png" alt="facebook" /></a>
                    <a href=""><img src="/Pokemon/app/assets/youtube.png" alt="youtube" /></a>
                    <a href=""><img src="/Pokemon/app/assets/instagram.png" alt="instagram" /></a>
                    <a href=""><img src="/Pokemon/app/assets/signo-de-github.png" alt="github" /></a>
                    <a href=""><img src="/Pokemon/app/assets/linkedin.png" alt="linkedin" /></a>
                    <a href=""><img src="/Pokemon/app/assets/gorjeo.png" alt="twitter" /></a>
                </div>
                <hr>
                <div class="footer-h3">
                    <h6>Terms & conditions</h6>
                    <h6>Privacity Policy</h6>
                    <h6>@2023 copyright Nowrap Inc.</h6>
                </div>
            </footer>
        `;
    }


    
    return $main;
}