"use strict";



mapboxgl.accessToken = MAPBOX_API_TOKEN;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-98.4946, 29.4252], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });

    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [-97.7431, 30.2672], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

let marker = new mapboxgl.Marker()
    .setDraggable(true)
    .setLngLat([-98.4946, 29.4252])
    .addTo(map);

// Drag marker to get forecast, weather conditions
marker.on("dragend", function () {
    let latitude = marker.getLngLat().lat;
    let longitude = marker.getLngLat().lng;
    getWeather(latitude, longitude);
});

// Click to place marker to get forecast, weather conditions
// map.on("click", function(){
//     let latitude = marker.getLngLat().lat;
//     let longitude = marker.getLngLat().lng;
//     getWeather(latitude, longitude);
// })

function getWeather(lat, lon) {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: marker.getLngLat().lat,
        lon: marker.getLngLat().lng,
        units: "imperial"
    }).done(function (data) {


        $("#day").html(data);
        console.log();
        $("#weather").html("<img></img>");
        $("#temp").html("Temp: " + data.current.temp + "°F");
        $("#pressure").html("Pressure: " + data.current.pressure);
        $("#humidity").html("Humidity: " + data.current.humidity + "%");
        $("#wind").html("Wind: " + data.current.wind_speed + "mph");
        console.log(data);
        $("#forecast").html("");
        data.daily.forEach(function (day, index) {
            console.log(day, index);
            if (index < 5) {
                $("#forecast").append(
                    "<div class='card card-color'>" +
                    "<span>" + day.date + "</span>" +
                    "<span>" + day.temp.max + "° / " + day.temp.min + "°</span>" +
                    "<span class=''>Description: " + day.weather[0].description + "</span>" +
                    "<span class=''>Pressure: " + day.pressure + "</span>" +
                    "<span class='''>Humidity: " + day.humidity + "</span>" +
                    "<span class=''>Wind: " + day.wind_speed + "</span>" +
                    "</div>"
                );
            }
        });
    });
}

getWeather();




//
//     mapboxgl.accessToken = MAPBOX_API_TOKEN;
//     const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/dark-v10', // style URL
//     center: [-97.7431, 30.2672], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });
//
//     let restaurants = [
//     {
//         name: "Vivel Crêpes & Coffee",
//         long: -97.96636665900056,
//         lat: 30.347161481347197,
//         address: "2011 Main St #500, Lakeway, TX 78734",
//     },
//     {
//         name: "Rudy's \"Country Store\" and Bar-B-Q",
//         long: -97.84920080238943,
//         lat: 30.41117231512251,
//         address: "7709 Ranch Rd 620, Austin, TX 78726",
//     },
//     {
//         name: "Kura Revolving Sushi Bar",
//         long: -97.71718799401341,
//         lat: 30.337828283838178,
//         address: "6929 Airport Blvd Suite 125, Austin, TX 78752",
//     },
//     ]
//
//     // Zoom button code
//     document.getElementById("zoom").addEventListener("click", function (e) {
//     e.preventDefault();
//     map.setZoom(document.getElementById("zoom").value);
// });
//
//     // Restaurant markers and popups
//     restaurants.forEach(function (restaurant) {
//     let marker = new mapboxgl.Marker().setLngLat([restaurant.long, restaurant.lat]).addTo(map);
//     let popup = new mapboxgl.Popup().setHTML("<p>" + restaurant.name + "</p>");
//     marker.setPopup(popup);
// });