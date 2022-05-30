"use strict";

    // fetch('https://api.github.com/users/leec89/events/public', {headers: {'Authorization': 'GIT_PAT'}})
    //     .then((res) => res.json())
    //     .then((res) => {
    //     console.log(res[0])
    //     console.log(res[0].actor.login)
    // })

//https://pokeapi.co/docs/v2#pokemon
const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"

fetch(pokemonAPI)
    .then((res) => res.json())
    .then((res) => console.log(res))

// const getSinglePokemon =
    fetch(pokemonAPI + "clefairy")
        .then((res) => res.json())
        .then((res) => console.log(res))

const bobsBurgersApi = "https://bobsburgers-api.herokuapp.com/episodes"
fetch(bobsBurgersApi)
    .then((res) => res.json())
    .then((res) => res.reduce((previousEpisode, currentEpisode) => {
        if(previousEpisode> currentEpisode.totalViewers){
            previousEpisode = currentEpisode;
        }
        return previousEpisode;
    }))
    .then((res) => console.log(res));

fetch(bobsBurgersApi)
    .then((res) => res.json())
    .then((res) => res.filter((episodes) => episodes.season === 4))
    .then((res) => console.log('Season 4 with Filter -',res));

fetch(bobsBurgersApi)
    .then((res) => res.json())
    .then((res) => res.reduce((previousEpisodes, currentEpisodes) => {
        if (currentEpisodes.season === 4) {
            previousEpisodes.push(currentEpisodes);
        }
        return previousEpisodes;
    },[]))
    .then((res) => console.log('Season 4 with Reduce -',res));

    fetch('https://bobsburgers-api.herokuapp.com/episodes')
        .then(res => res.json())
        .then(res => {console.log(res)})

        // .catch(error => console.error(error));