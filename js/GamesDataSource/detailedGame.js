const createElement = (tag, className, attributes = {}) => {
    const element = document.createElement(tag);
    
    if (className) {
        element.classList.add(className);
    }
    
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    
    return element;
};

function createPoster(game, parent) {
    var root = createElement('div', 'videoHost');

    const iframe = createElement('iframe', 'gamevideo', {
        src: "http://cdn.akamai.steamstatic.com/steam/apps/256994373/movie480.mp4?t=1705428404",
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: true
    });

    root.appendChild(iframe);
    return root;
}

function createDescription(game, parent) {
    var root = createElement('div', 'gameDescription');

    // Game Title
    var title = createElement('h1');
    title.innerHTML = game.game;
    root.appendChild(title);

    // Game Description
    //for (let idx = 0; idx < 10; idx++) {
        var description = createElement('p', 'roboto-regular');
        description.innerHTML = game.short_description;
        root.appendChild(description);
    //}

    // Game Publisher
    const techDataContainer = createElement('div', 'techDataContainer');

        const developer = createElement('div', 'techDataItem');
        developer.innerHTML = "<p><strong><i class='fa-solid fa-tower-broadcast'></i> Publishers</strong>: " + game.publishers + "</p>";

        const publisher = createElement('div', 'techDataItem');
        publisher.innerHTML = "<p><strong><i class='fa-solid fa-brain'></i> Developers</strong>: " + game.developers + "</p>";

        techDataContainer.appendChild(developer);
        techDataContainer.appendChild(publisher);

    root.appendChild(techDataContainer);


    return root;
}

function buildDetailScreen()  {
    const elements = document.getElementsByClassName('container');

    for (const element of elements) {   
        const poster = createPoster(detailedGame, element);
        const description = createDescription(detailedGame, element);

        element.appendChild(poster);
        element.appendChild(description);        
    }
}

document.addEventListener('DOMContentLoaded', () => { buildDetailScreen(); });
