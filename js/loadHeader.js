function addHeader() {
    const headerTemplate = `
        <a href="../index.html">
            <h1 class="logo"><span class="fa-solid fa-ghost" style="padding-right: 10px;"></span>JUEGALO</h1>
        </a>
        <ul class="main-nav">
            <li><a href="./pages/login.html">Iniciar Sesión</a></li>
        </ul>
    `;
    const header = document.getElementsByTagName('header')[0];
    header.innerHTML = headerTemplate;
}

addHeader()