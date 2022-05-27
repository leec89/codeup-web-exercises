"use strict";



    fetch('https://api.github.com/users/leec89/events/public', {headers: {'Authorization': 'GIT_PAT'}}).then((res) => res.json()).then((res) => {
        console.log(res[0])
        console.log(res[0].actor.login)
    })
