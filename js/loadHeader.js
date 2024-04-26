function addHeader() {
    const headerTemplate = `
        <h1 class="logo"><span class="fa-solid fa-ghost" style="padding-right: 10px;"></span>JUEGALO</h1>
        <ul class="main-nav">
            <li><a href="./pages/detail.html">Juegos</a></li>
            <li><a href="#login">Iniciar Sesión</a></li>
        </ul>
    `;
    const header = document.getElementsByTagName('header')[0];
    header.innerHTML = headerTemplate;
}

addHeader()