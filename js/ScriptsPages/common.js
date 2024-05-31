const getIPURL = 'https://api.ipify.org/?format=json';
//https://api.weatherapi.com/v1/current.json?q=186.23.28.20&key=8e5bc6e2746f4566b93232420243005
const getWeatherURL = 'https://api.weatherapi.com/v1/current.json';
const WeatherAPIKey = '8e5bc6e2746f4566b93232420243005';

document.addEventListener('DOMContentLoaded', () => {
    let loggedUser = "";

    let header = document.getElementsByClassName("header")[0];//.childNodes[0];
    //console.log(header.innerHTML);
    fetch(getIPURL)
        .then(
            async function(value) {
                let ip = await value.json();
                let currentIP = ip.ip;
                fetch(getWeatherURL + "?" +
                    "q=" + currentIP + "&" +
                    "key=" + WeatherAPIKey
                )
                    .then(
                        async function(value) {
                            let response = await value.json();
                            let currentLocation = response.location;
                            let currentWeather = response.current;
                            console.log(currentLocation);
                            console.log(currentWeather);
                            let centerNode = document.createElement('div', 'weatherWidget');
                            const weatherLocation = createElement("h4", "roboto-regular");
                            weatherLocation.appendChild(document.createTextNode(currentLocation.name + ", " + currentLocation.country + ". Temp: " + currentWeather.temp_c + "°C"))
                            centerNode.appendChild(weatherLocation);                            
                            header.appendChild(centerNode);

                        }
                    )
            }
        );
    return;

    document.getElementById("submitLogin").addEventListener("click", function () {

    });
});
