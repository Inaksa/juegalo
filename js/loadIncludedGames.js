const createElement = (tag, className, attributes = {}) => {
    const element = document.createElement(tag);
    
    if (className) {
        element.classList.add(className);
    }
    
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    
    return element;
};

function createItem(game, parent) {
    const item = createElement('div', 'gridItem');
    const goToDetail = createElement('a', null, {
        href: "./pages/detail.html"
    });

    const itemImageContainer = createElement('div', 'imgContainer');
    const itemImage = createElement('img', null, {
        //src: game.header,
        //"https://cdn.cloudflare.steamstatic.com/steam/apps/\(id)/library_600x900.jpg?t=1695852468"
        src: "https://cdn.cloudflare.steamstatic.com/steam/apps/" + game.id + "/library_600x900.jpg?t=1695852468",
        alt: game.game,
        onerror: "this.onerror=null; this.src='"+ game.header_image + "'"
    });
    const itemCaption = createElement("h2", "roboto-regular");
    itemCaption.appendChild(document.createTextNode(game.game));
    itemImageContainer.appendChild(itemImage);
    goToDetail.appendChild(item);
    const host = createElement('div', 'host');
    host.appendChild(goToDetail);
    parent.appendChild(host);
    item.appendChild(itemImageContainer);
    item.appendChild(itemCaption);
}

function fetchIncludedGames()  {
    var elements = document.getElementsByClassName('gamelist');
    
    for (const element of elements) {   
        const list = element.getElementsByClassName('container');

        var selected = [];
        const parent = createElement("div", "grid");
    
        const lastId = 32460;
        const maxItems = 10;

        for (let idx = 0; idx < maxItems; idx++) {
            const randomIdx = Math.floor(Math.random() * allgames.length);
            let item = allgames[randomIdx];

            const seen = (element) => element == randomIdx;
            if (selected.find(seen) != undefined) {
                idx--;
            } else {
                selected.push(randomIdx);
                createItem(item, parent);
            }
        }
        
        element.appendChild(parent);

        var registerButton = createElement("div", "boton", { style: "margin-top: 1rem;" });
        registerButton.innerHTML = '<a href="./pages/registrarse.html">Me convenciste quiero registrarme!</a>';
        element.appendChild(registerButton);
    }
}

document.addEventListener('DOMContentLoaded', () => { fetchIncludedGames(); });
